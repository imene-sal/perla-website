/* ==========================================================================
   PERLA — script.js
   Two small, purposeful behaviors:
   1. Header gains a background once you scroll past the hero
   2. Sections with class "reveal" fade in gently as they enter view
   No frameworks, no build step — plain JavaScript that runs in any browser.
   ========================================================================== */

// --- 1. Header background on scroll -----------------------------------
const header = document.getElementById('siteHeader');

function updateHeaderState() {
  if (window.scrollY > 80) {
    header.classList.add('is-scrolled');
  } else {
    header.classList.remove('is-scrolled');
  }
}

window.addEventListener('scroll', updateHeaderState);
updateHeaderState(); // run once on load in case the page loads mid-scroll


// --- 2. Scroll-reveal animation ----------------------------------------
// Watches every element with class "reveal" and adds "is-visible"
// once it scrolls into the viewport. The actual fade/rise animation
// itself lives in CSS (see .reveal / .reveal.is-visible in style.css).
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Once revealed, stop watching — no need to re-check this element
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15, // trigger once 15% of the element is visible
  }
);

revealElements.forEach((el) => revealObserver.observe(el));