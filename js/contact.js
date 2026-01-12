// Smooth page transitions
document.addEventListener('DOMContentLoaded', function() {
  // Add fade-out effect when clicking navigation links
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const destination = this.href;

      // Add fade-out class to body
      document.body.style.opacity = '1';
      document.body.style.transition = 'opacity 0.3s ease-out';
      document.body.style.opacity = '0';

      // Navigate after fade completes
      setTimeout(() => {
        window.location.href = destination;
      }, 300);
    });
  });

  // Fade in on page load
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease-in';
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 10);
});