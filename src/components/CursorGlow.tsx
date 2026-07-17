'use client';

import { useState, useEffect } from 'react';

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[45]"
      style={{
        left: position.x,
        top: position.y,
        width: 600,
        height: 600,
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(300px circle, rgba(200, 160, 75, 0.06), transparent 70%)',
        transition: 'left 0.15s ease-out, top 0.15s ease-out',
      }}
    />
  );
}
