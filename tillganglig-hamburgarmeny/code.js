const menuButton = document.getElementById("menuButton");
const menuContent = document.getElementById("menuContent");

menuButton.focus();

menuButton.addEventListener("click", () => {
    if (menuContent.style.display === "none") {
        menuContent.style.display = "block";
        menuButton.setAttribute("aria-expanded", "true");

    } else {
        menuContent.style.display = "none";
        menuButton.setAttribute("aria-expanded", "false");
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        if (menuContent.style.display === "block") {
            menuContent.style.display = "none";
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.focus();
        }
    }
});