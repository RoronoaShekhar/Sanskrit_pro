window.addEventListener('DOMContentLoaded', () => {
  const fadeEls = document.querySelectorAll('.fade-in');
  fadeEls.forEach((el, index) => {
    el.style.animationDelay = `${0.1 + index * 0.1}s`;
  });
});

function triggerAnimation() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(el => {
    el.classList.remove('fade-in');
    void el.offsetWidth; // Trigger reflow
    el.classList.add('fade-in');
  });
}
