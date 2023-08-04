// Get references to the button and dropdown content
const dropdownButton = document.getElementById("dropdownButton");
const dropdownContent = document.getElementById("dropdownContent");

// Add a click event listener to the button
dropdownButton.addEventListener("click", () => {
  // Toggle the display of the dropdown content
  dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
});