const ToggleBtn = document.getElementById("toggle-btn");
const theme = document.getElementById("theme");
let DarkMode = localStorage.getItem("dark-mode");
/////////////////////enableDarkMode/////////////////////
const enableDarkMode = () => {
  theme.classList.add("dark-mode-theme");
  ToggleBtn.classList.remove("dark-mode-toggle");
  localStorage.setItem("dark-mode", "enabled");
};
////////////////////disableDarkMode/////////////////////
const disableDarkMode = () => {
  theme.classList.remove("dark-mode-theme");
  ToggleBtn.classList.add("dark-mode-toggle");
  localStorage.setItem("dark-mode", "disabled");
};
/////////////updates dark mode on page load/////////////
if (DarkMode === "enabled") {
  enableDarkMode();
}
///////////////updates darkmode on click////////////////
ToggleBtn.addEventListener("click", (e) => {
  DarkMode = localStorage.getItem("dark-mode");
  if (DarkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});