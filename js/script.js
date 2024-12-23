// HOME MENU TOGGLER

const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menuContainer = document.getElementById("menuContainer");

console.log(openMenu, closeMenu, menuContainer);

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

// function openModal() {
//   const videoURL = "https://www.youtube.com/embed/JSTUtRQ8Hwc?autoplay=1  ";
//   youtubeVideo.src = videoURL;
//   modal.classList.remove("hidden");
// }

// function closeModal() {
//   modal.classList.add("hidden");
//   youtubeVideo.src = ""; // Stop the video
// }
