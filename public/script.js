const hamburger = document.getElementById("hamburger");
const navToggleElements = document.getElementsByClassName("toggle");

hamburger.onclick = function toggleMenu() {
  for (let i = 0; i < navToggleElements.length; i++) {
    const element = navToggleElements.item(i);
    element.classList.toggle("hidden");
  }
};
