import React, { useState } from 'react';
import { ParishaLogo } from './ParishaLogo';
import { BRAND_CONTACT } from '../data/products';
import { Gift, Check, Sparkles, Send, Eye, RefreshCw, Heart, MessageCircle } from 'lucide-react';

interface BoxColor {
  id: string;
  name: string;
  hex: string;
  textColor: string;
  borderHex: string;
  ribbonDefault: string;
}

const BOX_COLORS: BoxColor[] = [
  { id: 'burgundy', name: 'Imperial Burgundy Velvet', hex: '#4A0E17', textColor: '#FAF7F2', borderHex: '#D4AF37', ribbonDefault: '#D4AF37' },
  { id: 'ivory', name: 'Warm Ivory & Gold', hex: '#FDFBF7', textColor: '#261B1C', borderHex: '#D4AF37', ribbonDefault: '#4A0E17' },
  { id: 'crimson', name: 'Festive Crimson Red', hex: '#750B1B', textColor: '#FAF7F2', borderHex: '#E5C07B', ribbonDefault: '#F3E5AB' },
  { id: 'midnight', name: 'Midnight Regal Black', hex: '#1C1617', textColor: '#FAF7F2', borderHex: '#C59D45', ribbonDefault: '#D4AF37' },
  { id: 'kraft', name: 'Heritage Golden Kraft', hex: '#C29F78', textColor: '#241715', borderHex: '#4A0E17', ribbonDefault: '#1C1617' },
];

const LID_FINISHES = [
  { id: 'gold-plaque', name: 'Engraved Gold Plaque', description: 'Metallic champagne gold plate with Parisha Moments seal' },
  { id: 'seal', name: 'Burgundy Circular Wax Seal', description: 'Signature wine-red seal with gold foil ribbon' },
  { id: 'ribbon-tag', name: 'Silk Bow & Gift Card', description: 'Handcrafted satin ribbon bow with custom hanging card' },
];

interface CuratedItem {
  id: string;
  title: string;
  category: string;
  icon: string;
}

const AVAILABLE_ITEMS: CuratedItem[] = [
  { id: 'silver-diya', title: 'Handcrafted Silver Peacock Diya', category: 'Devotional', icon: '🪔' },
  { id: 'shubh-labh', title: 'Antique Silver Shubh-Labh Plaques', category: 'Auspicious', icon: '✨' },
  { id: 'dryfruits', title: 'Dry Fruits in Filigree Bowls', category: 'Gourmet', icon: '🌰' },
  { id: 'ferrero', title: 'Ferrero Rocher Golden Confections', category: 'Chocolates', icon: '🍫' },
  { id: 'oud-perfume', title: "L'Effluve Luxury Oud Discovery Pack", category: 'Fragrance', icon: '🌸' },
  { id: 'rose-candle', title: 'Handmade Scented Rose Candle', category: 'Aromatics', icon: '🕯️' },
  { id: 'silver-bell', title: 'Traditional Engraved Silver Bell', category: 'Pooja Keepsake', icon: '🔔' },
  { id: 'silk-potli', title: 'Golden Brocade Silk Shagun Potli', category: 'Packaging', icon: '🎀' },
];

