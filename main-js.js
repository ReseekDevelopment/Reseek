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

//Start GSAP and animate elements

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  markers: false
});


//menu trigger

const ham = document.querySelector(".menu-button-wrapper");
const menu = document.querySelector('.menu-links-wrapper');
const link1 = document.querySelector('.link-menu-1.l1');
const link2 = document.querySelectorAll('.link-menu-1.l2');
const link3 = document.querySelectorAll('.link-menu-1.l3');
const link4 = document.querySelectorAll('.link-menu-1.l4');

var tlMenu = gsap.timeline({ paused: true });

tlMenu.to(".overlay-blur", 0.3, {opacity:1, display:"flex"});

function checkBgMenu(){
     if(($('.main-section').css("background-color") == "rgb(16, 14, 14)") || ($('.main-section').css("background-color") == "#100E0E")){
     
       gsap.to('#open', { duration: 0.2, color: '#ffffff'})
       gsap.to('#close', { duration: 0.2, color: '#ffffff'})
       gsap.to('.logo-svg', { duration: 0.2, color: '#ffffff'})

     } else if(($('.main-section').css("background-color") == "rgb(245, 245, 247)") || ($('.main-section').css("background-color") == "#F5F5F7")) {
     
     if(!$('.menu-wrapper').hasClass('open')){
      gsap.to('#open', { duration: 0.2, color: '#100E0E'})
      gsap.to('#close', { duration: 0.2, color: '#100E0E'})
      gsap.to('.logo-svg', { duration: 0.2, color: '#100E0E'})
     
     		} else {
	 gsap.to('#open', { duration: 0.2, color: '#ffffff'})
         gsap.to('#close', { duration: 0.2, color: '#ffffff'})
         gsap.to('.logo-svg', { duration: 0.2, color: '#ffffff'})
      }
     
     }
};


tlMenu.to(menu, {
	duration: 0.5,
	opacity: 1,
	width: '100%', 
	x:0,
	ease: 'power3.easeInOut',
})
tlMenu.to(link1, {
delay:0.2,
	duration: 0.4,
  y: 0,
	opacity: 1,
	stagger: 0.2,
	ease: 'power3.easeInOut',
}, "-=0.5");

tlMenu.to(link2, {
delay:0.2,
	duration: 0.4,
 	y: 0,
	opacity: 1,
	stagger: 0.2,
	ease: 'power3.easeInOut',
}, "-=0.5");

tlMenu.to(link3, {
delay:0.2,
	duration: 0.4,
  y: 0,
	opacity: 1,
	stagger: 0.2,
	ease: 'power3.easeInOut',
}, "-=0.5");

tlMenu.to(link4, {
delay:0.2,
	duration: 0.4,
  y: 0,
	opacity: 1,
	stagger: 0.2,
	ease: 'power3.easeInOut',
}, "-=0.5");

tlMenu.reverse();

