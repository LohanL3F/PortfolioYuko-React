import { HashRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Atelier from "./pages/Atelier";
import Profil from "./pages/Profil";
import CreditsPage from "./pages/Credits";

import { useState, useEffect, useRef } from "react";

import { isFilterEnabled, setFilterEnabled } from "./utils/filterStorage";
import { isMuted, setMuted } from "./utils/soundStorage";

import homeMusic from "./assets/Musiques/small talk.mp3";

function App() {
  const [filterEnabled, setFilter] = useState(true);
  const audioRef = useRef(null);

  const [muted, setMutedState] = useState(() => isMuted() ?? true);
  const [currentMusic, setCurrentMusic] = useState(homeMusic);

  useEffect(() => {
    const startMusic = () => {
      if (audioRef.current) {
        audioRef.current.src = homeMusic;
        audioRef.current.muted = muted;
        audioRef.current.play().catch(() => {});
      }
      window.removeEventListener("click", startMusic);
      window.removeEventListener("touchstart", startMusic);
    };

    window.addEventListener("click", startMusic);
    window.addEventListener("touchstart", startMusic);

    return () => {
      window.removeEventListener("click", startMusic);
      window.removeEventListener("touchstart", startMusic);
    };
  }, [muted]);

  const toggleSound = () => {
    const newValue = !muted;

    audioRef.current.muted = newValue;

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
  }, [currentMusic, muted]);

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
            path="/"
            element={
              <Accueil
                filterEnabled={filterEnabled}
                toggleFilter={toggleFilter}
                muted={muted}
                toggleSound={toggleSound}
                setMusic={setCurrentMusic}
              />
            }
          />
          <Route
            path="/atelier"
            element={
              <Atelier
                filterEnabled={filterEnabled}
                toggleFilter={toggleFilter}
                muted={muted}
                toggleSound={toggleSound}
                setMusic={setCurrentMusic}
              />
            }
          />
          <Route
            path="/profil"
            element={
              <Profil
                filterEnabled={filterEnabled}
                toggleFilter={toggleFilter}
                muted={muted}
                toggleSound={toggleSound}
                setMusic={setCurrentMusic}
              />
            }
          />
          <Route
            path="/credits"
            element={
              <CreditsPage
                filterEnabled={filterEnabled}
                toggleFilter={toggleFilter}
                muted={muted}
                toggleSound={toggleSound}
                setMusic={setCurrentMusic}
              />
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
