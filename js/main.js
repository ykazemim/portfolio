// basic nav toggle + small accessibility helpers
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("navToggle");
  const primaryNav = document.getElementById("primaryNav");

  if (!navToggle || !primaryNav) return;

  navToggle.addEventListener("click", function () {
    const expanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", String(!expanded));
    if (!expanded) {
      primaryNav.style.display = "block";
    } else {
      primaryNav.style.display = "none";
    }
  });

  // close mobile nav when a link is clicked
  primaryNav.addEventListener("click", function (e) {
    if (e.target.tagName === "A" && window.innerWidth < 768) {
      primaryNav.style.display = "none";
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  // set current year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
