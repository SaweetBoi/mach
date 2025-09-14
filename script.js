// Smooth fade-in on scroll
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-100", "translate-y-0");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(sec => {
    sec.classList.add("opacity-0", "translate-y-6", "transition", "duration-700");
    observer.observe(sec);
  });
});