// Add this JavaScript code to your existing 'script.js' file

// Header Animation
gsap.from(".header .head img", { opacity: 0, scale: 0.5, duration: 2 });
gsap.from(".header .head h1", { opacity: 0, x: -50, duration: 2 });

// Landing Section Animation
gsap.from(".landing-section", { opacity: 0, duration: 4 });
gsap.from(".landing-content h1", { opacity: 0, x: -50, duration: 2 });
gsap.from(".landing-content p", { opacity: 0, x: 50, duration: 2 });



