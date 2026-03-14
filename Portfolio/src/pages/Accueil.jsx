import { useRef, useState, useEffect } from "react";
import NavButton from "../components/NavButton";
import Background from "../components/Background";
import music from "../assets/Musiques/small talk.mp3";
import hoverSound from "../assets/Musiques/hover.mp3";
import clickSound from "../assets/Musiques/valid2.mp3";
import soundIcon from "../assets/Images/sound.png";
import noSoundIcon from "../assets/Images/Nosound.png";
import Workshop from "../assets/Images/PopWorkshop.gif";
import About from "../assets/Images/PopAbout.gif";
import Credits from "../assets/Images/PopCredits.gif";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Accueil({ filterEnabled, toggleFilter }) {
  const [transitioning, setTransitioning] = useState(false);
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);
  const navigate = useNavigate();

  const playHoverSound = () => {
    const audio = new Audio(hoverSound);
    audio.volume = 0.3;
    audio.play().catch(() => {});
  };

  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.volume = 0.4;
    audio.play().catch(() => {});
  };

  const toggleSound = () => {
    const audio = audioRef.current;
    audio.muted = !muted;
    setMuted(!muted);
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0.4;
    audio.loop = true;

    const startMusic = () => {
      audio.play().catch(() => {});
      window.removeEventListener("click", startMusic);
    };

    window.addEventListener("click", startMusic);
  }, []);

  const handleNavClick = (path) => {
    setTransitioning(true);
    setTimeout(() => {
      navigate(path);
      setTransitioning(false);
    }, 800);
  };

  return (
    <div className="app">
      <button onClick={toggleFilter} id="FilterBTN">
        {filterEnabled ? "🔵" : "🟡"}
      </button>

      {/* Transition Overlay */}
      <div className={`transition-overlay ${transitioning ? "active" : ""}`} />

      <Background filterEnabled={filterEnabled} />

      <audio ref={audioRef} src={music} />

      <button className="sound-button" onClick={toggleSound}>
        <img src={muted ? noSoundIcon : soundIcon} alt="sound toggle" />
      </button>

      <div className="NavTab">
        <NavButton
          className="First"
          onMouseEnter={playHoverSound}
          onClick={() => {
            playClickSound();
            handleNavClick("/atelier");
          }}
        >
          Atelier
          <img src={Workshop} className="NavIcon" alt="Atelier" />
        </NavButton>

        <NavButton
          className="Second"
          onMouseEnter={playHoverSound}
          onClick={() => {
            playClickSound();
            handleNavClick("/profil");
          }}
        >
          Profil
          <img src={About} className="NavIcon" alt="Profil" />
        </NavButton>

        <NavButton
          className="Third"
          onMouseEnter={playHoverSound}
          onClick={() => {
            playClickSound();
            handleNavClick("/credits");
          }}
        >
          Crédits
          <img src={Credits} className="NavIcon" alt="Crédits" />
        </NavButton>
      </div>
    </div>
  );
}
