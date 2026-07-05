import { useState } from 'react';
import { Sparkles, Heart } from 'lucide-react';

const GiftBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    setTimeout(() => setShowMessage(true), 800);
  };

  return (
    <section className="min-h-screen-safe relative flex items-center justify-center py-20 px-4">
      <div className="text-center">
        {/* Title */}
        <h2 className="font-display text-4xl md:text-5xl gold-text mb-4">
          A Special Gift For You
        </h2>
        <p className="font-body text-xl text-luxury-cream/70 mb-12">
          Click to reveal your surprise message
        </p>

        {/* Gift box container */}
        <div className="relative inline-block perspective-1000">
          {/* Decorative circles */}
          <div className="absolute -inset-20 border border-gold-500/10 rounded-full animate-[spin_30s_linear_infinite]" />
          <div className="absolute -inset-16 border border-gold-500/20 rounded-full animate-[spin_25s_linear_infinite_reverse]" />

          {/* Gift box */}
          <div
            className={`relative cursor-pointer transform transition-all duration-1000 ${
              isOpen ? 'scale-90' : 'hover:scale-105'
            }`}
            onClick={handleOpen}
          >
            {/* Box lid */}
            <div
              className={`absolute -top-6 left-0 right-0 h-12 origin-bottom transition-transform duration-1000 ${
                isOpen ? 'animate-[door-open_1s_ease-out_forwards]' : ''
              }`}
              style={{
                transformStyle: 'preserve-3d',
                transform: isOpen ? 'perspective(1000px) rotateX(-120deg)' : '',
              }}
            >
              <div className="w-48 h-12 mx-auto bg-gradient-to-br from-gold-500 via-gold-400 to-gold-600 rounded-t-lg shadow-luxury relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4 h-full bg-gradient-to-b from-red-600 via-red-500 to-red-700" />
                </div>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="relative">
                    <div className="w-12 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full transform -rotate-30 -translate-x-2" />
                    <div className="w-12 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full transform rotate-30 translate-x-2 absolute top-0" />
                    <div className="w-4 h-4 bg-red-600 rounded-full absolute top-2 left-1/2 -translate-x-1/2" />
                  </div>
                </div>
              </div>
            </div>

            {/* Box body */}
            <div className="w-48 h-40 mx-auto bg-gradient-to-br from-gold-500 via-gold-400 to-gold-600 rounded-b-lg shadow-luxury relative overflow-hidden">
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-full bg-gradient-to-r from-red-600 via-red-500 to-red-700" />
              <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-red-500 to-red-700" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50" />

              {!isOpen && (
                <>
                  <Sparkles className="absolute top-4 left-4 w-4 h-4 text-gold-200 animate-sparkle" />
                  <Sparkles className="absolute bottom-8 right-4 w-4 h-4 text-gold-200 animate-sparkle" style={{ animationDelay: '0.5s' }} />
                </>
              )}
            </div>

            <div className={`absolute inset-0 rounded-lg transition-all duration-500 ${
              isOpen ? 'opacity-0' : 'animate-glow'
            }`} />
          </div>

          {/* ✅ MESSAGE REVEAL - FIXED (Sab se upar) */}
          {showMessage && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
              <div className="relative max-w-lg w-full">
                {/* Close button */}
                <button
                  onClick={() => {
                    setShowMessage(false);
                    setIsOpen(false);
                  }}
                  className="absolute -top-4 -right-4 z-10 w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="glass-panel p-6 md:p-8 rounded-2xl shadow-2xl border-2 border-gold-500/50 bg-luxury-black/95 backdrop-blur-xl animate-scale-in max-h-[80vh] overflow-y-auto">
                  <div className="flex justify-center mb-4">
                    <Heart className="w-12 h-12 text-gold-400 animate-heartbeat" />
                  </div>
                  <h3 className="font-elegant text-3xl md:text-4xl gold-text mb-1 text-center">
                    Meri Jaan, Bebo
                  </h3>
                  <p className="font-modern text-xs text-gold-500/60 uppercase tracking-widest mb-5 text-center">
                    A note from the heart
                  </p>
                  <p className="font-body text-luxury-cream/90 text-base md:text-lg leading-relaxed mb-4 text-center">
                    If I could wrap up every smile, every laugh, and every beautiful memory
                    we've shared and put it into a gift — this would be it. You are my
                    favorite person in every room, in every moment, in every season of life.
                  </p>
                  <p className="font-body text-luxury-cream/80 text-base leading-relaxed italic text-center">
                    "Tumhari ek hansi meri poori duniya roshan kar deti hai."
                  </p>
                  <div className="mt-6 pt-4 border-t border-gold-500/20 flex justify-between items-center">
                    <span className="font-body text-xs text-gold-400/50">6 July 2026</span>
                    <p className="font-elegant text-2xl text-gold-400">
                      Apki Jaan Apki Biwi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Instruction when closed */}
        {!isOpen && !showMessage && (
          <p className="mt-8 font-modern text-gold-400/60 text-sm uppercase tracking-widest animate-pulse">
            Click the gift to open
          </p>
        )}
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes scale-in {
          0% {
            transform: scale(0.8) translateY(20px);
            opacity: 0;
          }
          100% {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }
        .animate-scale-in {
          animation: scale-in 0.5s ease-out forwards;
        }
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default GiftBox;