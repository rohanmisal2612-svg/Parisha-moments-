import React, { useState } from 'react';

interface FloralSvgProps {
  className?: string;
  style?: React.CSSProperties;
}

// Gypsophila / Baby's breath sprig with delicate florets
const BabysBreathSprig: React.FC<FloralSvgProps> = ({ className = '', style }) => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    {/* Stems */}
    <path d="M12 50 C24 38, 30 25, 42 12" stroke="#AA7C11" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
    <path d="M26 34 C35 30, 44 32, 48 24" stroke="#AA7C11" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    <path d="M20 42 C16 32, 22 24, 28 20" stroke="#AA7C11" strokeWidth="0.9" strokeLinecap="round" opacity="0.5" />
    
    {/* Florets */}
    <circle cx="42" cy="12" r="3.5" fill="#FFFFFF" stroke="#E5C07B" strokeWidth="0.8" />
    <circle cx="48" cy="24" r="3.2" fill="#FFFFFF" stroke="#E5C07B" strokeWidth="0.8" />
    <circle cx="28" cy="20" r="3" fill="#FFFFFF" stroke="#E5C07B" strokeWidth="0.8" />
    <circle cx="36" cy="22" r="2.6" fill="#FDFBF7" stroke="#E5C07B" strokeWidth="0.6" />
    <circle cx="22" cy="28" r="2.8" fill="#FFFFFF" stroke="#E5C07B" strokeWidth="0.6" />
  </svg>
);

// Mogra / Jasmine Blossom
const JasmineFlower: React.FC<FloralSvgProps> = ({ className = '', style }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <g transform="translate(20, 20)">
      {/* 5 Petals */}
      <path d="M0 -3 C-4 -12, 4 -12, 0 -3" fill="#FFFDF9" stroke="#E5C07B" strokeWidth="0.6" />
      <path d="M0 -3 C-4 -12, 4 -12, 0 -3" transform="rotate(72)" fill="#FFFDF9" stroke="#E5C07B" strokeWidth="0.6" />
      <path d="M0 -3 C-4 -12, 4 -12, 0 -3" transform="rotate(144)" fill="#FFFDF9" stroke="#E5C07B" strokeWidth="0.6" />
      <path d="M0 -3 C-4 -12, 4 -12, 0 -3" transform="rotate(216)" fill="#FFFDF9" stroke="#E5C07B" strokeWidth="0.6" />
      <path d="M0 -3 C-4 -12, 4 -12, 0 -3" transform="rotate(288)" fill="#FFFDF9" stroke="#E5C07B" strokeWidth="0.6" />
      {/* Golden Pistil */}
      <circle cx="0" cy="0" r="2" fill="#D4AF37" />
    </g>
  </svg>
);

// Velvet Burgundy Rose Petal
const BurgundyRosePetal: React.FC<FloralSvgProps> = ({ className = '', style }) => (
  <svg viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path
      d="M16 2 C24 6, 30 16, 26 26 C22 34, 10 34, 6 26 C2 16, 8 6, 16 2 Z"
      fill="url(#burgundyPetalGrad)"
      stroke="#D4AF37"
      strokeWidth="0.5"
      opacity="0.9"
    />
    <defs>
      <linearGradient id="burgundyPetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#750B1B" />
        <stop offset="50%" stopColor="#5C061F" />
        <stop offset="100%" stopColor="#38060F" />
      </linearGradient>
    </defs>
  </svg>
);

// Soft Blush Rose Petal
const BlushRosePetal: React.FC<FloralSvgProps> = ({ className = '', style }) => (
  <svg viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path
      d="M15 2 C22 5, 28 14, 25 24 C21 31, 9 31, 5 24 C1 14, 8 5, 15 2 Z"
      fill="url(#blushPetalGrad)"
      stroke="#E5C07B"
      strokeWidth="0.5"
      opacity="0.85"
    />
    <defs>
      <linearGradient id="blushPetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FDE8EC" />
        <stop offset="60%" stopColor="#F8B4C0" />
        <stop offset="100%" stopColor="#E28496" />
      </linearGradient>
    </defs>
  </svg>
);

// Golden Marigold / Genda Petal
const GoldMarigoldPetal: React.FC<FloralSvgProps> = ({ className = '', style }) => (
  <svg viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path
      d="M12 2 C18 6, 22 14, 18 22 C15 28, 9 28, 6 22 C2 14, 6 6, 12 2 Z"
      fill="url(#goldPetalGrad)"
      stroke="#AA7C11"
      strokeWidth="0.5"
      opacity="0.8"
    />
    <defs>
      <linearGradient id="goldPetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF2B2" />
        <stop offset="50%" stopColor="#F5B027" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
    </defs>
  </svg>
);

