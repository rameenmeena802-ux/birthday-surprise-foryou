import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef(null);

  // Audio element create karein
  useEffect(() => {
    const audio = new Audio('/music/birthday-song.mp3'); // Apni audio file ka path
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  // Play/Pause toggle
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.log('Audio play error:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Mute toggle
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Volume change
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-luxury-black/80 backdrop-blur-lg rounded-full p-3 border border-gold-500/20 shadow-2xl shadow-gold-500/10">
        <div className="flex items-center gap-3">
          {/* Music Icon */}
          <div className="hidden sm:flex items-center gap-2">
            <Music className="w-4 h-4 text-gold-400" />
            <span className="font-modern text-xs text-gold-400/70">Birthday</span>
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-gold-500/20 hover:bg-gold-500/30 text-gold-400 flex items-center justify-center transition-all duration-300 hover:scale-105"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </button>

          {/* Volume Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-gold-400/60 hover:text-gold-400 flex items-center justify-center transition-all"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>

            {/* Volume Slider */}
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-16 sm:w-24 h-1 bg-gold-500/20 rounded-lg appearance-none cursor-pointer accent-gold-500"
              style={{
                background: `linear-gradient(to right, #d4a74a 0%, #d4a74a ${volume * 100}%, rgba(212, 167, 74, 0.2) ${volume * 100}%, rgba(212, 167, 74, 0.2) 100%)`
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;