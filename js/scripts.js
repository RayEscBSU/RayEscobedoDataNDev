document.addEventListener("DOMContentLoaded", function() {
    console.log("scripts.js is loaded");

    // Register the TextPlugin with GSAP
    gsap.registerPlugin(TextPlugin);

    // Disable scrolling by adding an overflow hidden style to the body
    function disableScroll() {
        document.body.style.overflow = 'hidden';
    }

    // Enable scrolling by removing the overflow hidden style from the body
    function enableScroll() {
        document.body.style.overflow = '';
    }

    // Disable scrolling initially
    disableScroll();

    // Set the initial size of the title text
    gsap.set("#title h1", { fontSize: "5rem", delay: 4});

    // Create a timeline for the animations
    let tl = gsap.timeline({
        onComplete: enableScroll // Enable scrolling when the animation completes
    });
    // Animate the title text
    tl.to("#title h1", {
        duration: 1,
        text: "..",
        opacity: 1,
        delay: 1,
        ease: "power2.out" // Ease for a smoother transition
    });

    // Animate the title text
    tl.to("#title h1", {
        duration: 3.5,
        text: "RAY ESCOBEDO DATA & DEVELOPMENT",
        opacity: 1,
        delay: 2,
        ease: "power2.out" // Ease for a smoother transition
    });

    // Additional text animation for the welcome text
    tl.to("#welcome h2", {
        duration: 1.5,
        text: "Sit back, relax",
        delay: 1, // Delay to ensure this runs after the previous animation
        repeat: 2, // Repeat animation twice
        repeatDelay: 1.5,
        yoyo: true // Reverse animation
    });

    // Optional: You can add a delay before enabling scroll to ensure the user sees the entire animation
    setTimeout(enableScroll,7500 ); // 3.5s + 3s for repeats + 6s delay + additional buffer
});
