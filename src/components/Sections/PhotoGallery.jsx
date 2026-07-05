import { useState } from 'react';
import { X, Heart, Plus } from 'lucide-react';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // ✅ PHOTOS YAHAN ADD KAREIN
  const images = [
    { id: 1, url: '/images/photo1.jpg', caption: 'Our First Meeting' },
    { id: 2, url: '/images/photo2.jpg', caption: 'Birthday Celebration' },
    { id: 3, url: '/images/photo3.jpg', caption: 'Adventure Together' },
    { id: 4, url: '/images/photo4.jpg', caption: 'Laughing Moments' },
    { id: 5, url: '/images/photo5.jpg', caption: 'Special Day' },
    { id: 6, url: '/images/photo6.jpg', caption: 'Making Memories' },
    { id: 7, url: '/images/photo7.jpg', caption: 'Best Friends' },
    { id: 8, url: '/images/photo8.jpg', caption: 'Forever Cherished' },
    
    // ✅ NAYI PHOTOS YAHAN ADD KAREIN
    // { id: 9, url: '/images/photo9.jpg', caption: 'Your Caption Here' },
    // { id: 10, url: '/images/photo10.jpg', caption: 'Another Memory' },
    // { id: 11, url: '/images/photo11.jpg', caption: 'Special Moment' },
    // { id: 12, url: '/images/photo12.jpg', caption: 'Beautiful Day' },
  ];

  return (
    <section className="min-h-screen-safe relative py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-500/5 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl gold-text mb-4">
            Our Beautiful Memories
          </h2>

          <p className="font-body text-xl text-luxury-cream/70 max-w-2xl mx-auto">
            Capturing the precious moments we've shared together
          </p>

          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6"></div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setSelectedImage(image)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"%3E%3Crect width="200" height="200" fill="%231a1a1a"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23b8960f" font-size="40"%3E📸%3C/text%3E%3C/svg%3E';
                }}
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.caption}
              </div>
            </div>
          ))}

          {/* Add More Card */}
          <div className="aspect-square border-2 border-dashed border-gold-500/40 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <Plus className="w-8 h-8 text-gold-500/50 mx-auto mb-2" />
              <span className="text-gold-400/50 text-sm">
                Add More Photos
              </span>
            </div>
          </div>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-5 right-5 text-white hover:text-gold-400 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>

            <div
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.caption}
                className="w-full max-h-[80vh] object-contain rounded-lg"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"%3E%3Crect width="200" height="200" fill="%231a1a1a"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23b8960f" font-size="40"%3E📸%3C/text%3E%3C/svg%3E';
                }}
              />

              <p className="text-center text-white text-xl mt-4">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="mt-12 text-center">
          <div className="inline-block px-6 py-4 rounded-lg bg-black/30">
            <p className="text-sm text-white/70">
              Add your photos inside:
              <br />
              <code className="bg-gray-800 px-2 py-1 rounded mt-2 inline-block">
                public/images/
              </code>
            </p>
            <p className="text-xs text-gold-400/50 mt-2">
              Name them: photo1.jpg, photo2.jpg ... photo8.jpg
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;