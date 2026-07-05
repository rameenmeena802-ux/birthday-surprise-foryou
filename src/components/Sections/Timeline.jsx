import { Heart, Star, Calendar, MapPin, Edit3 } from 'lucide-react';

const MemoryTimeline = () => {
  // Placeholder timeline events - customize with your memories
  const events = [
    {
      id: 1,
      date: 'July 6, 2007',
      title: 'The Day You Were Born',
      description: 'A Celebrity was born! The (My Heart) world became a brighter place this day.',
      icon: 'star',
      year: 2007,
    },
    {
      id: 2,
      date: 'July 6, 2014',
      title: '10th Birthday Celebration',
      description: 'Your first memorable birthday party with all the family.',
      icon: 'heart',
      year: 2014,
    },
    {
      id: 3,
      date: 'July 6, 2021',
      title: '15th Birthday Adventure',
      description: 'An amazing birthday with your closest friends.',
      icon: 'calendar',
      year: 2021,
    },
    {
      id: 4,
      date: 'July 6, 2025',
      title: '19th Birthday Lockdown Edition',
      description: 'Even during difficult times, we made your day special.',
      icon: 'heart',
      year: 2025,
    },
    {
      id: 5,
      date: 'July 6, 2026',
      title: '19th Birthday - This Year!',
      description: 'Another year of amazing memories to celebrate!',
      icon: 'star',
      year: 2026,
    },
    
    // ✅ NAYE EVENTS YAHAN ADD KAREIN
    // {
    //   id: 6,
    //   date: 'July 6, 2025',
    //   title: '20th Birthday Celebration',
    //   description: 'Another milestone reached! Celebrating you in style.',
    //   icon: 'heart',
    //   year: 2025,
    // },
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'heart': return Heart;
      case 'star': return Star;
      case 'calendar': return Calendar;
      default: return MapPin;
    }
  };

  return (
    <section className="min-h-screen-safe relative py-20 px-4">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-500/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl gold-text mb-4">
            Journey Through Time
          </h2>
          <p className="font-body text-xl text-luxury-cream/70 max-w-2xl mx-auto">
            19 years of precious memories and unforgettable moments
          </p>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/50 via-gold-400 to-gold-500/50 transform -translate-x-1/2" />

          {/* Timeline events */}
          <div className="space-y-12">
            {events.map((event, index) => {
              const Icon = getIcon(event.icon);
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={event.id}
                  className={`relative flex items-center ${
                    isLeft ? 'flex-row' : 'flex-row-reverse'
                  } opacity-0 animate-[slide-up_0.8s_ease-out_forwards]`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Content card */}
                  <div className={`w-5/12 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="glass-panel p-6 rounded-lg hover-lift">
                      <div className={`text-gold-400 font-modern text-sm mb-2 ${isLeft ? 'text-right' : 'text-left'}`}>
                        {event.date}
                      </div>
                      <h3 className="font-display text-xl text-gold-300 mb-2">
                        {event.title}
                      </h3>
                      <p className="font-body text-luxury-cream/70 text-sm">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Center icon */}
                  <div className="w-2/12 flex justify-center">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-luxury-black border-2 border-gold-500 flex items-center justify-center animate-glow">
                        <Icon className="w-5 h-5 text-gold-400" />
                      </div>
                      {/* Pulse ring */}
                      <div className="absolute inset-0 rounded-full border border-gold-500/50 animate-ping" />
                    </div>
                  </div>

                  {/* Year label */}
                  <div className="w-5/12">
                    <div className={`font-display text-4xl text-gold-500/20 ${isLeft ? 'pl-8 text-left' : 'pr-8 text-right'}`}>
                      {event.year}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* End marker */}
          <div className="flex justify-center mt-16">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center animate-pulse-glow">
              <Heart className="w-8 h-8 text-luxury-black" />
            </div>
          </div>
        </div>

        {/* Edit instruction */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 glass-panel px-6 py-3 rounded-full">
            <Edit3 className="w-4 h-4 text-gold-400" />
            <span className="font-body text-luxury-cream/60 text-sm">
              Customize this timeline with your special memories
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoryTimeline;