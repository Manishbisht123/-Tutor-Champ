// Select the hamburger menu
const hamburger = document.getElementById("hamburger");
const menuItems = document.getElementById("menuItems");

// Add click event listener to hamburger
hamburger.addEventListener("click", function () {
  menuItems.classList.toggle("active");
});

// Counter Animation Function
function animateCounters() {
  const counters = document.querySelectorAll(".count");
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-count");
      const current = +counter.innerText;
      const increment = target / 200;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
}

// Intersection Observer for Counter Section
const counterSection = document.querySelector("#counter");
const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      animateCounters();
      observer.disconnect();
    }
  },
  { threshold: 0.5 }
);

observer.observe(counterSection);
