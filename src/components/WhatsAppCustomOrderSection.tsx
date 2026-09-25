import React from 'react';
import { BRAND_CONTACT } from '../data/products';
import { ParishaLogo } from './ParishaLogo';
import { MessageCircle, Sparkles, Phone, Clock, Truck } from 'lucide-react';

export const WhatsAppCustomOrderSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-[#4A0E17] via-[#5C061F] to-[#38060F] text-[#FAF7F2] relative overflow-hidden border-y border-[#D4AF37]/30">
      {/* Background glow & luxury sparkles */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#AA7C11]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-6">
        
        {/* Brand Stamp */}
        <div className="flex justify-center">
          <ParishaLogo variant="seal" size="md" className="shadow-2xl" />
        </div>

        {/* Big Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white tracking-tight leading-tight text-balance">
          Have Something Special In Mind?
        </h2>

        {/* Subtitle text */}
        <p className="text-sm sm:text-base md:text-lg text-[#F3E5AB] max-w-2xl mx-auto leading-relaxed font-light">
          Tell us your occasion, budget, preferred colours and gift requirements. Our team will help create a customised gifting experience for you.
        </p>

        {/* WhatsApp Phone Highlight */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#38060F]/60 border border-[#D4AF37]/50 text-xs font-mono text-[#F3E5AB]">
          <span>Official WhatsApp Concierge:</span>
          <span className="font-bold text-white">{BRAND_CONTACT.phoneDisplay}</span>
        </div>

        {/* Main CTA Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BRAND_CONTACT.whatsappUrl(
              'Hello Parisha Moments! 🎁 I have a special gifting requirement in mind. Here are the details of my occasion and budget:'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f776a] text-white text-sm font-bold tracking-wider uppercase rounded-xl shadow-2xl transition-all flex items-center justify-center gap-3 active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Chat on WhatsApp ({BRAND_CONTACT.phoneDisplay})</span>
          </a>

          <a
            href={`tel:${BRAND_CONTACT.phoneRaw}`}
            className="w-full sm:w-auto px-6 py-4 bg-[#38060F]/80 hover:bg-[#38060F] text-[#FAF7F2] text-xs font-semibold tracking-wider uppercase rounded-xl border border-[#D4AF37]/50 transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span>Call Directly</span>
          </a>
        </div>

        {/* Quick reassuring bullets */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-[#E5C07B] opacity-90">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Prompt response within 1 hour</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Personalized digital mockup preview</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Truck className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Safe express pan-India dispatch</span>
          </div>
        </div>

      </div>
    </section>
  );
};
