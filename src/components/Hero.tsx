import React from 'react';
import { ParishaLogo } from './ParishaLogo';
import { BRAND_CONTACT } from '../data/products';
import { MessageCircle, Sparkles, Gift, ArrowRight, ShieldCheck, Truck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F5EFEB] to-[#FAF7F2] pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#D4AF37]/20">
      {/* Delicate floating gold light specks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-[#D4AF37] blur-[1px] animate-pulse-glow" />
        <div className="absolute top-1/3 right-16 w-3 h-3 rounded-full bg-[#F3E5AB] blur-[1px] animate-pulse-glow delay-700" />
        <div className="absolute bottom-20 left-1/3 w-2.5 h-2.5 rounded-full bg-[#D4AF37] blur-[1px] animate-pulse-glow delay-1000" />
        <div className="absolute -top-24 right-1/4 w-80 h-80 bg-[#E5C07B]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-20 w-80 h-80 bg-[#5C061F]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Hero Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Elegant brand tag / kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF4E1] border border-[#D4AF37]/40 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#AA7C11]" />
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#5C061F] uppercase font-cinzel">
                PARISHA MOMENTS
              </span>
              <span className="text-[#AA7C11] text-xs">·</span>
              <span className="text-[11px] text-[#685859] tracking-wider font-medium">
                {BRAND_CONTACT.tagline}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold text-[#38060F] tracking-tight leading-[1.1] text-balance">
              Gifts That Turn Moments Into Memories
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#5A4B4C] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
              Curated with love. Customised with elegance. Created for every special occasion.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#products"
                className="px-6 py-3 bg-[#4A0E17] hover:bg-[#38060F] text-[#FAF7F2] text-xs font-semibold tracking-wider uppercase rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 border border-[#D4AF37]/50 active:scale-95"
              >
                <span>Shop Gifts</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
              </a>

              <a
                href="#custom-curation"
                className="px-6 py-3 bg-[#FAF7F2] hover:bg-[#F3EAE1] text-[#4A0E17] text-xs font-semibold tracking-wider uppercase rounded-xl border border-[#D4AF37]/60 shadow-xs hover:shadow transition-all flex items-center gap-2 active:scale-95"
              >
                <Gift className="w-3.5 h-3.5 text-[#AA7C11]" />
                <span>Customise Your Gift</span>
              </a>

              <a
                href={BRAND_CONTACT.whatsappUrl('Hello Parisha Moments, I would like to order a customized gift.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f776a] text-white text-xs font-semibold tracking-wider uppercase rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Trust Markers Bar */}
            <div className="pt-6 border-t border-[#D4AF37]/20 grid grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0">
              <div className="text-left">
                <p className="text-xs font-bold text-[#38060F] font-cinzel">PAN INDIA</p>
                <p className="text-[11px] text-[#685859] leading-tight">Express safe delivery</p>
              </div>
              <div className="text-left border-l border-[#D4AF37]/30 pl-4">
                <p className="text-xs font-bold text-[#38060F] font-cinzel">100% BESPOKE</p>
                <p className="text-[11px] text-[#685859] leading-tight">Tailored to your budget</p>
              </div>
              <div className="text-left border-l border-[#D4AF37]/30 pl-4">
                <p className="text-xs font-bold text-[#38060F] font-cinzel">PREMIUM FINISH</p>
                <p className="text-[11px] text-[#685859] leading-tight">Velvet, silk & gold brass</p>
              </div>
            </div>

          </div>

          {/* Right Hero Image Frame (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Luxury Frame Border with Gold Accent */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]/60 bg-gradient-to-tr from-[#38060F] to-[#5C061F] p-1 group">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] sm:aspect-[16/11]">
                  <img
                    src="/assets/images/hero_luxury_gifting_hamper_1790306127833.jpg"
                    alt="Parisha Moments Luxury Customised Gifting Hamper with Burgundy Velvet Box and Gold Satin Ribbon"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle vignette scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />

                  {/* Floating Authenticity Seal */}
                  <div className="absolute bottom-4 left-4 z-10">
                    <ParishaLogo variant="seal" size="md" className="scale-90 shadow-2xl" />
                  </div>

                  {/* Floating Badge Tag */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-[#D4AF37]/50 flex items-center gap-1.5 text-[11px] font-semibold text-[#4A0E17]">
                    <Sparkles className="w-3 h-3 text-[#AA7C11]" />
                    <span>Festive & Wedding Editions</span>
                  </div>
                </div>
              </div>

              {/* Decorative accent card floating slightly */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-xl border border-[#D4AF37]/40 max-w-[210px] animate-float-slow">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#AA7C11] font-cinzel">
                    Direct Stylist
                  </span>
                </div>
                <p className="text-[11px] font-semibold text-[#38060F] leading-tight">
                  WhatsApp: 91318 71919
                </p>
                <p className="text-[10px] text-slate-500 mt-0.5">
                  Custom hampers made to order
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
