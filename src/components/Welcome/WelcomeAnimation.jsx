import { useState, useEffect } from 'react';
import { Sparkles, Gift } from 'lucide-react';
import { Balloons, Confetti, Fireworks, FloatingHearts, Particles, StarsBackground } from '../Effects';

const WelcomeAnimation = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);
  const [showText, setShowText] = useState(false);
  const [showSubtext, setShowSubtext] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Happy Birthday Shahzaib';

  useEffect(() => {
    // Phase progression
    const timer1 = setTimeout(() => setPhase(1), 500);
    const timer2 = setTimeout(() => setShowText(true), 1000);
    const timer3 = setTimeout(() => setShowSubtext(true), 2000);
    const timer4 = setTimeout(() => setShowButton(true), 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  useEffect(() => {
    if (showText && typedText.length < fullText.length) {
      const timer = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [showText, typedText, fullText]);

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-luxury-black overflow-hidden">
      {/* Background effects */}
      <StarsBackground />
      <Particles />
      <Balloons />
      <FloatingHearts />
      <Confetti active={phase >= 1} />
      <Fireworks active={phase >= 2} />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-luxury-black/50 to-luxury-black pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        {/* Floating decorative elements */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2">
          <Sparkles className="w-12 h-12 text-gold-400 animate-sparkle" />
        </div>

        {/* Main title */}
        <div className="mb-8">
          <h1 className="font-elegant text-responsive-xl gold-text text-glow">
            {typedText}
            <span className="animate-blink border-r-4 border-gold-500 ml-1" />
          </h1>
        </div>

        {/* Subtitle */}
        {showSubtext && (
          <div className="animate-slide-up">
            <p className="font-body text-2xl md:text-3xl text-luxury-cream/90 mb-2">
              Turning <span className="gold-text font-display text-4xl md:text-5xl">19</span>
            </p>
            <p className="font-body text-xl text-luxury-cream/70 mb-4">
              on July 6th, 2026
            </p>
            <div className="flex items-center justify-center gap-2 text-gold-400">
              <span className="w-8 h-px bg-gradient-to-r from-transparent to-gold-400" />
              <span className="font-display text-lg">A Day to Remember</span>
              <span className="w-8 h-px bg-gradient-to-l from-transparent to-gold-400" />
            </div>
          </div>
        )}

        {/* Open button */}
        {showButton && (
          <button
            onClick={onComplete}
            className="btn-luxury mt-12 animate-scale-in group"
          >
            <span className="flex items-center gap-3">
              <Gift className="w-5 h-5 group-hover:animate-bounce-soft" />
              Open Your Surprise
              <Sparkles className="w-4 h-4 animate-sparkle" />
            </span>
          </button>
        )}

        {/* Decorative bottom element */}
        {showButton && (
          <div className="mt-16 animate-fade-in">
            <div className="w-px h-20 mx-auto bg-gradient-to-b from-gold-500/50 to-transparent" />
            <div className="w-2 h-2 mx-auto rounded-full bg-gold-500 animate-pulse-glow" />
          </div>
        )}
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-soft">
        <div className="flex flex-col items-center text-gold-400/60">
          <span className="text-xs font-modern uppercase tracking-widest mb-2">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WelcomeAnimation;