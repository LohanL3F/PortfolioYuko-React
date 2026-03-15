import React, { useRef, useState, useEffect } from "react";
import music from "../assets/Musiques/makeyourdreamsfizzle.mp3";
import soundIcon from "../assets/Images/sound.png";
import noSoundIcon from "../assets/Images/Nosound.png";
import "./Page.css";
import CreditsBackground from "../components/CreditsBackground";
import { useNavigate } from "react-router-dom";
import lightClick from "../assets/Musiques/lightClick.mp3";

export default function Credits() {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);

  const toggleSound = () => {
    const audio = audioRef.current;
    audio.muted = !muted;
    setMuted(!muted);
  };

  const playLightClick = () => {
    const audio = new Audio(lightClick);
    audio.volume = 0.4;
    audio.play().catch(() => {});
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
      <CreditsBackground />
      <button className="back-button" onClick={() => navigate("/")}>
        ←
      </button>

      <audio ref={audioRef} src={music} />
      <button
        className="sound-button"
        onClick={() => {
          toggleSound();
          playLightClick();
        }}
      >
        <img src={muted ? noSoundIcon : soundIcon} alt="sound toggle" />
      </button>
    </div>
  );
}
