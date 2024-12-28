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
  if (
    !notificationBtn.contains(e.target) &&
    !notificationDropdown.contains(e.target)
  ) {
    notificationDropdown.classList.add("hidden");
  }

  // Side Mobile Menu
  if (sideMobileMenu.contains(e.target) && !menuContainer.contains(e.target)) {
    sideMobileMenu.classList.add("-translate-x-[1000%]");
  }
});
