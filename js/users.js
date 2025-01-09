

// User Dark/Light Mode
const lightSwitches = document.querySelectorAll(".user-light-switch");
if (lightSwitches.length > 0) {
  lightSwitches.forEach((lightSwitch, i) => {
    if (localStorage.getItem("user-dark-mode") === "true") {
      // eslint-disable-next-line no-param-reassign
      lightSwitch.checked = true;
    }
    lightSwitch.addEventListener("change", () => {
      const { checked } = lightSwitch;
      lightSwitches.forEach((el, n) => {
        if (n !== i) {
          // eslint-disable-next-line no-param-reassign
          el.checked = checked;
        }
      });
      document.documentElement.classList.add("[&_*]:!transition-none");
      if (lightSwitch.checked) {
        document.documentElement.classList.add("dark");
        document.querySelector("html").style.colorScheme = "dark";
        localStorage.setItem("user-dark-mode", true);
        document.dispatchEvent(
          new CustomEvent("darkMode", { detail: { mode: "on" } })
        );
      } else {
        document.documentElement.classList.remove("dark");
        document.querySelector("html").style.colorScheme = "light";
        localStorage.setItem("user-dark-mode", false);
        document.dispatchEvent(
          new CustomEvent("darkMode", { detail: { mode: "off" } })
        );
      }
      setTimeout(() => {
        document.documentElement.classList.remove("[&_*]:!transition-none");
      }, 1);
    });
  });
}

// Select buttons and menu
const openMenuButton = document.getElementById("openMenuButton");
const closeMenuButton = document.getElementById("closeMenuButton");
const sideMobileMenu = document.getElementById("sideMobileMenu");

const menuContainer = document.querySelector("#sideMobileMenu .menuContainer");

const notificationBtn = document.getElementById("notification-btn");
const notificationDropdown = document.getElementById("notification-dropdown");

// Toggle notification dropdown visibility
notificationBtn.addEventListener("click", () => {
  notificationDropdown.classList.toggle("hidden");
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (
    !notificationBtn.contains(e.target) &&
    !notificationDropdown.contains(e.target)
  ) {
    notificationDropdown.classList.add("hidden");
  }
});

// Function to show the menu
openMenuButton.addEventListener("click", () => {
  sideMobileMenu.classList.remove("-translate-x-[1000%]");
});

document.addEventListener("click", (e) => {
  // Side Mobile Menu
  if (sideMobileMenu.contains(e.target) && !menuContainer.contains(e.target)) {
    sideMobileMenu.classList.add("-translate-x-[1000%]");
  }
});


// Announcement Ad Banner

$(document).ready(function () {
  $("#announcement-banner .owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: true,
    autoplay: true,
    autoplayTimeout: 6000,
    responsive: {
      0: {
        items: 1
      }
    }
  });
});