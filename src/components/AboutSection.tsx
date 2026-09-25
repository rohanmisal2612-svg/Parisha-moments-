import React, { useState } from 'react';
import { ParishaLogo } from './ParishaLogo';
import { BRAND_CONTACT } from '../data/products';
import { Heart, Sparkles, Award, ShieldCheck, ChevronRight, X } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

export const AboutSection: React.FC = () => {
  const [storyOpen, setStoryOpen] = useState(false);

  return (
    <section id="about" className="py-16 md:py-24 bg-[#FDFBF7] relative border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-[#D4AF37]/40 bg-[#FAF7F2] p-2">
                <div className="rounded-xl overflow-hidden aspect-[4/3] relative group">
                  <img
                    src={getAssetUrl('assets/images/silver_horse_chariot_1790306217614.jpg')}
                    alt="Handcrafted royal silver chariot in velvet trunk by Parisha Moments"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-cinzel text-xs tracking-widest text-[#F3E5AB]">
                      TRADITION IN EVERY DETAIL
                    </p>
                    <p className="font-serif-luxury text-sm italic text-white/90">
                      Perfect for gifting & home décor
                    </p>
                  </div>
                </div>
              </div>

              {/* Central Gold Plaque Badge */}
              <div className="absolute -bottom-6 -left-4 sm:left-4 z-10">
                <ParishaLogo variant="gold-plaque" />
              </div>
            </div>
          </div>

          {/* Right Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#AA7C11] uppercase font-cinzel">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Parisha Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#38060F] tracking-tight leading-tight">
              Welcome to Parisha Moments
            </h2>

            <p className="text-base sm:text-lg text-[#5A4B4C] leading-relaxed font-light">
              Parisha Moments creates thoughtfully curated and customised gifts designed to make celebrations more meaningful. From elegant Diwali hampers to beautiful wedding return gifts and personalised gift boxes, every creation is carefully styled to leave a lasting impression.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#D4AF37]/30">
                <div className="flex items-center gap-2 mb-1.5">
                  <Heart className="w-4 h-4 text-[#8B1527] fill-[#8B1527]" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#38060F] font-cinzel">
                    Emotion-Led Curation
                  </h4>
                </div>
                <p className="text-xs text-[#685859] leading-relaxed">
                  Every celebration has a soul. We customize every box to convey deep warmth, blessings, and reverence.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#D4AF37]/30">
                <div className="flex items-center gap-2 mb-1.5">
                  <Award className="w-4 h-4 text-[#AA7C11]" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#38060F] font-cinzel">
                    Artisanal Indian Heritage
                  </h4>
                </div>
                <p className="text-xs text-[#685859] leading-relaxed">
                  From hand-cast silver peacock diyas to rich velvet keepsake chests, our items marry traditional artistry with modern luxury.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setStoryOpen(true)}
                className="px-6 py-3 bg-[#FAF7F2] hover:bg-[#F3EAE1] text-[#4A0E17] text-xs font-semibold tracking-wider uppercase rounded-xl border border-[#D4AF37]/60 shadow-xs hover:shadow transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Discover Our Story</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#AA7C11]" />
              </button>

              <a
                href={BRAND_CONTACT.whatsappUrl('Hello Parisha Moments, I would like to learn more about your gifting collections.')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#8B1527] hover:text-[#5C061F] hover:underline flex items-center gap-1.5"
              >
                <span>Connect with our gifting concierge</span>
                <span>→</span>
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Story Modal */}
      {storyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-[#FAF7F2] rounded-2xl max-w-xl w-full p-6 md:p-8 shadow-2xl border-2 border-[#D4AF37]/50 relative text-[#38060F] animate-fadeIn">
            <button
              onClick={() => setStoryOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-500 hover:text-black rounded-full"
              aria-label="Close story"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-4">
              <ParishaLogo variant="monogram" size="md" className="mb-2" />
              <h3 className="text-2xl font-serif-luxury font-bold text-[#38060F]">
                The Story Behind Parisha Moments
              </h3>
              <p className="text-xs text-[#AA7C11] tracking-widest uppercase font-cinzel mt-0.5">
                “Where Every Gift Holds a Special Emotion”
              </p>
            </div>

            <div className="space-y-3 text-xs md:text-sm text-[#5A4B4C] leading-relaxed font-light">
              <p>
                Parisha Moments was born out of a profound passion for the art of giving in Indian culture. A gift is never merely an object; it is an enduring expression of respect, love, celebration, and auspicious beginnings.
              </p>
              <p>
                From weddings and baby showers to Diwali festivities and corporate milestone celebrations, we believe packaging should take your breath away before the box is even opened.
              </p>
              <p>
                Every Parisha Moments creation is hand-assembled with handpicked velvet cases, delicate satin ribbons, authentic silverware, gourmet dry fruits, and bespoke calligraphy cards.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#D4AF37]/30 flex items-center justify-between">
              <span className="text-xs text-slate-500">Pan-India Delivery & Bespoke Custom Orders</span>
              <button
                onClick={() => setStoryOpen(false)}
                className="px-4 py-2 bg-[#4A0E17] text-white text-xs font-semibold rounded-lg"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
