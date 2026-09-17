import React, { useEffect } from "react";
import music from "../assets/Musiques/makeyourdreamsfizzle.mp3";
import soundIcon from "../assets/Images/sound.png";
import noSoundIcon from "../assets/Images/Nosound.png";
import "./Page.css";
import CreditsBackground from "../components/CreditsBackground";
import { useNavigate, useOutletContext } from "react-router-dom";
import lightClick from "../assets/Musiques/lightClick.mp3";
import { playSfx } from "../utils/playSfx";

export default function Credits() {
  const { muted, toggleSound, setMusic } = useOutletContext();
  const navigate = useNavigate();

  const playLightClick = () => playSfx(lightClick, 0.4);

  useEffect(() => {
    setMusic(music);
  }, []);

  return (
    <div className="page">
      <CreditsBackground />
      <button className="back-button" onClick={() => navigate("/")}>
        ←
      </button>
    </div>
  );
}
