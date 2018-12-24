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


 //Scroll Reveal
 ScrollReveal().reveal('.item', { delay: 300, reset: true, easing: 'ease-in', viewFactor: .35 });
 ScrollReveal().reveal('.stripe', { delay: 300, easing: 'ease-in' });
 ScrollReveal().reveal('h4', { delay: 300, reset: true, easing: 'ease-in' });
