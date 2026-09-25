import React from 'react';

interface ParishaLogoProps {
  variant?: 'seal' | 'horizontal' | 'gold-plaque' | 'monogram';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  subline?: string;
}

export const ParishaLogo: React.FC<ParishaLogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  className = '',
  subline,
}) => {
  // SVG Monogram Icon matching the Parisha Moments gift box with ribbon bows
  const GiftRibbonMonogram = ({ sizeClass = 'w-8 h-8', strokeColor = '#D4AF37' }: { sizeClass?: string; strokeColor?: string }) => (
    <svg viewBox="0 0 100 100" className={sizeClass} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F9EDB3" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#996515" />
        </linearGradient>
      </defs>
      {/* Outer subtle halo ring */}
      <circle cx="50" cy="50" r="46" stroke="url(#goldGrad)" strokeWidth="1" strokeDasharray="2 3" opacity="0.4" />
      
      {/* Ribbon Loop Left (stylized P curve) */}
      <path
        d="M50 42 C40 24, 26 26, 32 37 C36 44, 46 45, 50 48"
        stroke="url(#goldGrad)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      {/* Ribbon Loop Right (stylized matching loop) */}
      <path
        d="M50 42 C60 24, 74 26, 68 37 C64 44, 54 45, 50 48"
        stroke="url(#goldGrad)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      
      {/* Central ribbon knot */}
      <ellipse cx="50" cy="46" rx="4.5" ry="3.5" fill="url(#goldGrad)" />

      {/* Gift Box Base */}
      <rect
        x="30"
        y="50"
        width="40"
        height="32"
        rx="2"
        stroke="url(#goldGrad)"
        strokeWidth="3"
      />

      {/* Gift Box Lid rim */}
      <path
        d="M26 50 L74 50"
        stroke="url(#goldGrad)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Vertical ribbon through box */}
      <line
        x1="50"
        y1="50"
        x2="50"
        y2="82"
        stroke="url(#goldGrad)"
        strokeWidth="3"
      />
    </svg>
  );

  // Variant: Circular Burgundy Seal (as on Parisha Moments gift hampers)
  if (variant === 'seal') {
    const sealSizes = {
      sm: 'w-16 h-16',
      md: 'w-24 h-24',
      lg: 'w-32 h-32',
      xl: 'w-40 h-40',
    };

    return (
      <div
        className={`relative rounded-full bg-[#4A0E17] border-2 border-[#D4AF37]/80 shadow-lg flex flex-col items-center justify-center text-center p-2 select-none ${sealSizes[size]} ${className}`}
      >
        <div className="absolute inset-1 rounded-full border border-[#D4AF37]/30 pointer-events-none" />
        <GiftRibbonMonogram sizeClass={size === 'sm' ? 'w-6 h-6' : size === 'lg' ? 'w-12 h-12' : size === 'xl' ? 'w-16 h-16' : 'w-9 h-9'} />
        <span className="font-cinzel text-xs md:text-sm tracking-[0.2em] font-semibold text-[#FAF7F2] mt-0.5">
          PARISHA
        </span>
        <div className="flex items-center gap-1 text-[8px] md:text-[9px] tracking-widest text-[#D4AF37] opacity-90 font-medium">
          <span>♥</span>
          <span>MOMENTS</span>
          <span>♥</span>
        </div>
      </div>
    );
  }

  // Variant: Metallic Gold Engraved Plaque (as on velvet dry-fruit chests)
  if (variant === 'gold-plaque') {
    return (
      <div
        className={`relative bg-gradient-to-br from-[#F5E6B5] via-[#D4AF37] to-[#9E731E] p-0.5 rounded shadow-md text-[#38060F] select-none ${className}`}
      >
        <div className="bg-gradient-to-r from-[#F7ECD0] via-[#EEDAA2] to-[#E3C67C] px-4 py-2 rounded-sm border border-[#AA7C11]/50 flex flex-col items-center justify-center text-center shadow-inner">
          <GiftRibbonMonogram sizeClass="w-6 h-6" />
          <span className="font-cinzel text-xs tracking-[0.25em] font-bold text-[#4A0E17] mt-0.5">
            PARISHA
          </span>
          <span className="text-[8px] tracking-[0.2em] text-[#5C061F] font-semibold flex items-center gap-1">
            <span>—</span>
            <span>MOMENTS</span>
            <span>—</span>
          </span>
        </div>
      </div>
    );
  }

  // Variant: Monogram Icon Only
  if (variant === 'monogram') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <GiftRibbonMonogram sizeClass={size === 'sm' ? 'w-6 h-6' : size === 'lg' ? 'w-12 h-12' : size === 'xl' ? 'w-16 h-16' : 'w-8 h-8'} />
      </div>
    );
  }

  // Variant: Horizontal Header/Navbar Brand Wordmark
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div className="w-10 h-10 rounded-full bg-[#4A0E17] border border-[#D4AF37]/60 flex items-center justify-center shadow-sm shrink-0">
        <GiftRibbonMonogram sizeClass="w-6 h-6" />
      </div>
      <div className="flex flex-col text-left">
        <div className="flex items-baseline gap-1">
          <span className="font-cinzel text-lg md:text-xl font-bold tracking-[0.22em] text-[#4A0E17]">
            PARISHA
          </span>
        </div>
        <div className="flex items-center gap-1 text-[9px] md:text-[10px] tracking-[0.25em] text-[#AA7C11] font-medium -mt-1">
          <span className="text-[#5C061F]">♥</span>
          <span>MOMENTS</span>
          <span className="text-[#5C061F]">♥</span>
        </div>
        {subline && (
          <span className="text-[10px] text-[#6B5E5F] tracking-wide mt-0.5 font-light">
            {subline}
          </span>
        )}
      </div>
    </div>
  );
};
