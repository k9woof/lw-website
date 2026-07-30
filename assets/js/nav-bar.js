// adapted from an example in https://github.com/WebDevSimplified/css-tutorials

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navBar = document.getElementsByClassName("nav-bar")[0];
const portfolioLink = document.getElementsByClassName("portfolio")[0];
const contactLink = document.getElementsByClassName("contact")[0];

toggleButton.addEventListener("click", () => {
  navBar.classList.toggle("active");
  toggleButton.classList.toggle("active");
});

portfolioLink.addEventListener("click", () => {
  navBar.classList.toggle("active");
  toggleButton.classList.toggle("active");
});

contactLink.addEventListener("click", () => {
  navBar.classList.toggle("active");
  toggleButton.classList.toggle("active");
});
