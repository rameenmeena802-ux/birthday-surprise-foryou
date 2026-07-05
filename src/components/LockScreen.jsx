import { useState, useEffect, useRef } from 'react';
import { Lock, Sparkles } from 'lucide-react';

const LockScreen = ({ onUnlock, correctPassword }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      onUnlock();
    } else {
      setError(true);
      setShaking(true);
      setTimeout(() => {
        setShaking(false);
        setError(false);
        setPassword('');
      }, 800);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-luxury-black overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />

      {/* Floating stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: Math.random() > 0.7 ? '#FFD700' : 'white',
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-gold-500/30 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main lock container */}
      <div
        className={`relative z-10 text-center transition-all duration-500 ${
          shaking ? 'animate-[shake_0.5s_ease-in-out]' : ''
        }`}
      >
        {/* Decorative circles */}
        <div className="absolute inset-0 -m-20 border border-gold-500/10 rounded-full animate-[spin_30s_linear_infinite]" />
        <div className="absolute inset-0 -m-16 border border-gold-500/20 rounded-full animate-[spin_25s_linear_infinite_reverse]" />
        <div className="absolute inset-0 -m-12 border border-gold-500/30 rounded-full animate-[spin_20s_linear_infinite]" />

        {/* Lock icon */}
        <div className="mb-8 relative inline-block">
          <div className="w-24 h-24 rounded-full glass-panel flex items-center justify-center animate-glow">
            <Lock
              className={`w-10 h-10 transition-all duration-300 ${
                error ? 'text-red-500' : 'text-gold-500'
              }`}
            />
          </div>
          <div className="absolute -top-1 -right-1">
            <Sparkles className="w-6 h-6 text-gold-400 animate-sparkle" />
          </div>
        </div>

        {/* Title */}
        <h1 className="font-display text-3xl md:text-4xl mb-2 gold-text">
          A Special Surprise Awaits
        </h1>
        <p className="text-luxury-cream/70 text-lg mb-8 font-body">
          Enter the secret code to unlock the celebration
        </p>

        {/* Password input */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              ref={inputRef}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
              maxLength={4}
              className="input-luxury text-center text-2xl tracking-[1em] w-48 h-16"
              placeholder="----"
              autoComplete="off"
            />

            {/* Input glow effect */}
            <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute inset-0 rounded-lg bg-gold-500/10 blur-xl" />
            </div>
          </div>

          {/* Password dots display */}
          <div className="flex justify-center gap-4">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  password.length > i
                    ? 'bg-gold-500 border-gold-500 shadow-[0_0_10px_rgba(212,175,55,0.5)]'
                    : 'border-gold-500/30'
                }`}
              />
            ))}
          </div>

          {/* Error message */}
          {error && (
            <p className="text-red-400 text-sm font-medium animate-fade-in">
              Incorrect code. Please try again.
            </p>
          )}

          {/* Submit button */}
          <button
            type="submit"
            className="btn-luxury mt-4"
          >
            <span className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Unlock Surprise
            </span>
          </button>
        </form>

        {/* Hint */}
        <p className="mt-8 text-luxury-cream/40 text-sm font-body italic">
          Hint: The special day... 🎂
        </p>
      </div>

      {/* CSS for shake animation */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
      `}</style>
    </div>
  );
};

export default LockScreen;