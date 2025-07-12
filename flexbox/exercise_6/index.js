const buttons = document.querySelectorAll(".close-menu-button, .open-menu-button");
const nav = document.querySelector(".nav");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    nav.classList.toggle("toggle-menu");
  });
});
