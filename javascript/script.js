// JavaScript to toggle mobile menu
const hamburger = document.getElementById('hamburger');
const menuItems = document.getElementById('menuItems');
const menuLinks = document.querySelectorAll('.menuItems li .hoverLinks'); 

hamburger.addEventListener('click', () => {
  menuItems.classList.toggle('active');
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuItems.classList.remove('active'); 
  });
});
