import React from 'react';
import { MessageCircleHeart, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { handleSmartLinkClick } from '../config';

export const MainCtaSection: React.FC = () => {
  return (
    <section id="main-cta-section" className="py-16 md:py-24 max-w-5xl mx-auto px-4">
      <div className="relative rounded-3xl bg-gradient-to-b from-[#181a27] to-[#12131d] border border-pink-500/30 p-8 sm:p-14 text-center shadow-2xl overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-600/20 via-purple-600/10 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Subtle top indicator */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-pink-500/20 text-pink-400 text-xs font-semibold mb-6">
            <Zap className="w-3.5 h-3.5 text-pink-400" />
            <span>Fast &amp; Direct Access</span>
          </div>

          {/* Headline */}
          <h2
            id="main-cta-headline"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4"
          >
            Ready to Meet Someone New?
          </h2>

          {/* Subtext */}
          <p
            id="main-cta-subtext"
            className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed mb-8 max-w-xl mx-auto"
          >
            Continue to the external chat experience.
          </p>

          {/* Button */}
          <div className="mb-6">
            <button
              id="main-cta-btn"
              onClick={(e) => handleSmartLinkClick('main_cta', e)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-extrabold text-white bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 shadow-2xl shadow-pink-600/35 hover:shadow-pink-600/50 transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <MessageCircleHeart className="w-6 h-6 text-pink-200" />
              <span>Start Chatting Now</span>
              <ArrowRight className="w-5 h-5 text-pink-200" />
            </button>
          </div>

          {/* Compliance & Safety Guarantee */}
          <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>18+ Age Restricted • Third-Party Redirection Notice</span>
          </div>
        </div>
      </div>
    </section>
  );
};
