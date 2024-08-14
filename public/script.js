const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menuContainer = document.getElementById('menuContainer');

console.log(openMenu, closeMenu, menuContainer);

openMenu.addEventListener('click', () => {
  menuContainer.classList.toggle('translate-y-0');

  if (!menuContainer.classList.contains('flex')) {
    menuContainer.classList.add('flex');
  }

  document.body.classList.add('overflow-hidden');
});

closeMenu.addEventListener('click', () => {
  menuContainer.classList.toggle('translate-y-0');

  if (!menuContainer.classList.contains('flex')) {
    menuContainer.classList.add('flex');
  }

  document.body.classList.remove("overflow-hidden");
});

AOS.init();
