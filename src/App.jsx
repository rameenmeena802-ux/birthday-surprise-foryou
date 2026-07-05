import { useState, useRef, useEffect } from 'react';
import LockScreen from './components/LockScreen';
import WelcomeAnimation from './components/Welcome';
import MusicPlayer from './components/Media';
import {
  BirthdayCake,
  PhotoGallery,
  VideoMemories,
  MemoryTimeline,
  GiftBox,
  BirthdayCard,
  CountdownSection,
  NightSkySection,
  FutureDreams,
  FinalCelebration,
  FloatingPhotoFrames,
  SweetMessages,
} from './components/Sections';
import {
  Particles,
  StarsBackground,
  Balloons,
  FloatingHearts,
} from './components/Effects';

function App() {
  const [appState, setAppState] = useState('lock');
  const [showContent, setShowContent] = useState(false);
  const mainRef = useRef(null);

  const correctPassword = '0607'; // July 6th

  const handleUnlock = () => {
    setAppState('transition');
    setTimeout(() => setAppState('welcome'), 1500);
  };

  const handleWelcomeComplete = () => {
    setAppState('main');
    setTimeout(() => setShowContent(true), 500);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Fix for images - add this useEffect
  useEffect(() => {
    // This will help with image loading
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.addEventListener('error', function() {
        console.error('Image failed to load:', this.src);
        // You can set a fallback image here
        // this.src = '/fallback-image.png';
      });
    });
  }, [appState]);

  if (appState === 'lock') {
    return <LockScreen onUnlock={handleUnlock} correctPassword={correctPassword} />;
  }

  if (appState === 'transition') {
    return (
      <div className="fixed inset-0 bg-luxury-black flex items-center justify-center overflow-hidden">
        <StarsBackground />
        <Particles />
        <div className="relative z-10 text-center animate-scale-in">
          <div className="w-20 h-20 mx-auto mb-6 border-4 border-gold-500 border-t-transparent rounded-full animate-spin" />
          <p className="font-body text-xl text-gold-400 animate-pulse">
            Unlocking your surprise...
          </p>
        </div>
      </div>
    );
  }

  if (appState === 'welcome') {
    return <WelcomeAnimation onComplete={handleWelcomeComplete} />;
  }

  return (
    <div className="relative bg-luxury-black min-h-screen" ref={mainRef}>
      {/* Background effects — kept at low z-indices so content is never obscured */}
      <StarsBackground />   {/* z-0 */}
      <Particles />          {/* z-10 */}
      <Balloons />           {/* z-3 */}
      <FloatingHearts />     {/* z-2 */}

      {/* Music player — always on top */}
      <MusicPlayer />

      {/* Side navigation dots */}
      <nav className="fixed right-5 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3" style={{ zIndex: 30 }}>
        {[
          { label: 'Top', href: '#top' },
          { label: 'Countdown', href: '#countdown' },
          { label: 'Cake', href: '#cake' },
          { label: 'Sweet', href: '#sweet' },
          { label: 'Gallery', href: '#gallery' },
          { label: 'Videos', href: '#videos' },
          { label: 'Timeline', href: '#timeline' },
          { label: 'Gift', href: '#gift' },
          { label: 'Card', href: '#card' },
          { label: 'Night', href: '#night' },
          { label: 'Dreams', href: '#dreams' },
          { label: 'Finale', href: '#end' },
        ].map((item) => (
          <a key={item.label} href={item.href} className="group flex items-center justify-end">
            <span className="opacity-0 group-hover:opacity-100 font-modern text-xs text-gold-400/70 mr-2 transition-opacity duration-200">
              {item.label}
            </span>
            <div className="w-2 h-2 rounded-full bg-gold-500/30 group-hover:bg-gold-500 transition-colors duration-200" />
          </a>
        ))}
      </nav>

      {/* All content sections — z-index 10+ so they sit above background effects */}
      <main
        className={`relative transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}
        style={{ zIndex: 10 }}
      >
        {/* ── Hero ── */}
        <section id="top" className="min-h-screen-safe flex items-center justify-center relative">
          {/* Dark overlay so stars behind don't bleed into text */}
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/80 via-transparent to-luxury-black/60 pointer-events-none" />

          <div className="text-center relative z-10 py-20 px-4">
            <p className="font-modern text-xs uppercase tracking-[0.4em] text-gold-500/60 mb-6">
              A Special Surprise For
            </p>
            <h1 className="font-elegant text-6xl md:text-8xl gold-text text-glow mb-4 leading-tight">
              Shahzaib
            </h1>
            <h2 className="font-display text-2xl md:text-4xl text-gold-300/90 mb-8">
              Bebo — Turning 19
            </h2>

            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="w-20 h-px bg-gradient-to-r from-transparent to-gold-500/60" />
              <span className="font-display text-6xl gold-text text-glow">19</span>
              <div className="w-20 h-px bg-gradient-to-l from-transparent to-gold-500/60" />
            </div>

            <p className="font-body text-xl text-luxury-cream/70 mb-2">Celebrating 19 amazing years</p>
            <p className="font-body text-base text-gold-400/60">July 6, 2007</p>

            {/* Scroll hint */}
            <div className="mt-16 flex flex-col items-center gap-2 text-gold-500/40 animate-bounce-soft">
              <span className="font-modern text-xs uppercase tracking-widest">Scroll to explore</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        {/* ── Countdown ── */}
        <div id="countdown"><CountdownSection /></div>

        {/* ── Birthday Cake ── */}
        <div id="cake"><BirthdayCake /></div>

        {/* ── Sweet Messages ── */}
        <div id="sweet"><SweetMessages /></div>

        {/* ── Floating Photo Frames ── */}
        <FloatingPhotoFrames />

        {/* ── Photo Gallery ── */}
        <div id="gallery"><PhotoGallery /></div>

        {/* ── Video Memories ── */}
        <div id="videos"><VideoMemories /></div>

        {/* ── Memory Timeline ── */}
        <div id="timeline"><MemoryTimeline /></div>

        {/* ── Gift Box ── */}
        <div id="gift"><GiftBox /></div>

        {/* ── Birthday Card ── */}
        <div id="card"><BirthdayCard /></div>

        {/* ── Night Sky ── */}
        <div id="night"><NightSkySection /></div>

        {/* ── Future Dreams ── */}
        <div id="dreams"><FutureDreams /></div>

        {/* ── Final Celebration ── */}
        <div id="end"><FinalCelebration onScrollToTop={scrollToTop} /></div>
      </main>

      <footer className="relative py-8 text-center border-t border-gold-500/10" style={{ zIndex: 10 }}>
        <p className="font-body text-luxury-cream/40 text-sm">
          Har saal tumhara intezaar rehega — Shahzaib (Bebo)
        </p>
        <p className="mt-2 text-xs text-gold-500/30 font-modern">6 July 2026</p>
      </footer>
    </div>
  );
}

export default App;