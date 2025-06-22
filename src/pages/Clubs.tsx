
import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import GradientHeading from "../components/GradientHeading";
import { Link } from "react-router-dom";

const clubsData = [
  {
    id: "gdg-prayagraj",
    name: "GDG Prayagraj",
    logo: "https://media.konfhub.com/event_poster/2024/October/08/1728587723424-6e4f70aa-fbb7-4c99-9a45-151d6254d9be.png",
    shortDesc: "Google Developer Group of Prayagraj. Tech sessions, Google product workshops & more.",
    color: "from-neon-blue to-neon-purple",
  },
  {
    id: "tfug-prayagraj",
    name: "TFUG Prayagraj",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSosJ9Inu4Nq4ZiwL97eDq8diTournVlAfnGA&s",
    shortDesc: "TensorFlow User Group, Prayagraj. AI/ML workshops and community meetups.",
    color: "from-neon-purple to-neon-blue",
  },
  {
    id: "codify-club",
    name: "Codify Club",
    logo: "https://pps.whatsapp.net/v/t61.24694-24/442457938_714514990705048_4031384478786705579_n.jpg?ccb=11-4&oh=01_Q5Aa1gH3l47afkBkZe4gS5Az8zHYCSGkJoTxFSzZAt1qCRNDQw&oe=684710BB&_nc_sid=5e03e0&_nc_cat=106",
    shortDesc: "Coding sessions, weekly tech events, and hackathons.",
    color: "from-neon-blue to-neon-red",
  },
  {
    id: "wikiclub-tech-uit",
    name: "WikiClub Tech UIT",
    logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=200&q=80",
    shortDesc: "Dedicated to empowering students to contribute to the Wikimedia ecosystem through tech and open-source.",
    color: "from-neon-purple to-neon-red",
  },
  {
    id: "bizwhiz",
    name: "BizWhiz",
    logo: "https://placehold.co/48x48/ff9900/fff?text=BW",
    shortDesc: "Pitch contests, talks, and entrepreneurship programs.",
    color: "from-neon-orange to-neon-red",
  },
  {
    id: "ffdg-prayagraj",
    name: "FFDG Prayagraj",
    logo: "https://secure.meetupstatic.com/photos/event/9/8/3/b/clean_524618971.webp",
    shortDesc: "FlutterFlow Developer Group: Low/No-code app building sessions.",
    color: "from-neon-purple to-neon-orange",
  },
  {
    id: "ppuu",
    name: "PPUU",
    logo: "https://placehold.co/48x48/4f8cff/fff?text=PPUU",
    shortDesc: "Prerogative Pointers United University – student chapter, tech education workshops.",
    color: "from-neon-blue to-neon-red",
  },
  {
    id: "scc",
    name: "SCC",
    logo: "https://placehold.co/48x48/9836ff/fff?text=SCC",
    shortDesc: "Shambhunath Coding Club – code jams & learning circles.",
    color: "from-neon-purple to-neon-blue",
  },
  {
    id: "bridge4u",
    name: "Bridge4U",
    logo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=200&q=80",
    shortDesc: "Student chapter of United University connecting Engineering, Management, and Law students through workshops and events.",
    color: "from-neon-orange to-neon-purple",
  },
];

const Clubs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-purple/5"></div>
          
          {/* Grid Lines */}
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute w-full h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent animate-pulse"
                style={{
                  top: `${15 + i * 15}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: '3s'
                }}
              />
            ))}
            
            {[...Array(8)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute h-full w-px bg-gradient-to-b from-transparent via-neon-purple/20 to-transparent animate-pulse"
                style={{
                  left: `${10 + i * 12}%`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: '4s'
                }}
              />
            ))}
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <div
                key={`particle-${i}`}
                className="absolute w-2 h-2 bg-neon-blue/60 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          {/* Scanning Lines */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-orange to-transparent animate-scan-line opacity-40"></div>
          <div className="absolute bottom-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent animate-scan-line-reverse opacity-30"></div>

          {/* Geometric Shapes */}
          <div className="absolute top-1/4 right-1/4 w-16 h-16 border border-neon-blue/30 transform rotate-45 animate-pulse opacity-20"></div>
          <div className="absolute bottom-1/3 left-1/5 w-12 h-12 border border-neon-purple/25 rounded-full animate-pulse opacity-25" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-3/4 w-8 h-8 border border-neon-orange/30 transform rotate-12 animate-pulse opacity-30" style={{ animationDelay: '2s' }}></div>

          {/* Digital Rain Effect */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(15)].map((_, i) => (
              <div
                key={`rain-${i}`}
                className="absolute w-px bg-gradient-to-b from-neon-blue via-neon-purple to-transparent animate-digital-rain"
                style={{
                  left: `${5 + i * 6}%`,
                  height: '200px',
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '4s'
                }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="animate-fade-in-up">
              <GradientHeading gradient="blue-purple" className="text-4xl md:text-6xl mb-4">
                Tech Clubs
              </GradientHeading>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover and join the most active tech communities in Prayagraj. Connect with like-minded developers, entrepreneurs, and innovators.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
              <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <div className="relative p-6 rounded-xl border border-neon-blue/20 bg-gradient-to-br from-neon-blue/5 to-transparent backdrop-blur-sm">
                  <div className="text-3xl md:text-4xl font-bold text-neon-blue mb-2">9+</div>
                  <div className="text-muted-foreground">Active Clubs</div>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-blue/10 to-transparent opacity-50 animate-pulse"></div>
                </div>
              </div>
              
              <div className="animate-scale-in" style={{ animationDelay: '0.6s' }}>
                <div className="relative p-6 rounded-xl border border-neon-purple/20 bg-gradient-to-br from-neon-purple/5 to-transparent backdrop-blur-sm">
                  <div className="text-3xl md:text-4xl font-bold text-neon-purple mb-2">500+</div>
                  <div className="text-muted-foreground">Members</div>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-purple/10 to-transparent opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
              
              <div className="animate-scale-in" style={{ animationDelay: '0.8s' }}>
                <div className="relative p-6 rounded-xl border border-neon-orange/20 bg-gradient-to-br from-neon-orange/5 to-transparent backdrop-blur-sm">
                  <div className="text-3xl md:text-4xl font-bold text-neon-orange mb-2">50+</div>
                  <div className="text-muted-foreground">Events Hosted</div>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-orange/10 to-transparent opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Clubs Grid */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clubsData.map((club) => (
            <Link
              key={club.id}
              to={`/clubs/${club.id}`}
              className="group"
            >
              <div className="rounded-2xl bg-card border border-border p-6 hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:border-neon-blue/50">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={club.logo}
                    alt={club.name}
                    className="w-16 h-16 rounded-xl object-cover border-2 border-neon-blue/30"
                  />
                  <div>
                    <h3 className={`text-xl font-bold font-heading bg-gradient-to-r ${club.color} bg-clip-text text-transparent min-h-[28px] flex items-center`}>
                      {club.name}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {club.shortDesc}
                </p>
                <div className="mt-4 flex items-center text-neon-blue text-sm font-medium group-hover:text-neon-purple transition-colors">
                  Learn more →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clubs;
