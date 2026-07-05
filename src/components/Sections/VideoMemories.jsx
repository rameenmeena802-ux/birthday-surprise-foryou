import { useState, useRef } from 'react';
import { Play, Pause, Video, Plus, X, Volume2, VolumeX, Maximize } from 'lucide-react';

const VideoMemories = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);

  // ✅ 8 VIDEOS - APNE HISAB SE TITLE CHANGE KAREIN
  const videos = [
    { id: 1, url: '/videos/video1.mp4', title: 'Birthday Surprise' },
    { id: 2, url: '/videos/video2.mp4', title: 'Our Adventures' },
    { id: 3, url: '/videos/video3.mp4', title: 'Funny Moments' },
    { id: 4, url: '/videos/video4.mp4', title: 'Special Moment 1' },
    { id: 5, url: '/videos/video5.mp4', title: 'Special Moment 2' },
    { id: 6, url: '/videos/video6.mp4', title: 'Special Moment 3' },
    { id: 7, url: '/videos/video7.mp4', title: 'Special Moment 4' },
    { id: 8, url: '/videos/video8.mp4', title: 'Special Moment 5' },
  ];

  // Video controls
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(current);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleProgressChange = (e) => {
    if (videoRef.current) {
      const newTime = (e.target.value / 100) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
      setProgress(e.target.value);
    }
  };

  const formatTime = (seconds) => {
    if (!seconds) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section className="min-h-screen-safe relative py-20 px-4 bg-gradient-to-b from-luxury-black via-luxury-charcoal/50 to-luxury-black">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl gold-text mb-4">
            Video Memories
          </h2>
          <p className="font-body text-xl text-luxury-cream/70 max-w-2xl mx-auto">
            Reliving our favorite moments together
          </p>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6" />
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group cursor-pointer"
              onClick={() => {
                setSelectedVideo(video);
                setIsPlaying(false);
                setProgress(0);
              }}
            >
              <div className="relative aspect-video glass-panel overflow-hidden rounded-lg hover-lift">
                {/* Video thumbnail */}
                <video
                  src={video.url}
                  className="w-full h-full object-cover"
                  muted
                  preload="metadata"
                />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors duration-300">
                  <div className="w-16 h-16 rounded-full bg-gold-500/20 border-2 border-gold-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-gold-500 ml-1" />
                  </div>
                </div>
              </div>

              {/* Video title */}
              <h3 className="font-body text-lg text-gold-400 mt-3 text-center">
                {video.title}
              </h3>
            </div>
          ))}

          {/* Add more videos placeholder */}
          <div className="group cursor-pointer">
            <div className="aspect-video glass-panel overflow-hidden rounded-lg border border-dashed border-gold-500/30 flex items-center justify-center hover-glow transition-all duration-300">
              <div className="text-center">
                <Plus className="w-12 h-12 text-gold-500/30 mx-auto mb-2" />
                <span className="text-gold-400/50 text-sm font-modern">Add Video</span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Modal - Working Video Player */}
        {selectedVideo && (
          <div
            className="fixed inset-0 z-50 bg-luxury-black/95 flex items-center justify-center p-4"
            onClick={() => {
              if (videoRef.current) {
                videoRef.current.pause();
              }
              setSelectedVideo(null);
              setIsPlaying(false);
            }}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-gold-400 transition-colors z-10"
              onClick={() => {
                if (videoRef.current) {
                  videoRef.current.pause();
                }
                setSelectedVideo(null);
                setIsPlaying(false);
              }}
            >
              <X className="w-8 h-8" />
            </button>

            <div
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Video Player */}
              <div className="relative aspect-video glass-panel overflow-hidden rounded-lg bg-black">
                <video
                  ref={videoRef}
                  src={selectedVideo.url}
                  className="w-full h-full"
                  onClick={togglePlay}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onEnded={() => setIsPlaying(false)}
                  playsInline
                />

                {/* Video Controls Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  {/* Progress Bar */}
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-white/70 text-xs font-modern">
                      {formatTime(videoRef.current?.currentTime || 0)}
                    </span>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={progress}
                      onChange={handleProgressChange}
                      className="flex-1 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-gold-500"
                      style={{
                        background: `linear-gradient(to right, #d4a74a 0%, #d4a74a ${progress}%, rgba(255,255,255,0.3) ${progress}%, rgba(255,255,255,0.3) 100%)`
                      }}
                    />
                    <span className="text-white/70 text-xs font-modern">
                      {formatTime(duration)}
                    </span>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={togglePlay}
                      className="text-white hover:text-gold-400 transition-colors"
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6" />
                      ) : (
                        <Play className="w-6 h-6" />
                      )}
                    </button>

                    <button
                      onClick={toggleMute}
                      className="text-white hover:text-gold-400 transition-colors"
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5" />
                      ) : (
                        <Volume2 className="w-5 h-5" />
                      )}
                    </button>

                    <div className="text-white/70 text-xs font-modern">
                      {selectedVideo.title}
                    </div>

                    <div className="flex-1" />

                    <button
                      onClick={() => {
                        if (videoRef.current) {
                          if (videoRef.current.requestFullscreen) {
                            videoRef.current.requestFullscreen();
                          }
                        }
                      }}
                      className="text-white hover:text-gold-400 transition-colors"
                    >
                      <Maximize className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              <h3 className="font-display text-2xl text-gold-400 mt-4 text-center">
                {selectedVideo.title}
              </h3>
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="mt-12 text-center">
          <div className="inline-block glass-panel px-6 py-4 rounded-lg">
            <p className="font-body text-luxury-cream/60 text-sm">
              <span className="text-gold-400">✅ Videos Added:</span> {videos.length} videos in{' '}
              <code className="bg-luxury-charcoal px-2 py-1 rounded">public/videos/</code>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoMemories;