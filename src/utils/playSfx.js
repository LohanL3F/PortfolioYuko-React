import { isSfxMuted } from "./sfxStorage";

export function playSfx(src, volume = 0.5) {
  if (isSfxMuted()) return;
  const audio = new Audio(src);
  audio.volume = volume;
  audio.play().catch(() => {});
}