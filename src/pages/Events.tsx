
import React, { useMemo, useState } from "react";
import NavBar from "../components/NavBar";
import EventCard from "../components/EventCard";
import FilterBar from "../components/FilterBar";
import GradientHeading from "../components/GradientHeading";
import Footer from "../components/Footer";
import { events, pastEvents, clubs } from "../sampleData";

const Events = () => {
  const [selectedClub, setSelectedClub] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  // Filter upcoming events
  const filteredUpcomingEvents = useMemo(() => {
    return events.filter((ev) => {
      let match = true;
      if (selectedClub) match = match && ev.clubKey === selectedClub;
      if (selectedType) match = match && ev.tags.includes(selectedType);
      return match;
    });
  }, [selectedClub, selectedType]);

  // Filter past events
  const filteredPastEvents = useMemo(() => {
    return pastEvents.filter((ev) => {
      let match = true;
      if (selectedClub) match = match && ev.clubKey === selectedClub;
      if (selectedType) match = match && ev.tags.includes(selectedType);
      return match;
    });
  }, [selectedClub, selectedType]);

  // RSVP state per event (demo; no backend)
  const [localRSVPs, setLocalRSVPs] = useState<{ [id: string]: number }>({});

  const handleRSVP = (eventId: string) => {
    setLocalRSVPs((prev) => ({ ...prev, [eventId]: (prev[eventId] || 0) + 1 }));
  };

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Enhanced Hero Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        {/* Advanced Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-neon-purple/5 to-neon-orange/8"></div>
        
        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating hexagons */}
          <div className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-neon-blue/30 transform rotate-45 animate-float opacity-40"></div>
          <div className="absolute top-1/3 right-1/3 w-12 h-12 border-2 border-neon-purple/35 rounded-full animate-float opacity-50" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-20 h-20 border-2 border-neon-orange/25 transform rotate-12 animate-float opacity-30" style={{ animationDelay: '2s' }}></div>
          
          {/* Tech-inspired grid lines */}
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-neon-blue/20 to-transparent animate-pulse"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-neon-purple/15 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Scanning beam effect */}
          <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-orange/60 to-transparent animate-scan-line opacity-40"></div>
          
          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`tech-particle-${i}`}
              className="absolute w-1 h-1 bg-neon-blue/70 rounded-full animate-float"
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + (i % 2)}s`
              }}
            />
          ))}
          
          {/* Digital circuit pattern */}
          <div className="absolute top-1/2 left-1/5 w-8 h-0.5 bg-neon-purple/40 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/5 w-0.5 h-8 bg-neon-purple/40 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-6 h-0.5 bg-neon-blue/40 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-0.5 h-6 bg-neon-blue/40 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <GradientHeading gradient="blue-purple" className="text-4xl md:text-6xl mb-6 font-heading">
              Tech Events
            </GradientHeading>
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full opacity-60"></div>
          </div>
          
          <div className="animate-fade-in-up mt-8" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto mb-4 font-medium">
              Discover Amazing Tech Events in Prayagraj
            </p>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From workshops to hackathons, conferences to networking sessions - find all the exciting tech events happening in your city.
            </p>
          </div>

          {/* Enhanced Stats with cyber styling */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="animate-scale-in relative" style={{ animationDelay: '0.6s' }}>
              <div className="relative p-6 rounded-2xl border border-neon-blue/30 bg-gradient-to-br from-neon-blue/10 to-transparent backdrop-blur-sm hover:border-neon-blue/50 transition-all duration-300 group">
                <div className="text-3xl md:text-4xl font-bold text-neon-blue mb-2 group-hover:text-neon-purple transition-colors">50+</div>
                <div className="text-muted-foreground font-medium">Active Events</div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div className="animate-scale-in relative" style={{ animationDelay: '0.8s' }}>
              <div className="relative p-6 rounded-2xl border border-neon-purple/30 bg-gradient-to-br from-neon-purple/10 to-transparent backdrop-blur-sm hover:border-neon-purple/50 transition-all duration-300 group">
                <div className="text-3xl md:text-4xl font-bold text-neon-purple mb-2 group-hover:text-neon-blue transition-colors">10+</div>
                <div className="text-muted-foreground font-medium">Tech Communities</div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div className="animate-scale-in relative" style={{ animationDelay: '1s' }}>
              <div className="relative p-6 rounded-2xl border border-neon-orange/30 bg-gradient-to-br from-neon-orange/10 to-transparent backdrop-blur-sm hover:border-neon-orange/50 transition-all duration-300 group">
                <div className="text-3xl md:text-4xl font-bold text-neon-orange mb-2 group-hover:text-neon-red transition-colors">500+</div>
                <div className="text-muted-foreground font-medium">Active Members</div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </section>

      {/* Events Content */}
      <div className="container mx-auto px-4">
        {/* Filter Bar */}
        <div className="mb-8">
          <FilterBar
            selectedClub={selectedClub}
            setSelectedClub={setSelectedClub}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />
        </div>

        {/* Upcoming Events Section */}
        <section className="mb-16">
          <div className="mb-8">
            <GradientHeading gradient="blue-purple" className="text-3xl md:text-4xl mb-4">
              Upcoming Events
            </GradientHeading>
            <p className="text-muted-foreground text-lg">
              Don't miss out on these exciting upcoming events
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredUpcomingEvents.map((event) => {
              const club = clubs.find((c) => c.key === event.clubKey)!;
              return (
                <EventCard
                  key={event.id}
                  event={{
                    ...event,
                    rsvps: (event.rsvps || 0) + (localRSVPs[event.id] || 0),
                  }}
                  club={club}
                  onRSVP={handleRSVP}
                  isPastEvent={false}
                />
              );
            })}
            {filteredUpcomingEvents.length === 0 && (
              <div className="col-span-full text-center text-gray-400 py-10 animate-fade-in-up">
                No upcoming events found for selected filter.
              </div>
            )}
          </div>
        </section>

        {/* Past Events Section */}
        <section className="mb-16">
          <div className="mb-8">
            <GradientHeading gradient="blue-purple" className="text-3xl md:text-4xl mb-4">
              Past Events
            </GradientHeading>
            <p className="text-muted-foreground text-lg">
              Check out the amazing events we've hosted
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredPastEvents.map((event) => {
              const club = clubs.find((c) => c.key === event.clubKey)!;
              return (
                <EventCard
                  key={event.id}
                  event={{
                    ...event,
                    rsvps: (event.rsvps || 0) + (localRSVPs[event.id] || 0),
                  }}
                  club={club}
                  onRSVP={handleRSVP}
                  isPastEvent={true}
                />
              );
            })}
            {filteredPastEvents.length === 0 && (
              <div className="col-span-full text-center text-gray-400 py-10 animate-fade-in-up">
                No past events found for selected filter.
              </div>
            )}
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Events;
