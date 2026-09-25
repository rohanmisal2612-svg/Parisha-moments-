import React, { useState } from 'react';
import { Product, PRODUCTS, CATEGORIES, BRAND_CONTACT } from '../data/products';
import { ProductDetailModal } from './ProductDetailModal';
import { MessageCircle, Gift, Eye, Sparkles, Filter } from 'lucide-react';

interface ProductShowcaseProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onCustomiseProduct: (product: Product) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  selectedCategory,
  onSelectCategory,
  onCustomiseProduct,
}) => {
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  const filteredProducts =
    selectedCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="products" className="py-16 md:py-24 bg-[#FDFBF7] relative border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#AA7C11] uppercase font-cinzel mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Signature Creations</span>
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#38060F] tracking-tight">
            Curated Gifting Collection
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#685859] leading-relaxed max-w-2xl mx-auto">
            Explore our handcrafted hampers and artisanal presentation boxes. Each piece can be completely personalised with custom colors, contents, and engraved names.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-1.5 flex-wrap mb-12 p-1.5 bg-[#FAF7F2] rounded-2xl max-w-4xl mx-auto border border-[#D4AF37]/30">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-medium rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#4A0E17] text-[#FAF7F2] shadow-sm font-semibold'
                    : 'text-[#4A0E17]/80 hover:text-[#4A0E17] hover:bg-white/60'
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const waText = `Hello Parisha Moments! 🎁\n\nI would like to enquire about: *${product.name}* (${product.categoryLabel}).\nCould you please share customisation options, lead time, and pricing?`;

            return (
              <div
                key={product.id}
                className="group rounded-2xl bg-white border border-[#D4AF37]/30 hover:border-[#AA7C11] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Large Product Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Subtle Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Category Label Pill */}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-bold text-[#4A0E17] font-cinzel tracking-wider shadow-xs border border-[#D4AF37]/30">
                      {product.categoryLabel}
                    </div>

                    {/* Quick View Button on Hover */}
                    <button
                      onClick={() => setActiveModalProduct(product)}
                      className="absolute bottom-3 right-3 bg-white/95 hover:bg-white text-[#38060F] p-2 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
                      title="Quick View Details"
                    >
                      <Eye className="w-4 h-4 text-[#8B1527]" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-base font-serif-luxury font-bold text-[#38060F] leading-snug line-clamp-2 group-hover:text-[#6D0E25] transition-colors">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-xs text-[#685859] leading-relaxed line-clamp-2">
                      {product.shortDescription}
                    </p>
                    <p className="mt-2 text-[11px] text-[#AA7C11] font-medium tracking-wide">
                      Price on Custom Enquiry
                    </p>
                  </div>
                </div>

                {/* 3 Required Action Buttons */}
                <div className="p-5 pt-0 space-y-2 border-t border-slate-100 mt-2">
                  <div className="flex items-center gap-2 pt-3">
                    <button
                      onClick={() => setActiveModalProduct(product)}
                      className="flex-1 py-2 px-2.5 bg-[#FAF7F2] hover:bg-[#F3EAE1] text-[#4A0E17] text-[11px] font-semibold rounded-lg border border-[#D4AF37]/40 transition-colors text-center cursor-pointer"
                    >
                      View Details
                    </button>

                    <button
                      onClick={() => {
                        onCustomiseProduct(product);
                        const el = document.getElementById('custom-curation');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="flex-1 py-2 px-2.5 bg-white hover:bg-slate-50 text-[#8B1527] text-[11px] font-semibold rounded-lg border border-slate-200 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Gift className="w-3 h-3 text-[#AA7C11]" />
                      <span>Customise</span>
                    </button>
                  </div>

                  <a
                    href={BRAND_CONTACT.whatsappUrl(waText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f776a] text-white text-[11px] font-semibold rounded-lg flex items-center justify-center gap-1.5 shadow-2xs transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>WhatsApp Enquiry</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Product Modal */}
        <ProductDetailModal
          product={activeModalProduct}
          onClose={() => setActiveModalProduct(null)}
          onCustomise={(p) => {
            onCustomiseProduct(p);
            const el = document.getElementById('custom-curation');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

      </div>
    </section>
  );
};
