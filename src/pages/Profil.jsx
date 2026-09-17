import React, { useEffect } from "react";
import music from "../assets/Musiques/BreakingGround.mp3";
import soundIcon from "../assets/Images/sound.png";
import noSoundIcon from "../assets/Images/Nosound.png";
import "./Page.css";
import ProfileBackground from "../components/ProfileBackground";
import { useNavigate, useOutletContext } from "react-router-dom";
import lightClick from "../assets/Musiques/lightClick.mp3";
import { playSfx } from "../utils/playSfx";

export default function Profile() {
  const { muted, toggleSound, setMusic } = useOutletContext();
  const navigate = useNavigate();

  const playLightClick = () => playSfx(lightClick, 0.4);

  // Plays page ambiant music
  useEffect(() => {
    setMusic(music);
  }, []);

  return (
    <div className="page">
      <ProfileBackground />
      <button className="back-button" onClick={() => navigate("/")}>
        ←
      </button>
    </div>
  );
}
