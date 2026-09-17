import React from 'react';
import { MessageCircleHeart, Sparkles, Shield, Heart, ArrowUpRight } from 'lucide-react';
import { handleSmartLinkClick } from '../config';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero-section" className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-pink-600/15 via-purple-600/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Quality & Category Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-pink-500/30 text-pink-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md shadow-inner shadow-pink-500/10">
          <Sparkles className="w-4 h-4 text-pink-400" />
          <span>Premium Adult Chat &amp; Dating Experience</span>
          <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
          <span className="text-gray-400 font-medium">18+ Only</span>
        </div>

        {/* Main Headline */}
        <h1
          id="hero-headline"
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6"
        >
          Meet New People.{' '}
          <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
            Start a Conversation.
          </span>
        </h1>

        {/* Subheadline */}
        <p
          id="hero-subheadline"
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed mb-8 sm:mb-10"
        >
          Discover an adult-friendly chat and dating experience where you can connect with people and start conversations.
        </p>

        {/* Dual Call-to-Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md mx-auto mb-10">
          <button
            id="hero-start-btn"
            onClick={(e) => handleSmartLinkClick('hero_start', e)}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 shadow-lg shadow-pink-600/30 hover:shadow-pink-600/45 transition-all duration-200 active:scale-[0.98] cursor-pointer"
          >
            <MessageCircleHeart className="w-5 h-5 text-pink-200" />
            <span>Start Chatting</span>
            <ArrowUpRight className="w-4 h-4 text-pink-200" />
          </button>

          <button
            id="hero-explore-btn"
            onClick={(e) => handleSmartLinkClick('hero_explore', e)}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-gray-200 hover:text-white bg-[#1a1c29]/80 hover:bg-[#222538] border border-white/10 hover:border-pink-500/40 backdrop-blur-md transition-all duration-200 active:scale-[0.98] cursor-pointer"
          >
            <Heart className="w-4 h-4 text-rose-400" />
            <span>Explore Chats</span>
          </button>
        </div>

        {/* Transparent Trust & Policy Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-gray-400">
          <div className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>Strict 18+ Verification</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Active Adult Community</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-gray-500 font-mono text-[11px]">[External Offer Gateway]</span>
          </div>
        </div>
      </div>
    </section>
  );
};
