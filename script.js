// =============================================================
// SCROLL REVEAL
// =============================================================

const revealEls = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach((el) => observer.observe(el));


// =============================================================
// MOBILE NAV
// =============================================================

const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("nav-links-open");
  });
}


// =============================================================
// PROJECT ACCORDION
// =============================================================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

  const header = card.querySelector(".project-header");

  header.addEventListener("click", () => {

    const isOpen = card.classList.contains("active");

    // Close all other projects
    projectCards.forEach((otherCard) => {
      otherCard.classList.remove("active");
    });

    // Re-open clicked project if it wasn't already open
    if (!isOpen) {
      card.classList.add("active");

      // Smooth scroll after animation
      setTimeout(() => {
        card.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 150);
    }

  });

});