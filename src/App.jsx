import React, { useState, useEffect, useRef } from 'react';
import { familyMembers } from './data';
import AudioControl from './components/AudioControl';
import FloatingParticles from './components/FloatingParticles';
import ScreenWelcome from './components/ScreenWelcome';
import ScreenDiwali from './components/ScreenDiwali';
import ScreenGovardhan from './components/ScreenGovardhan';
import ScreenBhaiDooj from './components/ScreenBhaiDooj';

// Festive Synthesizer Fallback: Generates an ambient Indian Sitar & Tanpura melodic chime
class FestiveMelodySynthesizer {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.interval = null;
    this.notes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25];
  }
  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  }
  playNote(freq, time, duration = 1.2, type = 'sine') {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, time);

    const overtone = this.ctx.createOscillator();
    const overtoneGain = this.ctx.createGain();
    overtone.type = 'triangle';
    overtone.frequency.setValueAtTime(freq * 2, time);

    gain.gain.setValueAtTime(0.001, time);
    gain.gain.exponentialRampToValueAtTime(0.08, time + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    overtoneGain.gain.setValueAtTime(0.001, time);
    overtoneGain.gain.exponentialRampToValueAtTime(0.03, time + 0.05);
    overtoneGain.gain.exponentialRampToValueAtTime(0.0001, time + duration * 0.8);

    osc.connect(gain);
    overtone.connect(overtoneGain);
    gain.connect(this.ctx.destination);
    overtoneGain.connect(this.ctx.destination);

    osc.start(time);
    overtone.start(time);
    osc.stop(time + duration);
    overtone.stop(time + duration);
  }
  start() {
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    if (this.isPlaying) return;
    this.isPlaying = true;

    let step = 0;
    const melody = [0, 2, 4, 3, 5, 4, 2, 0, 4, 5, 7, 5, 4, 2, 1, 0];
    const tick = () => {
      if (!this.isPlaying || !this.ctx) return;
      const now = this.ctx.currentTime;
      const noteIndex = melody[step % melody.length];
      const freq = this.notes[noteIndex] || 329.63;
      this.playNote(freq, now, 1.4, 'sine');
      if (step % 4 === 0) {
        this.playNote(130.81, now, 2.5, 'triangle');
      }
      step++;
    };
    tick();
    this.interval = setInterval(tick, 450);
  }
  stop() {
    this.isPlaying = false;
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
}

const synthPlayer = new FestiveMelodySynthesizer();

