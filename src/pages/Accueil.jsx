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
  
  const navigate = useNavigate();

  const playHoverSound = () => playSfx(hoverSound, 0.3);

  const playClickSound = () => playSfx(clickSound, 0.4);

  const playLightClick = () => playSfx(lightClick, 0.4);
  
  useEffect(() => {
    setMusic(music);
  }, []);

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
