import React, { useRef, useState, useEffect } from "react";
import music from "../assets/Musiques/9am.mp3";
import soundIcon from "../assets/Images/sound.png";
import noSoundIcon from "../assets/Images/Nosound.png";
import "./Page.css";
import WorkshopBackground from "../components/WorkshopBackground";
import { useNavigate } from "react-router-dom";
import slide from "../assets/Musiques/slide.mp3";
import click from "../assets/Musiques/hover.mp3";
import confirm from "../assets/Musiques/valid2.mp3";

export default function Atelier() {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);
  const [canvasIndex, setCanvasIndex] = useState(0);
  const nextCanvas = () => {
    setCanvasIndex((prev) => (prev + 1) % 3);
    const slideAudio = new Audio(slide);
    slideAudio.volume = 0.5;
    slideAudio.play();
    const clickAudio = new Audio(click);
    clickAudio.volume = 0.5;
    clickAudio.play();
  };

  const prevCanvas = () => {
    setCanvasIndex((prev) => (prev - 1 + 3) % 3);
    const clickAudio = new Audio(click);
    clickAudio.volume = 0.5;
    clickAudio.play();

    const slideAudio = new Audio(slide);
    slideAudio.volume = 0.5;
    slideAudio.play();
  };

  const seeBtn = () => {
    const confirmAudio = new Audio(confirm);
    confirmAudio.volume = 0.5;
    confirmAudio.play();
  };

  const playHoverSound = () => {
    const hover = new Audio(click);
    hover.volume = 0.3;
    hover.play().catch(() => {});
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

    // Play on first user interaction (click or touch)
    const startMusic = () => {
      audio.play().catch(() => {});
      window.removeEventListener("click", startMusic);
    };

    window.addEventListener("click", startMusic);

    // Cleanup (remove event listener on unmount)
    return () => window.removeEventListener("click", startMusic);
  }, []);

  return (
    <div className="page">
      <WorkshopBackground canvasIndex={canvasIndex} />
      <button className="back-button" onClick={() => navigate("/")}>
        ←
      </button>
      <audio ref={audioRef} src={music} />
      <button className="sound-button" onClick={toggleSound}>
        <img src={muted ? noSoundIcon : soundIcon} alt="sound toggle" />
      </button>
      <button className="left-button" onClick={prevCanvas}>
        ◀
      </button>
      <button className="right-button" onClick={nextCanvas}>
        ▶
      </button>

      <button
        className="see-button"
        onClick={seeBtn}
        onMouseEnter={playHoverSound}
      >
        Voir
      </button>
    </div>
  );
}
