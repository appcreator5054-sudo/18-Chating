/**
 * =========================================================================
 * 18+ ADULT CHAT & DATING ADVERTISING LANDING PAGE
 * =========================================================================
 *
 * CONFIGURABLE SMART LINK:
 * Replace this single variable to automatically update every promotional
 * CTA button on this landing page.
 */
export const SMART_LINK_URL =
  "https://www.profitableratecpmnetwork.com/vvbdqrp4?key=c77ca6a811ac13b05154cf794fe7858b";

import React, { useState } from 'react';
import { AgeNotice } from './components/AgeNotice';
import { HeroSection } from './components/HeroSection';
import { FeatureCards } from './components/FeatureCards';
import { ProfilePreview } from './components/ProfilePreview';
import { ChatPreview } from './components/ChatPreview';
import { MainCtaSection } from './components/MainCtaSection';
import { Footer } from './components/Footer';
import { StickyMobileCta } from './components/StickyMobileCta';
import { PolicyModal, PolicyType } from './components/PolicyModal';

export default function App() {
  const [activePolicy, setActivePolicy] = useState<PolicyType>(null);

  return (
    <div id="landing-page-root" className="min-h-screen bg-[#0b0c10] text-gray-100 flex flex-col selection:bg-pink-500 selection:text-white pb-16 md:pb-0">
      {/* 1. Age Notice (Top sticky banner with 18+ Continue & Exit) */}
      <AgeNotice />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Feature Cards */}
        <FeatureCards />

        {/* 4. Profile Preview Section */}
        <ProfilePreview />

        {/* 5. Chat Preview Section */}
        <ChatPreview />

        {/* 6. Main CTA Section */}
        <MainCtaSection />
      </main>

      {/* 7. Footer */}
      <Footer onOpenPolicy={(type) => setActivePolicy(type)} />

      {/* Sticky Mobile CTA */}
      <StickyMobileCta />

      {/* Transparent Disclosure & Policy Viewer Modal */}
      <PolicyModal
        type={activePolicy}
        onClose={() => setActivePolicy(null)}
      />
    </div>
  );
}
