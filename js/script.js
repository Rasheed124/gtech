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

//   const detailsElement = document.querySelector('#details');
//   const relativeElement = detailsElement.querySelector('#details-span');

//   if (detailsElement && relativeElement) {
//     detailsElement.addEventListener('toggle', () => {
//       if (detailsElement.open) {
//         relativeElement.style.width = '150%'; // Increase width when expanded
//       } else {
//         relativeElement.style.width = '100%'; // Reset to original width when collapsed
//       }
//     });
//   }
