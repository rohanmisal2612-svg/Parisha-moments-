import React from 'react';
import { BRAND_CONTACT } from '../data/products';
import { Heart, Sparkles, MessageCircle, Gift, Check, ArrowRight } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

export const WeddingReturnGiftsSection: React.FC = () => {
  const weddingCategories = [
    {
      title: 'Wedding Return Gifts',
      desc: 'Ornate silver-plated keepsake sets, dry fruit urns, and sacred pooja favors to honor cherished wedding guests.',
    },
    {
      title: 'Mehendi Gifts',
      desc: 'Vibrant handcrafted potlis, traditional bangles, hand mirrors, and fragrant floral essences for mehendi ceremonies.',
    },
    {
      title: 'Haldi Gifts',
      desc: 'Auspicious yellow and gold return favors, herbal skincare essentials, and ceremonial brass diyas.',
    },
    {
      title: 'Engagement Gifts',
      desc: 'Luxurious twin velvet boxes with custom couple monogram plaques, sweet confections, and dry-fruit assortments.',
    },
    {
      title: 'Bridesmaid Gifts',
      desc: 'Bespoke vanity hampers curated with designer handbags, personalized jewelry, scented candles, and luxury perfume sets.',
    },
    {
      title: 'Guest Gift Hampers',
      desc: 'Uniformly packed, high-volume luxury hampers styled with custom wedding invitation seals and family names.',
    },
    {
      title: 'Personalised Wedding Boxes',
      desc: 'Custom engraved brass plaques with bride & groom names, wedding date, and customized blessing cards.',
    },
  ];

  return (
    <section id="wedding" className="py-16 md:py-24 bg-gradient-to-b from-[#FAF7F2] via-[#FDFBF7] to-[#F5EFEB] relative border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E1] border border-[#D4AF37]/40 mb-3 shadow-2xs">
            <Heart className="w-3.5 h-3.5 text-[#8B1527] fill-[#8B1527]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#5C061F] uppercase font-cinzel">
              Shubh Vivah & Celebrations
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#38060F] tracking-tight leading-tight">
            Make Every Celebration Memorable
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#685859] leading-relaxed max-w-2xl mx-auto font-light">
            Express heartfelt gratitude to your wedding guests with regal keepsakes that will be treasured for generations. Styled in ivory, champagne gold, and burgundy velvet.
          </p>
        </div>

        {/* Wedding Gallery Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          
          {/* Gallery Item 1 */}
          <div className="group rounded-2xl overflow-hidden border border-[#D4AF37]/40 bg-white shadow-md hover:shadow-xl transition-all">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={getAssetUrl('assets/images/wedding_return_favors_1790306168204.jpg')}
                alt="Silver Cup and Saucer Wedding Return Gifts in Crimson Trunk"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-bold tracking-widest text-[#F3E5AB] uppercase font-cinzel">
                  Royal Favor
                </span>
                <h4 className="text-sm font-serif-luxury font-bold leading-tight">
                  Silver Cup & Saucer Twin Trunk
                </h4>
              </div>
            </div>
            <div className="p-4">
              <p className="text-xs text-[#685859] leading-snug">
                Traditional silver-plated royal teaware nestled on silk cushioning with brass-clasp velvet trunk.
              </p>
            </div>
          </div>

          {/* Gallery Item 2 */}
          <div className="group rounded-2xl overflow-hidden border border-[#D4AF37]/40 bg-white shadow-md hover:shadow-xl transition-all">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={getAssetUrl('assets/images/silver_elephant_jar_1790306229411.jpg')}
                alt="Royal Silver Elephant Dry Fruit Urn"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-bold tracking-widest text-[#F3E5AB] uppercase font-cinzel">
                  Auspicious Shagun
                </span>
                <h4 className="text-sm font-serif-luxury font-bold leading-tight">
                  Enameled Royal Elephant Jar
                </h4>
              </div>
            </div>
            <div className="p-4">
              <p className="text-xs text-[#685859] leading-snug">
                Handcrafted elephant container with filigree spoon in a royal golden velvet satin box.
              </p>
            </div>
          </div>

          {/* Gallery Item 3 */}
          <div className="group rounded-2xl overflow-hidden border border-[#D4AF37]/40 bg-white shadow-md hover:shadow-xl transition-all">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={getAssetUrl('assets/images/bespoke_celebration_box_1790306183634.jpg')}
                alt="Bridesmaid and Luxury Celebration Hamper"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-bold tracking-widest text-[#F3E5AB] uppercase font-cinzel">
                  Bespoke Bridesmaid
                </span>
                <h4 className="text-sm font-serif-luxury font-bold leading-tight">
                  Luxury Keepsake Vanity Hamper
                </h4>
              </div>
            </div>
            <div className="p-4">
              <p className="text-xs text-[#685859] leading-snug">
                Designer handbag, traditional kundan bangles, luxury perfume, and personalized note card.
              </p>
            </div>
          </div>

        </div>

        {/* Categories List in Wedding styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
          {weddingCategories.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white border border-[#D4AF37]/30 hover:border-[#AA7C11] shadow-2xs hover:shadow-md transition-all"
            >
              <h4 className="text-xs font-bold text-[#4A0E17] font-cinzel mb-1.5 flex items-center gap-1.5">
                <Heart className="w-3 h-3 text-[#8B1527] fill-[#8B1527]" />
                <span>{item.title}</span>
              </h4>
              <p className="text-[11px] text-[#685859] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Wedding Consultation Call to Action */}
        <div className="rounded-2xl bg-gradient-to-r from-[#4A0E17] via-[#5C061F] to-[#38060F] p-8 md:p-10 shadow-xl border-2 border-[#D4AF37]/40 text-center text-[#FAF7F2] max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white mb-2">
            Planning Your Wedding or Shagun Favors?
          </h3>
          <p className="text-xs sm:text-sm text-[#F3E5AB] max-w-xl mx-auto leading-relaxed mb-6 font-light">
            We work closely with families to craft customized gift boxes matching your wedding invitation theme, color palette, and budget with bulk dispatch across India.
          </p>
          <a
            href={BRAND_CONTACT.whatsappUrl(
              'Hello Parisha Moments! 💍 I am planning wedding return gifts / favors and would like to schedule a consultation with your gifting stylist.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f776a] text-white text-xs font-bold tracking-wider uppercase rounded-xl shadow-lg transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Enquire for Wedding Return Gifts (+91 91318 71919)</span>
          </a>
        </div>

      </div>
    </section>
  );
};
