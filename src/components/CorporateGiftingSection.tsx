import React from 'react';
import { BRAND_CONTACT } from '../data/products';
import { Briefcase, Building, Check, MessageCircle, Sparkles, Award } from 'lucide-react';

export const CorporateGiftingSection: React.FC = () => {
  const corporateUseCases = [
    { title: 'Employee Appreciation', desc: 'Welcome kits, milestone recognition, performance rewards, and annual festival boxes.' },
    { title: 'VIP Client Gifting', desc: 'High-touch executive hampers designed to deepen client relationships with premium tableware and dry fruits.' },
    { title: 'Festive Corporate Hampers', desc: 'Uniform corporate festive hampers for Diwali, New Year, and Indian festivals.' },
    { title: 'Diwali Gifting', desc: 'Customized festive boxes with brass diyas, traditional dry-fruit jars, and chocolates.' },
    { title: 'Event & Conference Gifting', desc: 'Bespoke delegate gifts, speaker honorariums, and annual corporate convention favours.' },
    { title: 'Bulk Orders & Pan-India Dispatch', desc: 'Seamless shipping to multi-city offices or direct home deliveries to employees across India.' },
    { title: 'Custom Branded Gift Boxes', desc: 'Emboss your corporate brand logo on lid plaques, greeting sleeves, and custom diaries.' },
  ];

  return (
    <section id="corporate" className="py-16 md:py-24 bg-[#FAF7F2] relative border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E1] border border-[#D4AF37]/40 mb-3 shadow-2xs">
            <Briefcase className="w-3.5 h-3.5 text-[#AA7C11]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#5C061F] uppercase font-cinzel">
              B2B & Executive Solutions
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#38060F] tracking-tight leading-tight">
            Thoughtful Gifts. Lasting Impressions.
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#685859] leading-relaxed max-w-2xl mx-auto font-light">
            Elevate your company's prestige with bespoke corporate hampers that show true gratitude. Customized with your corporate identity and delivered pan-India.
          </p>
        </div>

        {/* Corporate Grid with Image & Bullet Points */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
          
          {/* Left: Authentic Executive Matte Black Box image */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-[#D4AF37]/40 bg-white p-1">
              <div className="rounded-xl overflow-hidden aspect-[4/3] relative group">
                <img
                  src="/assets/images/corporate_executive_box_1790306195818.jpg"
                  alt="Parisha Moments Executive Corporate Luxe Hamper"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold tracking-widest text-[#F3E5AB] uppercase font-cinzel">
                    Executive Series
                  </span>
                  <h4 className="text-base font-serif-luxury font-bold leading-tight">
                    Custom Foil-Stamped Matte Black Hamper
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Solutions Matrix */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl font-cinzel font-bold text-[#38060F] tracking-wide mb-2">
              Corporate Gifting Solutions
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {corporateUseCases.map((useCase, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white border border-[#D4AF37]/30 hover:border-[#AA7C11] shadow-2xs transition-all"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Check className="w-3.5 h-3.5 text-[#AA7C11]" />
                    <h4 className="text-xs font-bold text-[#38060F] font-cinzel">
                      {useCase.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-[#685859] leading-relaxed font-light">
                    {useCase.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Corporate CTA */}
            <div className="pt-3">
              <a
                href={BRAND_CONTACT.whatsappUrl(
                  'Hello Parisha Moments! 🏢 We are looking for Corporate Gifting solutions for our company. Please share your corporate catalog and volume pricing.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#4A0E17] hover:bg-[#38060F] text-[#FAF7F2] text-xs font-bold tracking-wider uppercase rounded-xl shadow-md hover:shadow-lg transition-all border border-[#D4AF37]/50"
              >
                <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                <span>Enquire For Corporate Gifting (+91 91318 71919)</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
