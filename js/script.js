// SHOW & OFF PASWWORD



  // LOGIN PASSWORD
document.addEventListener("DOMContentLoaded", () => {

  const toggleLoginPasswordButton = document.querySelector(
    "button[data-toggle='loginPassword']"
  );
  const passwordLoginInput = document.getElementById("loginPassword");
  const icon = toggleLoginPasswordButton.querySelector(".loginPassword-icon");

  toggleLoginPasswordButton.addEventListener("click", () => {
    const showIcons = icon.querySelectorAll(".loginPasswordShow-icon");
    const hideIcons = icon.querySelectorAll(".loginPasswordHide-icon");

    if (passwordLoginInput.type === "password") {
      passwordLoginInput.type = "text";
      showIcons.forEach((el) => el.classList.add("hidden"));
      hideIcons.forEach((el) => el.classList.remove("hidden"));
    } else {
      passwordLoginInput.type = "password";
      hideIcons.forEach((el) => el.classList.add("hidden"));
      showIcons.forEach((el) => el.classList.remove("hidden"));
    }
  });
});


  // SIGNUP PASSWORD
document.addEventListener("DOMContentLoaded", () => {
  // SIGN UP
  const togglePasswordButton = document.querySelector(
    "button[data-toggle='password']"
  );
  const toggleConfirmPasswordButton = document.querySelector(
    "button[data-toggle='confirmPassword']"
  );
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");
  const passwordIcon = togglePasswordButton.querySelector(".password-icon");
  const confirmPasswordIcon = toggleConfirmPasswordButton.querySelector(
    ".confirmPassword-icon"
  );

  // Function to toggle visibility for both inputs
  const toggleVisibility = () => {
    const passwordShowIcons = passwordIcon.querySelectorAll(".show-icon");
    const passwordHideIcons = passwordIcon.querySelectorAll(".hide-icon");
    const confirmPasswordShowIcons = confirmPasswordIcon.querySelectorAll(
      ".confirmPasswordShow-icon"
    );
    const confirmPasswordHideIcons = confirmPasswordIcon.querySelectorAll(
      ".confirmPasswordHide-icon"
    );

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      confirmPasswordInput.type = "text";

      // Update icons
      passwordShowIcons.forEach((el) => el.classList.add("hidden"));
      passwordHideIcons.forEach((el) => el.classList.remove("hidden"));
      confirmPasswordShowIcons.forEach((el) => el.classList.add("hidden"));
      confirmPasswordHideIcons.forEach((el) => el.classList.remove("hidden"));
    } else {
      passwordInput.type = "password";
      confirmPasswordInput.type = "password";

      // Update icons
      passwordHideIcons.forEach((el) => el.classList.add("hidden"));
      passwordShowIcons.forEach((el) => el.classList.remove("hidden"));
      confirmPasswordHideIcons.forEach((el) => el.classList.add("hidden"));
      confirmPasswordShowIcons.forEach((el) => el.classList.remove("hidden"));
    }
  };

  togglePasswordButton.addEventListener("click", toggleVisibility);
  toggleConfirmPasswordButton.addEventListener("click", toggleVisibility);
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
