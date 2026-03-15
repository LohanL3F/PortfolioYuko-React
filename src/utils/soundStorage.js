export function isMuted() {
  const saved = localStorage.getItem("muted");
  return saved === null ? false : JSON.parse(saved);
}

export function setMuted(value) {
  localStorage.setItem("muted", JSON.stringify(value));
}
