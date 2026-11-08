import React from 'react';

export default function AudioControl({ isPlaying, isMuted, onTogglePlay, onToggleMute }) {
  return (
    <div className="fixed top-3 right-3 sm:top-4 sm:right-4 z-50 flex items-center space-x-2 bg-black/40 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 shadow-xl transition-all hover:bg-black/60">
      {/* Animated Equalizer Wave Bars */}
      {isPlaying && !isMuted && (
        <div className="flex items-end space-x-0.5 h-4 pr-1">
          <span className="eq-bar"></span>
          <span className="eq-bar"></span>
          <span className="eq-bar"></span>
          <span className="eq-bar"></span>
        </div>
      )}

      {/* Play/Pause Button */}
      <button
        onClick={onTogglePlay}
        aria-label={isPlaying ? 'Pause Audio' : 'Play Audio'}
        className="w-8 h-8 rounded-full bg-amber-500/20 hover:bg-amber-500/40 text-amber-300 flex items-center justify-center text-sm transition-transform active:scale-90"
        title={isPlaying ? 'Pause Festive Music' : 'Play Festive Music'}
      >
        {isPlaying ? (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <rect x="6" y="4" width="4" height="16" rx="1"></rect>
            <rect x="14" y="4" width="4" height="16" rx="1"></rect>
          </svg>
        ) : (
          <svg className="w-4 h-4 fill-current translate-x-0.5" viewBox="0 0 24 24">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        )}
      </button>

      {/* Mute/Unmute Button */}
      <button
        onClick={onToggleMute}
        aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
        className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white/80 flex items-center justify-center text-sm transition-transform active:scale-90"
        title={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        ) : (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        )}
      </button>
    </div>
  );
}

