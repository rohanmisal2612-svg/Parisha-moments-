import React, { useState, useEffect } from 'react';
import { ParishaLogo } from './ParishaLogo';
import { BRAND_CONTACT } from '../data/products';
import { MessageCircle, Instagram, Menu, X, Sparkles, QrCode, Smartphone } from 'lucide-react';

interface NavbarProps {
  onOpenMobileShare?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMobileShare }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-sm border-b border-[#D4AF37]/30 py-2.5'
          : 'bg-[#FDFBF7] border-b border-[#D4AF37]/20 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Zone 1: Single text/logo element wordmark */}
          <a href="#" className="flex items-center gap-2 group">
            <ParishaLogo variant="horizontal" />
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold tracking-wider text-[#4A0E17]/80 uppercase">
            <a
              href="#about"
              className="hover:text-[#AA7C11] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#AA7C11] hover:after:w-full after:transition-all"
            >
              About
            </a>
            <a
              href="#categories"
              className="hover:text-[#AA7C11] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#AA7C11] hover:after:w-full after:transition-all"
            >
              Categories
            </a>
            <a
              href="#custom-curation"
              className="hover:text-[#AA7C11] transition-colors py-1 flex items-center gap-1 text-[#8B1527] font-bold"
            >
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span>Curate Box</span>
            </a>
            <a
              href="#diwali"
              className="hover:text-[#AA7C11] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#AA7C11] hover:after:w-full after:transition-all"
            >
              Diwali
            </a>
            <a
              href="#wedding"
              className="hover:text-[#AA7C11] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#AA7C11] hover:after:w-full after:transition-all"
            >
              Weddings
            </a>
            <a
              href="#corporate"
              className="hover:text-[#AA7C11] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#AA7C11] hover:after:w-full after:transition-all"
            >
              Corporate
            </a>
            <a
              href="#contact"
              className="hover:text-[#AA7C11] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#AA7C11] hover:after:w-full after:transition-all"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenMobileShare && (
              <button
                onClick={onOpenMobileShare}
                className="px-3 py-1.5 bg-[#FAF7F2] hover:bg-[#F5EFEB] text-[#4A0E17] text-xs font-semibold rounded-full border border-[#D4AF37]/50 shadow-2xs transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Scan QR Code to open on mobile"
              >
                <QrCode className="w-3.5 h-3.5 text-[#AA7C11]" />
                <span className="hidden lg:inline">Mobile QR</span>
              </button>
            )}

            <a
              href={BRAND_CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Parisha Moments Instagram"
              className="p-2 text-[#4A0E17] hover:text-[#AA7C11] hover:bg-[#FAF7F2] rounded-full transition-colors border border-[#D4AF37]/30"
              title="Follow @parisha_moments on Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={BRAND_CONTACT.whatsappUrl('Hello Parisha Moments, I am interested in exploring your customized luxury gifts.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-[#4A0E17] to-[#6D0E25] hover:from-[#38060F] hover:to-[#5C061F] text-[#FAF7F2] text-xs font-semibold rounded-full border border-[#D4AF37]/60 shadow-sm hover:shadow transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>WhatsApp: 91318 71919</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            {onOpenMobileShare && (
              <button
                onClick={onOpenMobileShare}
                className="p-2 text-[#4A0E17] bg-[#FAF7F2] rounded-full border border-[#D4AF37]/40"
                aria-label="Share or scan QR code"
              >
                <QrCode className="w-4 h-4 text-[#AA7C11]" />
              </button>
            )}
            <a
              href={BRAND_CONTACT.whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-emerald-700 bg-emerald-50 rounded-full border border-emerald-200"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#4A0E17] hover:bg-slate-100 rounded-lg"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-[#D4AF37]/20 pb-4 space-y-2.5 animate-fadeIn">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-xs font-semibold text-[#4A0E17] hover:bg-[#FAF7F2] rounded-lg"
            >
              About Parisha Moments
            </a>
            <a
              href="#categories"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-xs font-semibold text-[#4A0E17] hover:bg-[#FAF7F2] rounded-lg"
            >
              Product Categories
            </a>
            <a
              href="#custom-curation"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-xs font-bold text-[#8B1527] bg-[#FAF7F2] rounded-lg flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Curate Personalized Box</span>
            </a>
            <a
              href="#diwali"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-xs font-semibold text-[#4A0E17] hover:bg-[#FAF7F2] rounded-lg"
            >
              Diwali Collection
            </a>
            <a
              href="#wedding"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-xs font-semibold text-[#4A0E17] hover:bg-[#FAF7F2] rounded-lg"
            >
              Wedding Return Gifts
            </a>
            <a
              href="#corporate"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-xs font-semibold text-[#4A0E17] hover:bg-[#FAF7F2] rounded-lg"
            >
              Corporate Gifting
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-xs font-semibold text-[#4A0E17] hover:bg-[#FAF7F2] rounded-lg"
            >
              Contact & Enquiries
            </a>
            {onOpenMobileShare && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMobileShare();
                }}
                className="w-full text-left px-3 py-2 text-xs font-semibold text-[#AA7C11] hover:bg-[#FAF7F2] rounded-lg flex items-center gap-2"
              >
                <QrCode className="w-4 h-4" />
                <span>Open & Share on Mobile (QR Code)</span>
              </button>
            )}
            <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
              <a
                href={BRAND_CONTACT.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 bg-[#4A0E17] text-white rounded-lg text-xs font-semibold text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={BRAND_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-slate-200 rounded-lg text-slate-700"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-[#8B1527]" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

