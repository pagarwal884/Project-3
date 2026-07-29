// ===== MAIN APP COMPONENT =====
// This is the root component that brings all sections together
// It also handles the custom animated cursor effect and dark/light theme

import { useEffect, useRef, useState } from "react";
import { Toaster } from "react-hot-toast"; // Toast notifications library

// Import all the page sections/components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import OurWork from "./components/OurWork";
import MeetTeam from "./components/MeetTeam";
import Reach from "./components/Reach";
import Footer from "./components/Footer";

const App = () => {
  // ===== STATE MANAGEMENT =====
  // theme: Stores whether dark or light mode is active
  // Gets theme from browser storage or defaults to 'light'
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // ===== CUSTOM CURSOR SETUP =====
  // useRef creates references to DOM elements without causing re-renders
  // outlineRef: Reference to the outer ring that trails behind mouse
  // dotRef: Reference to the inner dot that snaps to mouse position
  const outlineRef = useRef(null);
  const dotRef = useRef(null);

  // ===== CUSTOM CURSOR EFFECT =====\n  // This useEffect runs once when component loads (empty dependency array)\n  // It sets up event listeners to track mouse movement and create animation
  useEffect(() => {
    // Function that runs every time mouse moves
    const moveCursor = (e) => {
      // Move the small DOT: Position it exactly where cursor is (instant snap)
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }

      // Move the RING: Animate it smoothly toward cursor (trailing effect)
      if (outlineRef.current) {
        outlineRef.current.animate(
          {
            left: `${e.clientX}px`,
            top: `${e.clientY}px`,
          },
          {
            duration: 400, // Takes 400ms to reach the cursor
            fill: "forwards", // Keeps the final position
            easing: "ease-out", // Smooth easing animation
          }
        );
      }
    };

    // Function that runs when hovering over clickable elements
    const handleMouseOver = (e) => {
      // Check if hovering over link, button, or input element
      if (e.target.closest("a, button, [role='button'], input, textarea")) {
        // Make the ring bigger and add color when hovering over interactive elements
        outlineRef.current?.classList.add("scale-150", "bg-primary/10");
      }
    };

    // Function that runs when leaving clickable elements
    const handleMouseOut = (e) => {
      if (e.target.closest("a, button, [role='button'], input, textarea")) {
        // Return ring to normal size when not hovering
        outlineRef.current?.classList.remove("scale-150", "bg-primary/10");
      }
    };

    // ===== ADD EVENT LISTENERS =====
    // Listen for mouse movements
    window.addEventListener("mousemove", moveCursor);
    // Listen for when mouse enters elements
    window.addEventListener("mouseover", handleMouseOver);
    // Listen for when mouse leaves elements
    window.addEventListener("mouseout", handleMouseOut);

    // ===== CLEANUP =====
    // This runs when component unmounts to prevent memory leaks
    // Remove event listeners so they don't keep running
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []); // Empty array means this runs only once on mount

  return (
    // Main container for the entire website
    <div className="relative overflow-x-hidden bg-white transition-colors duration-300 dark:bg-black">
      {/* Toast Notifications - Shows pop-up messages */}
      <Toaster
        position="top-right" // Position in top-right corner
        reverseOrder={false} // Show newest toast at bottom
        toastOptions={{
          duration: 3000, // Each toast shows for 3 seconds
        }}
      />

      {/* Navigation Bar - Header with logo and links */}
      <Navbar theme={theme} setTheme={setTheme} />

      {/* Main Page Sections - Arranged in order from top to bottom */}
      <Hero /> {/* Hero/Landing section */}
      <TrustedBy /> {/* Client testimonials */}
      <Services /> {/* Services offered */}
      <OurWork /> {/* Portfolio/Projects */}
      <MeetTeam /> {/* Team members */}
      <Reach /> {/* Contact/Reach out section */}
      <Footer theme={theme} /> {/* Footer with links */}

      {/* ===== CUSTOM ANIMATED CURSOR - RING ===== */}
      {/* This is the outer ring that trails behind the mouse */}
      <div
        ref={outlineRef} // Reference to this element for JavaScript control
        className="pointer-events-none fixed left-0 top-0 z-9999 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary transition-transform duration-200 lg:block"
      />

      {/* ===== CUSTOM ANIMATED CURSOR - DOT ===== */}
      {/* This is the small dot that snaps instantly to mouse */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-9999 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary lg:block"
      />
    </div>
  );
};

export default App;