ham.addEventListener('click', () => {
	tlMenu.reversed(!tlMenu.reversed());
  $('.menu-wrapper').toggleClass('open');
    checkBgMenu();
    if($('.menu-wrapper').hasClass('open')){
      $('body').addClass('no-scroll');
      checkScrollMenu();
    } else {
      $('body').removeClass('no-scroll');
      checkScrollMenu();
    }


});

  
//Change background color animation

 ScrollTrigger.create({
   
   trigger: '.full-wrapper-bg.s-1',
   markers:false,
   start:"top 80%",
   end:"bottom 0%", 
    normalizeScroll: false, 
 
   onEnter: () => {
     gsap.to('.main-section', { duration: 0.3, backgroundColor: '#100E0E'})
     gsap.to('#open', { duration: 0.2, color: '#ffffff'})
     gsap.to('#close', { duration: 0.2, color: '#ffffff'})
     gsap.to('.logo-svg', { duration: 0.2, color: '#ffffff'})
     gsap.to('.background-blur-menu', { duration: 0.2, backgroundColor: '#100E0E8C'})
      

     
   },
   
   onLeaveBack: () => {
     gsap.to('.main-section', { duration: 0.3, backgroundColor: '#100E0E'})
     gsap.to('#open', { duration: 0.2, color: '#ffffff'})
     gsap.to('#close', { duration: 0.2, color: '#ffffff'})
     gsap.to('.logo-svg', { duration: 0.2, color: '#ffffff'})
     gsap.to('.background-blur-menu', { duration: 0.2, backgroundColor: '#100E0E8C'})
  

   },
 
   
 })
 
 ScrollTrigger.create({
   
   trigger: '.full-wrapper-bg.s-2',
   markers:false,
   start:"top 80%",
   end:"bottom 0%", 
    normalizeScroll: false, 
 
   onEnter: () => {
     gsap.to('.main-section', { duration: 0.3, backgroundColor: '#F5F5F7'})
     gsap.to('#open', { duration: 0.2, color: '#000000'})
     gsap.to('#close', { duration: 0.2, color: '#000000'})
     gsap.to('.logo-svg', { duration: 0.2, color: '#000000'})
     gsap.to('.background-blur-menu', { duration: 0.2, backgroundColor: '#ffffff8C'})
         

   },
   
   onLeaveBack: () => {
     gsap.to('.main-section', { duration: 0.3, backgroundColor: '#100E0E'})
     gsap.to('#open', { duration: 0.2, color: '#ffffff'})
     gsap.to('#close', { duration: 0.2, color: '#ffffff'})
     gsap.to('.logo-svg', { duration: 0.2, color: '#ffffff'})
     gsap.to('.background-blur-menu', { duration: 0.2, backgroundColor: '#100E0E8C'})
  

     },

   })
   
   
  ScrollTrigger.create({
   
   trigger: '.full-wrapper-bg.s-3',
   markers:false,
   start:"top 80%",
   end:"bottom 0%", 
    normalizeScroll: false, 
 
   onEnter: () => {
     gsap.to('.main-section', { duration: 0.3, backgroundColor: '#100E0E'})
     gsap.to('#open', { duration: 0.2, color: '#ffffff'})
     gsap.to('#close', { duration: 0.2, color: '#ffffff'})
     gsap.to('.logo-svg', { duration: 0.2, color: '#ffffff'})
     gsap.to('.background-blur-menu', { duration: 0.2, backgroundColor: '#100E0E8C'})

 
   },
   
   onLeaveBack: () => {
      gsap.to('.main-section', { duration: 0.3, backgroundColor: '#F5F5F7'})
      gsap.to('#open', { duration: 0.2, color: '#000000'})
      gsap.to('#close', { duration: 0.2, color: '#000000'})
      gsap.to('.logo-svg', { duration: 0.2, color: '#000000'})
      gsap.to('.background-blur-menu', { duration: 0.2, backgroundColor: '#ffffff8C'})
        
   

   },
 
   
 })
 
  ScrollTrigger.create({
   
   trigger: '.full-wrapper-bg.s-4',
   markers:false,
   start:"top 80%",
   end:"bottom 0%", 
    normalizeScroll: false, 
 
   onEnter: () => {
     gsap.to('.main-section', { duration: 0.3, backgroundColor: '#F5F5F7'})
     gsap.to('#open', { duration: 0.2, color: '#000000'})
     gsap.to('#close', { duration: 0.2, color: '#000000'})
     gsap.to('.logo-svg', { duration: 0.2, color: '#000000'})
     gsap.to('.background-blur-menu', { duration: 0.2, backgroundColor: '#ffffff8C'})


   },
   
   onLeaveBack: () => {
     gsap.to('.main-section', { duration: 0.3, backgroundColor: '#100E0E'})
      gsap.to('#open', { duration: 0.2, color: '#ffffff'})
      gsap.to('#close', { duration: 0.2, color: '#ffffff'})
      gsap.to('.logo-svg', { duration: 0.2, color: '#ffffff'})
      gsap.to('.background-blur-menu', { duration: 0.2, backgroundColor: '#100E0E8C'})


     },

   })
   
   
// menu hide-show on scroll

var actionNav = gsap.to('.menu-wrapper', {y:'-=80', duration:0.5, ease:'power2.in', paused:true});


ScrollTrigger.create({
  trigger: ".menu-wrapper",
  start: "10px top",
  end: 99999,
  onUpdate: ({progress, direction, isActive}) => {
    if (direction == -1) {
      actionNav.reverse()
    } if (direction == 1 ) {
      actionNav.play()
    } else if (direction == 1 && isActive == true) {
      actionNav.play()
    }
  }
});


