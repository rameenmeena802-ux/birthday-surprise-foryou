import { 
  Compass, Target, Rocket, Heart, Star, Globe, Book, Music, Camera, 
  Coffee, Sun, Moon, Cloud, Trees, Home, Briefcase, GraduationCap, Trophy, 
  Sparkles, Crown, Diamond, Award, Zap, Flame, Shield, Anchor, Plane, 
  Ship, Car, Bike, Phone, Mail, User, Users, Smile, Laugh, PartyPopper, Gift 
} from 'lucide-react';

const FutureDreams = () => {
  const dreams = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Achieve New Heights',
      description: 'May you soar higher in all your endeavors and reach for the stars.',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Goals Accomplished',
      description: 'Every goal you set, every dream you chase - may they all become reality.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Love & Happiness',
      description: 'Surrounded by love, filled with happiness, blessed with beautiful moments.',
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: 'New Adventures',
      description: 'Exciting journeys await you, full of discoveries and wonderful experiences.',
    },
    // Agar Trees icon use karna hai toh:
    // {
    //   icon: <Trees className="w-8 h-8" />,
    //   title: 'Grow Like a Tree',
    //   description: 'May you grow strong and wise with each passing year.',
    // },
  ];

  return (
    <section className="min-h-screen-safe relative py-20 px-4">
      {/* Rest of your component remains same */}
    </section>
  );
};

export default FutureDreams;