interface FlowerItem {
  id: number;
  type: 'babysBreath' | 'jasmine' | 'burgundyPetal' | 'blushPetal' | 'goldPetal';
  left: string; // percentage
  size: number; // width in px
  animationClass: string;
  duration: number; // seconds
  delay: number; // seconds
  blur?: boolean;
}

const FLOWERS: FlowerItem[] = [
  // Upper left quadrant
  { id: 1, type: 'babysBreath', left: '8%', size: 36, animationClass: 'animate-flower-drift-1', duration: 22, delay: 0 },
  { id: 2, type: 'burgundyPetal', left: '18%', size: 22, animationClass: 'animate-flower-drift-2', duration: 19, delay: 4 },
  { id: 3, type: 'jasmine', left: '28%', size: 26, animationClass: 'animate-flower-drift-1', duration: 24, delay: 9 },
  { id: 4, type: 'blushPetal', left: '38%', size: 24, animationClass: 'animate-flower-drift-2', duration: 21, delay: 2 },

  // Center quadrant
  { id: 5, type: 'goldPetal', left: '48%', size: 20, animationClass: 'animate-flower-drift-1', duration: 25, delay: 7 },
  { id: 6, type: 'babysBreath', left: '58%', size: 34, animationClass: 'animate-flower-drift-2', duration: 20, delay: 11 },
  { id: 7, type: 'jasmine', left: '68%', size: 24, animationClass: 'animate-flower-drift-1', duration: 23, delay: 3 },

  // Right quadrant
  { id: 8, type: 'burgundyPetal', left: '78%', size: 20, animationClass: 'animate-flower-drift-2', duration: 18, delay: 6 },
  { id: 9, type: 'blushPetal', left: '88%', size: 25, animationClass: 'animate-flower-drift-1', duration: 26, delay: 1 },
  { id: 10, type: 'babysBreath', left: '94%', size: 32, animationClass: 'animate-flower-drift-2', duration: 22, delay: 8 },

  // Secondary staggered layer
  { id: 11, type: 'jasmine', left: '12%', size: 22, animationClass: 'animate-flower-drift-2', duration: 27, delay: 12 },
  { id: 12, type: 'goldPetal', left: '32%', size: 18, animationClass: 'animate-flower-drift-1', duration: 20, delay: 14 },
  { id: 13, type: 'burgundyPetal', left: '62%', size: 26, animationClass: 'animate-flower-drift-2', duration: 24, delay: 15 },
  { id: 14, type: 'blushPetal', left: '82%', size: 22, animationClass: 'animate-flower-drift-1', duration: 22, delay: 13 },
  { id: 15, type: 'babysBreath', left: '45%', size: 38, animationClass: 'animate-flower-drift-2', duration: 26, delay: 16, blur: true },
];

export const SlidingFloralBackground: React.FC = () => {
  const [active, setActive] = useState(true);

  if (!active) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-20 select-none"
    >
      {FLOWERS.map((flower) => {
        return (
          <div
            key={flower.id}
            className={`absolute top-0 ${flower.animationClass}`}
            style={{
              left: flower.left,
              animationDuration: `${flower.duration}s`,
              animationDelay: `${flower.delay}s`,
              filter: flower.blur ? 'blur(1px)' : 'none',
            }}
          >
            <div className="animate-petal-sway">
              {flower.type === 'babysBreath' && (
                <BabysBreathSprig
                  className="drop-shadow-[0_2px_4px_rgba(212,175,55,0.25)]"
                  style={{ width: `${flower.size}px`, height: `${flower.size}px` } as React.CSSProperties}
                />
              )}
              {flower.type === 'jasmine' && (
                <JasmineFlower
                  className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
                  style={{ width: `${flower.size}px`, height: `${flower.size}px` } as React.CSSProperties}
                />
              )}
              {flower.type === 'burgundyPetal' && (
                <BurgundyRosePetal
                  className="drop-shadow-[0_2px_5px_rgba(74,14,23,0.3)]"
                  style={{ width: `${flower.size}px`, height: `${flower.size * 1.15}px` } as React.CSSProperties}
                />
              )}
              {flower.type === 'blushPetal' && (
                <BlushRosePetal
                  className="drop-shadow-[0_2px_4px_rgba(226,132,150,0.25)]"
                  style={{ width: `${flower.size}px`, height: `${flower.size * 1.15}px` } as React.CSSProperties}
                />
              )}
              {flower.type === 'goldPetal' && (
                <GoldMarigoldPetal
                  className="drop-shadow-[0_2px_4px_rgba(217,119,6,0.25)]"
                  style={{ width: `${flower.size}px`, height: `${flower.size * 1.25}px` } as React.CSSProperties}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
