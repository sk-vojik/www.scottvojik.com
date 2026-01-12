//JS Video Player
// window.onload = function() { //executes code after DOM loads
//   //--- select all <video> on the page
//   const vids = document.querySelectorAll("video")
//   // Loop over the selected elements and add event listeners
//   for (let i = 0; i < vids.length; i++) {
//     vids[i].addEventListener("click", function(e) {
//       vids[i].play()
//     })
//     vids[i].addEventListener("dblclick", function(e) {
//       vids[i].pause()
//     })
//   }
//  }

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

 //Scroll Reveal
 // Better ScrollReveal settings to prevent items from disappearing
 ScrollReveal().reveal('.item', {
   delay: 200,
   duration: 800,
   distance: '30px',
   origin: 'bottom',
   reset: false,  // Items won't disappear when scrolling back up
   easing: 'ease-in-out',
   viewFactor: 0.1  // Triggers when 10% visible
 });
 ScrollReveal().reveal('.stripe', { delay: 300, easing: 'ease-in' });
 ScrollReveal().reveal('h4', { delay: 300, reset: false, easing: 'ease-in' });
