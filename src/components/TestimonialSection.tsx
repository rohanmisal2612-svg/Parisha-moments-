import React, { useState } from 'react';
import { Sparkles, Heart, Quote, PlusCircle } from 'lucide-react';

interface Testimonial {
  id: number;
  review: string;
  name: string;
  occasion: string;
}

export const TestimonialSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: 1,
      review: 'Add your customer review here.',
      name: 'Add customer name here.',
      occasion: 'Diwali Festive Hamper',
    },
    {
      id: 2,
      review: 'Add your customer review here.',
      name: 'Add customer name here.',
      occasion: 'Wedding Return Gifts',
    },
    {
      id: 3,
      review: 'Add your customer review here.',
      name: 'Add customer name here.',
      occasion: 'Personalised Gift Box',
    },
  ]);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState('');
  const [editName, setEditName] = useState('');

  const startEditing = (t: Testimonial) => {
    setEditingId(t.id);
    setEditText(t.review);
    setEditName(t.name);
  };

  const saveEdit = (id: number) => {
    setTestimonials((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, review: editText || 'Add your customer review here.', name: editName || 'Add customer name here.' }
          : t
      )
    );
    setEditingId(null);
  };

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] relative border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E1] border border-[#D4AF37]/40 mb-3 shadow-2xs">
            <Heart className="w-3.5 h-3.5 text-[#8B1527] fill-[#8B1527]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#5C061F] uppercase font-cinzel">
              Client Memories & Reviews
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#38060F] tracking-tight">
            Words From Our Gifting Family
          </h2>
          <p className="mt-3 text-xs md:text-sm text-[#685859] max-w-lg mx-auto leading-relaxed">
            Honest reflections on our presentation, packaging detail, and emotion-led craftsmanship.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white p-6 md:p-8 border border-[#D4AF37]/30 hover:border-[#AA7C11] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between relative group"
            >
              <div className="space-y-3">
                <Quote className="w-6 h-6 text-[#D4AF37]/50" />

                {editingId === item.id ? (
                  <div className="space-y-2">
                    <textarea
                      rows={3}
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="w-full text-xs p-2 border rounded border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                    />
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="w-full text-xs p-1.5 border rounded border-slate-300"
                      placeholder="Add customer name here."
                    />
                    <button
                      onClick={() => saveEdit(item.id)}
                      className="px-3 py-1 bg-[#4A0E17] text-white text-[11px] rounded"
                    >
                      Save Review
                    </button>
                  </div>
                ) : (
                  <div>
                    <p className="text-xs sm:text-sm text-[#38060F] font-serif-luxury italic leading-relaxed">
                      "{item.review}"
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#38060F] font-cinzel">
                    {item.name}
                  </h4>
                  <p className="text-[10px] text-[#AA7C11] tracking-wide mt-0.5">
                    {item.occasion}
                  </p>
                </div>

                {editingId !== item.id && (
                  <button
                    onClick={() => startEditing(item)}
                    className="text-[10px] text-slate-400 hover:text-[#AA7C11] opacity-0 group-hover:opacity-100 transition-opacity underline cursor-pointer"
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
