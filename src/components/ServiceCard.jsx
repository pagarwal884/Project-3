import React, { useState } from "react";

const ServiceCard = ({ service }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-full h-full overflow-hidden rounded-2xl p-[2px]"
    >
      {/* Animated Border Glow */}
      <div
        className={`absolute inset-0 rounded-2xl transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: `radial-gradient(
            250px circle at ${position.x}px ${position.y}px,
            rgba(59,130,246,0.95),
            rgba(99,102,241,0.7),
            transparent 75%
          )`,
        }}
      />

      {/* Card */}
      <div className="relative z-10 flex h-full items-center gap-8 rounded-[14px] border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-900 transition-all duration-300">
        {/* Icon */}
        <div className="flex-shrink-0">
          <img
            src={service.icon}
            alt={service.title}
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {service.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;