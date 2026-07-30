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

// =============================================================
// LIGHTBOX
// =============================================================

const lightbox = document.getElementById("lightbox");
const lightboxImage = lightbox.querySelector(".lightbox-image");
const lightboxTitle =
    lightbox.querySelector(".lightbox-title");

const lightboxDescription =
    lightbox.querySelector(".lightbox-description");

const lightboxCounter =
    lightbox.querySelector(".lightbox-counter");

const btnPrev = lightbox.querySelector(".lightbox-prev");
const btnNext = lightbox.querySelector(".lightbox-next");
const btnClose = lightbox.querySelector(".lightbox-close");

let currentGallery = [];
let currentIndex = 0;


// ---------- Open Lightbox ----------

document.querySelectorAll(".project-gallery img").forEach((image) => {

    image.addEventListener("click", () => {

        currentGallery = [
            ...image.closest(".project-gallery").querySelectorAll("img")
        ];

        currentIndex = currentGallery.indexOf(image);

        updateLightbox();

        lightbox.classList.add("open");
        document.body.classList.add("lightbox-open");

    });

});


// ---------- Update Image ----------

function updateLightbox() {

    const img = currentGallery[currentIndex];

    lightboxImage.src = img.src;

    lightboxImage.alt = img.alt;

    lightboxTitle.textContent =
        img.dataset.title || "";

    lightboxDescription.textContent =
        img.dataset.description || "";

    lightboxCounter.textContent =
        `${currentIndex + 1} / ${currentGallery.length}`;

}


// ---------- Navigation ----------

function nextImage() {

    currentIndex =
        (currentIndex + 1) % currentGallery.length;

    updateLightbox();

}

function previousImage() {

    currentIndex =
        (currentIndex - 1 + currentGallery.length) %
        currentGallery.length;

    updateLightbox();

}


// ---------- Close ----------

function closeLightbox() {

    lightbox.classList.remove("open");
    document.body.classList.remove("lightbox-open");

}


// ---------- Buttons ----------

btnNext.addEventListener("click", nextImage);

btnPrev.addEventListener("click", previousImage);

btnClose.addEventListener("click", closeLightbox);


// ---------- Click Background ----------

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        closeLightbox();

    }

});


// ---------- Keyboard ----------

document.addEventListener("keydown", (e) => {

    if (!lightbox.classList.contains("open"))
        return;

    switch (e.key) {

        case "ArrowRight":
            nextImage();
            break;

        case "ArrowLeft":
            previousImage();
            break;

        case "Escape":
            closeLightbox();
            break;

    }

});