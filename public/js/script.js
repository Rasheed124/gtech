const notificationBtn = document.getElementById("notification-btn");
const notificationDropdown = document.getElementById("notification-dropdown");

// Toggle notification dropdown visibility
notificationBtn.addEventListener("click", () => {
  notificationDropdown.classList.toggle("hidden");
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!notificationBtn.contains(e.target) && !notificationDropdown.contains(e.target)) {
    notificationDropdown.classList.add("hidden");
  }
});