import React from 'react';
import { Product, BRAND_CONTACT } from '../data/products';
import { ParishaLogo } from './ParishaLogo';
import { X, MessageCircle, Gift, Check, Sparkles, Box, ShieldCheck } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onCustomise: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onCustomise,
}) => {
  if (!product) return null;

  const enquiryMessage = `Hello Parisha Moments! 🎁\n\nI am interested in ordering/customizing this product:\n*Product:* ${product.name}\n*Category:* ${product.categoryLabel}\n\nCould you please share pricing, lead time, and customization options? Thank you!`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-[#FAF7F2] rounded-2xl max-w-3xl w-full p-6 md:p-8 shadow-2xl border-2 border-[#D4AF37]/50 relative text-[#38060F] my-8 animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-500 hover:text-black rounded-full transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Product Image (5 cols) */}
          <div className="md:col-span-5 relative">
            <div className="rounded-xl overflow-hidden shadow-lg border border-[#D4AF37]/30 bg-white aspect-[4/3] md:aspect-[3/4]">
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-3 flex items-center justify-center">
              <ParishaLogo variant="gold-plaque" className="scale-90" />
            </div>
          </div>

          {/* Product Details (7 cols) */}
          <div className="md:col-span-7 space-y-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#AA7C11] font-cinzel">
                {product.categoryLabel}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold text-[#38060F] leading-snug mt-1">
                {product.name}
              </h3>
              <p className="text-xs text-[#AA7C11] font-medium mt-1">
                Custom Pricing on Request · Pan-India Delivery
              </p>
            </div>

            <p className="text-xs text-[#5A4B4C] leading-relaxed">
              {product.fullDescription}
            </p>

            {/* Packaging Details Box */}
            <div className="p-3 bg-white rounded-xl border border-[#D4AF37]/30 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#38060F] font-cinzel">
                <Box className="w-3.5 h-3.5 text-[#AA7C11]" />
                <span>Signature Packaging & Presentation</span>
              </div>
              <p className="text-[11px] text-[#685859] leading-relaxed">
                {product.packagingDetails}
              </p>
            </div>

            {/* Inclusions / Features */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#38060F] mb-1.5 font-cinzel">
                Key Inclusions & Highlights
              </h4>
              <div className="grid grid-cols-2 gap-1.5">
                {product.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-700">
                    <Check className="w-3 h-3 text-[#AA7C11] shrink-0" />
                    <span className="truncate">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal For */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#38060F] mb-1 font-cinzel">
                Ideal For
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {product.idealFor.map((item, i) => (
                  <span
                    key={i}
                    className="text-[10px] bg-[#FAF4E1] text-[#4A0E17] px-2.5 py-0.5 rounded-full border border-[#D4AF37]/30 font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center gap-2.5">
              <a
                href={BRAND_CONTACT.whatsappUrl(enquiryMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f776a] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp Enquiry</span>
              </a>

              <button
                onClick={() => {
                  onClose();
                  onCustomise(product);
                }}
                className="py-2.5 px-4 bg-[#4A0E17] hover:bg-[#38060F] text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
              >
                <Gift className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Customise in Studio</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
