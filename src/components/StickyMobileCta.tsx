import React, { useState, useEffect } from 'react';
import { MessageCircleHeart, ArrowRight, X } from 'lucide-react';
import { handleSmartLinkClick } from '../config';

export const StickyMobileCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA once scrolled down 180px
      if (window.scrollY > 180) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isDismissed || !isVisible) {
    return null;
  }

  return (
    <aside
      id="sticky-mobile-cta"
      aria-label="Mobile quick action"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#0f111a]/95 border-t border-pink-500/30 backdrop-blur-xl shadow-2xl transition-all duration-300"
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        <div className="flex-1 min-w-0 pr-1">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-rose-600/40 text-rose-300 border border-rose-500/30">
              18+
            </span>
            <span className="text-xs font-bold text-white truncate">
              Adult Chat &amp; Dating
            </span>
          </div>
          <p className="text-[11px] text-gray-400 truncate mt-0.5">
            Connect with new people now
          </p>
        </div>

        <div className="flex items-center gap-1.5 flex-shrink-0">
          <button
            id="sticky-mobile-start-btn"
            onClick={(e) => handleSmartLinkClick('sticky_cta', e)}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-pink-600 to-purple-600 active:scale-95 shadow-lg shadow-pink-600/30 cursor-pointer"
          >
            <MessageCircleHeart className="w-3.5 h-3.5 text-pink-200" />
            <span>Start Chat</span>
            <ArrowRight className="w-3.5 h-3.5 text-pink-200" />
          </button>

          <button
            id="sticky-mobile-dismiss-btn"
            onClick={() => setIsDismissed(true)}
            className="p-2 text-gray-400 hover:text-white rounded-lg"
            aria-label="Dismiss sticky bar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
