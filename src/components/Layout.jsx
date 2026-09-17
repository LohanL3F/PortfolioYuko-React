import { Outlet } from "react-router-dom";
import soundIcon from "../assets/Images/sound.png";
import noSoundIcon from "../assets/Images/Nosound.png";
import soundEffectIcon from "../assets/Images/soundeffect.png";
import soundEffectMuteIcon from "../assets/Images/soundeffectmute.png";
import lightClick from "../assets/Musiques/lightClick.mp3";
import { playSfx } from "../utils/playSfx";
import "../pages/Page.css";

export default function Layout({
  muted,
  toggleSound,
  sfxMuted,
  toggleSfx,
  filterEnabled,
  toggleFilter,
  setMusic,
  pauseMusic,
  resumeMusic,
}) {
  const playLightClick = () => playSfx(lightClick, 0.4);

  return (
    <>
      <button
        className="sound-button"
        onClick={() => {
          toggleSound();
          playLightClick();
        }}
      >
        <img src={muted ? noSoundIcon : soundIcon} alt="sound toggle" />
      </button>

      <button
        className="sfx-button"
        onClick={() => {
          toggleSfx();
          playLightClick();
        }}
      >
        <img
          src={sfxMuted ? soundEffectMuteIcon : soundEffectIcon}
          alt="sound effect toggle"
        />
      </button>

      <Outlet
        context={{
          muted,
          toggleSound,
          sfxMuted,
          toggleSfx,
          filterEnabled,
          toggleFilter,
          setMusic,
          pauseMusic,
          resumeMusic,
        }}
      />
    </>
  );
}