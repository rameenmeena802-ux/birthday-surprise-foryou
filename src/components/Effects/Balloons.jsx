import { useEffect, useState } from 'react';

const BALLOON_COLORS = [
  { body: '#B8960F', shine: 'rgba(255,255,255,0.3)' },   // gold
  { body: '#c0392b', shine: 'rgba(255,150,150,0.3)' },   // deep red
  { body: '#1a6e8e', shine: 'rgba(100,200,255,0.3)' },   // teal blue
  { body: '#6c3483', shine: 'rgba(200,150,255,0.3)' },   // deep purple
  { body: '#117a65', shine: 'rgba(100,255,200,0.3)' },   // deep green
  { body: '#d35400', shine: 'rgba(255,180,100,0.3)' },   // burnt orange
];

const Balloons = () => {
  const [balloons, setBalloons] = useState([]);

  useEffect(() => {
    const balloonData = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: 5 + (i / 8) * 90 + (Math.random() * 8 - 4),
      delay: Math.random() * 12,
      color: BALLOON_COLORS[i % BALLOON_COLORS.length],
      size: 24 + Math.random() * 14,
      duration: 18 + Math.random() * 10,
    }));
    setBalloons(balloonData);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 3 }}>
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="absolute"
          style={{
            left: `${balloon.x}%`,
            bottom: '-130px',
            animation: `rise ${balloon.duration}s linear infinite`,
            animationDelay: `${balloon.delay}s`,
            opacity: 0.55,
          }}
        >
          {/* Balloon body */}
          <svg
            width={balloon.size}
            height={balloon.size * 1.3}
            viewBox="0 0 40 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Body */}
            <ellipse cx="20" cy="20" rx="18" ry="20" fill={balloon.color.body} />
            {/* Shine */}
            <ellipse cx="13" cy="11" rx="5" ry="4" fill={balloon.color.shine} transform="rotate(-20 13 11)" />
            {/* Knot triangle */}
            <polygon points="17,39 23,39 20,45" fill={balloon.color.body} />
            {/* String */}
            <line x1="20" y1="45" x2="20" y2="52" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default Balloons;