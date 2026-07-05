import { useEffect, useState } from 'react';

const StarsBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const starData = Array.from({ length: 200 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 3,
      opacity: 0.3 + Math.random() * 0.7,
    }));
    setStars(starData);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: Math.random() > 0.9 ? '#FFD700' : '#FFFFFF',
            boxShadow: `0 0 ${star.size * 2}px currentColor`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default StarsBackground;