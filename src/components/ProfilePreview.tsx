import React from 'react';
import { Eye, MessageCircle, Info, Sparkles } from 'lucide-react';
import { handleSmartLinkClick } from '../config';

interface ProfileItem {
  id: string;
  name: string;
  age: number;
  status: string;
  tagline: string;
  interests: string[];
  imageUrl: string;
  location: string;
}

const PROFILES: ProfileItem[] = [
  {
    id: 'profile-emma',
    name: 'Emma',
    age: 24,
    status: 'Online',
    tagline: 'Interested in chatting',
    interests: ['Evening chats', 'Romantic talks', 'Social'],
    location: 'Nearby',
    imageUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&h=750&q=80',
  },
  {
    id: 'profile-sophia',
    name: 'Sophia',
    age: 26,
    status: 'Online',
    tagline: 'Open to conversation',
    interests: ['Deep talk', 'Spontaneous', 'Dating'],
    location: 'Active now',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&h=750&q=80',
  },
  {
    id: 'profile-olivia',
    name: 'Olivia',
    age: 25,
    status: 'Online',
    tagline: 'Looking for new connections',
    interests: ['Casual chats', 'Night owl', 'Coffee'],
    location: 'Online',
    imageUrl:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&h=750&q=80',
  },
  {
    id: 'profile-chloe',
    name: 'Chloe',
    age: 27,
    status: 'Online',
    tagline: 'Ready for friendly chats',
    interests: ['Good vibes', 'Flirty banter', 'Laughs'],
    location: 'Active now',
    imageUrl:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&h=750&q=80',
  },
];

export const ProfilePreview: React.FC = () => {
  return (
    <section id="profiles-section" className="py-12 md:py-20 max-w-6xl mx-auto px-4">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Fictional Community Showcase</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
          Explore Profiles &amp; Connections
        </h2>
        <p className="text-sm sm:text-base text-gray-300">
          Get a glimpse of the social chat environment waiting for you on the platform.
        </p>
      </div>

      {/* Mandatory Transparent Disclaimer Notice */}
      <div
        id="profile-disclaimer-banner"
        className="mb-8 p-3.5 sm:p-4 rounded-xl bg-purple-950/30 border border-purple-800/40 flex items-start gap-3 text-xs sm:text-sm text-purple-200"
      >
        <Info className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="text-white">Transparency Notice:</strong> The profiles shown below are promotional fictional representations for creative preview purposes. They do not represent specific individuals or past correspondence. Clicking any button will redirect you to an external chat/dating platform.
        </p>
      </div>

      {/* Profile Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROFILES.map((profile) => (
          <div
            key={profile.id}
            id={profile.id}
            className="group relative rounded-2xl bg-[#141622] border border-white/10 overflow-hidden shadow-xl hover:border-pink-500/40 transition-all duration-300 flex flex-col"
          >
            {/* Image Container with Status Overlay */}
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-900">
              <img
                src={profile.imageUrl}
                alt={`${profile.name}, age ${profile.age}`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141622] via-transparent to-black/30" />

              {/* Top Tags */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-[11px] font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{profile.status}</span>
              </div>

              <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-gray-300 text-[10px] font-mono">
                18+ Adult
              </div>

              {/* Bottom Details on Image */}
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <div className="flex items-baseline gap-2">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {profile.name}
                  </h3>
                  <span className="text-sm font-semibold text-pink-300">
                    {profile.age}
                  </span>
                </div>
                <p className="text-xs text-gray-200 mt-0.5 line-clamp-1 font-medium">
                  &ldquo;{profile.tagline}&rdquo;
                </p>
              </div>
            </div>

            {/* Profile Meta & Actions */}
            <div className="p-4 flex-1 flex flex-col justify-between bg-[#141622]">
              {/* Interest Badges */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {profile.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] px-2.5 py-0.5 rounded-md bg-white/5 text-gray-300 border border-white/5"
                  >
                    {interest}
                  </span>
                ))}
              </div>

              {/* Action Buttons: View Profile & Start Chat */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5">
                <button
                  id={`${profile.id}-view-btn`}
                  onClick={(e) => handleSmartLinkClick('profile_view', e)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-gray-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors duration-150 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-gray-400" />
                  <span>View Profile</span>
                </button>

                <button
                  id={`${profile.id}-chat-btn`}
                  onClick={(e) => handleSmartLinkClick('profile_chat', e)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 shadow-sm shadow-pink-600/20 transition-all duration-150 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-pink-200" />
                  <span>Start Chat</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
