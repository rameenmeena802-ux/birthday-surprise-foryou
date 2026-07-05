import { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

const messages = [
  {
    id: 1,
    title: 'Meri Jaan',
    urdu: 'تم میری زندگی کی سب سے خوبصورت حقیقت ہو',
    english:
      'You are the most beautiful reality of my life. Every moment with you feels like a dream I never want to wake up from. Jab bhi tujhe dekhta hoon, dil ko chain aata hai.',
    emoji: '💛',
  },
  {
    id: 2,
    title: 'Sweetheart',
    urdu: 'تمہاری مسکراہٹ میری خوشی ہے',
    english:
      'Your smile is my happiness, your laugh is my favorite sound in the whole world. Tum mere liye woh roshni ho jo andheron mein raah dikhati hai — my sweetheart, my Bebo.',
    emoji: '🌟',
  },
  {
    id: 3,
    title: 'Mere Bebo',
    urdu: 'تم خاص ہو، بہت خاص',
    english:
      'There is nobody on this earth quite like you. The way you care, the way you love, the way you light up every room — tum sach mein ek ajeeb sa jaadu ho mere liye.',
    emoji: '✨',
  },
  {
    id: 4,
    title: 'Teri Yaad',
    urdu: 'ہر لمحہ تمہارے ساتھ گزرا ہے بہت قیمتی ہے',
    english:
      'Every moment I have spent with you is a treasure I hold close to my heart. Woh baatein, woh hansi, woh saath — I would not trade it for anything in this world.',
    emoji: '💫',
  },
  {
    id: 5,
    title: 'Birthday Dua',
    urdu: 'اللہ تمہیں ہمیشہ خوش رکھے',
    english:
      'On your birthday, my only wish is for Allah to keep you happy, healthy, and blessed always. Jitna bhi dekho, utna bhi kam ho — you deserve every beautiful thing life has to offer.',
    emoji: '🤲',
  },
  {
    id: 6,
    title: '19 Saal Ka Safar',
    urdu: '19 سال کی یہ خوبصورت شخصیت',
    english:
      'In these 19 years you have grown into someone so remarkable, so warm, so full of life. Apna khayal rakhna, kyunki tum sirf mere nahi — tum bahut logo ki zindagi mein roshni ho.',
    emoji: '🎂',
  },
];

const SweetMessages = () => {
  const [activeId, setActiveId] = useState(null);
  const [readIds, setReadIds] = useState(new Set());

  const handleOpen = (id) => {
    setActiveId(activeId === id ? null : id);
    setReadIds((prev) => new Set([...prev, id]));
  };

  return (
    <section className="relative py-24 px-4" style={{ zIndex: 10 }}>
      {/* Subtle glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-[#1a0e00] to-luxury-black pointer-events-none" />

      {/* Decorative ambient orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-red-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold-500/60" />
            <Heart className="w-6 h-6 text-gold-400 animate-heartbeat" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold-500/60" />
          </div>
          <h2 className="font-elegant text-5xl md:text-6xl gold-text text-glow mb-3">
            From My Heart to Yours
          </h2>
          <p className="font-body text-lg text-luxury-cream/60 max-w-xl mx-auto">
            Kuch alfaaz jo dil se nikle hain — especially for you, meri jaan
          </p>
        </div>

        {/* Message cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {messages.map((msg) => {
            const isOpen = activeId === msg.id;
            const isRead = readIds.has(msg.id);

            return (
              <div
                key={msg.id}
                onClick={() => handleOpen(msg.id)}
                className={`cursor-pointer rounded-2xl transition-all duration-500 overflow-hidden ${
                  isOpen
                    ? 'col-span-1 md:col-span-2'
                    : ''
                }`}
              >
                <div
                  className={`relative border transition-all duration-500 rounded-2xl ${
                    isOpen
                      ? 'border-gold-500/50 bg-gradient-to-br from-[#1a1200] via-[#1a1500] to-[#120e00]'
                      : 'border-gold-500/15 bg-gradient-to-br from-luxury-charcoal/80 to-luxury-black/80 hover:border-gold-500/40'
                  }`}
                >
                  {/* Shimmer line when open */}
                  {isOpen && (
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
                  )}

                  {/* Card header - always visible */}
                  <div className="flex items-center justify-between p-5">
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-2xl transition-transform duration-300 ${
                          isOpen ? 'scale-110' : ''
                        }`}
                      >
                        {msg.emoji}
                      </span>
                      <div>
                        <h3
                          className={`font-display text-lg font-semibold transition-colors duration-300 ${
                            isOpen ? 'text-gold-300' : 'text-gold-400/80'
                          }`}
                        >
                          {msg.title}
                        </h3>
                        <p
                          className="font-body text-sm mt-0.5"
                          style={{
                            direction: 'rtl',
                            fontFamily: 'Noto Nastaliq Urdu, serif',
                            color: isOpen ? 'rgba(255,215,0,0.7)' : 'rgba(245,240,232,0.4)',
                          }}
                        >
                          {msg.urdu}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      {!isRead && (
                        <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
                      )}
                      <div
                        className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? 'border-gold-400 bg-gold-500/20 rotate-180'
                            : 'border-gold-500/30'
                        }`}
                      >
                        <svg
                          className={`w-4 h-4 transition-colors ${
                            isOpen ? 'text-gold-400' : 'text-gold-500/40'
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Expanded content */}
                  {isOpen && (
                    <div className="px-5 pb-7 animate-[fade-in-up_0.4s_ease-out]">
                      {/* Divider */}
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent mb-6" />

                      {/* Message body */}
                      <div className="flex gap-4 items-start">
                        <Heart className="w-5 h-5 text-gold-400/60 shrink-0 mt-1 animate-heartbeat" />
                        <p className="font-body text-base md:text-lg text-luxury-cream/90 leading-relaxed">
                          {msg.english}
                        </p>
                      </div>

                      {/* Signature */}
                      <div className="mt-6 flex justify-end">
                        <div className="text-right">
                          <p className="font-elegant text-xl text-gold-400">
                            Tumhara apna
                          </p>
                          <div className="flex items-center justify-end gap-2 mt-1">
                            <div className="w-12 h-px bg-gradient-to-l from-gold-500/50 to-transparent" />
                            <Sparkles className="w-3 h-3 text-gold-400/60" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom decorative line */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="w-24 h-px bg-gradient-to-r from-transparent to-gold-500/40" />
          <Heart className="w-5 h-5 text-gold-400/50 animate-heartbeat" />
          <span className="font-elegant text-xl text-gold-400/60">Meri Jaan, Bebo</span>
          <Heart className="w-5 h-5 text-gold-400/50 animate-heartbeat" />
          <div className="w-24 h-px bg-gradient-to-l from-transparent to-gold-500/40" />
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default SweetMessages;