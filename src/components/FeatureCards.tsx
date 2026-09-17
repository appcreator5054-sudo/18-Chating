import React from 'react';
import { MessageSquare, Heart, Lock, ArrowRight } from 'lucide-react';
import { handleSmartLinkClick } from '../config';

export const FeatureCards: React.FC = () => {
  const features = [
    {
      id: 'feature-card-conversations',
      icon: MessageSquare,
      title: '💬 Start Conversations',
      description: 'Connect and chat with new people.',
      badge: 'Interactive',
      accentColor: 'from-pink-500/20 to-purple-500/10',
      iconColor: 'text-pink-400',
      borderColor: 'hover:border-pink-500/40',
    },
    {
      id: 'feature-card-connections',
      icon: Heart,
      title: '❤️ Discover Connections',
      description: 'Find people who are interested in meeting and chatting.',
      badge: 'Matching',
      accentColor: 'from-rose-500/20 to-pink-500/10',
      iconColor: 'text-rose-400',
      borderColor: 'hover:border-rose-500/40',
    },
    {
      id: 'feature-card-private',
      icon: Lock,
      title: '🔒 Private Experience',
      description: 'Continue to an external chat platform for the full experience.',
      badge: 'Secure',
      accentColor: 'from-purple-500/20 to-indigo-500/10',
      iconColor: 'text-purple-400',
      borderColor: 'hover:border-purple-500/40',
    },
  ];

  return (
    <section id="features-section" className="py-12 md:py-16 max-w-6xl mx-auto px-4">
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Designed for Meaningful Interaction
        </h2>
        <p className="text-sm sm:text-base text-gray-400">
          Everything you need to discover new people and explore casual adult conversations.
        </p>
      </div>

      {/* 3 Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.id}
              id={feature.id}
              className={`relative rounded-2xl bg-[#151722]/80 border border-white/10 p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${feature.borderColor} shadow-xl group`}
            >
              {/* Subtle top ambient glow */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
              />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-gray-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                    {feature.badge}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Button below feature cards */}
      <div className="text-center">
        <button
          id="feature-continue-btn"
          onClick={(e) => handleSmartLinkClick('feature_continue', e)}
          className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 shadow-md shadow-pink-600/25 hover:shadow-pink-600/40 transition-all duration-200 active:scale-95 cursor-pointer"
        >
          <span>Continue to Chat</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
