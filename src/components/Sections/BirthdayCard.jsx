import { useState } from 'react';
import { Heart, Download, Share2 } from 'lucide-react';

const BirthdayCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="min-h-screen-safe relative py-20 px-4 bg-gradient-to-b from-luxury-black via-luxury-charcoal/30 to-luxury-black">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl gold-text mb-4">
            Digital Birthday Card
          </h2>
          <p className="font-body text-xl text-luxury-cream/70">
            A personalized card just for you
          </p>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6" />
        </div>

        {/* Card */}
        <div className="flex justify-center">
          <div
            className="relative cursor-pointer group"
            style={{ perspective: '1000px' }}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <div
              className={`relative w-full max-w-md transition-transform duration-700`}
              style={{
                transformStyle: 'preserve-3d',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}
            >
              {/* Front of card */}
              <div
                className="w-80 h-96 glass-panel rounded-2xl overflow-hidden relative"
                style={{ backfaceVisibility: 'hidden' }}
              >
                {/* Border design */}
                <div className="absolute inset-2 border border-gold-500/30 rounded-xl pointer-events-none" />
                <div className="absolute inset-4 border border-gold-500/20 rounded-lg pointer-events-none" />

                {/* Content */}
                <div className="h-full flex flex-col items-center justify-center p-8 relative">
                  {/* Decorative corner elements */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-gold-500/50" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-gold-500/50" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-gold-500/50" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-gold-500/50" />

                  {/* Main content */}
                  <div className="text-center">
                    <p className="font-modern text-gold-400/70 uppercase tracking-widest text-xs mb-4">
                      A Special Birthday Wish
                    </p>
                    <h3 className="font-elegant text-6xl gold-text text-glow mb-4">
                      Happy Birthday
                    </h3>
                    <h4 className="font-display text-3xl text-gold-300">
                      Shahzaib
                    </h4>
                    <div className="mt-6 flex justify-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Heart key={i} className="w-4 h-4 text-gold-500 animate-heartbeat" style={{ animationDelay: `${i * 0.1}s` }} />
                      ))}
                    </div>
                    <p className="mt-6 font-body text-luxury-cream/50 text-sm">
                      Click to flip
                    </p>
                  </div>
                </div>
              </div>

              {/* Back of card */}
              <div
                className="absolute inset-0 w-80 h-96 glass-panel rounded-2xl overflow-hidden"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                <div className="h-full flex flex-col items-center justify-center p-8">
                  {/* Message */}
                  <div className="border-l-2 border-gold-500 pl-5 text-left mb-4">
                    <p className="font-body text-luxury-cream/90 text-base leading-relaxed italic">
                      "Meri jaan — on your 19th birthday, I want you to know that
                      you are the reason I believe beautiful things still exist.
                      Your presence, your laughter, your soul — they are the greatest
                      gift to everyone lucky enough to know you."
                    </p>
                  </div>
                  <p className="font-body text-gold-400/80 text-sm italic text-left pl-5">
                    Jeeta raho, phoolte phalo, aur hamesha muskurate raho ❤️
                  </p>

                  <div className="mt-6 text-right w-full">
                    <p className="font-elegant text-2xl text-gold-400">
                      Apki Meena, Apki Jaan
                    </p>
                    <p className="font-body text-luxury-cream/40 text-xs mt-1">
                      6 July 2026
                    </p>
                  </div>

                  {/* Click to flip back */}
                  <p className="mt-6 font-body text-luxury-cream/50 text-sm">
                    Click to flip back
                  </p>
                </div>
              </div>
            </div>

            {/* Shine effect */}
            <div className="absolute inset-0 w-80 h-96 pointer-events-none overflow-hidden rounded-2xl">
              <div className="absolute inset-0 gold-shimmer opacity-20" />
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="btn-luxury flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
            <Download className="w-4 h-4" />
            Download
          </button>
          <button className="btn-luxury flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
            <Share2 className="w-4 h-4" />
            Share
          </button>
        </div>

        {/* Customization hint */}
        <div className="mt-12 text-center">
          <p className="font-body text-luxury-cream/50 text-sm">
            Personalize the message on the back of the card with your own wishes
          </p>
        </div>
      </div>
    </section>
  );
};

export default BirthdayCard;