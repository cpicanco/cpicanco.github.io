/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js-top', '/assets/particles-top.json');
particlesJS.load('particles-js-bottom', '/assets/particles-bottom.json');
// let lastScrollTop = window.scrollY;
// let ticking = false;
// var direction = "top";
// var default_direction = "top";
// var velocity = 4;
// window.addEventListener('DOMContentLoaded', function() {
//   window.addEventListener('scroll', function(e) {
//     if (ticking == false) {
//       if (typeof window.pJSDom[0] !== 'undefined') {
//         var localpJS = window.pJSDom[0].pJS;
//         var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
//         velocity = 12
//         if (st > lastScrollTop){
//           direction = 'top';
//         } else {
//           direction = 'bottom';
//         }
//         lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
//         window.requestAnimationFrame(function() {
//           setTimeout(function(){
//             ticking = false;
//             lastDirection = direction;
//             localpJS.fn.updateParticlesDirection(default_direction);
//           }, 1000/60);
//           localpJS.fn.particlesScroll(direction, velocity);
//         });
//         ticking = true;
//       };
//     }
//   });
// }, false);

