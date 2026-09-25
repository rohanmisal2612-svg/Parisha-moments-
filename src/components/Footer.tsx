import React from 'react';
import { ParishaLogo } from './ParishaLogo';
import { BRAND_CONTACT } from '../data/products';
import { MessageCircle, Phone, Instagram, Heart, ArrowUp, QrCode } from 'lucide-react';

interface FooterProps {
  onOpenMobileShare?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenMobileShare }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2B050B] text-[#FAF7F2] pt-16 pb-12 border-t-2 border-[#D4AF37]/40 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#D4AF37]/20">
          
          {/* Col 1: Brand & Tagline (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <ParishaLogo variant="seal" size="md" className="shadow-lg" />

            <div className="pt-2">
              <h3 className="font-cinzel text-xl font-bold tracking-[0.2em] text-[#F3E5AB]">
                PARISHA MOMENTS
              </h3>
              <p className="font-serif-luxury italic text-base text-[#D4AF37] mt-1">
                “{BRAND_CONTACT.tagline}”
              </p>
            </div>

            <p className="text-xs text-[#FAF7F2]/75 leading-relaxed max-w-sm font-light">
              Crafting luxury bespoke gifting hampers, Diwali collections, royal wedding return gifts, and executive corporate presentation boxes across India.
            </p>
          </div>

          {/* Col 2: Navigation Links (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F3E5AB] font-cinzel">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-medium text-[#FAF7F2]/80">
              <a href="#" className="hover:text-[#D4AF37] transition-colors">Home</a>
              <a href="#about" className="hover:text-[#D4AF37] transition-colors">About Us</a>
              <a href="#custom-curation" className="hover:text-[#D4AF37] transition-colors">Customised Gifts</a>
              <a href="#diwali" className="hover:text-[#D4AF37] transition-colors">Diwali Gifts</a>
              <a href="#wedding" className="hover:text-[#D4AF37] transition-colors">Wedding Return Gifts</a>
              <a href="#products" className="hover:text-[#D4AF37] transition-colors">Birthday Gifts</a>
              <a href="#corporate" className="hover:text-[#D4AF37] transition-colors">Corporate Gifts</a>
              <a href="#categories" className="hover:text-[#D4AF37] transition-colors">Festive Hampers</a>
              <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
            </div>
          </div>

          {/* Col 3: Social & Direct Contacts (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F3E5AB] font-cinzel">
              Connect With Us
            </h4>
            
            <div className="space-y-2.5 text-xs text-[#FAF7F2]/85">
              <a
                href={BRAND_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#D4AF37]" />
                <span>Instagram — {BRAND_CONTACT.instagramHandle}</span>
              </a>

              <a
                href={BRAND_CONTACT.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp — {BRAND_CONTACT.phoneDisplay}</span>
              </a>

              <a
                href={`tel:${BRAND_CONTACT.phoneRaw}`}
                className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Phone — {BRAND_CONTACT.phoneDisplay}</span>
              </a>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              {onOpenMobileShare && (
                <button
                  onClick={onOpenMobileShare}
                  className="px-3 py-1.5 rounded-lg border border-[#D4AF37]/40 text-[11px] hover:bg-[#D4AF37]/10 flex items-center gap-1.5 transition-colors cursor-pointer text-[#F3E5AB]"
                >
                  <QrCode className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Open on Mobile (QR)</span>
                </button>
              )}
              <button
                onClick={scrollToTop}
                className="px-3 py-1.5 rounded-lg border border-[#D4AF37]/40 text-[11px] hover:bg-[#D4AF37]/10 flex items-center gap-1.5 transition-colors cursor-pointer text-[#F3E5AB]"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#FAF7F2]/60 gap-4">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Parisha Moments. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-1 text-[#F3E5AB]">
            <span>Handcrafted with</span>
            <Heart className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" />
            <span>for your most cherished memories</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
