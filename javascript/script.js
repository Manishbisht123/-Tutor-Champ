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

// contact form
document.getElementById("contactButton").addEventListener("click", function () {
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validate form
  if (!fullName) {
    alert("Please enter your full name.");
    return;
  }

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!message) {
    alert("Please enter your message.");
    return;
  }

  // Display success message
  document.getElementById("confirmationMessage").style.display = "block";

  // Automatically hide the message after 3 seconds
  setTimeout(() => {
    confirmationMessage.style.display = "none";
  }, 3000);

  // Optionally, clear the form
  document.getElementById("contactForm").reset();
});


//Top bUtton scroll To up
const upButton = document.getElementById('upButton');

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        upButton.style.display = 'block';
    } else {
        upButton.style.display = 'none';
    }
};

// Scroll to the top when the button is clicked
upButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});