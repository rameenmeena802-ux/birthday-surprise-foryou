import { useEffect, useState } from 'react';
import { Moon } from 'lucide-react';

const NightSkySection = () => {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);

  useEffect(() => {
    // Generate static stars
    const starData = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 3,
    }));
    setStars(starData);

    // Generate shooting stars
    const shootingStarData = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      startX: Math.random() * 60 + 20,
      startY: Math.random() * 40,
      delay: Math.random() * 8,
    }));
    setShootingStars(shootingStarData);
  }, []);

  return (
    <section className="min-h-screen-safe relative py-20 px-4 overflow-hidden">
      {/* Night sky background */}
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-[#0d1b2a] to-[#1b263b]" />

      {/* Stars */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full animate-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: Math.random() > 0.8 ? '#FFD700' : '#FFFFFF',
              boxShadow: `0 0 ${star.size * 2}px currentColor`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      {shootingStars.map((ss) => (
        <div
          key={ss.id}
          className="absolute h-px bg-gradient-to-r from-white to-transparent animate-[shootingStar_2s_ease-out_infinite]"
          style={{
            left: `${ss.startX}%`,
            top: `${ss.startY}%`,
            width: '80px',
            transform: 'rotate(-45deg)',
            animationDelay: `${ss.delay}s`,
            opacity: 0,
          }}
        />
      ))}

      {/* Moon */}
      <div className="absolute top-10 right-10 md:right-20">
        <div className="relative">
          {/* Moon glow */}
          <div className="absolute -inset-10 rounded-full bg-yellow-100/20 blur-2xl animate-pulse" />

          {/* Moon body */}
          <div className="relative w-20 h-20 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-yellow-100 via-yellow-50 to-gray-100 shadow-[0_0_60px_rgba(255,255,200,0.5)]">
            {/* Moon craters */}
            <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-gray-200/50" />
            <div className="absolute bottom-6 right-4 w-4 h-4 rounded-full bg-gray-200/40" />
            <div className="absolute top-1/3 right-6 w-2 h-2 rounded-full bg-gray-200/30" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto pt-32 md:pt-48">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Moon className="w-8 h-8 text-yellow-100 animate-float" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-yellow-100 mb-4">
            Under the Starlit Sky
          </h2>
          <p className="font-body text-xl text-blue-100/70 max-w-2xl mx-auto">
            Wishing upon every star for your dreams to come true
          </p>
        </div>

        {/* Constellation wishes */}
        <div className="glass-panel p-8 rounded-xl max-w-2xl mx-auto">
          <h3 className="font-display text-2xl gold-text mb-6 text-center">
            Birthday Wishes Written in the Stars
          </h3>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '🌟', wish: 'Endless happiness and joy' },
              { icon: '✨', wish: 'Dreams that come true' },
              { icon: '💫', wish: 'Success in all you do' },
              { icon: '⭐', wish: 'Love that never fades' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-lg bg-luxury-charcoal/50"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="font-body text-luxury-cream/80">{item.wish}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="font-elegant text-xl text-yellow-200/80">
              "May your birthday be as beautiful as the night sky"
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shootingStar {
          0% {
            opacity: 0;
            transform: translateX(0) translateY(0) rotate(-45deg);
          }
          5% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(-300px) translateY(300px) rotate(-45deg);
          }
        }
      `}</style>
    </section>
  );
};

export default NightSkySection;