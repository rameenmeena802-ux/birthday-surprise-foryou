import { useEffect, useState } from 'react';
import { Heart, PartyPopper, Sparkles, Cake } from 'lucide-react';
import { Confetti, Fireworks, Balloons, FloatingHearts, Particles, StarsBackground } from '../Effects';

const FinalCelebration = ({ onScrollToTop }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen-safe relative flex items-center justify-center py-20 px-4 overflow-hidden">
      {/* All effects */}
      <StarsBackground />
      <Particles />
      <Balloons />
      <FloatingHearts />
      <Confetti active />
      <Fireworks active />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/50 via-transparent to-luxury-black/80 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center">
        {showContent && (
          <div className="animate-scale-in">
            {/* Icons */}
            <div className="flex justify-center gap-4 mb-8">
              <Heart className="w-8 h-8 text-gold-400 animate-heartbeat" />
              <Cake className="w-8 h-8 text-gold-400 animate-float" />
              <PartyPopper className="w-8 h-8 text-gold-400 animate-bounce-soft" />
            </div>

            {/* Main message */}
            <h1 className="font-elegant text-5xl md:text-7xl gold-text text-glow mb-6">
              Happy Birthday, Shahzaib!
            </h1>

            <h2 className="font-display text-3xl md:text-4xl text-gold-300 mb-8">
              May Your Day Be As Amazing As You Are
            </h2>

            {/* Message box */}
            <div className="glass-panel p-8 rounded-xl max-w-2xl mx-auto mb-12">
              <p className="font-body text-xl text-luxury-cream/90 leading-relaxed">
                As this celebration comes to an end, remember that you are loved,
                cherished, and celebrated every single day. Here's to 19 wonderful
                years and countless more to come!
              </p>

              <div className="mt-6 flex justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Sparkles key={i} className="w-5 h-5 text-gold-400 animate-sparkle" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
            </div>

            {/* Nickname highlight */}
            <div className="mb-12">
              <p className="font-body text-luxury-cream/60 mb-2">
                With all my love for
              </p>
              <p className="font-elegant text-4xl gold-text text-glow">
                Bebo
              </p>
            </div>

            {/* Scroll to top button */}
            <button
              onClick={onScrollToTop}
              className="btn-luxury flex items-center gap-2 mx-auto"
            >
              <Sparkles className="w-5 h-5" />
              Celebrate Again
              <Sparkles className="w-5 h-5" />
            </button>

            {/* Decorative footer */}
            <div className="mt-16 flex items-center justify-center gap-4 text-gold-500/40">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-gold-500/50" />
              <span className="font-modern text-xs uppercase tracking-widest">6 July 2026</span>
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-gold-500/50" />
            </div>

            <p className="mt-8 font-body text-gold-400/50 text-sm">
              Made with love, just for you
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FinalCelebration;