import React, { useState, useEffect } from "react";

const RadialEffect: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Update mouse position when the mouse moves
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background: `radial-gradient(
          400px at ${mousePosition.x}px ${mousePosition.y}px,
          rgba(159, 236, 177, 0.02) 0%, 
          rgba(159, 236, 177, 0.015) 30%, 
          rgba(159, 236, 177, 0.01) 60%, 
          rgba(159, 236, 177, 0.005) 80%, 
          rgba(159, 236, 177, 0.0001) 100%
          
        )`,
      }}
    ></div>
  );
};

export default RadialEffect;