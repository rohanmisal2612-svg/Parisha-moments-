import React from 'react';
import { BRAND_CONTACT } from '../data/products';
import { Instagram, Heart, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

export const InstagramSection: React.FC = () => {
  const instagramGallery = [
    {
      image: getAssetUrl('assets/images/hero_luxury_gifting_hamper_1790306127833.jpg'),
      caption: 'Where Every Gift Holds a Special Emotion ✨ Luxury velvet boxes styled with love.',
      likes: '1.2k',
    },
    {
      image: getAssetUrl('assets/images/diwali_festive_hamper_1790306150388.jpg'),
      caption: 'Traditional Diwali hampers with silver Shubh-Labh and peacock diyas 🪔',
      likes: '954',
    },
    {
      image: getAssetUrl('assets/images/silver_horse_chariot_1790306217614.jpg'),
      caption: 'Royal silver horse carriage dry fruit chariot in burgundy velvet trunk 👑',
      likes: '1.8k',
    },
    {
      image: getAssetUrl('assets/images/wedding_return_favors_1790306168204.jpg'),
      caption: 'Shubh Vivah return gifts! Silver cup & saucer sets crafted for treasured guests 💍',
      likes: '870',
    },
    {
      image: getAssetUrl('assets/images/bespoke_celebration_box_1790306183634.jpg'),
      caption: 'Bespoke birthday hamper in warm ivory with soft fairy lights and designer treats 🎀',
      likes: '1.4k',
    },
    {
      image: getAssetUrl('assets/images/silver_elephant_jar_1790306229411.jpg'),
      caption: 'Enameled royal elephant jar in golden honey velvet trunk for auspicious beginnings 🐘',
      likes: '1.1k',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FDFBF7] relative border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E1] border border-[#D4AF37]/40 mb-3 shadow-2xs">
            <Instagram className="w-3.5 h-3.5 text-[#8B1527]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#5C061F] uppercase font-cinzel">
              Daily Curation & Behind The Scenes
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#38060F] tracking-tight">
            Follow Our Gifting Journey
          </h2>
          <p className="mt-2 text-base font-semibold text-[#8B1527]">
            {BRAND_CONTACT.instagramHandle}
          </p>
          <p className="mt-2 text-xs md:text-sm text-[#685859] max-w-md mx-auto">
            Discover real customer packaging reveals, festive hampers, and royal wedding favor dispatch stories.
          </p>
        </div>

        {/* 6-Grid Instagram Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-10">
          {instagramGallery.map((post, idx) => (
            <a
              key={idx}
              href={BRAND_CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden border border-[#D4AF37]/30 bg-slate-100 shadow-2xs hover:shadow-lg transition-all"
            >
              <img
                src={post.image}
                alt="Parisha Moments Instagram post"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-[#38060F]/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-3 text-white text-center">
                <Instagram className="w-5 h-5 text-[#F3E5AB] mb-1.5" />
                <p className="text-[10px] text-white/90 line-clamp-3 leading-tight font-light">
                  {post.caption}
                </p>
                <div className="mt-2 flex items-center gap-1 text-[10px] text-[#F3E5AB] font-mono">
                  <Heart className="w-3 h-3 fill-[#F3E5AB]" />
                  <span>{post.likes}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Instagram Follow CTA */}
        <div className="text-center">
          <a
            href={BRAND_CONTACT.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] hover:opacity-95 text-white text-xs font-bold tracking-wider uppercase rounded-xl shadow-md transition-all active:scale-95"
          >
            <Instagram className="w-4 h-4 fill-white" />
            <span>Follow on Instagram ({BRAND_CONTACT.instagramHandle})</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
