/* GSAP Interface */
gsap.from(".left-container", 2, {
 width: "0",
 ease: Expo.easeInOut
});

gsap.from(".logo", 2, {
 delay: 1.5,
 y: 20,
 opacity: 0,
 ease: Expo.easeInOut
});

gsap.from(".info", 2, {
 delay: 1.5,
 y: 50,
 opacity: 0,
 scale: 2.5,
 ease: Expo.easeInOut
});
