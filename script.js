// Simple fade-in on scroll
document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded successfully.");

  const faders = document.querySelectorAll('section');

  const appearOptions = {
    threshold: 0.1,
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});
