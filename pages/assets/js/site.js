// script to enable inspection of images in the gallery

// get all images
const imageButtons = document.querySelectorAll(".grid-button");

// open dialog
const openDialog = (dialog) => {
  dialog.showModal();
};

// close dialog
const closeDialog = (dialog) => {
  dialog.close();
};

// add event listener to each image
var x = 1;
if (screen.width > 768) {
  while (x < imageButtons.length + 1) {
    const dialog = document.getElementById(String(x));
    const closeButton = dialog.querySelector(".dialog-close");
    const popped = imageButtons[x - 1];
    popped.addEventListener("click", () => openDialog(dialog));
    closeButton.addEventListener("click", () => closeDialog(dialog));
    x++;
  }
}