export const InteractiveGiftStudio: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<BoxColor>(BOX_COLORS[0]);
  const [selectedFinish, setSelectedFinish] = useState<string>('gold-plaque');
  const [viewMode, setViewMode] = useState<'exterior' | 'interior'>('exterior');
  const [recipientName, setRecipientName] = useState<string>('Pooja & Rohan');
  const [occasion, setOccasion] = useState<string>('Happy Diwali');
  const [customMessage, setCustomMessage] = useState<string>(
    'Wishing you moments filled with happiness, light, and boundless love.'
  );
  const [selectedItems, setSelectedItems] = useState<string[]>([
    'silver-diya',
    'shubh-labh',
    'dryfruits',
    'ferrero',
  ]);
  const [copied, setCopied] = useState<boolean>(false);

  const toggleItem = (itemId: string) => {
    setSelectedItems((prev) =>
      prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
    );
  };

  const getWhatsAppMessage = () => {
    const itemNames = selectedItems
      .map((id) => AVAILABLE_ITEMS.find((i) => i.id === id)?.title)
      .filter(Boolean)
      .join('\n• ');

    return `Hello Parisha Moments! 🎁

I designed a customised gift box on your website:

📦 *Box Style:* ${selectedColor.name}
✨ *Lid Finish:* ${LID_FINISHES.find((f) => f.id === selectedFinish)?.name}
🎉 *Occasion:* ${occasion}
💌 *Personalised For:* ${recipientName}
📝 *Custom Message:* "${customMessage}"

🎀 *Curated Contents Selected:*
• ${itemNames || 'Custom Assortment'}

Could you please assist me with availability, pricing, and placing this custom order? Thank you!`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getWhatsAppMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="custom-curation" className="py-16 md:py-24 bg-[#F5EFEB]/60 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#5C061F]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#AA7C11] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Interactive Bespoke Studio</span>
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#38060F] tracking-tight leading-tight">
            Curate Your Personalized Gift Box
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#685859] leading-relaxed max-w-2xl mx-auto">
            Experience our real-time packaging configurator. Choose your box color, emblem finish, personalized message, and hand-selected items — then order directly via WhatsApp.
          </p>
        </div>

        {/* Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 bg-white/90 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-[#D4AF37]/20 space-y-6">
            
            {/* Step 1: Box Style & Color */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[#38060F] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#4A0E17] text-[#FAF7F2] flex items-center justify-center text-[10px]">1</span>
                  Select Box Color & Velvet Texture
                </label>
                <span className="text-xs text-[#AA7C11] font-medium">{selectedColor.name}</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
                {BOX_COLORS.map((col) => {
                  const isSelected = selectedColor.id === col.id;
                  return (
                    <button
                      key={col.id}
                      onClick={() => setSelectedColor(col)}
                      className={`p-2.5 rounded-xl border text-left transition-all flex flex-col items-center gap-2 relative ${
                        isSelected
                          ? 'border-[#AA7C11] ring-2 ring-[#D4AF37]/50 shadow-md bg-[#FAF7F2]'
                          : 'border-slate-200 hover:border-[#D4AF37]/60 bg-white'
                      }`}
                    >
                      <div
                        className="w-10 h-10 rounded-lg shadow-inner border border-black/10 flex items-center justify-center"
                        style={{ backgroundColor: col.hex }}
                      >
                        {isSelected && <Check className="w-4 h-4 text-white drop-shadow" />}
                      </div>
                      <span className="text-[11px] font-medium text-slate-800 text-center leading-tight line-clamp-2">
                        {col.name.replace(' & Gold', '').replace(' Velvet', '')}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Lid Finish */}
            <div className="pt-2 border-t border-slate-100">
              <label className="text-xs font-bold uppercase tracking-wider text-[#38060F] flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-[#4A0E17] text-[#FAF7F2] flex items-center justify-center text-[10px]">2</span>
                Lid Plaque & Emblem Style
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {LID_FINISHES.map((fin) => {
                  const isSelected = selectedFinish === fin.id;
                  return (
                    <button
                      key={fin.id}
                      onClick={() => setSelectedFinish(fin.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'border-[#AA7C11] bg-[#FAF7F2] ring-1 ring-[#D4AF37] shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <p className="text-xs font-semibold text-[#38060F]">{fin.name}</p>
                      <p className="text-[10px] text-slate-500 mt-1 leading-snug">{fin.description}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Personalization Inputs */}
            <div className="pt-2 border-t border-slate-100 space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[#38060F] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#4A0E17] text-[#FAF7F2] flex items-center justify-center text-[10px]">3</span>
                Personalize Names & Greetings
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                    Occasion / Greeting
                  </label>
                  <input
                    type="text"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    placeholder="e.g. Happy Diwali / Shubh Vivah"
                    className="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60 bg-slate-50/50"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                    Recipient Name(s)
                  </label>
                  <input
                    type="text"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    placeholder="e.g. Pooja & Rohan"
                    className="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60 bg-slate-50/50"
                  />
                </div>
              </div>
              <div>
                <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                  Card Message / Sentiment
                </label>
                <textarea
                  rows={2}
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  placeholder="Personal note to accompany your luxury gift..."
                  className="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60 bg-slate-50/50 resize-none"
                />
              </div>
            </div>

            {/* Step 4: Curated Contents */}
            <div className="pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#38060F] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#4A0E17] text-[#FAF7F2] flex items-center justify-center text-[10px]">4</span>
                  Curate Hampers & Treasures ({selectedItems.length} selected)
                </label>
                <button
                  onClick={() => setSelectedItems(['silver-diya', 'shubh-labh', 'dryfruits', 'ferrero'])}
                  className="text-[11px] text-[#AA7C11] hover:underline flex items-center gap-1 font-medium"
                >
                  <RefreshCw className="w-3 h-3" /> Reset default
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {AVAILABLE_ITEMS.map((item) => {
                  const isChecked = selectedItems.includes(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleItem(item.id)}
                      className={`flex items-center justify-between p-2.5 rounded-lg border cursor-pointer select-none transition-all ${
                        isChecked
                          ? 'border-[#AA7C11]/50 bg-[#FAF7F2] shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 bg-white/70'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="text-base shrink-0">{item.icon}</span>
                        <div className="min-w-0">
                          <p className="text-xs font-medium text-[#261B1C] truncate">{item.title}</p>
                          <p className="text-[10px] text-slate-500">{item.category}</p>
                        </div>
                      </div>
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center border transition-colors shrink-0 ml-2 ${
                          isChecked
                            ? 'bg-[#5C061F] border-[#5C061F] text-white'
                            : 'border-slate-300 bg-white'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Real-time Preview Column (5 cols) */}
          <div className="lg:col-span-5 sticky top-24 space-y-4">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-[#D4AF37]/30">
              
              {/* Preview Mode Switcher */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-[#38060F] flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-[#AA7C11]" /> Live Packaging Preview
                </span>
                <div className="flex items-center p-0.5 bg-slate-100 rounded-lg border border-slate-200">
                  <button
                    onClick={() => setViewMode('exterior')}
                    className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-all ${
                      viewMode === 'exterior'
                        ? 'bg-white text-[#38060F] shadow-xs font-semibold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Lid & Bow
                  </button>
                  <button
                    onClick={() => setViewMode('interior')}
                    className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-all ${
                      viewMode === 'interior'
                        ? 'bg-white text-[#38060F] shadow-xs font-semibold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Open Hamper
                  </button>
                </div>
              </div>

              {/* Box Preview Canvas Container */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-inner flex items-center justify-center p-5 transition-all duration-300 bg-gradient-to-b from-[#F2ECE4] to-[#E5DCD3]">
                
                {/* Background decorative studio lighting */}
                <div className="absolute inset-0 bg-radial from-white/40 via-transparent to-black/10 pointer-events-none" />

                {viewMode === 'exterior' ? (
                  /* Exterior View: Luxury Closed Gift Box with Ribbon and Custom Plaque */
                  <div
                    className="relative w-full h-full rounded-xl shadow-2xl transition-all duration-500 flex flex-col items-center justify-center p-4 border border-black/10"
                    style={{
                      backgroundColor: selectedColor.hex,
                      boxShadow: '0 20px 30px -10px rgba(0,0,0,0.35), inset 0 2px 4px rgba(255,255,255,0.15)',
                    }}
                  >
                    {/* Horizontal Satin Ribbon */}
                    <div
                      className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-8 shadow-sm flex items-center justify-center pointer-events-none opacity-95"
                      style={{
                        backgroundColor: selectedColor.ribbonDefault,
                        boxShadow: '0 2px 6px rgba(0,0,0,0.25)',
                      }}
                    >
                      <div className="w-full h-0.5 bg-white/30" />
                    </div>

                    {/* Vertical Satin Ribbon */}
                    <div
                      className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 shadow-sm flex items-center justify-center pointer-events-none opacity-95"
                      style={{
                        backgroundColor: selectedColor.ribbonDefault,
                        boxShadow: '0 2px 6px rgba(0,0,0,0.25)',
                      }}
                    >
                      <div className="h-full w-0.5 bg-white/30" />
                    </div>

                    {/* Ribbon Tied Bow Centerpiece */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center">
                      <div className="relative w-12 h-10 flex items-center justify-center">
                        <div
                          className="absolute -left-3 w-7 h-5 rounded-full border border-black/10 shadow-md rotate-[-20deg]"
                          style={{ backgroundColor: selectedColor.ribbonDefault }}
                        />
                        <div
                          className="absolute -right-3 w-7 h-5 rounded-full border border-black/10 shadow-md rotate-[20deg]"
                          style={{ backgroundColor: selectedColor.ribbonDefault }}
                        />
                        <div
                          className="relative w-4 h-4 rounded-full shadow-md z-10"
                          style={{ backgroundColor: selectedColor.ribbonDefault }}
                        />
                      </div>
                    </div>

                    {/* Chosen Lid Finish Display */}
                    <div className="relative z-20 mt-16 max-w-[85%] text-center">
                      {selectedFinish === 'gold-plaque' && (
                        <div className="bg-gradient-to-br from-[#FDF3CF] via-[#E2C06F] to-[#A87B22] p-0.5 rounded shadow-lg">
                          <div className="bg-[#FAF4E1] px-4 py-2 rounded-xs border border-[#AA7C11]/40 text-[#4A0E17]">
                            <ParishaLogo variant="monogram" size="sm" />
                            <p className="font-cinzel text-[11px] font-bold tracking-[0.25em] text-[#4A0E17] uppercase mt-0.5">
                              {occasion || 'PARISHA MOMENTS'}
                            </p>
                            <p className="font-serif-luxury italic text-xs text-[#5C061F] font-semibold mt-0.5 truncate">
                              Especially for {recipientName || 'You'}
                            </p>
                          </div>
                        </div>
                      )}

                      {selectedFinish === 'seal' && (
                        <div className="inline-flex flex-col items-center">
                          <ParishaLogo variant="seal" size="md" />
                          <div className="mt-1 px-3 py-1 bg-white/90 backdrop-blur-xs rounded shadow text-center border border-[#D4AF37]/50">
                            <span className="text-[10px] font-bold text-[#4A0E17] block font-cinzel">
                              {occasion}
                            </span>
                            <span className="text-[9px] text-[#5C061F] italic font-serif-luxury">
                              For {recipientName}
                            </span>
                          </div>
                        </div>
                      )}

                      {selectedFinish === 'ribbon-tag' && (
                        <div className="bg-[#FAF7F2] text-[#38060F] p-3 rounded-lg shadow-xl border border-[#D4AF37]/60 max-w-xs text-left">
                          <div className="flex items-center justify-between border-b border-[#D4AF37]/30 pb-1 mb-1.5">
                            <span className="font-cinzel text-[10px] tracking-wider text-[#AA7C11] font-bold">
                              {occasion}
                            </span>
                            <Heart className="w-2.5 h-2.5 text-[#5C061F] fill-[#5C061F]" />
                          </div>
                          <p className="font-serif-luxury italic text-xs font-bold text-[#38060F]">
                            Dearest {recipientName},
                          </p>
                          <p className="text-[10px] text-[#6B5E5F] line-clamp-2 mt-0.5 leading-snug">
                            {customMessage}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Subtle Brand Tag in Corner */}
                    <div className="absolute bottom-2.5 right-3 text-[9px] tracking-widest uppercase opacity-70 font-cinzel" style={{ color: selectedColor.textColor }}>
                      Parisha Moments
                    </div>
                  </div>
                ) : (
                  /* Interior View: Open Luxury Box with Selected Contents */
                  <div className="relative w-full h-full rounded-xl shadow-2xl bg-[#FDFBF7] border-4 border-[#E2C06F]/60 p-3 overflow-hidden flex flex-col justify-between">
                    
                    {/* Inner Satin Fabric Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-50/70 via-rose-50/40 to-amber-100/60 pointer-events-none" />

                    {/* Header: Personalized Greeting Card inside */}
                    <div className="relative z-10 bg-white/95 rounded-lg p-2.5 border border-[#D4AF37]/30 shadow-xs mb-2">
                      <div className="flex items-center justify-between">
                        <span className="font-cinzel text-[10px] font-bold text-[#4A0E17] tracking-wider uppercase">
                          {occasion}
                        </span>
                        <span className="text-[9px] text-[#AA7C11] font-medium tracking-wide">
                          PARISHA BESPOKE
                        </span>
                      </div>
                      <p className="font-serif-luxury italic text-xs font-semibold text-[#5C061F]">
                        To {recipientName || 'Our Cherished Loved One'},
                      </p>
                      <p className="text-[10px] text-[#6B5E5F] line-clamp-1 italic mt-0.5">
                        "{customMessage}"
                      </p>
                    </div>

                    {/* Interior Curated Compartments */}
                    <div className="relative z-10 grid grid-cols-2 gap-1.5 flex-1 content-center">
                      {selectedItems.slice(0, 4).map((id) => {
                        const it = AVAILABLE_ITEMS.find((item) => item.id === id);
                        if (!it) return null;
                        return (
                          <div
                            key={id}
                            className="bg-white/90 border border-[#D4AF37]/30 rounded-md p-1.5 flex items-center gap-2 shadow-2xs"
                          >
                            <span className="text-sm shrink-0">{it.icon}</span>
                            <span className="text-[10px] font-medium text-slate-800 line-clamp-1 leading-tight">
                              {it.title}
                            </span>
                          </div>
                        );
                      })}
                      {selectedItems.length > 4 && (
                        <div className="col-span-2 text-center text-[9px] text-[#AA7C11] font-medium">
                          + {selectedItems.length - 4} more bespoke inclusions
                        </div>
                      )}
                    </div>

                    <div className="relative z-10 pt-1 border-t border-[#D4AF37]/20 flex items-center justify-between text-[9px] text-slate-500">
                      <span>Cushioned in Velvet Nesting</span>
                      <span className="text-[#5C061F] font-medium font-cinzel">Parisha Moments</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-4 space-y-2">
                <a
                  href={BRAND_CONTACT.whatsappUrl(getWhatsAppMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f776a] text-white rounded-xl font-medium text-xs md:text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.99]"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send Curation to WhatsApp (+91 91318 71919)</span>
                </a>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="flex-1 py-2 px-3 bg-[#FAF7F2] hover:bg-[#F5EFEB] text-[#4A0E17] border border-[#D4AF37]/40 rounded-lg text-[11px] font-medium transition-colors text-center"
                  >
                    {copied ? '✓ Curation Summary Copied!' : 'Copy Summary'}
                  </button>
                  <button
                    onClick={() => setViewMode((v) => (v === 'exterior' ? 'interior' : 'exterior'))}
                    className="py-2 px-3 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-lg text-[11px] font-medium transition-colors"
                  >
                    Switch to {viewMode === 'exterior' ? 'Open Box' : 'Lid View'}
                  </button>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-2 text-[11px] text-slate-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Direct consultation with Parisha Moments master stylists</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
