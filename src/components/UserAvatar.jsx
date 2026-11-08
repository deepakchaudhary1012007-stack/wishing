import React, { useState } from 'react';

export default function UserAvatar({ user, size = 'large' }) {
  const [imgFailed, setImgFailed] = useState(false);
  const isLarge = size === 'large';

  return (
    <div className="relative inline-block">
      {/* Glowing Aura Ring */}
      <div
        className={`absolute -inset-1.5 rounded-full ${
          isLarge
            ? 'bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-300 blur-md opacity-85 animate-pulse'
            : 'hidden'
        }`}
      ></div>

      <div
        className={`relative overflow-hidden rounded-full ring-4 ring-amber-400 ring-offset-2 ring-offset-[#250309] ${
          isLarge
            ? 'w-36 h-36 sm:w-44 sm:h-44 shadow-2xl glow-gold-border-pulse'
            : 'w-16 h-16 shadow-lg'
        }`}
      >
        {!imgFailed && user?.photo ? (
          <img
            src={user.photo}
            alt={user.name}
            onError={() => setImgFailed(true)}
            style={{ objectPosition: user.objectPosition || 'center' }}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-600 to-rose-700 text-white font-bold text-2xl">
            {user?.name?.slice(0, 2) || '❤️'}
          </div>
        )}
      </div>

      {/* Decorative small diya badge on bottom corner */}
      {isLarge && (
        <div className="absolute -bottom-1 -right-1 bg-amber-500 text-black text-xl w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 border-amber-200">
          🪔
        </div>
      )}
    </div>
  );
}
