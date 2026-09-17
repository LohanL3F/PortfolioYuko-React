export function isSfxMuted() {
  const saved = localStorage.getItem("sfxMuted");
  return saved === null ? false : JSON.parse(saved);
}

export function setSfxMuted(value) {
  localStorage.setItem("sfxMuted", JSON.stringify(value));
}