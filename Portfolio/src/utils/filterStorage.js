export function isFilterEnabled() {
  const saved = localStorage.getItem("filterEnabled");
  return saved === null ? true : JSON.parse(saved);
}

export function setFilterEnabled(value) {
  localStorage.setItem("filterEnabled", JSON.stringify(value));
}
