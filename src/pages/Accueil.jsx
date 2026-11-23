import { useState, useEffect } from "react";
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
import { useNavigate, useOutletContext } from "react-router-dom";
import lightClick from "../assets/Musiques/lightClick.mp3";
import "../App.css";
import FilterBlue from "../assets/Images/filterBlue.png";
import FilterYellow from "../assets/Images/filterYellow.png";
import { playSfx } from "../utils/playSfx";

export default function Accueil() {
  const { filterEnabled, toggleFilter, muted, toggleSound, setMusic } = useOutletContext();
  const [transitioning, setTransitioning] = useState(false);
  const [selected, setSelected] = useState(-1);
  const [keysOpen, setKeysOpen] = useState(false);
  const routes = ["/atelier", "/profil", "/credits"];

  const navigate = useNavigate();

  const playHoverSound = () => playSfx(hoverSound, 0.3);

  const playClickSound = () => playSfx(clickSound, 0.4);

  const playLightClick = () => playSfx(lightClick, 0.4);
  
  useEffect(() => {
    setMusic(music);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (transitioning || e.ctrlKey || e.metaKey || e.altKey) return;

      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        setSelected((s) => (s + 1) % routes.length);
        playHoverSound();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        setSelected((s) => (s <= 0 ? routes.length - 1 : s - 1));
        playHoverSound();
      } else if (e.key === "Enter" && selected >= 0) {
        playClickSound();
        handleNavClick(routes[selected]);
      } else if (e.key.toLowerCase() === "h") {
        if (e.repeat) return;
        setKeysOpen((o) => !o);
        playLightClick();
      } else if (e.key === "Escape" && keysOpen) {
        setKeysOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  // Plays the transition when you click on a nav button
  const handleNavClick = (path) => {
    setTransitioning(true);
    setTimeout(() => {
      navigate(path);
      setTransitioning(false);
    }, 800);
  };

  return (
    <div className="app">

      <div id="KeysInfos" className={keysOpen ? "open" : ""}>
        <div id="InfosContent">
          <ul>
            <h2>Touches raccourci :</h2>
            <li><p><strong>ESC</strong> : Retour arrière</p></li>
            <li><p><strong>X</strong> : Changer le filtre</p></li>
            <li><p><strong>M</strong> : Activer/Désactiver musique</p></li>
            <li><p><strong>S</strong> : Activer/Désactiver les SFX</p></li>
            <li><p><strong>L</strong> : Changer le mode d'affichage (Atelier)</p></li>
            <li><p><strong>← ↑ ↓ →</strong> : Naviguer</p></li>
            <li><p><strong>Entrée</strong> : Valider</p></li>
          </ul>
        </div>
      </div>

      <button
        onClick={() => {
          toggleFilter();
          playLightClick();
        }}
        id="FilterBTN"
        className="filter-button"
      >
        <img
          src={filterEnabled ? FilterBlue : FilterYellow}
          alt="sound toggle"
        />
      </button>

      {/* Transition Overlay */}
      <div className={`transition-overlay ${transitioning ? "active" : ""}`} />

      <Background filterEnabled={filterEnabled} />

      <div className="NavTab">
        <NavButton className={`First ${selected === 0 ? "selected" : ""}`}
          onMouseEnter={playHoverSound}
          onClick={() => {
            playClickSound();
            handleNavClick("/atelier");
          }}
        >
          Atelier
          <img src={Workshop} className="NavIcon" alt="Atelier" />
        </NavButton>

        <NavButton className={`Second ${selected === 1 ? "selected" : ""}`}
          onMouseEnter={playHoverSound}
          onClick={() => {
            playClickSound();
            handleNavClick("/profil");
          }}
        >
          Profil
          <img src={About} className="NavIcon" alt="Profil" />
        </NavButton>

        <NavButton className={`Third ${selected === 2 ? "selected" : ""}`}
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
