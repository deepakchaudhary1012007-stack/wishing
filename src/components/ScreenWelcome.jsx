import React, { useState } from 'react';
import UserAvatar from './UserAvatar';

export default function ScreenWelcome({ familyMembers, onSelectUser }) {
  const [filterCategory, setFilterCategory] = useState('all');

  const filteredMembers = familyMembers.filter((member) => {
    if (filterCategory === 'brothers') return member.type === 'brother';
    if (filterCategory === 'sisters') return member.type === 'sister';
    return true;
  });

  return (
    <div className="glass-card rounded-3xl p-5 sm:p-7 text-center screen-fade-in border border-white/20">
      {/* Decorative Diya Header */}
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500/30 to-orange-500/20 border border-amber-400/40 mb-3 shadow-[0_0_20px_rgba(251,191,36,0.3)] animate-pulse">
        <span className="text-3xl">🪔</span>
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 drop-shadow-md mb-2">
        त्यौहार अपनों के साथ
      </h1>

      {/* Subtitle */}
      <div className="mb-6 space-y-1.5 text-xs sm:text-sm text-amber-100/90 leading-relaxed font-light">
        <p className="font-medium text-amber-200">
          भाइयों और बहनों का प्यार, बस आपके नाम का इंतज़ार!
        </p>
        <p className="text-white/70 text-[11px] sm:text-xs">
          A special greeting from the family, just one tap away!
        </p>
      </div>

      {/* Filter Chips */}
      <div className="flex items-center justify-center space-x-2 mb-5">
        <button
          onClick={() => setFilterCategory('all')}
          className={`px-3 py-1 rounded-full text-xs transition-all ${
            filterCategory === 'all'
              ? 'bg-amber-400 text-black font-semibold shadow-md'
              : 'bg-white/10 text-white/80 hover:bg-white/20'
          }`}
        >
          All ({familyMembers.length})
        </button>
        <button
          onClick={() => setFilterCategory('brothers')}
          className={`px-3 py-1 rounded-full text-xs transition-all ${
            filterCategory === 'brothers'
              ? 'bg-amber-400 text-black font-semibold shadow-md'
              : 'bg-white/10 text-white/80 hover:bg-white/20'
          }`}
        >
          Brothers 👦
        </button>
        <button
          onClick={() => setFilterCategory('sisters')}
          className={`px-3 py-1 rounded-full text-xs transition-all ${
            filterCategory === 'sisters'
              ? 'bg-amber-400 text-black font-semibold shadow-md'
              : 'bg-white/10 text-white/80 hover:bg-white/20'
          }`}
        >
          Sisters 👧
        </button>
      </div>

      {/* Family Members Grid */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 text-left">
        {filteredMembers.map((member) => (
          <button
            key={member.id}
            onClick={() => onSelectUser(member)}
            className="group glass-card glass-card-hover glass-card-active rounded-2xl p-3 sm:p-3.5 flex flex-col items-center text-center transition-all duration-300 cursor-pointer relative overflow-hidden"
          >
            {/* Top Accent Gradient Border */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 opacity-60 group-hover:opacity-100 transition-opacity"></div>

            {/* Avatar */}
            <div className="relative mb-2 mt-1">
              <UserAvatar user={member} size="small" />
              <span className="absolute -bottom-1 -right-1 text-xs bg-amber-400/90 text-black rounded-full px-1 shadow">
                {member.type === 'brother' ? '👦' : member.type === 'sister' ? '👧' : '🏡'}
              </span>
            </div>

            {/* Name */}
            <span className="font-semibold text-sm sm:text-base text-white group-hover:text-amber-300 transition-colors line-clamp-1">
              {member.name}
            </span>
            {member.hindiName && (
              <span className="text-[11px] text-amber-200/80 -mt-0.5">
                {member.hindiName}
              </span>
            )}

            {/* Relationship Pill */}
            <span className="mt-1 text-[10px] px-2 py-0.5 rounded-full border bg-amber-500/20 text-amber-300 border-amber-400/30">
              {member.relation || (member.type === 'brother' ? 'Brother' : member.type === 'sister' ? 'Sister' : 'Family')}
            </span>

            {/* Tap Prompt */}
            <div className="mt-2 text-[10px] text-amber-300/80 group-hover:text-amber-200 flex items-center space-x-1 font-medium">
              <span>Tap to Open</span>
              <span className="group-hover:translate-x-0.5 transition-transform">🪔</span>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-5 text-[11px] text-white/40 flex items-center justify-center space-x-1">
        <span>🎵 Music starts automatically on selection</span>
      </div>
    </div>
  );
}

