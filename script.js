window.addEventListener('DOMContentLoaded', () => {
  const fadeEls = document.querySelectorAll('.fade-in');

  fadeEls.forEach((el, index) => {
    el.style.opacity = '1'; // Fallback in case animation fails
    el.style.transform = 'scale(1)';
    el.style.animation = `fadeInScale var(--fade-duration) ease forwards`;
    el.style.animationDelay = `${0.1 + index * 0.1}s`;
  });
});

function triggerAnimation() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(el => {
    el.classList.remove('fade-in');
    void el.offsetWidth; // Reflow
    el.classList.add('fade-in');
  });
}
