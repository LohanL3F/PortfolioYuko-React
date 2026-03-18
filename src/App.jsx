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

  // Light / Dark filter
  const [filterEnabled, setFilter] = useState(true);
  
  const audioRef = useRef(null);

  // Mute / Unmute
  const [muted, setMutedState] = useState(() => isMuted() ?? true);

  // Music "playlist" (depends on the page)
  const [currentMusic, setCurrentMusic] = useState(homeMusic);

  // Plays page ambiant music
  useEffect(() => {

    const startMusic = () => {
      const audio = audioRef.current;
      if (!audio) return;

      audio.src = currentMusic;
      audio.muted = muted;
      audio.volume = 0.3;
      audio.loop = true;
      audio.play().catch(() => {});

      // Remove click detection (for first page load's music trigger)
      window.removeEventListener("click", startMusic);
      window.removeEventListener("touchstart", startMusic);
    };

    // Plays music on click when you load home page for the first time
    window.addEventListener("click", startMusic);
    window.addEventListener("touchstart", startMusic);

    return () => {
      window.removeEventListener("click", startMusic);
      window.removeEventListener("touchstart", startMusic);
    };
  }, []);

  // Mute / Unmute button
  const toggleSound = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const newValue = !muted;
    audio.muted = newValue;

    setMutedState(newValue);
    setMuted(newValue);
  };

  // Sets blue filter on pages
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

  // Toggle filter on / off 
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
