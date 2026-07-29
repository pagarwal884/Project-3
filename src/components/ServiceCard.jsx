// ===== SERVICE CARD COMPONENT =====
// Displays a single service with icon, title, and description
// Has an interactive hover effect with animated gradient border glow
// Used inside the Services component

import { useState } from "react";

const ServiceCard = ({ service }) => {
  // ===== STATE =====
  // position: Tracks mouse coordinates inside the card (for glow effect)
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // hovered: Tracks if card is currently being hovered
  const [hovered, setHovered] = useState(false);

  // ===== HANDLE MOUSE MOVEMENT =====\n  // This function runs every time mouse moves inside the card
  // It calculates the mouse position relative to the card
  const handleMouseMove = (e) => {
    // Get the card's position and size
    const rect = e.currentTarget.getBoundingClientRect();

    // Calculate mouse position relative to card (not viewport)
    setPosition({
      x: e.clientX - rect.left, // Distance from left edge of card
      y: e.clientY - rect.top,  // Distance from top edge of card
    });
  };

  return (
    // Outer container with mouse event listeners
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)} // Show glow when hovering
      onMouseLeave={() => setHovered(false)} // Hide glow when leaving
      className="relative w-full h-full overflow-hidden rounded-2xl p-0.5"
    >
      {/* ===== ANIMATED BORDER GLOW ===== */}
      {/* This creates the gradient glow effect that follows the mouse */}
      <div
        className={`absolute inset-0 rounded-2xl transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0" // Show/hide based on hover
        }`}
        style={{
          // Radial gradient that follows mouse position
          background: `radial-gradient(
            250px circle at ${position.x}px ${position.y}px,
            rgba(59,130,246,0.95),
            rgba(99,102,241,0.7),
            transparent 75%
          )`,
        }}
      />

      {/* ===== CARD CONTENT ===== */}
      {/* The actual card with service info */}
      <div className="relative z-10 flex h-full items-center gap-8 rounded-[14px] border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-900 transition-all duration-300">
        
        {/* Icon Section */}
        <div className="shrink-0">
          <img
            src={service.icon}
            alt={service.title}
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1">
          {/* Service Title */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {service.title}
          </h3>

          {/* Service Description */}
          <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;