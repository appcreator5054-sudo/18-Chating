import React from 'react';
import { Send, Shield, Sparkles, ArrowRight, MessageSquareCode } from 'lucide-react';
import { handleSmartLinkClick } from '../config';

export const ChatPreview: React.FC = () => {
  return (
    <section id="chat-preview-section" className="py-12 md:py-20 max-w-4xl mx-auto px-4">
      {/* Container with Glassmorphism and subtle glowing border */}
      <div className="relative rounded-3xl bg-[#131520]/90 border border-pink-500/20 p-6 sm:p-10 shadow-2xl backdrop-blur-xl overflow-hidden">
        {/* Top ambient lights */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

        {/* Mockup Chat App Window Header */}
        <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-8">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-gray-300 flex items-center gap-2">
              <MessageSquareCode className="w-4 h-4 text-pink-400" />
              Adult Chat Platform Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
              <Shield className="w-3 h-3" />
              Discreet &amp; Encrypted
            </span>
          </div>
        </div>

        {/* Chat Interface Mockup */}
        <div className="space-y-4 mb-8">
          {/* System Welcome Prompt */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-gray-400 text-xs">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>Adult Social Chat Network</span>
            </div>
          </div>

          {/* Invitation Message Card */}
          <div className="max-w-md mx-auto bg-gradient-to-r from-pink-950/30 to-purple-950/30 border border-pink-500/20 rounded-2xl p-5 text-center shadow-lg">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
              Ready to start a conversation?
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed font-normal">
              Join the external chat experience and discover new conversations.
            </p>
          </div>

          {/* Simulated chat input placeholder */}
          <div className="max-w-md mx-auto flex items-center gap-2 bg-[#0c0d14] border border-white/10 rounded-xl px-4 py-3 text-gray-500 text-sm">
            <span className="flex-1 select-none">Enter the room to begin typing...</span>
            <div className="w-8 h-8 rounded-lg bg-pink-600/20 flex items-center justify-center text-pink-400">
              <Send className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center pt-2">
          <button
            id="chat-enter-btn"
            onClick={(e) => handleSmartLinkClick('chat_enter', e)}
            className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 shadow-xl shadow-pink-600/30 hover:shadow-pink-600/40 transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <span>Enter Chat</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-xs text-gray-400 mt-3">
            Instant redirect to our external partner platform. 18+ only.
          </p>
        </div>
      </div>
    </section>
  );
};
