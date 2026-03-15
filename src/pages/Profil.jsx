import React, { useEffect } from "react";
import music from "../assets/Musiques/BreakingGround.mp3";
import soundIcon from "../assets/Images/sound.png";
import noSoundIcon from "../assets/Images/Nosound.png";
import "./Page.css";
import ProfileBackground from "../components/ProfileBackground";
import { useNavigate } from "react-router-dom";
import lightClick from "../assets/Musiques/lightClick.mp3";

export default function Profile({ muted, toggleSound, setMusic }) {
  const navigate = useNavigate();

  const playLightClick = () => {
    if (!muted) {
      const audio = new Audio(lightClick);
      audio.volume = 0.4;
      audio.play().catch(() => {});
    }
  };

  useEffect(() => {
    setMusic(music);
  }, []);

  return (
    <div className="page">
      <ProfileBackground />
      <button className="back-button" onClick={() => navigate("/")}>
        ←
      </button>
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
