document.addEventListener("DOMContentLoaded", function() {
    console.log("scripts.js is loaded");

    // Register the TextPlugin with GSAP
    gsap.registerPlugin(TextPlugin);

    // Set the initial size of the title text
     gsap.set("#title h1",
         { fontSize: "5rem",
         delay:2
         }
     );

    // Animate the title text
    gsap.to("#title h1",
        {
            duration: 3.5,
            text: "RAY ESCOBEDO DATA & DEVELOPMENT",
            opacity: 1,
            delay: 2,
            ease: "power2.out" // Ease for a smoother transition
        }
    );

    // Additional text animation for the welcome text
    gsap.to("#welcome h2",
        {
            duration: 1.5,
            text: "Sit back, relax",
            delay: 6, // Delay to ensure this runs after the previous animation
            repeat: 2, //repeat animation once
            repeatDelay: 1.5,
            yoyo: true //revers animation
        }
    );
});
