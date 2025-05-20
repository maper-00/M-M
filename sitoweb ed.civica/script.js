window.addEventListener('DOMContentLoaded', () => {
  // FADE-IN
  document.querySelectorAll('.fade-in').forEach(el => {
    setTimeout(() => {
      el.classList.add('visible');
    }, 300);
  });
});
