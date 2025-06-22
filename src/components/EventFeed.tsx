
import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { events, clubs } from "../sampleData";
import EventCard from "./EventCard";
import FilterBar from "./FilterBar";
import GradientHeading from "./GradientHeading";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const EventFeed = () => {
  const [selectedClub, setSelectedClub] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const navigate = useNavigate();

  // Simple filter logic - exclude BizWhiz and SCC events on main page, limit to 9 events
  const filteredEvents = useMemo(() => {
    return events.filter((ev) => {
      let match = true;
      // Exclude BizWhiz and SCC events on main page
      if (ev.clubKey === "bizwhiz" || ev.clubKey === "scc") return false;
      if (selectedClub) match = match && ev.clubKey === selectedClub;
      if (selectedType) match = match && ev.tags.includes(selectedType);
      return match;
    }).slice(0, 9); // Limit to 9 events
  }, [selectedClub, selectedType]);

  // RSVP state per event (demo; no backend)
  const [localRSVPs, setLocalRSVPs] = useState<{ [id: string]: number }>({});

  const handleRSVP = (eventId: string) => {
    setLocalRSVPs((prev) => ({ ...prev, [eventId]: (prev[eventId] || 0) + 1 }));
  };

  const handleShowAllEventsClick = () => {
    navigate('/events');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-1 py-10" id="events">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <GradientHeading gradient="blue-purple" className="text-3xl md:text-4xl">
            Event Discovery Feed
          </GradientHeading>
          <p className="text-md mt-2 text-gray-400 max-w-xl">
            Find all upcoming events, use filters for date, club, and event type.
          </p>
        </div>
        <button
          onClick={handleShowAllEventsClick}
          className="flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-lg bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          Show All Events
          <ArrowRight size={20} />
        </button>
      </div>
      <FilterBar
        selectedClub={selectedClub}
        setSelectedClub={setSelectedClub}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {filteredEvents.map((event) => {
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
            />
          );
        })}
        {filteredEvents.length === 0 && (
          <div className="col-span-full text-center text-gray-400 py-10 animate-fade-in-up">
            No events found for selected filter.
          </div>
        )}
      </div>
      
      {/* Styled Show All Events Button */}
      <div className="flex justify-center mt-8">
        <Button 
          onClick={handleShowAllEventsClick}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/30 text-neon-blue hover:from-neon-blue/20 hover:to-neon-purple/20 hover:border-neon-purple/50 hover:text-neon-purple hover:shadow-lg hover:shadow-neon-blue/20 hover:scale-105 transition-all duration-300 font-medium"
        >
          Show All Events
          <ArrowRight size={16} />
        </Button>
      </div>
    </section>
  );
};

export default EventFeed;
