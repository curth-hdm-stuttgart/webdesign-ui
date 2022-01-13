// https://greensock.com/gsap/
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

//  Einblenden des "create Innovation for everyday people text"
tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });

//  Ein Slider, der einfach so durchläuft
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });

//  Intro verschwinden lassen
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");

//  Navigation einblenden (dauert 2 Sekunden)
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 5 });

//  Grossen Text "Stay afloat" einblenden (dauert 2 Sekunden)
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 2 }, "-=1");
