import React, { useState } from 'react';
import { ShieldAlert, ArrowRight, XCircle } from 'lucide-react';
import { handleSmartLinkClick } from '../config';

export const AgeNotice: React.FC = () => {
  const [showExitModal, setShowExitModal] = useState(false);

  const handleExitClick = () => {
    // Navigate away safely or show confirmation
    if (typeof window !== 'undefined') {
      window.location.href = 'https://www.google.com';
    }
  };

  return (
    <div id="age-notice-section" className="w-full bg-[#12131c]/90 border-b border-rose-500/20 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          {/* Notice Copy */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 sm:gap-3">
            <span
              id="age-notice-badge"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-sm shadow-rose-900/40"
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              18+ ONLY
            </span>
            <span className="text-sm font-semibold text-white tracking-wide">
              Adult Chat &amp; Dating
            </span>
            <span className="hidden sm:inline-block text-gray-500">•</span>
            <p className="text-xs sm:text-sm text-gray-300 font-normal">
              Continue only if you are 18 years of age or older.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-center">
            <button
              id="age-notice-continue-btn"
              onClick={(e) => handleSmartLinkClick('age_continue', e)}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 shadow-md shadow-pink-600/25 transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <span>I&apos;m 18+ — Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="age-notice-exit-btn"
              onClick={() => setShowExitModal(true)}
              className="flex-1 sm:flex-none px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200 cursor-pointer"
            >
              Exit
            </button>
          </div>
        </div>
      </div>

      {/* Optional Safe Exit Modal */}
      {showExitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-[#181a24] border border-gray-800 rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl">
            <XCircle className="w-12 h-12 text-rose-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Leaving Site</h3>
            <p className="text-sm text-gray-400 mb-6">
              You selected to exit. This platform is strictly intended for consenting adults aged 18 and above.
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleExitClick}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-gray-700 hover:bg-gray-600 text-white transition-colors"
              >
                Confirm Exit
              </button>
              <button
                onClick={() => setShowExitModal(false)}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-pink-600 hover:bg-pink-500 text-white transition-colors"
              >
                Stay Here
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
