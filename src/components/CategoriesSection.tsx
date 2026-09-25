import React from 'react';
import { CATEGORIES, BRAND_CONTACT } from '../data/products';
import { Gift, Sparkles, Flame, Heart, Cake, Briefcase, Calendar, Box, ArrowUpRight } from 'lucide-react';

interface CategoriesSectionProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ onSelectCategory }) => {
  // Mapping icons
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Gift': return <Gift className="w-5 h-5 text-[#AA7C11]" />;
      case 'Flame': return <Flame className="w-5 h-5 text-[#AA7C11]" />;
      case 'Heart': return <Heart className="w-5 h-5 text-[#AA7C11]" />;
      case 'Cake': return <Cake className="w-5 h-5 text-[#AA7C11]" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-[#AA7C11]" />;
      case 'Calendar': return <Calendar className="w-5 h-5 text-[#AA7C11]" />;
      case 'Box': return <Box className="w-5 h-5 text-[#AA7C11]" />;
      default: return <Sparkles className="w-5 h-5 text-[#AA7C11]" />;
    }
  };

  // Exclude 'all' from category cards display so we show the 7 primary categories cleanly
  const primaryCategories = CATEGORIES.filter((c) => c.id !== 'all');

  return (
    <section id="categories" className="py-16 md:py-24 bg-[#FAF7F2] relative border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#AA7C11] uppercase font-cinzel mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Curated Collections</span>
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#38060F] tracking-tight">
            Explore By Occasion & Style
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#685859] leading-relaxed max-w-xl mx-auto">
            From regal wedding return gifts to divine Diwali collections and bespoke celebration hampers, every category is designed with luxury packaging.
          </p>
        </div>

        {/* 7 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {primaryCategories.map((cat, index) => {
            const isWide = index === 0; // Make CUSTOMISED GIFTS stand out subtly or span appropriately
            return (
              <div
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  const el = document.getElementById('products');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`group cursor-pointer rounded-2xl p-6 bg-white border border-[#D4AF37]/30 hover:border-[#AA7C11] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                  isWide ? 'sm:col-span-2 lg:col-span-1 xl:col-span-2 bg-gradient-to-br from-white via-[#FAF7F2] to-[#FDF3CF]/40' : ''
                }`}
              >
                {/* Subtle top gold accent line */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#D4AF37]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {renderIcon(cat.icon)}
                    </div>
                    <span className="text-[11px] font-mono text-[#AA7C11] font-semibold">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-cinzel font-bold text-[#38060F] tracking-wider mb-2 group-hover:text-[#6D0E25] transition-colors">
                    {cat.title}
                  </h3>

                  <p className="text-xs text-[#685859] leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#8B1527] group-hover:text-[#4A0E17]">
                  <span>Explore Collection</span>
                  <ArrowUpRight className="w-4 h-4 text-[#AA7C11] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Category Bottom Callout */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500">
            Looking for something fully unique?{' '}
            <a
              href="#custom-curation"
              className="text-[#8B1527] font-semibold hover:underline"
            >
              Open our Interactive Gift Studio →
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
