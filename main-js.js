//Reseek - GSAP Animation
//Made by Reseek

//Scroll smooth
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
  direction: 'vertical', // vertical, horizontal
  gestureDirection: 'vertical', // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})

//get scroll value
lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
  console.log({ scroll, limit, velocity, direction, progress })
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

function checkScrollMenu(){
if($('.menu-wrapper').hasClass('open')){
      lenis.stop();
    } else {
     lenis.start();
    }
}
checkScrollMenu();
requestAnimationFrame(raf)

//Typed text automatic
  var typed2 = new Typed('#typed', {
    strings: ['Web Solutions' ,'Web Development', 'Web Design'],
    typeSpeed: 70,
    backSpeed: 30,
    startDelay: 600,
    backDelay: 1500,
    fadeOut: true,
    loop: true,
    showCursor: false
  });
  

//round section 1 animation
$(".section-1").each(function (index) {
let targetElementRound = $(".section-1-round .round-wrapp");
const section1 = $(this);

let tl = gsap.timeline({
    scrollTrigger: {
      trigger: section1,
      start: "0% 100%",
      end: "5% 100%",
      scrub: 0,
      toggleActions: "restar pause reverse pause",
    }
  });
  tl.to(targetElementRound, {
    height: 0,
    ease: "none"
  }, 0);
  
  });


//GSAP loader 
const svg = document.getElementById("svg");
const l1 = document.getElementById("l1");
const l2 = document.getElementById("l2");
const l3 = document.getElementById("l3");
const l4 = document.getElementById("l4");
const tl2 = gsap.timeline();
const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z"; 

tl2.from(".loader-wrap-heading", {
  delay: 0.25,
  opacity:1,
}).to(".loader-wrap-heading", {
  delay: 0.2,
 opacity:0,
});

tl2.from(".loader-blur", {
  delay: 0,
    duration: 0.1,
  opacity:1,
}).to(".loader-blur", {
  delay: 0,
  duration: 0.1,
 opacity:0,
});
tl2.to(svg, {
  duration: 0.25,
  attr: { d: curve },
  force3D: false,
  ease: "power2.easeIn",
}).to(svg, {
  duration: 0.25,
  attr: { d: flat },
   force3D: false,
  ease: "power2.easeOut",
});

gsap.to(l1, {
	x:0,
	y:0,
  duration: 0.2,
  delay: 0.1,
 opacity:1,
 
});
gsap.to(l2, {
	x:0,
	y:0,
  duration: 0.2,
  delay: 0.1,
 opacity:1,
 
});
gsap.to(l3, {
	x:0,
	y:0,
  duration: 0.2,
  delay: 0.1,
 opacity:1,
 
});
gsap.to(l4, {
	x:0,
	y:0,
  duration: 0.2,
  delay: 0.1,
 opacity:1,
 
});


tl2.to(".loader-wrap", {
  y: -1500,
});
tl2.to(".loader-wrap", {
  zIndex: -1,
  display: "none",
});

