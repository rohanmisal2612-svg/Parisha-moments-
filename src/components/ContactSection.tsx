import React, { useState } from 'react';
import { BRAND_CONTACT } from '../data/products';
import { ParishaLogo } from './ParishaLogo';
import { MessageCircle, Phone, Instagram, Send, CheckCircle2, Sparkles, MapPin } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    occasion: 'Diwali Gifts',
    giftType: 'Luxury Hampers & Dry Fruit Boxes',
    quantity: '1 - 10 boxes',
    customisationRequirements: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const waText = `Hello Parisha Moments! 🎁\n\n*New Website Enquiry:*\n• *Name:* ${formData.name}\n• *Phone:* ${formData.phone}\n• *Email:* ${formData.email}\n• *Occasion:* ${formData.occasion}\n• *Gift Type:* ${formData.giftType}\n• *Quantity:* ${formData.quantity}\n• *Customisation:* ${formData.customisationRequirements || 'None specified'}\n• *Message:* ${formData.message || 'Please contact me.'}`;

    // Open WhatsApp in new tab for direct immediate delivery
    window.open(BRAND_CONTACT.whatsappUrl(waText), '_blank');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#FAF7F2] relative border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E1] border border-[#D4AF37]/40 mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#AA7C11]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#5C061F] uppercase font-cinzel">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#38060F] tracking-tight">
            Begin Your Gifting Experience
          </h2>
          <p className="mt-3 text-xs md:text-sm text-[#685859] max-w-lg mx-auto leading-relaxed">
            Reach out directly through WhatsApp, phone, or submit your detailed bespoke requirements below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Info & Brand Box (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-2xl bg-white p-6 md:p-8 border border-[#D4AF37]/30 shadow-md space-y-6">
              <ParishaLogo variant="horizontal" />

              <p className="text-xs text-[#685859] leading-relaxed font-light">
                “Where Every Gift Holds a Special Emotion.” We take immense pride in creating memories that your loved ones and clients will cherish.
              </p>

              <div className="space-y-4 pt-2 border-t border-slate-100">
                
                {/* WhatsApp */}
                <a
                  href={BRAND_CONTACT.whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-emerald-50/60 hover:bg-emerald-50 border border-emerald-200 text-slate-800 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 fill-white" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-emerald-800 tracking-wider font-cinzel">
                      WhatsApp Chat & Catalog
                    </span>
                    <p className="text-xs font-bold text-[#38060F]">
                      {BRAND_CONTACT.phoneDisplay}
                    </p>
                  </div>
                </a>

                {/* Direct Phone */}
                <a
                  href={`tel:${BRAND_CONTACT.phoneRaw}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-[#FAF7F2] hover:bg-[#F5EFEB] border border-[#D4AF37]/30 text-slate-800 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#4A0E17] text-[#FAF7F2] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#AA7C11] tracking-wider font-cinzel">
                      Telephone Consultation
                    </span>
                    <p className="text-xs font-bold text-[#38060F]">
                      {BRAND_CONTACT.phoneDisplay}
                    </p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={BRAND_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-rose-50/50 hover:bg-rose-50 border border-rose-200 text-slate-800 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#FD1D1D] to-[#833AB4] text-white flex items-center justify-center shrink-0">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-rose-800 tracking-wider font-cinzel">
                      Official Instagram
                    </span>
                    <p className="text-xs font-bold text-[#38060F]">
                      {BRAND_CONTACT.instagramHandle}
                    </p>
                  </div>
                </a>

                {/* Pan-India Delivery */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF4E1]/80 border border-[#D4AF37]/30">
                  <MapPin className="w-4 h-4 text-[#8B1527] shrink-0" />
                  <span className="text-xs text-[#5C061F] font-medium">
                    Pan-India Delivery Available across all metro cities and towns
                  </span>
                </div>

              </div>
            </div>

          </div>

          {/* Right: Working Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white p-6 md:p-8 border border-[#D4AF37]/40 shadow-xl">
              <h3 className="text-xl font-serif-luxury font-bold text-[#38060F] mb-1">
                Send Gifting Enquiry
              </h3>
              <p className="text-xs text-[#685859] mb-6">
                Fill out your details and our team will get back to you with custom packaging options and volume rates.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    Thank you! Your enquiry has been received and opened on WhatsApp for instant confirmation.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#38060F] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rohan Misal"
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#38060F] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60 bg-slate-50/50"
                    />
                  </div>
                </div>

                {/* Email & Occasion */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#38060F] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. rohan@example.com"
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#38060F] mb-1">
                      Occasion *
                    </label>
                    <select
                      value={formData.occasion}
                      onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60 bg-slate-50/50"
                    >
                      <option value="Diwali Gifts">Diwali Gifts & Hampers</option>
                      <option value="Wedding Return Gifts">Wedding Return Gifts</option>
                      <option value="Mehendi & Haldi">Mehendi & Haldi Favors</option>
                      <option value="Birthday Gifts">Birthday Celebration Box</option>
                      <option value="Corporate Gifting">Corporate & Employee Gifting</option>
                      <option value="Anniversary">Anniversary Keepsake</option>
                      <option value="Other Custom Occasion">Other Special Celebration</option>
                    </select>
                  </div>
                </div>

                {/* Gift Type & Quantity */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#38060F] mb-1">
                      Gift Type *
                    </label>
                    <select
                      value={formData.giftType}
                      onChange={(e) => setFormData({ ...formData, giftType: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60 bg-slate-50/50"
                    >
                      <option value="Luxury Hampers & Dry Fruit Boxes">Luxury Hampers & Dry Fruit Boxes</option>
                      <option value="Silver Artifacts & Pooja Sets">Silver Artifacts & Pooja Sets</option>
                      <option value="Velvet Keepsake Trunks">Velvet Keepsake Trunks</option>
                      <option value="Executive Corporate Matte Kits">Executive Corporate Matte Kits</option>
                      <option value="Apparel & Accessory Sets">Apparel & Accessory Sets</option>
                      <option value="Custom Curation Studio Design">Bespoke Curation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#38060F] mb-1">
                      Quantity (Estimated) *
                    </label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60 bg-slate-50/50"
                    >
                      <option value="Single Hamper (1 - 5 boxes)">Single Hamper (1 - 5 boxes)</option>
                      <option value="Small Celebration (5 - 25 boxes)">Small Celebration (5 - 25 boxes)</option>
                      <option value="Medium Event (25 - 100 boxes)">Medium Event (25 - 100 boxes)</option>
                      <option value="Large Wedding / Corporate (100 - 500+ boxes)">Large Wedding / Corporate (100 - 500+ boxes)</option>
                    </select>
                  </div>
                </div>

                {/* Customisation Requirements */}
                <div>
                  <label className="block text-xs font-semibold text-[#38060F] mb-1">
                    Customisation Requirements
                  </label>
                  <input
                    type="text"
                    value={formData.customisationRequirements}
                    onChange={(e) => setFormData({ ...formData, customisationRequirements: e.target.value })}
                    placeholder="e.g. Burgundy velvet box with engraved gold name plaque for bride & groom"
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60 bg-slate-50/50"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-[#38060F] mb-1">
                    Message or Special Instructions
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about preferred colors, budget constraints, delivery date, etc."
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60 bg-slate-50/50 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-[#4A0E17] hover:bg-[#38060F] text-[#FAF7F2] text-xs font-bold tracking-wider uppercase rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 border border-[#D4AF37]/50 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Send Enquiry</span>
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
