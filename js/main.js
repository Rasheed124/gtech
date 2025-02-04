// Light switcher
const lightSwitches = document.querySelectorAll(".light-switch");
if (lightSwitches.length > 0) {
  lightSwitches.forEach((lightSwitch, i) => {
    if (localStorage.getItem("dark-mode") === "true") {
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
        localStorage.setItem("dark-mode", true);
        document.dispatchEvent(
          new CustomEvent("darkMode", { detail: { mode: "on" } })
        );
      } else {
        document.documentElement.classList.remove("dark");
        document.querySelector("html").style.colorScheme = "light";
        localStorage.setItem("dark-mode", false);
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





// ==================================USERDASHBOARD=================
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


// PAYMENT INPUT PAGE

const pinInputs = document.querySelectorAll(".payment-input");
const pinButtons = document.querySelectorAll(".payment-btn");
const deleteBtn = document.getElementById("delete-btn");
let activeInputIndex = 0;

function updateActiveInput(index) {
  activeInputIndex = Math.max(0, Math.min(index, pinInputs.length - 1));
  pinInputs[activeInputIndex].focus();
}

pinInputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    const value = e.target.value;

    // Restrict to numbers only
    if (!/^\d$/.test(value)) {
      e.target.value = ""; // Clear non-numeric input
      return;
    }

    if (value) {
      updateActiveInput(index + 1);
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && !e.target.value) {
      updateActiveInput(index - 1);
    }
  });
});

pinButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "") return; // Empty button
    if (value === "BACKSPACE") {
      // Delete last input
      if (pinInputs[activeInputIndex].value) {
        pinInputs[activeInputIndex].value = "";
      } else if (activeInputIndex > 0) {
        updateActiveInput(activeInputIndex - 1);
        pinInputs[activeInputIndex].value = "";
      }
    } else {
      if (pinInputs[activeInputIndex].value === "") {
        pinInputs[activeInputIndex].value = value;
        updateActiveInput(activeInputIndex + 1);
      }
    }
  });
});

document.getElementById("payment-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const pin = Array.from(pinInputs)
    .map((input) => input.value)
    .join("");
  console.log(pin);
});