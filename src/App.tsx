import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CategoriesSection } from './components/CategoriesSection';
import { InteractiveGiftStudio } from './components/InteractiveGiftStudio';
import { ProductShowcase } from './components/ProductShowcase';
import { DiwaliCollectionSection } from './components/DiwaliCollectionSection';
import { WeddingReturnGiftsSection } from './components/WeddingReturnGiftsSection';
import { CustomGiftsProcess } from './components/CustomGiftsProcess';
import { WhatsAppCustomOrderSection } from './components/WhatsAppCustomOrderSection';
import { CorporateGiftingSection } from './components/CorporateGiftingSection';
import { InstagramSection } from './components/InstagramSection';
import { TestimonialSection } from './components/TestimonialSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { SlidingFloralBackground } from './components/SlidingFloralBackground';
import { ShareMobileModal } from './components/ShareMobileModal';
import { Product } from './data/products';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [shareModalOpen, setShareModalOpen] = useState<boolean>(false);

  const handleCustomiseProduct = (_product: Product) => {
    // Scrolls to interactive studio
    const studioEl = document.getElementById('custom-curation');
    studioEl?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#261B1C] flex flex-col antialiased selection:bg-[#4A0E17] selection:text-[#FAF7F2] relative">
      {/* Sliding Luxury Flowers Background */}
      <SlidingFloralBackground />

      {/* Top sticky navigation bar adhering to Top Bar Contract */}
      <Navbar onOpenMobileShare={() => setShareModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Cinematic Hero */}
        <Hero />

        {/* About Parisha Moments */}
        <AboutSection />

        {/* 7 Main Categories */}
        <CategoriesSection onSelectCategory={setSelectedCategory} />

        {/* Interactive Gift Box Studio (Real-Time Customisation & Packaging Preview) */}
        <InteractiveGiftStudio />

        {/* Product Showcase with Detailed Views & WhatsApp Ordering */}
        <ProductShowcase
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onCustomiseProduct={handleCustomiseProduct}
        />

        {/* Dedicated Diwali Collection Section */}
        <DiwaliCollectionSection />

        {/* Wedding Return Gifts & Auspicious Favors Section */}
        <WeddingReturnGiftsSection />

        {/* Customised Gifts: Made Especially For Your Moment Process */}
        <CustomGiftsProcess />

        {/* Have Something Special In Mind? - WhatsApp Section */}
        <WhatsAppCustomOrderSection />

        {/* Corporate Gifting Section */}
        <CorporateGiftingSection />

        {/* Instagram Gifting Journey */}
        <InstagramSection />

        {/* Client Testimonials (Editable placeholder format as instructed) */}
        <TestimonialSection />

        {/* Comprehensive Contact Form & Details */}
        <ContactSection />
      </main>

      {/* Brand Footer */}
      <Footer onOpenMobileShare={() => setShareModalOpen(true)} />

      {/* Global Floating WhatsApp Button (+91 91318 71919) */}
      <FloatingWhatsAppButton />

      {/* Share / Mobile QR Modal */}
      <ShareMobileModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
      />
    </div>
  );
}
