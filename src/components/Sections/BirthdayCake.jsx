import { useState } from 'react';
import { Flame, Wind } from 'lucide-react';

const BirthdayCake = () => {
  const [candlesLit, setCandlesLit] = useState(true);
  const [blowing, setBlowing] = useState(false);
  const [showWish, setShowWish] = useState(false);

  const handleBlow = () => {
    if (!candlesLit) return;

    setBlowing(true);
    setTimeout(() => {
      setCandlesLit(false);
      setBlowing(false);
      setTimeout(() => setShowWish(true), 500);
    }, 1000);
  };

  const relightCandles = () => {
    setCandlesLit(true);
    setShowWish(false);
  };

  const candleCount = 19;

  return (
    <section className="min-h-screen-safe relative flex items-center justify-center py-20 px-4">
      <div className="text-center">
        {/* Title */}
        <h2 className="font-display text-3xl md:text-4xl gold-text mb-4">
          Make a Wish
        </h2>
        <p className="font-body text-lg text-luxury-cream/70 mb-8">
          {candlesLit ? 'Blow out the candles and make your birthday wish!' : 'Your wish has been sent to the stars...'}
        </p>

        {/* Cake Container */}
        <div className="relative inline-block">
          {/* Smoke effect when blowing */}
          {blowing && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 rounded-full bg-gray-400/50 animate-[smoke_1s_ease-out_forwards]"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          )}

          {/* Candles */}
          <div className="flex justify-center gap-1 mb-2 px-4">
            {[...Array(Math.min(candleCount, 10))].map((_, i) => (
              <div key={i} className="relative">
                {/* Candle stick */}
                <div
                  className={`w-1 h-8 mx-0.5 rounded-t-sm ${
                    candlesLit ? 'bg-gradient-to-t from-pink-400 to-pink-300' : 'bg-gradient-to-t from-gray-600 to-gray-500'
                  }`}
                >
                  {/* Flame */}
                  {candlesLit && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="relative">
                        <Flame
                          className={`w-4 h-5 text-orange-400 animate-candle ${
                            blowing ? 'animate-[shake_0.1s_ease-in-out_infinite]' : ''
                          }`}
                        />
                        <div className="absolute inset-0 blur-sm">
                          <Flame className="w-4 h-5 text-yellow-300 animate-candle" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Second row of candles */}
          <div className="flex justify-center gap-1 mb-2 px-8">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="relative">
                <div
                  className={`w-1 h-6 mx-0.5 rounded-t-sm ${
                    candlesLit ? 'bg-gradient-to-t from-purple-400 to-purple-300' : 'bg-gradient-to-t from-gray-600 to-gray-500'
                  }`}
                >
                  {candlesLit && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Flame className="w-3 h-4 text-orange-400 animate-candle" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Cake */}
          <div className="relative">
            {/* Frosting drip */}
            <div className="absolute -top-2 left-0 right-0 flex justify-around">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 bg-gradient-to-b from-cream-100 to-gold-100 rounded-b-full"
                  style={{ height: `${10 + Math.random() * 15}px` }}
                />
              ))}
            </div>

            {/* Top layer */}
            <div className="w-48 md:w-72 h-16 md:h-20 bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 rounded-lg shadow-lg relative">
              <div className="absolute inset-x-2 top-2 h-2 bg-gold-300/30 rounded-full" />
            </div>

            {/* Middle layer */}
            <div className="w-56 md:w-80 h-20 md:h-24 -mt-1 bg-gradient-to-br from-gold-300 via-gold-400 to-gold-500 rounded-lg shadow-lg relative">
              <div className="absolute inset-4 border border-gold-200/30 rounded" />
              <div className="absolute inset-x-4 top-1/2 h-px bg-gold-200/20" />
            </div>

            {/* Bottom layer */}
            <div className="w-64 md:w-96 h-24 md:h-28 -mt-1 bg-gradient-to-br from-gold-200 via-gold-300 to-gold-400 rounded-lg shadow-luxury relative">
              <div className="absolute inset-4 border border-gold-100/20 rounded" />
              {/* Decorations */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-around">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-gold-600/50" />
                ))}
              </div>
            </div>

            {/* Plate */}
            <div className="w-72 md:w-[26rem] h-4 -mt-1 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 rounded-t-full shadow-xl" />
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-8">
          {candlesLit ? (
            <button
              onClick={handleBlow}
              className="btn-luxury flex items-center gap-2 mx-auto"
              disabled={blowing}
            >
              <Wind className={`w-5 h-5 ${blowing ? 'animate-pulse' : ''}`} />
              {blowing ? 'Blowing...' : 'Blow the Candles'}
            </button>
          ) : (
            <div className="space-y-4">
              {showWish && (
                <div className="animate-slide-up">
                  <p className="font-elegant text-2xl md:text-3xl gold-text mb-4">
                    Happy Birthday, Shahzaib!
                  </p>
                  <p className="font-body text-lg text-luxury-cream/80">
                    May all your dreams come true!including me
                  </p>
                </div>
              )}
              <button
                onClick={relightCandles}
                className="btn-luxury flex items-center gap-2 mx-auto opacity-70 hover:opacity-100 transition-opacity"
              >
                <Flame className="w-5 h-5" />
                Relight Candles
              </button>
            </div>
          )}
        </div>

        {/* 19 years badge */}
        <div className="mt-12 inline-flex items-center gap-3 glass-panel px-6 py-3 rounded-full">
          <span className="font-display text-3xl gold-text">19</span>
          <span className="font-body text-luxury-cream/70">Years of Amazing Journey</span>
        </div>
      </div>
    </section>
  );
};

export default BirthdayCake;