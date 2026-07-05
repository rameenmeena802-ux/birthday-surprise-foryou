import { useState, useEffect } from 'react';
import { Calendar, Sparkles } from 'lucide-react';

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isBirthday, setIsBirthday] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      
      // ✅ PAKISTAN TIME (UTC+5) - July 6, 2026 at 12:00 AM
      let birthday = new Date('2026-07-06T00:00:00+05:00');

      // Agar birthday guzar gaya hai toh next year
      if (now > birthday) {
        birthday = new Date('2027-07-06T00:00:00+05:00');
      }

      const difference = birthday.getTime() - now.getTime();

      if (difference <= 0) {
        setIsBirthday(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBlock = ({ value, label }) => (
    <div className="relative group">
      <div className="glass-panel p-4 md:p-6 rounded-xl min-w-[70px] md:min-w-[100px] hover-lift">
        <div className="text-center">
          <span className="font-display text-3xl md:text-5xl gold-text text-glow">
            {value.toString().padStart(2, '0')}
          </span>
          <span className="block font-modern text-xs text-gold-400/70 uppercase tracking-widest mt-2">
            {label}
          </span>
        </div>
      </div>
      <div className="absolute inset-0 rounded-xl bg-gold-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );

  return (
    <section className="min-h-screen-safe relative flex items-center justify-center py-20 px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold-500/20 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10">
        {isBirthday ? (
          <div className="animate-scale-in">
            <div className="mb-8">
              <Sparkles className="w-16 h-16 text-gold-400 mx-auto animate-sparkle mb-4" />
              <h2 className="font-elegant text-6xl md:text-8xl gold-text text-glow">
                It's Finally Here!
              </h2>
            </div>
            <p className="font-display text-3xl md:text-4xl text-gold-300 mt-4">
              July 6th has arrived!
            </p>
            <p className="font-body text-xl text-luxury-cream/80 mt-4">
              Happy Birthday, Shahzaib!
            </p>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <Calendar className="w-12 h-12 text-gold-400 mx-auto mb-4 animate-float" />
              <h2 className="font-display text-4xl md:text-5xl gold-text mb-2">
                Countdown to July 6th
              </h2>
              <p className="font-body text-xl text-luxury-cream/70">
                The special day is approaching...
              </p>
            </div>

            <div className="flex justify-center gap-3 md:gap-6 flex-wrap">
              <TimeBlock value={timeLeft.days} label="Days" />
              <TimeBlock value={timeLeft.hours} label="Hours" />
              <TimeBlock value={timeLeft.minutes} label="Minutes" />
              <TimeBlock value={timeLeft.seconds} label="Seconds" />
            </div>

            <div className="mt-12 flex justify-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold-500/50 self-center" />
              <Sparkles className="w-6 h-6 text-gold-400 animate-sparkle" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold-500/50 self-center" />
            </div>

            <p className="mt-8 font-body text-luxury-cream/60 text-sm">
              Until your special day arrives
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default CountdownSection;