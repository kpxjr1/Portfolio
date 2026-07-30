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

// =============================================================
// PROJECT ACCORDION
// =============================================================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

    const header = card.querySelector(".project-header");
    const details = card.querySelector(".project-details");

    // Make sure every project starts closed
    details.style.height = "0px";

    header.addEventListener("click", () => {

        const isOpen = card.classList.contains("active");

        // Close every project
        projectCards.forEach((otherCard) => {

            otherCard.classList.remove("active");

            const otherDetails =
                otherCard.querySelector(".project-details");

            otherDetails.style.height = "0px";

        });

        // If this one wasn't open, open it
        if (!isOpen) {

            card.classList.add("active");

            // Measure actual content height
            details.style.height = details.scrollHeight + "px";

            setTimeout(() => {

                card.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 120);

        }

    });

});