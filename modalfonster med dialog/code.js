const openDialogBtn = document.getElementById("openDialogBtn");
const accessibleDialog = document.getElementById("accessibleDialog");
const closeDialogBtn = document.getElementById("closeDialogBtn");

openDialogBtn.focus();

openDialogBtn.addEventListener("click", () => {
    accessibleDialog.showModal();
    openDialogBtn.setAttribute("hidden", true);
    closeDialogBtn.focus();
})

closeDialogBtn.addEventListener("click", () => {
    accessibleDialog.close();
    openDialogBtn.removeAttribute("hidden");
    openDialogBtn.focus();
})

document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        openDialogBtn.removeAttribute("hidden");
        openDialogBtn.focus();
    }
});



