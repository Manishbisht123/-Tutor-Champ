// Select the hamburger menu 
const hamburger = document.getElementById("hamburger");
const menuItems = document.getElementById("menuItems");

// Add click event listener to hamburger
hamburger.addEventListener("click", function () {
  menuItems.classList.toggle("active");
});
