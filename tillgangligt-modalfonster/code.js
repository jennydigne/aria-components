const closeModalBtn = document.getElementById("closeModalBtn");
const accessibleModal = document.getElementById("accessibleModal");
const openModalBtn = document.getElementById("openModalBtn");

openModalBtn.focus();

openModalBtn.addEventListener("click", () => {
    accessibleModal.removeAttribute("hidden");
    openModalBtn.setAttribute("aria-expanded", "true");
    openModalBtn.setAttribute("hidden", true);
    closeModalBtn.focus();
})

closeModalBtn.addEventListener("click", () => {
    accessibleModal.setAttribute("hidden", true);
    openModalBtn.setAttribute("aria-expanded", "false");
    openModalBtn.removeAttribute("hidden");
    openModalBtn.focus();
})

document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        accessibleModal.setAttribute("hidden", true);
        openModalBtn.setAttribute("aria-expanded", "false");
        openModalBtn.removeAttribute("hidden");
        openModalBtn.focus();
    }
});

