// Get references to the button and menu
const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

// Add a click event listener to the button
menuButton.addEventListener("click", () => {
  // Toggle the 'hidden' class on the menu to show/hide it
  menu.classList.toggle("hidden");
});