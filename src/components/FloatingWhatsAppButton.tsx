import React from 'react';
import { BRAND_CONTACT } from '../data/products';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsAppButton: React.FC = () => {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip on hover */}
      <div className="hidden sm:block mr-3 px-3 py-1.5 bg-[#38060F] text-[#FAF7F2] text-xs font-semibold rounded-lg shadow-xl border border-[#D4AF37]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        <span>Order & Enquire: +91 91318 71919</span>
      </div>

      {/* WhatsApp Button */}
      <a
        href={BRAND_CONTACT.whatsappUrl('Hello Parisha Moments! 🎁 I am browsing your website and would like to enquire about your luxury gift hampers.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Parisha Moments on WhatsApp"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#20bd5a] to-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 border-2 border-white/60 relative"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </aside>
  );
};
