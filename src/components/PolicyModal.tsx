import React from 'react';
import { X, ShieldCheck, FileText, AlertTriangle } from 'lucide-react';

export type PolicyType = 'privacy' | 'terms' | 'responsible' | null;

interface PolicyModalProps {
  type: PolicyType;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      id="policy-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        id="policy-modal-container"
        className="relative w-full max-w-xl max-h-[85vh] overflow-y-auto bg-[#14161f] border border-gray-800 rounded-2xl p-6 shadow-2xl text-gray-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="policy-modal-close-btn"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' && (
          <div>
            <div className="flex items-center gap-2 text-pink-400 mb-4">
              <ShieldCheck className="w-6 h-6" />
              <h3 className="text-xl font-bold text-white">Privacy Policy</h3>
            </div>
            <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
              <p>
                <strong>1. Advertising Referral Notice:</strong> This website serves solely as a promotional advertising landing page. We do not store, sell, or collect sensitive personal data or private messaging logs on this site.
              </p>
              <p>
                <strong>2. Click Tracking:</strong> For technical measurement, we record non-personally identifiable CTA clicks (such as which button redirected to the external partner).
              </p>
              <p>
                <strong>3. External Platforms:</strong> Once you click any link redirecting to third-party adult chat or dating offers, you will be subject to the external provider&apos;s independent Privacy Policy and Terms of Service.
              </p>
              <p>
                <strong>4. Cookies:</strong> Standard web analytics cookies may be utilized to measure conversion rates and page speed performance.
              </p>
            </div>
          </div>
        )}

        {type === 'terms' && (
          <div>
            <div className="flex items-center gap-2 text-purple-400 mb-4">
              <FileText className="w-6 h-6" />
              <h3 className="text-xl font-bold text-white">Terms of Service</h3>
            </div>
            <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
              <p>
                <strong>1. Strict 18+ Age Requirement:</strong> You must be at least 18 years of age (or the legal age of majority in your jurisdiction) to interact with this page or continue to the linked services.
              </p>
              <p>
                <strong>2. Promotional Nature:</strong> The materials, mockups, and preview cards presented here are illustrative promotional representations for external adult chat and dating networks.
              </p>
              <p>
                <strong>3. Redirection Agreement:</strong> By clicking &ldquo;I&apos;m 18+ — Continue&rdquo;, &ldquo;Start Chatting&rdquo;, or related action buttons, you expressly consent to being redirected to third-party chat platforms.
              </p>
              <p>
                <strong>4. User Conduct:</strong> We advocate strictly consensual, lawful, and respectful adult communication. Harassment, illegal content, and deceptive behavior are prohibited on all connected platforms.
              </p>
            </div>
          </div>
        )}

        {type === 'responsible' && (
          <div>
            <div className="flex items-center gap-2 text-rose-400 mb-4">
              <AlertTriangle className="w-6 h-6" />
              <h3 className="text-xl font-bold text-white">Responsible Use &amp; Safety</h3>
            </div>
            <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
              <p>
                <strong>1. Protect Your Private Information:</strong> Never share sensitive financial details, passwords, home addresses, or personal identity numbers with strangers online.
              </p>
              <p>
                <strong>2. Adult Content Boundaries:</strong> Ensure all interactions respect personal boundaries and mutual consent.
              </p>
              <p>
                <strong>3. Transparency:</strong> Be mindful that external dating and chat platforms may feature premium credits, VIP features, or subscription plans governed by their respective platforms.
              </p>
              <p>
                <strong>4. Support:</strong> If you ever feel uncomfortable or encounter abusive behavior on any external site, utilize that platform&apos;s block and report tools immediately.
              </p>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-gray-800 flex justify-end">
          <button
            id="policy-modal-ok-btn"
            onClick={onClose}
            className="px-5 py-2 text-sm font-semibold rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
