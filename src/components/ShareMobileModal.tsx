import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { X, QrCode, Smartphone, Copy, Check, Share2, MessageCircle, ExternalLink, Globe } from 'lucide-react';
import { ParishaLogo } from './ParishaLogo';

interface ShareMobileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PUBLIC_APP_URL = 'https://ais-pre-xy5fmdsd6oaeay7ma4ige4-337784388949.asia-southeast1.run.app';

export const ShareMobileModal: React.FC<ShareMobileModalProps> = ({ isOpen, onClose }) => {
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      QRCode.toDataURL(PUBLIC_APP_URL, {
        width: 320,
        margin: 2,
        color: {
          dark: '#38060F',
          light: '#FAF7F2',
        },
      })
        .then((url) => setQrDataUrl(url))
        .catch((err) => console.error('Error generating QR code:', err));
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(PUBLIC_APP_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppShare = () => {
    const text = `Explore the luxury gifting collection by PARISHA MOMENTS ✨\n\nWhere Every Gift Holds a Special Emotion. Custom Diwali hampers, royal wedding return gifts, and bespoke celebration boxes:\n\n${PUBLIC_APP_URL}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleNativeShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Parisha Moments | Luxury Customised Gifting',
        text: 'Where Every Gift Holds a Special Emotion. Explore luxury customized gift boxes, festive hampers, and wedding return gifts.',
        url: PUBLIC_APP_URL,
      }).catch(() => {});
    } else {
      handleCopyLink();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div className="bg-[#FAF7F2] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-2 border-[#D4AF37]/50 relative text-[#38060F] my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-500 hover:text-black rounded-full transition-colors cursor-pointer"
          aria-label="Close share dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex p-3 rounded-2xl bg-[#4A0E17] text-[#D4AF37] mb-3 shadow-md border border-[#D4AF37]/40">
            <Smartphone className="w-6 h-6" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#38060F]">
            Open & Share on Mobile
          </h3>
          <p className="text-xs text-[#AA7C11] tracking-[0.2em] uppercase font-cinzel font-semibold mt-1">
            Instant Public Mobile Access
          </p>
        </div>

        {/* QR Code Container */}
        <div className="bg-white rounded-2xl p-5 border border-[#D4AF37]/40 shadow-inner flex flex-col items-center justify-center text-center max-w-xs mx-auto">
          {qrDataUrl ? (
            <div className="relative group">
              <img
                src={qrDataUrl}
                alt="Scan QR code to open Parisha Moments on mobile"
                className="w-52 h-52 rounded-xl shadow-xs"
              />
              <div className="mt-2.5 flex items-center justify-center gap-1.5 text-[11px] font-semibold text-[#5C061F]">
                <QrCode className="w-3.5 h-3.5 text-[#AA7C11]" />
                <span>Scan with your phone camera</span>
              </div>
            </div>
          ) : (
            <div className="w-52 h-52 flex items-center justify-center text-xs text-slate-400">
              Generating QR Code...
            </div>
          )}
        </div>

        {/* Link Display Box */}
        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#D4AF37]/40 shadow-xs">
            <Globe className="w-4 h-4 text-[#AA7C11] shrink-0 ml-1" />
            <input
              type="text"
              readOnly
              value={PUBLIC_APP_URL}
              className="w-full text-xs font-mono text-slate-700 bg-transparent outline-none truncate"
            />
            <button
              onClick={handleCopyLink}
              className="px-3.5 py-1.5 bg-[#4A0E17] hover:bg-[#38060F] text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <button
              onClick={handleWhatsAppShare}
              className="py-3 px-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-95 text-white text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Share on WhatsApp</span>
            </button>

            <button
              onClick={handleNativeShare}
              className="py-3 px-4 bg-[#FAF7F2] hover:bg-[#F3EAE1] text-[#38060F] border border-[#D4AF37]/50 text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
            >
              <Share2 className="w-4 h-4 text-[#AA7C11]" />
              <span>Share Link</span>
            </button>
          </div>
        </div>

        {/* Public Sharing Instructions Guide */}
        <div className="mt-6 pt-4 border-t border-[#D4AF37]/25 text-left bg-[#FAF4E1]/80 p-3.5 rounded-xl border border-[#D4AF37]/30 text-[11px] text-[#5A4B4C] space-y-1.5">
          <p className="font-bold text-[#38060F] flex items-center gap-1.5 font-cinzel">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            To make it open on ANY phone without login:
          </p>
          <p className="leading-relaxed">
            1. In the top-right of your <strong>Google AI Studio</strong> screen, click the <strong>"Share"</strong> button.
          </p>
          <p className="leading-relaxed">
            2. Choose <strong>"Anyone with the link can view"</strong> (Public Access).
          </p>
          <p className="leading-relaxed">
            3. Share the link above — anyone on iPhone, Android, WhatsApp, or Instagram can open and browse seamlessly!
          </p>
        </div>

      </div>
    </div>
  );
};
