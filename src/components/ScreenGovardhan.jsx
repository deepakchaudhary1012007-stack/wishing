import React from 'react';
import UserAvatar from './UserAvatar';

export default function ScreenGovardhan({ selectedUser, onNext }) {
  if (!selectedUser) return null;

  const currentPhoto = selectedUser.govardhanPhoto || selectedUser.photo;
  const currentWish = selectedUser.govardhanWish || selectedUser.blessingGovardhan;
  const currentShayari = selectedUser.govardhanShayari;

  return (
    <div className="glass-card rounded-3xl p-5 sm:p-7 text-center screen-fade-in border border-emerald-400/30 relative">
      {/* Festival Badge */}
      <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm">
        <span>🌿</span>
        <span>Annakoot & Nature's Grace</span>
        <span>🐄</span>
      </div>

      {/* Circular Photo with Glowing Emerald-Gold Border */}
      <div className="flex justify-center mb-4">
        <UserAvatar user={{ ...selectedUser, photo: currentPhoto }} size="large" />
      </div>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-amber-200 to-yellow-300 mb-1">
        Happy Govardhan Pooja, {selectedUser.name}!
      </h2>
      <p className="text-lg sm:text-xl text-emerald-300 mb-2 font-semibold">
        गोवर्धन पूजा की हार्दिक शुभकामनाएँ!
      </p>

      {/* Special Festival Memory Photo Showcase */}
      {selectedUser.govardhanPhoto && (
        <div className="my-3 rounded-2xl overflow-hidden border-2 border-emerald-400/60 shadow-[0_0_25px_rgba(16,185,129,0.35)] relative group">
          <img
            src={selectedUser.govardhanPhoto}
            alt="Govardhan Memory"
            className="w-full h-auto max-h-72 object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-2 text-center text-xs text-emerald-200 font-medium">
            🐄 {selectedUser.name} के साथ गोवर्धन पूजा की पावन स्मृति 🌿
          </div>
        </div>
      )}

      {/* Festival Shayari Box */}
      {currentShayari && (
        <div className="my-3 p-4 rounded-xl bg-gradient-to-br from-emerald-500/20 via-teal-500/15 to-emerald-600/20 border-2 border-emerald-400/50 shadow-lg text-center">
          <div className="text-[11px] uppercase tracking-widest text-emerald-300 font-bold mb-1.5 flex items-center justify-center space-x-1.5">
            <span>🌿</span>
            <span>4 लाइन आपके लिए</span>
            <span>🌿</span>
          </div>
          <p className="text-sm sm:text-base text-emerald-100 leading-relaxed whitespace-pre-line font-medium drop-shadow">
            {currentShayari}
          </p>
        </div>
      )}

      {/* Festive Blessing */}
      <div className="glass-card bg-black/20 rounded-2xl p-3.5 mb-5 border border-white/10 text-xs sm:text-sm text-emerald-100/90 leading-relaxed text-center space-y-2">
        <p className="font-medium text-emerald-200">
          भगवान श्री कृष्ण आप और आपके परिवार पर अपनी कृपा सदा बनाए रखें। गोवर्धन महाराज आपके जीवन में सुख, शांति और समृद्धि भर दें।
        </p>
        {currentWish && (
          <p className="text-white/80 text-[11px] sm:text-xs italic">
            "{currentWish}"
          </p>
        )}
      </div>

      {/* Pulsing Continue Button: "Aage Badhein" */}
      <button
        onClick={onNext}
        className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-amber-500 to-yellow-500 hover:from-emerald-400 hover:via-amber-400 hover:to-yellow-400 text-black font-bold text-base sm:text-lg shadow-[0_0_25px_rgba(16,185,129,0.5)] transform active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2 animate-pulse"
      >
        <span>Aage Badhein</span>
        <span className="text-xl">➜</span>
      </button>

      <p className="mt-3 text-[11px] text-emerald-200/60">
        Next: Bhai Dooj Special 💮🔴
      </p>
    </div>
  );
}
