import React from 'react';
import UserAvatar from './UserAvatar';

export default function ScreenBhaiDooj({ selectedUser, onStartOver }) {
  if (!selectedUser) return null;

  const currentPhoto = selectedUser.bhaiDoojPhoto || selectedUser.photo;
  const currentWish = selectedUser.bhaiDoojWish || selectedUser.blessingBhaiDooj;
  const currentShayari = selectedUser.bhaiDoojShayari;

  const handleShare = () => {
    const text = `🪔✨ त्यौहार अपनों के साथ ✨🪔\n\nDearest ${selectedUser.name}, wishing you a joyful Diwali, Govardhan Pooja & Bhai Dooj with love and blessings!\n\nOpen your festive greeting here: ${window.location.href}`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="glass-card rounded-3xl p-5 sm:p-7 text-center screen-fade-in border border-rose-400/30 relative">
      {/* Festival Badge */}
      <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-400/40 text-rose-300 text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm">
        <span>💮</span>
        <span>Sacred Bond of Love</span>
        <span>🔴</span>
      </div>

      {/* Circular Photo with Radiant Rose-Gold Border */}
      <div className="flex justify-center mb-4">
        <UserAvatar user={{ ...selectedUser, photo: currentPhoto }} size="large" />
      </div>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-pink-200 to-amber-300 mb-1">
        Happy Bhai Dooj, {selectedUser.name}!
      </h2>
      <p className="text-lg sm:text-xl text-rose-300 mb-2 font-semibold">
        भाई दूज की ढेरों शुभकामनाएँ!
      </p>

      {/* Special Festival Memory Photo Showcase */}
      {selectedUser.bhaiDoojPhoto && (
        <div className="my-3 rounded-2xl overflow-hidden border-2 border-rose-400/60 shadow-[0_0_25px_rgba(244,63,94,0.35)] relative group">
          <img
            src={selectedUser.bhaiDoojPhoto}
            alt="Bhai Dooj Memory"
            className="w-full h-auto max-h-72 object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-2 text-center text-xs text-rose-200 font-medium">
            💮 {selectedUser.name} के साथ भाई दूज का पावन टीका व मंगल आशीर्वाद 🔴
          </div>
        </div>
      )}

      {/* Festival Shayari Box */}
      {currentShayari && (
        <div className="my-3 p-4 rounded-xl bg-gradient-to-br from-rose-500/20 via-pink-500/15 to-rose-600/20 border-2 border-rose-400/50 shadow-lg text-center">
          <div className="text-[11px] uppercase tracking-widest text-rose-300 font-bold mb-1.5 flex items-center justify-center space-x-1.5">
            <span>💮</span>
            <span>4 लाइन आपके लिए</span>
            <span>💮</span>
          </div>
          <p className="text-sm sm:text-base text-rose-100 leading-relaxed whitespace-pre-line font-medium drop-shadow">
            {currentShayari}
          </p>
        </div>
      )}

      {/* Festive Blessing */}
      <div className="glass-card bg-black/20 rounded-2xl p-3.5 mb-5 border border-white/10 text-xs sm:text-sm text-rose-100/90 leading-relaxed text-center space-y-2">
        <p className="font-medium text-rose-200">
          भाई-बहन के अटूट विश्वास, स्नेह और समर्पण के इस पावन पर्व पर हार्दिक बधाई। यह पवित्र रिश्ता जीवन भर यूं ही महकता रहे!
        </p>
        {currentWish && (
          <p className="text-white/80 text-[11px] sm:text-xs italic">
            "{currentWish}"
          </p>
        )}
      </div>

      {/* Special Siblings Memory Photo (if available) */}
      {selectedUser.extraPhoto && (
        <div className="my-3 rounded-2xl overflow-hidden border-2 border-rose-400/50 shadow-[0_0_20px_rgba(244,63,94,0.3)] relative group">
          <img
            src={selectedUser.extraPhoto}
            alt="Siblings Memory"
            className="w-full h-auto max-h-72 object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-2 text-center text-xs text-rose-200 font-medium">
            💖 भाई-बहनों का अटूट प्यार व सुंदर यादें ✨
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="space-y-3">
        {/* Primary Reset Button: "Shuruat Se Dekhein" */}
        <button
          onClick={onStartOver}
          className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 hover:from-amber-300 hover:via-orange-400 hover:to-rose-400 text-black font-bold text-base sm:text-lg shadow-[0_0_25px_rgba(244,63,94,0.5)] transform active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2"
        >
          <span>Shuruat Se Dekhein</span>
          <span className="text-lg">↺</span>
        </button>

        {/* Share Greeting Button */}
        <button
          onClick={handleShare}
          className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm border border-white/20 flex items-center justify-center space-x-2 transition-all active:scale-95"
        >
          <span>Share with {selectedUser.name}</span>
          <span>📱</span>
        </button>
      </div>

      <p className="mt-3 text-[11px] text-white/50">
        Resets to home screen & stops music
      </p>
    </div>
  );
}
