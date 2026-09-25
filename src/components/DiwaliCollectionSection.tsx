import React from 'react';
import { BRAND_CONTACT } from '../data/products';
import { ParishaLogo } from './ParishaLogo';
import { Flame, Sparkles, MessageCircle, Gift, ArrowRight } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

export const DiwaliCollectionSection: React.FC = () => {
  const diwaliItems = [
    {
      title: 'Dry Fruit Gift Boxes',
      desc: 'Handcrafted silver filigree containers and brass chariots filled with jumbo California almonds, cashews, and pistachios.',
    },
    {
      title: 'Traditional Diwali Hampers',
      desc: 'Complete festive kits featuring sacred silver peacock diyas, ceremonial bells, and sweet confections.',
    },
    {
      title: 'Premium Decorative Gifts',
      desc: 'Heirloom decorative pieces that grace the pooja room and living spaces for years to come.',
    },
    {
      title: 'Shubh-Labh Collections',
      desc: 'Antiqued metallic silver Shubh & Labh wall pendants presented with auspicious peacock feather brooches.',
    },
    {
      title: 'Luxury Festive Hampers',
      desc: 'Velvet magnetic trunks curated with scented organic wax candles, dry fruits, and artisanal treats.',
    },
    {
      title: 'Corporate Diwali Gifts',
      desc: 'Bespoke volume hampers customized with corporate logos, personalized executive cards, and pan-India dispatch.',
    },
    {
      title: 'Customised Diwali Boxes',
      desc: 'Tailor your box color (Burgundy, Crimson, Ivory) and select individual items to suit your festive budget.',
    },
  ];

  return (
    <section id="diwali" className="py-16 md:py-24 bg-[#38060F] text-[#FAF7F2] relative overflow-hidden border-b border-[#D4AF37]/30">
      {/* Warm Diwali ambient light effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#AA7C11]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5C061F] border border-[#D4AF37]/40 mb-3 shadow-md">
            <Flame className="w-3.5 h-3.5 text-[#F3E5AB]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#F3E5AB] uppercase font-cinzel">
              The Festive Collection
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#FDFBF7] tracking-tight leading-tight">
            Celebrate Diwali With Thoughtful Gifting
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#E5C07B] leading-relaxed max-w-2xl mx-auto font-light">
            Bring auspicious warmth and refined elegance to your Diwali festivities. Our bespoke hampers combine silver pooja heirlooms, royal dry-fruit trunks, and gourmet treats.
          </p>
        </div>

        {/* Feature Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Main Visual Frame (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D4AF37] p-1 bg-gradient-to-tr from-[#5C061F] via-[#AA7C11]/40 to-[#D4AF37]/30">
              <div className="rounded-xl overflow-hidden aspect-[4/3] relative">
                <img
                  src={getAssetUrl('assets/images/diwali_festive_hamper_1790306150388.jpg')}
                  alt="Parisha Moments Diwali Gift Hamper with Silver Shubh Labh and Peacock Diya"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                
                {/* Floating Seal */}
                <div className="absolute top-4 left-4">
                  <ParishaLogo variant="seal" size="md" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-[#F3E5AB] uppercase font-cinzel">
                      Signature Edition
                    </span>
                    <h4 className="text-lg font-serif-luxury font-bold text-white leading-tight">
                      Shubh-Labh Silver & Ferrero Hamper
                    </h4>
                  </div>
                  <span className="text-xs bg-[#5C061F]/90 px-3 py-1 rounded-full border border-[#D4AF37] text-[#F3E5AB] font-cinzel">
                    Diwali 2026
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature List (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl font-cinzel font-bold text-[#F3E5AB] tracking-wide mb-2">
              Diwali Gifting Inclusions
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {diwaliItems.map((item, index) => (
                <div
                  key={index}
                  className="p-3.5 rounded-xl bg-[#4A0E17]/80 border border-[#D4AF37]/30 backdrop-blur-xs hover:border-[#F3E5AB] transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Flame className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <h4 className="text-xs font-bold text-[#FAF7F2] font-cinzel">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-[#FAF7F2]/80 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct WhatsApp Diwali CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href={BRAND_CONTACT.whatsappUrl(
                  'Hello Parisha Moments! 🪔 I would like to create a customised Diwali gift hamper. Please share options and catalog.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] hover:from-[#F3E5AB] hover:to-[#C59D45] text-[#38060F] text-xs font-bold tracking-wider uppercase rounded-xl shadow-lg transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-[#38060F]" />
                <span>Create Your Diwali Gift → WhatsApp CTA</span>
              </a>

              <a
                href="#custom-curation"
                className="px-5 py-3.5 bg-[#5C061F] hover:bg-[#6D0E25] text-[#FAF7F2] text-xs font-semibold rounded-xl border border-[#D4AF37]/40 flex items-center gap-2 transition-colors"
              >
                <Gift className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Configure in Studio</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
