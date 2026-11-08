import React from 'react';
import UserAvatar from './UserAvatar';

export default function ScreenDiwali({ selectedUser, onNext }) {
  if (!selectedUser) return null;

  const currentPhoto = selectedUser.diwaliPhoto || selectedUser.photo;
  const currentWish = selectedUser.diwaliWish || selectedUser.blessingDiwali;
  const currentShayari = selectedUser.diwaliShayari;

  return (
    <div className="glass-card rounded-3xl p-5 sm:p-7 text-center screen-fade-in border border-amber-400/30 relative">
      {/* Festival Badge */}
      <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm">
        <span>✨</span>
        <span>Festival of Lights</span>
        <span>🪔</span>
      </div>

      {/* Circular Photo with Glowing Gold Border */}
      <div className="flex justify-center mb-4">
        <UserAvatar user={{ ...selectedUser, photo: currentPhoto }} size="large" />
      </div>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-200 to-orange-400 mb-1">
        Happy Diwali, {selectedUser.name}!
      </h2>
      <p className="text-lg sm:text-xl text-amber-300 mb-2 font-semibold">
        शुभ दीपावली!
      </p>

      {/* Special Festival Memory Photo Showcase */}
      {selectedUser.diwaliPhoto && (
        <div className="my-3 rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-[0_0_25px_rgba(251,191,36,0.35)] relative group">
          <img
            src={selectedUser.diwaliPhoto}
            alt="Diwali Memory"
            className="w-full h-auto max-h-72 object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-2 text-center text-xs text-amber-200 font-medium">
            🪔 {selectedUser.name} के साथ जगमगाती दीपावली की सुंदर स्मृति ✨
          </div>
        </div>
      )}

      {/* Festival Shayari Box */}
      {currentShayari && (
        <div className="my-3 p-4 rounded-xl bg-gradient-to-br from-amber-500/20 via-orange-500/15 to-amber-600/20 border-2 border-amber-400/50 shadow-lg text-center">
          <div className="text-[11px] uppercase tracking-widest text-amber-300 font-bold mb-1.5 flex items-center justify-center space-x-1.5">
            <span>✨</span>
            <span>4 लाइन आपके लिए</span>
            <span>✨</span>
          </div>
          <p className="text-sm sm:text-base text-amber-100 leading-relaxed whitespace-pre-line font-medium drop-shadow">
            {currentShayari}
          </p>
        </div>
      )}

      {/* Festive Blessing */}
      <div className="glass-card bg-black/20 rounded-2xl p-3.5 mb-5 border border-white/10 text-xs sm:text-sm text-amber-100/90 leading-relaxed text-center space-y-2">
        <p className="font-medium text-amber-200">
          दीपावली के इस पावन पर्व पर आपके जीवन में सुख, समृद्धि और अपार खुशियाँ आएं। दीपों की रोशनी से आपका हर दिन जगमगाता रहे!
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
        className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:via-orange-400 hover:to-amber-500 text-black font-bold text-base sm:text-lg shadow-[0_0_25px_rgba(245,158,11,0.5)] transform active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2 animate-pulse"
      >
        <span>Aage Badhein</span>
        <span className="text-xl">➜</span>
      </button>

      <p className="mt-3 text-[11px] text-amber-200/60">
        Next: Govardhan Pooja Blessing 🐄
      </p>
    </div>
  );
}
