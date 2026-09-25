import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RefreshCw, MessageCircle } from 'lucide-react';
import { BRAND_CONTACT } from '../data/products';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in Parisha Moments app:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center p-6 text-[#38060F]">
          <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-2xl border-2 border-[#D4AF37]/50 text-center">
            <div className="w-16 h-16 rounded-2xl bg-[#4A0E17] text-[#D4AF37] mx-auto flex items-center justify-center mb-4 shadow-lg border border-[#D4AF37]/40">
              <AlertCircle className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-serif-luxury font-bold text-[#38060F] mb-2">
              PARISHA MOMENTS
            </h2>
            <p className="text-xs text-[#AA7C11] tracking-widest uppercase font-cinzel mb-4">
              Where Every Gift Holds a Special Emotion
            </p>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              We encountered a minor display issue loading the catalogue. Please tap refresh to reload the collection.
            </p>

            <div className="space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full py-3 px-4 bg-[#4A0E17] hover:bg-[#38060F] text-[#FAF7F2] font-semibold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reload Website</span>
              </button>

              <a
                href={BRAND_CONTACT.whatsappUrl('Hello Parisha Moments! I visited your website and would like to see the catalogue on WhatsApp.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Enquire Directly on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
