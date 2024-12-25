

// SHOW & OFF PASWWORD
document.addEventListener("DOMContentLoaded", () => {
  const togglePasswordButton = document.querySelector(
    "button[data-toggle='password']"
  );
  const passwordInput = document.getElementById("password");
  const icon = togglePasswordButton.querySelector(".password-icon");

  togglePasswordButton.addEventListener("click", () => {
    const showIcons = icon.querySelectorAll(".show-icon");
    const hideIcons = icon.querySelectorAll(".hide-icon");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      showIcons.forEach((el) => el.classList.add("hidden"));
      hideIcons.forEach((el) => el.classList.remove("hidden"));
    } else {
      passwordInput.type = "password";
      hideIcons.forEach((el) => el.classList.add("hidden"));
      showIcons.forEach((el) => el.classList.remove("hidden"));
    }
  });
});





// HOME MENU TOGGLER

const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menuContainer = document.getElementById("menuContainer");


openMenu.addEventListener("click", () => {
  menuContainer.classList.toggle("translate-y-0");

  if (!menuContainer.classList.contains("flex")) {
    menuContainer.classList.add("flex");
  }

  document.body.classList.add("overflow-hidden");
});

closeMenu.addEventListener("click", () => {
  menuContainer.classList.toggle("translate-y-0");

  if (!menuContainer.classList.contains("flex")) {
    menuContainer.classList.add("flex");
  }

  document.body.classList.remove("overflow-hidden");
});

// FAQ ACCORDION

const detailsElements = document.querySelectorAll("#details");

detailsElements.forEach((details) => {
  details.addEventListener("toggle", () => {
    // Close other open details
    if (details.open) {
      detailsElements.forEach((otherDetails) => {
        if (otherDetails !== details && otherDetails.open) {
          otherDetails.open = false;
        }
      });
    }
  });
});

// HOME PAGE VIODE MODAL DISPLAY

const modal = document.getElementById("videoModal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", () => {
  const videoURL = "https://www.youtube.com/embed/JSTUtRQ8Hwc?autoplay=1  ";
  youtubeVideo.src = videoURL;
  modal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  youtubeVideo.src = ""; // Stop the video
});

