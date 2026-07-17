'use client';

import { useState, useEffect } from 'react';

const PETALS = [
  { color: '#E85D26', size: 22, left: 5, duration: 25, delay: 0, rotation: 45, opacity: 0.2 },
  { color: '#D4451A', size: 18, left: 15, duration: 30, delay: 3, rotation: 120, opacity: 0.15 },
  { color: '#C8A04B', size: 25, left: 30, duration: 22, delay: 7, rotation: 200, opacity: 0.18 },
  { color: '#E85D26', size: 15, left: 50, duration: 28, delay: 2, rotation: 310, opacity: 0.22 },
  { color: '#D4451A', size: 20, left: 65, duration: 35, delay: 10, rotation: 80, opacity: 0.12 },
  { color: '#C8A04B', size: 16, left: 78, duration: 24, delay: 5, rotation: 260, opacity: 0.25 },
  { color: '#E85D26', size: 28, left: 88, duration: 32, delay: 12, rotation: 150, opacity: 0.14 },
  { color: '#D4451A', size: 14, left: 42, duration: 27, delay: 8, rotation: 30, opacity: 0.2 },
];

export default function FloatingPetals() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      <style>{`
        @keyframes petalFloat {
          0% {
            transform: translate3d(0, -10vh, 0) rotate(0deg);
          }
          25% {
            transform: translate3d(15px, 25vh, 0) rotate(90deg);
          }
          50% {
            transform: translate3d(-10px, 55vh, 0) rotate(180deg);
          }
          75% {
            transform: translate3d(20px, 80vh, 0) rotate(270deg);
          }
          100% {
            transform: translate3d(-5px, 110vh, 0) rotate(360deg);
          }
        }
      `}</style>
      {PETALS.map((petal, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${petal.left}%`,
            top: '-5%',
            width: petal.size,
            height: petal.size,
            opacity: petal.opacity,
            animation: `petalFloat ${petal.duration}s ${petal.delay}s ease-in-out infinite`,
            willChange: 'transform',
            transform: `translate3d(${mouse.x * (0.3 + i * 0.1)}px, ${mouse.y * (0.2 + i * 0.05)}px, 0)`,
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            fill={petal.color}
            style={{ transform: `rotate(${petal.rotation}deg)` }}
          >
            <path d="M12 2C8 2 4 6 4 10c0 6 8 12 8 12s8-6 8-12c0-4-4-8-8-8z" opacity="0.8" />
          </svg>
        </div>
      ))}
    </div>
  );
}
