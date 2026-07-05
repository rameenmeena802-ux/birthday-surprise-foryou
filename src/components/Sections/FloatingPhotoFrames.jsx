import { useState } from 'react';
import { Image } from 'lucide-react';

const FloatingPhotoFrames = () => {
  const [hoveredId, setHoveredId] = useState(null);

  // ✅ PHOTOS ARRAY - Yahan photos add karein
  const photos = [
    { id: 1, url: '/images/memory1.jpg', caption: 'Our First Memory', rotation: -5 },
    { id: 2, url: '/images/memory2.jpg', caption: 'Adventures Together', rotation: 3 },
    { id: 3, url: '/images/memory3.jpg', caption: 'Special Celebration', rotation: -2 },
    { id: 4, url: '/images/memory4.jpg', caption: 'Laughing Moments', rotation: 4 },
    { id: 5, url: '/images/memory5.jpg', caption: 'Forever Moments', rotation: -3 },
    { id: 6, url: '/images/memory6.jpg', caption: 'Beautiful Smile', rotation: 2 },
    { id: 7, url: '/images/memory7.jpg', caption: 'Cherished Times', rotation: -6 },
    { id: 8, url: '/images/memory8.jpg', caption: 'Happy Days', rotation: 5 },
    { id: 9, url: '/images/memory9.jpg', caption: 'Sweet Memories', rotation: -4 },
    { id: 10, url: '/images/memory10.jpg', caption: 'Unforgettable Moments', rotation: 3 },
    { id: 11, url: '/images/memory11.jpg', caption: 'Precious Times', rotation: -2 },
    { id: 12, url: '/images/memory12.jpg', caption: 'Golden Days', rotation: 4 },
    { id: 13, url: '/images/memory13.jpg', caption: 'Always In My Heart', rotation: -5 },
    
    // ✅ NAYI PHOTOS YAHAN ADD KAREIN (id 14 se start)
    // { id: 14, url: '/images/memory14.jpg', caption: 'Your Caption Here', rotation: 2 },
    // { id: 15, url: '/images/memory15.jpg', caption: 'Another Memory', rotation: -3 },
    // { id: 16, url: '/images/memory16.jpg', caption: 'Special Moment', rotation: 4 },
    // { id: 17, url: '/images/memory17.jpg', caption: 'Beautiful Day', rotation: -2 },
    // { id: 18, url: '/images/memory18.jpg', caption: 'Cherished Memory', rotation: 5 },
    // { id: 19, url: '/images/memory19.jpg', caption: 'Happy Times', rotation: -4 },
    // { id: 20, url: '/images/memory20.jpg', caption: 'Forever In My Heart', rotation: 3 },
  ];

  // ✅ POSITIONS ARRAY - Yahan positions add karein (photos ke hisaab se)
  const getPosition = (index) => {
    const positions = [
      // Row 1 (Top)
      { left: '5%', top: '5%' },
      { left: '25%', top: '2%' },
      { left: '45%', top: '0%' },
      { left: '65%', top: '3%' },
      { left: '85%', top: '5%' },
      
      // Row 2 (Middle-Top)
      { left: '12%', top: '30%' },
      { left: '35%', top: '28%' },
      { left: '55%', top: '30%' },
      { left: '78%', top: '28%' },
      
      // Row 3 (Middle-Bottom)
      { left: '5%', top: '55%' },
      { left: '30%', top: '58%' },
      { left: '55%', top: '60%' },
      { left: '80%', top: '55%' },
      
      // ✅ NAYI POSITIONS YAHAN ADD KAREIN
      // Row 4 (Bottom)
      // { left: '15%', top: '80%' },
      // { left: '40%', top: '78%' },
      // { left: '65%', top: '82%' },
      // { left: '88%', top: '80%' },
      
      // Row 5 (Very Bottom)
      // { left: '10%', top: '92%' },
      // { left: '35%', top: '95%' },
      // { left: '60%', top: '90%' },
      // { left: '82%', top: '93%' },
    ];
    return positions[index % positions.length];
  };

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-500/5 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl gold-text mb-4">
            Favorite Memories
          </h2>
          <p className="font-body text-xl text-luxury-cream/70">
            Moments captured in time, treasured forever
          </p>
          <p className="font-body text-sm text-gold-400/50 mt-2">
            {photos.length} beautiful memories
          </p>
        </div>

        {/* Floating frames */}
        <div className="relative h-[600px] md:h-[700px]">
          {photos.map((photo, index) => {
            const pos = getPosition(index);

            return (
              <div
                key={photo.id}
                className="absolute w-28 md:w-44 cursor-pointer transition-all duration-500 animate-float"
                style={{
                  left: pos.left,
                  top: pos.top,
                  transform: `rotate(${photo.rotation}deg) ${hoveredId === photo.id ? 'scale(1.3) rotate(0deg) !important' : ''}`,
                  zIndex: hoveredId === photo.id ? 30 : 10,
                  animationDelay: `${index * 0.3}s`,
                }}
                onMouseEnter={() => setHoveredId(photo.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Frame */}
                <div className="relative">
                  {/* Gold border frame */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 rounded-sm shadow-luxury" />

                  {/* Inner frame */}
                  <div className="relative glass-panel aspect-square overflow-hidden">
                    {/* Photo */}
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="w-full h-full bg-luxury-charcoal flex items-center justify-center">
                            <svg class="w-10 h-10 text-gold-500/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        `;
                      }}
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Caption tag */}
                  <div
                    className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-luxury-charcoal/90 px-3 py-1 rounded text-center transition-opacity duration-300"
                    style={{ opacity: hoveredId === photo.id ? 1 : 0.7 }}
                  >
                    <span className="font-body text-xs text-gold-400">{photo.caption}</span>
                  </div>
                </div>

                {/* 3D shadow effect */}
                <div
                  className="absolute inset-0 -z-10 bg-luxury-black/50 blur-sm rounded"
                  style={{
                    transform: `translate(4px, 4px) rotate(${photo.rotation + 2}deg)`,
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Add Photos Instruction */}
        <div className="mt-12 text-center">
          <div className="glass-panel p-6 rounded-xl max-w-2xl mx-auto">
            <h3 className="font-display text-lg gold-text mb-2">📸 Add Your Photos</h3>
            <p className="font-body text-luxury-cream/60 text-sm">
              Place your images in <code className="text-gold-400 bg-luxury-black/30 px-2 py-1 rounded">public/images/</code>
            </p>
            <p className="font-body text-luxury-cream/40 text-xs mt-2">
              Name them: memory1.jpg, memory2.jpg ... memory13.jpg
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {Array.from({ length: 13 }, (_, i) => (
                <span key={i} className="text-xs text-gold-500/40 bg-gold-500/10 px-2 py-0.5 rounded">
                  memory{i + 1}.jpg
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Instruction */}
        <div className="mt-8 text-center">
          <p className="font-body text-luxury-cream/50 text-sm">
            Hover over photos to see them larger ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default FloatingPhotoFrames;