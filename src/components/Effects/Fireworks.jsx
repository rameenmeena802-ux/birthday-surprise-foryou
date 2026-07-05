import { useEffect, useState, useCallback } from 'react';

const Fireworks = ({ active = true }) => {
  const [fireworks, setFireworks] = useState([]);

  const createFirework = useCallback(() => {
    const colors = ['#D4AF37', '#FFD700', '#FFA500', '#FF6B6B', '#4ECDC4', '#FFFFFF'];
    const sparkCount = 12 + Math.floor(Math.random() * 8);
    const sparks = Array.from({ length: sparkCount }, () => ({
      angle: Math.random() * 360,
      distance: 50 + Math.random() * 100,
    }));

    const newFirework = {
      id: Date.now() + Math.random(),
      x: 10 + Math.random() * 80,
      y: 10 + Math.random() * 60,
      color: colors[Math.floor(Math.random() * colors.length)],
      sparks,
    };

    setFireworks((prev) => [...prev.slice(-5), newFirework]);
  }, []);

  useEffect(() => {
    if (!active) {
      setFireworks([]);
      return;
    }

    // Initial firework
    const timer1 = setTimeout(createFirework, 500);

    // Continuous fireworks
    const interval = setInterval(createFirework, 1500);

    return () => {
      clearTimeout(timer1);
      clearInterval(interval);
    };
  }, [active, createFirework]);

  if (!active || fireworks.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
      {fireworks.map((firework) => (
        <div
          key={firework.id}
          className="absolute"
          style={{
            left: `${firework.x}%`,
            top: `${firework.y}%`,
          }}
        >
          {/* Center spark */}
          <div
            className="absolute w-2 h-2 rounded-full animate-ping"
            style={{ backgroundColor: firework.color }}
          />

          {/* Sparks */}
          {firework.sparks.map((spark, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: firework.color,
                animation: 'firework-explode 1s ease-out forwards',
                transform: `rotate(${spark.angle}deg) translateY(-${spark.distance}px)`,
                boxShadow: `0 0 6px ${firework.color}`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Fireworks;