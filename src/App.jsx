import React, { useEffect, useRef, useState } from "react";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import OurWork from "./components/OurWork";
import MeetTeam from "./components/MeetTeam";
import Reach from "./components/Reach";
import Footer from "./components/Footer";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const outlineRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      // Dot: snaps instantly to the pointer
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }

      // Ring: eases toward the pointer for a trailing effect
      if (outlineRef.current) {
        outlineRef.current.animate(
          {
            left: `${e.clientX}px`,
            top: `${e.clientY}px`,
          },
          {
            duration: 400,
            fill: "forwards",
            easing: "ease-out",
          }
        );
      }
    };

    // Grow the ring slightly on hoverable elements
    const handleMouseOver = (e) => {
      if (e.target.closest("a, button, [role='button'], input, textarea")) {
        outlineRef.current?.classList.add("scale-150", "bg-primary/10");
      }
    };
    const handleMouseOut = (e) => {
      if (e.target.closest("a, button, [role='button'], input, textarea")) {
        outlineRef.current?.classList.remove("scale-150", "bg-primary/10");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden bg-white transition-colors duration-300 dark:bg-black">
      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
        }}
      />

      {/* Navbar */}
      <Navbar theme={theme} setTheme={setTheme} />

      {/* Main Sections */}
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <MeetTeam />
      <Reach />
      <Footer theme={theme} />

      {/* Animated Cursor Ring (trails behind) */}
      <div
        ref={outlineRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary transition-transform duration-200 lg:block"
      />

      {/* Cursor Dot (snaps instantly) */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary lg:block"
      />
    </div>
  );
};

export default App;