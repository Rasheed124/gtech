const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menuContainer = document.getElementById("menuContainer");

console.log(openMenu, closeMenu, menuContainer);

openMenu.addEventListener("click", () => {
    menuContainer.classList.toggle("translate-y-0")

    if(!menuContainer.classList.contains("flex")){
        menuContainer.classList.add("flex")
    }
})

closeMenu.addEventListener("click", () => {
    menuContainer.classList.toggle("translate-y-0")

    if(!menuContainer.classList.contains("flex")){
        menuContainer.classList.add("flex")
    }
})



