import React from 'react';

export default function FloatingParticles({ screen }) {
  const particleConfigs = {
    0: ['✨', '🌸', '🪔', '⭐', '🪷', '✨', '💛', '🌸'],
    1: ['🪔', '🎇', '🎆', '🪔', '✨', '🎇', '🪔', '🌟'],
    2: ['🐄', '🌿', '🦚', '⛰️', '🌾', '🐄', '🌿', '🍃'],
    3: ['💮', '🔴', '🍬', '🏵️', '🌺', '🔴', '💮', '✨']
  };

  const emojis = particleConfigs[screen] || particleConfigs[0];

  const particles = [
    { id: 1, left: '6%', delay: '0s', duration: '7.5s', size: '1.4rem' },
    { id: 2, left: '18%', delay: '2.5s', duration: '8.2s', size: '1.8rem' },
    { id: 3, left: '32%', delay: '4.8s', duration: '6.8s', size: '1.3rem' },
    { id: 4, left: '48%', delay: '1.2s', duration: '9.0s', size: '2.0rem' },
    { id: 5, left: '65%', delay: '3.6s', duration: '7.0s', size: '1.5rem' },
    { id: 6, left: '82%', delay: '0.8s', duration: '8.5s', size: '1.9rem' },
    { id: 7, left: '94%', delay: '5.2s', duration: '6.5s', size: '1.4rem' },
    { id: 8, left: '12%', delay: '6.0s', duration: '8.8s', size: '1.7rem' },
    { id: 9, left: '26%', delay: '3.1s', duration: '7.4s', size: '1.6rem' },
    { id: 10, left: '41%', delay: '7.2s', duration: '9.2s', size: '1.3rem' },
    { id: 11, left: '57%', delay: '5.5s', duration: '8.1s', size: '1.8rem' },
    { id: 12, left: '74%', delay: '2.0s', duration: '7.8s', size: '1.5rem' },
    { id: 13, left: '88%', delay: '4.2s', duration: '6.9s', size: '1.7rem' },
    { id: 14, left: '2%', delay: '4.9s', duration: '8.4s', size: '1.3rem' },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p, idx) => (
        <div
          key={p.id}
          className="floating-item select-none"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            fontSize: p.size,
            bottom: '-40px'
          }}
        >
          {emojis[idx % emojis.length]}
        </div>
      ))}
    </div>
  );
}

