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

 //Scroll Reveal - only for stripe and h4, not items
 ScrollReveal().reveal('.stripe', { delay: 300, easing: 'ease-in' });
 ScrollReveal().reveal('h4', { delay: 300, reset: false, easing: 'ease-in' });

 // Custom intersection observer for items - better control than ScrollReveal
 const observerOptions = {
   threshold: 0.15, // Trigger when 15% visible
   rootMargin: '0px 0px -100px 0px' // Trigger 100px before fully in viewport
 };

 const observer = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
     if (entry.isIntersecting) {
       entry.target.classList.add('fade-in-visible');
       entry.target.classList.remove('fade-in-element');
     } else {
       // When scrolling out of view, reset the animation
       if (entry.target.classList.contains('fade-in-visible')) {
         entry.target.classList.remove('fade-in-visible');
         entry.target.classList.add('fade-in-element');
       }
     }
   });
 }, observerOptions);

 // Observe all items
 document.querySelectorAll('.item').forEach(item => {
   item.classList.add('fade-in-element');
   observer.observe(item);
 });
