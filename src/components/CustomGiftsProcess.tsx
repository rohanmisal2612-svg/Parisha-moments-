import React from 'react';
import { BRAND_CONTACT } from '../data/products';
import { Sparkles, MessageCircle, Gift, Check, Palette, Type, Box, Sliders, Layers } from 'lucide-react';

export const CustomGiftsProcess: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Choose Your Occasion',
      desc: 'Diwali, Wedding, Birthday, Corporate Milestone, Haldi, or Housewarming.',
    },
    {
      num: '02',
      title: 'Select Your Gifts',
      desc: 'Pick handcrafted silver items, gourmet dry fruits, chocolates, fragrances, or ethnic wear.',
    },
    {
      num: '03',
      title: 'Customise Your Box',
      desc: 'Choose velvet or rigid box textures, colors, ribbon bows, and engraved gold plaques.',
    },
    {
      num: '04',
      title: 'Confirm Your Order',
      desc: 'Review digital sample previews on WhatsApp and finalize quantities with our team.',
    },
    {
      num: '05',
      title: 'Receive Your Beautiful Gift',
      desc: 'Carefully cushioned and securely dispatched pan-India to your doorstep.',
    },
  ];

  const customFeatures = [
    { label: 'Gift Box Style', desc: 'Rigid magnetic boxes, velvet heirloom trunks, acrylic transparent hampers, or kraft sets.' },
    { label: 'Colours & Textures', desc: 'Deep Wine Burgundy, Warm Ivory, Midnight Black, Royal Emerald, or Festive Crimson.' },
    { label: 'Packaging Finishes', desc: 'Engraved metallic gold plaques, signature wax seals, silk ribbon bows, and custom sleeves.' },
    { label: 'Personalised Names', desc: 'Engraved recipient names, couple monograms, or corporate executive designations.' },
    { label: 'Custom Messages', desc: 'Handwritten calligraphy cards with your heartfelt greetings and blessings.' },
    { label: 'Occasion Alignment', desc: 'Thematic cards, motifs (Shubh Labh, Diyas, Florals, Peacock) crafted for your event.' },
    { label: 'Product Combinations', desc: 'Mix dry fruits, silverware, perfumes, chocolates, apparel, and devotional keepsakes.' },
    { label: 'Corporate Branding', desc: 'Foil-stamped company logos, corporate color coordination, and executive curation.' },
    { label: 'Return-Gift Quantities', desc: 'Flexible single-piece bespoke orders to high-volume 500+ unit wedding return shipments.' },
  ];

  return (
    <section id="customisation-guide" className="py-16 md:py-24 bg-[#FAF7F2] relative border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#AA7C11] uppercase font-cinzel mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Bespoke Gifting Concierge</span>
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#38060F] tracking-tight leading-tight">
            Made Especially For Your Moment
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#685859] leading-relaxed max-w-2xl mx-auto font-light">
            No two celebrations are ever the same. At Parisha Moments, we empower you to tailor every detail — from the exterior box lining and gold seal to the handpicked treasures within.
          </p>
        </div>

        {/* Visual How It Works - 5 Steps */}
        <div className="mb-16">
          <h3 className="text-center text-xs font-bold uppercase tracking-[0.2em] text-[#4A0E17] font-cinzel mb-8">
            The Bespoke Process
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl bg-white p-5 border border-[#D4AF37]/30 hover:border-[#AA7C11] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-serif-luxury font-bold text-[#AA7C11]">
                      {step.num}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#5C061F]" />
                  </div>
                  <h4 className="text-xs font-bold text-[#38060F] font-cinzel mb-2">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-[#685859] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-slate-100 flex items-center gap-1 text-[10px] text-[#AA7C11] font-semibold">
                  <span>Step {step.num}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What You Can Customise Grid */}
        <div className="rounded-2xl bg-white p-6 md:p-10 border border-[#D4AF37]/40 shadow-lg mb-10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold text-[#38060F]">
              Everything You Can Customise
            </h3>
            <p className="text-xs text-[#685859] mt-1">
              Personalise each hamper to match your aesthetic, budget, and sentiment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {customFeatures.map((feat, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#D4AF37]/20 flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-md bg-[#4A0E17] text-[#FAF7F2] flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3] text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#38060F] font-cinzel">
                    {feat.label}
                  </h4>
                  <p className="text-[11px] text-[#685859] leading-relaxed mt-0.5">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick CTA */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-[#38060F] font-cinzel">
                Ready to bring your vision to life?
              </p>
              <p className="text-[11px] text-[#685859]">
                Share your ideas directly with our team on WhatsApp.
              </p>
            </div>
            <a
              href={BRAND_CONTACT.whatsappUrl(
                'Hello Parisha Moments! 🎨 I would like to design a custom gift with specific colors, items, and packaging.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#4A0E17] hover:bg-[#38060F] text-white text-xs font-semibold rounded-xl flex items-center gap-2 shadow-sm transition-all whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Start Custom Project on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
