// Smooth scrolling when clicking menu links
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // stops normal jump to section

    // find the section the link points to
    const sectionId = link.getAttribute("href");
    const section = document.querySelector(sectionId);

    // scroll to the section smoothly
    if (section) {
      const sectionTop = section.offsetTop - 70; // adjust for navbar height

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  });
});


// Fade effect on scroll
const fadeSections = document.querySelectorAll(".fade-section");

function showSectionsOnScroll() {
  const screenHeight = window.innerHeight * 0.8; // point where animation triggers

  fadeSections.forEach(function (section) {
    // check if the section is close to the viewport
    if (section.getBoundingClientRect().top < screenHeight) {
      section.classList.add("visible"); // start fade animation
    }
  });
}

// run when scrolling & when page loads
window.addEventListener("scroll", showSectionsOnScroll);
window.addEventListener("load", showSectionsOnScroll);


// Scroll-to-top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block"; // show button
  } else {
    scrollTopBtn.style.display = "none"; // hide button
  }
});

scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});