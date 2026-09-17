import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Accueil from "./pages/Accueil";
import Atelier from "./pages/Atelier";
import Profil from "./pages/Profil";
import CreditsPage from "./pages/Credits";

import { useState, useEffect, useRef } from "react";
import { isFilterEnabled, setFilterEnabled } from "./utils/filterStorage";
import { isMuted, setMuted } from "./utils/soundStorage";
import { isSfxMuted, setSfxMuted } from "./utils/sfxStorage";
import homeMusic from "./assets/Musiques/small talk.mp3";

function App() {
  const [filterEnabled, setFilter] = useState(true);
  const audioRef = useRef(null);
  const [muted, setMutedState] = useState(() => isMuted() ?? true);
  const [currentMusic, setCurrentMusic] = useState(homeMusic);
  const [sfxMuted, setSfxMutedState] = useState(() => isSfxMuted());

  const pauseMusic = () => {
    const audio = audioRef.current;
    if (audio) audio.pause();
  };

  const resumeMusic = () => {
    const audio = audioRef.current;
    if (audio && !muted) audio.play().catch(() => {});
  };

  const toggleSfx = () => {
    const newValue = !sfxMuted;
    setSfxMuted(newValue);
    setSfxMutedState(newValue);
  };

  useEffect(() => {
    const startMusic = () => {
      const audio = audioRef.current;
      if (!audio) return;
      audio.src = currentMusic;
      audio.muted = muted;
      audio.volume = 0.3;
      audio.loop = true;
      audio.play().catch(() => {});
      window.removeEventListener("click", startMusic);
      window.removeEventListener("touchstart", startMusic);
    };
    window.addEventListener("click", startMusic);
    window.addEventListener("touchstart", startMusic);
    return () => {
      window.removeEventListener("click", startMusic);
      window.removeEventListener("touchstart", startMusic);
    };
  }, []);

  const toggleSound = () => {
    const audio = audioRef.current;
    if (!audio) return;
    const newValue = !muted;
    audio.muted = newValue;
    setMutedState(newValue);
    setMuted(newValue);
  };

  useEffect(() => {
    setFilter(isFilterEnabled());
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = currentMusic;
    audio.muted = muted;
    audio.volume = 0.3;
    audio.loop = true;
    audio.play().catch(() => {});
  }, [currentMusic]);

  const toggleFilter = () => {
    setFilter((prev) => {
      const newValue = !prev;
      setFilterEnabled(newValue);
      return newValue;
    });
  };

  return (
    <div>
      <audio ref={audioRef} />
      <div id="ResponsiveMsg">
        Retourne ton appareil pour une meilleure expérience.
      </div>
      <HashRouter>
        <Routes>
          <Route
            element={
              <Layout
                muted={muted}
                toggleSound={toggleSound}
                sfxMuted={sfxMuted}
                toggleSfx={toggleSfx}
                filterEnabled={filterEnabled}
                toggleFilter={toggleFilter}
                setMusic={setCurrentMusic}
                pauseMusic={pauseMusic}
                resumeMusic={resumeMusic}
              />
            }
          >
            <Route path="/" element={<Accueil />} />
            <Route path="/atelier" element={<Atelier />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/credits" element={<CreditsPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;