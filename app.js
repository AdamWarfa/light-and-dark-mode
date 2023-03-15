"use strict";

window.addEventListener("load", initApp);

function initApp() {
  //event listener for select on HTML
  document.querySelector("#select-color-mode").addEventListener("change", modeSelected);
  detectUserPreference();
}

// modeSelected called when #select-color-mode changes value (the user select color mode)
function modeSelected() {
  console.log("New color mode selected");
  const selectedColorMode = this.value;
  console.log(selectedColorMode);
  changeMode(selectedColorMode);
  saveUserColorMode(selectedColorMode);
}
function changeMode(mode) {
  resetColorMode();
  if (mode === "dark") {
    document.body.classList.add("dark-mode");
  } else if (mode === "light") {
    resetColorMode();
  } else if (mode === "purple") {
    document.body.classList.add("purple-mode");
  }
}

function resetColorMode() {
  document.querySelector("body").removeAttribute("class");
}

function saveUserColorMode(mode) {
  localStorage.setItem("userColorMode", mode);
}

function readUserColorMode() {
  localStorage.getItem("userColorMode");
  const userColorMode = localStorage.getItem("userColorMode");
  return userColorMode;
}

function detectUserPreference() {
  const modeFromLocalStorage = readUserColorMode();
  console.log(modeFromLocalStorage);
  changeMode(modeFromLocalStorage);
  document.querySelector("#select-color-mode").value = modeFromLocalStorage;
}
