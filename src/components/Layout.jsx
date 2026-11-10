import { Outlet } from "react-router-dom";
import soundIcon from "../assets/Images/sound.png";
import noSoundIcon from "../assets/Images/Nosound.png";
import soundEffectIcon from "../assets/Images/soundeffect.png";
import soundEffectMuteIcon from "../assets/Images/soundeffectmute.png";
import lightClick from "../assets/Musiques/lightClick.mp3";
import { playSfx } from "../utils/playSfx";
import "../pages/Page.css";
import { useEffect } from "react";

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

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.repeat || e.ctrlKey || e.metaKey || e.altKey) return;
      const tag = e.target.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || e.target.isContentEditable) return;

      switch (e.key.toLowerCase()) {
        case "x":
          toggleFilter();
          playLightClick();
          break;
        case "m":
          toggleSound();
          playLightClick();
          break;
        case "s":
          toggleSfx();
          playLightClick();
          break;
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [toggleFilter, toggleSound, toggleSfx, sfxMuted]);

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