export default function App() {
  // 1. STATE TRACKING: currentStep (0, 1, 2, 3) and selectedUser
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedUser, setSelectedUser] = useState(null);

  // Audio controls state
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio();
    audio.loop = true;
    audio.preload = 'auto';

    audio.addEventListener('error', () => {
      console.warn('Audio source fallback activated.');
      if (isPlaying && !isMuted) {
        synthPlayer.start();
      }
    });

    audioRef.current = audio;

    return () => {
      audio.pause();
      synthPlayer.stop();
    };
  }, []);

  const startAudio = (user) => {
    const audioUrl = user?.audio || familyMembers[0].audio;
    if (audioRef.current) {
      audioRef.current.src = audioUrl;
      audioRef.current.muted = isMuted;
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          synthPlayer.start();
          setIsPlaying(true);
        });
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      if (audioRef.current) audioRef.current.pause();
      synthPlayer.stop();
      setIsPlaying(false);
    } else {
      if (audioRef.current && audioRef.current.src) {
        audioRef.current.play().catch(() => synthPlayer.start());
      } else {
        synthPlayer.start();
      }
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    if (audioRef.current) {
      audioRef.current.muted = nextMute;
    }
    if (nextMute) {
      synthPlayer.stop();
    } else if (isPlaying) {
      if (audioRef.current && audioRef.current.paused) {
        synthPlayer.start();
      }
    }
  };

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    setCurrentStep(1);
    startAudio(user);
  };

  const handleNextToGovardhan = () => {
    setCurrentStep(2);
  };

  const handleNextToBhaiDooj = () => {
    setCurrentStep(3);
  };

  const handleStartOver = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    synthPlayer.stop();
    setIsPlaying(false);
    setSelectedUser(null);
    setCurrentStep(0);
  };

  // Festival-specific dynamic background classes
  const festivalBgClass = {
    0: 'bg-festival-0',
    1: 'bg-festival-1',
    2: 'bg-festival-2',
    3: 'bg-festival-3'
  }[currentStep] || 'bg-festival-0';

  // Festival-specific ambient glow lights
  const festivalGlows = {
    0: { top: 'bg-orange-600/20', bottom: 'bg-red-600/20', center: 'bg-amber-500/15' },
    1: { top: 'bg-amber-400/35', bottom: 'bg-orange-600/40', center: 'bg-yellow-400/25' }, // Diwali: Rich Golden/Orange glow
    2: { top: 'bg-emerald-400/35', bottom: 'bg-teal-500/40', center: 'bg-lime-400/25' },    // Govardhan: Sacred Emerald/Teal glow
    3: { top: 'bg-rose-400/35', bottom: 'bg-pink-600/40', center: 'bg-amber-400/25' }       // Bhai Dooj: Auspicious Rose/Tika crimson glow
  }[currentStep] || { top: 'bg-orange-600/20', bottom: 'bg-red-600/20', center: 'bg-amber-500/15' };

  return (
    <div className="min-h-screen relative flex flex-col justify-between overflow-x-hidden p-3 sm:p-6 text-white">
      {/* Dynamic Festival Background Layer with 1.2s crossfade transition */}
      <div className={`festival-bg-layer ${festivalBgClass}`}></div>

      {/* Dynamic Floating Emojis */}
      <FloatingParticles screen={currentStep} />

      {/* Ambient background glows matching current festival */}
      <div className={`fixed top-[-10%] left-[-10%] w-[340px] h-[340px] rounded-full blur-[100px] pointer-events-none transition-all duration-1000 ${festivalGlows.top}`}></div>
      <div className={`fixed bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full blur-[110px] pointer-events-none transition-all duration-1000 ${festivalGlows.bottom}`}></div>
      <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full blur-[120px] pointer-events-none transition-all duration-1000 ${festivalGlows.center}`}></div>

      {/* Floating Audio Controller */}
      <AudioControl
        isPlaying={isPlaying}
        isMuted={isMuted}
        onTogglePlay={togglePlay}
        onToggleMute={toggleMute}
      />

      {/* Top Header */}
      <div className="relative z-20 flex items-center justify-between w-full max-w-md mx-auto pt-2 pb-1">
        <div className="flex items-center space-x-2">
          <span className="text-xl">🪔</span>
          <span className="text-xs uppercase tracking-widest text-amber-300/80 font-semibold">Festive Greetings</span>
        </div>
        {currentStep > 0 && selectedUser && (
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20 text-amber-200">
            For: {selectedUser.name}
          </span>
        )}
      </div>

      {/* Screen Steps Breadcrumb */}
      {currentStep > 0 && (
        <div className="relative z-20 w-full max-w-xs mx-auto mt-2 mb-2 flex items-center justify-between px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-xs">
          <span className={currentStep === 1 ? 'text-amber-300 font-bold' : 'text-white/60'}>1. Diwali 🪔</span>
          <span className="text-white/20">➔</span>
          <span className={currentStep === 2 ? 'text-emerald-300 font-bold' : 'text-white/60'}>2. Govardhan 🐄</span>
          <span className="text-white/20">➔</span>
          <span className={currentStep === 3 ? 'text-rose-300 font-bold' : 'text-white/60'}>3. Bhai Dooj 💮</span>
        </div>
      )}

      {/* Centered Glassmorphism Card Container */}
      <main className="relative z-20 w-full max-w-md mx-auto my-auto py-2">
        {currentStep === 0 && (
          <ScreenWelcome
            familyMembers={familyMembers}
            onSelectUser={handleSelectUser}
          />
        )}
        {currentStep === 1 && (
          <ScreenDiwali
            selectedUser={selectedUser}
            onNext={handleNextToGovardhan}
          />
        )}
        {currentStep === 2 && (
          <ScreenGovardhan
            selectedUser={selectedUser}
            onNext={handleNextToBhaiDooj}
          />
        )}
        {currentStep === 3 && (
          <ScreenBhaiDooj
            selectedUser={selectedUser}
            onStartOver={handleStartOver}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-20 text-center text-[11px] text-white/40 py-2">
        Made with ❤️ for Vishnu Bhai, Krishna Bhai, Kamlesh Didi, Vimlesh Didi, Membati Didi & Family
      </footer>
    </div>
  );
}
