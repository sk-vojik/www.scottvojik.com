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
   threshold: 0.05, // Trigger when 5% visible
   rootMargin: '0px 0px -50px 0px' // Trigger a bit before item enters viewport
 };

 const observer = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
     if (entry.isIntersecting) {
       entry.target.classList.add('fade-in-visible');
       // Once visible, stop observing to prevent it from disappearing
       observer.unobserve(entry.target);
     }
   });
 }, observerOptions);

 // Observe all items
 document.querySelectorAll('.item').forEach(item => {
   item.classList.add('fade-in-element');
   observer.observe(item);
 });
