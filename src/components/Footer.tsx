import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { PolicyType } from './PolicyModal';

interface FooterProps {
  onOpenPolicy: (type: PolicyType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy }) => {
  return (
    <footer id="page-footer" className="w-full bg-[#08090e] border-t border-white/5 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* 18+ Notice Badge & Copy */}
        <div className="flex flex-col items-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-600/20 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-wider">
            <ShieldAlert className="w-3.5 h-3.5" />
            18+ Only
          </div>
          <p className="text-sm sm:text-base text-gray-300 font-medium max-w-xl">
            Adult-oriented content. Please continue only if you are 18 or older.
          </p>
        </div>

        {/* Policy Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
          <button
            id="footer-link-privacy"
            onClick={() => onOpenPolicy('privacy')}
            className="hover:text-pink-400 transition-colors underline-offset-4 hover:underline cursor-pointer"
          >
            Privacy
          </button>
          <span className="text-gray-700">•</span>
          <button
            id="footer-link-terms"
            onClick={() => onOpenPolicy('terms')}
            className="hover:text-pink-400 transition-colors underline-offset-4 hover:underline cursor-pointer"
          >
            Terms
          </button>
          <span className="text-gray-700">•</span>
          <button
            id="footer-link-responsible"
            onClick={() => onOpenPolicy('responsible')}
            className="hover:text-pink-400 transition-colors underline-offset-4 hover:underline cursor-pointer"
          >
            Responsible Use
          </button>
        </div>

        {/* Advertising & Affiliate Transparency Disclosure */}
        <div className="max-w-2xl text-xs text-gray-400 leading-relaxed pt-4 border-t border-white/5">
          <p>
            <strong>Advertising Disclosure:</strong> This landing page is a promotional referral presentation. When you click links on this site, you will be directed to an external third-party chat or dating offer. We do not provide direct message routing or store private chat communications. All users must be 18 years of age or older.
          </p>
          <p className="mt-2 text-gray-400">
            &copy; {new Date().getFullYear()} 18+ Adult Chat &amp; Dating. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
