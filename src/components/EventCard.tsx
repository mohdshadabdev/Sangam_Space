
import React, { useState } from "react";
import type { Event, Club } from "../sampleData";
import { Calendar } from "lucide-react";
import RSVPDialog from "./RSVPDialog";

type Props = {
  event: Event;
  club: Club;
  onRSVP: (eventId: string) => void;
  isPastEvent?: boolean;
};

const formatDate = (date: string) => {
  const dt = new Date(date);
  return dt.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", weekday: "short" });
};

const EventCard = ({ event, club, onRSVP, isPastEvent = false }: Props) => {
  const { title, description, banner, date, time, venue, tags, isTrending, isToday, rsvps, avatars } = event;
  const [rsvpOpen, setRsvpOpen] = useState(false);

  return (
    <div className="rounded-3xl bg-card shadow-lg flex flex-col overflow-hidden hover:scale-[1.02] hover:shadow-xl hover:bg-gradient-to-br hover:from-neon-blue/10 hover:via-neon-purple/15 hover:to-neon-blue/10 hover:shadow-neon transition-all duration-300 min-w-[320px] max-w-lg mx-auto group relative">
      {/* Background light effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/0 via-neon-purple/0 to-neon-blue/0 group-hover:from-neon-blue/20 group-hover:via-neon-purple/25 group-hover:to-neon-blue/20 transition-all duration-500 rounded-3xl"></div>
      
      {/* Card content with relative positioning */}
      <div className="relative z-10 flex flex-col h-full">
        {/* RSVP Dialog */}
        <RSVPDialog open={rsvpOpen} onOpenChange={setRsvpOpen} eventTitle={title} />
        
        {/* Banner */}
        <div className="relative overflow-hidden">
          <img 
            src={banner} 
            alt={title} 
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {isTrending && (
            <span className="absolute top-4 right-4 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-red text-xs font-semibold px-3 py-1 rounded-full shadow-lg uppercase">
              Trending
            </span>
          )}
          {isToday && (
            <span className="absolute top-4 left-4 bg-gradient-to-r from-neon-purple to-neon-blue text-xs font-semibold px-3 py-1 rounded-full shadow-lg uppercase">
              Happening Today
            </span>
          )}
        </div>
        
        <div className="p-6 pb-4 flex-1 flex flex-col">
          {/* Club */}
          <div className="flex items-center gap-2 mb-2">
            <img 
              src={club.logo} 
              alt={club.name} 
              className="h-8 w-8 rounded-full border-2 border-neon-purple ring-1 ring-neon-blue/50 transition-transform duration-200 hover:scale-110" 
            />
            <span className="text-sm font-semibold text-foreground font-heading">{club.name}</span>
          </div>
          
          {/* Title & desc */}
          <h3 className="text-2xl font-bold font-heading drop-shadow text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-purple mb-1">
            {title}
          </h3>
          <p className="text-muted-foreground text-md font-sans mb-3">
            {description}
          </p>
          
          {/* Date/time/venue */}
          <div className="flex items-center gap-3 mt-auto mb-3">
            <div className="flex items-center text-neon-blue gap-1 text-sm">
              <Calendar size={16} className="mr-1" />
              <span>{formatDate(date)}</span>
            </div>
            <span className="text-muted-foreground text-sm">|</span>
            <span className="text-neon-orange text-sm">{time}</span>
            <span className="text-muted-foreground text-sm">|</span>
            <span className="text-foreground text-sm">{venue}</span>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${
                  tag === "Tech"
                    ? "from-neon-blue to-neon-purple"
                    : tag === "Workshop"
                    ? "from-neon-orange to-neon-red"
                    : "from-accent to-muted"
                } text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200`}
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* RSVP/Attendees */}
          <div className="flex items-center justify-between gap-2 mt-auto">
            <button
              className={`px-5 py-2 rounded-2xl font-semibold text-md shadow-lg transition-all duration-200 focus:outline-none ${
                isPastEvent
                  ? "bg-red-600 text-white cursor-not-allowed opacity-60"
                  : "bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:shadow-xl hover:scale-105 focus:ring-2 focus:ring-neon-purple/50"
              }`}
              onClick={() => !isPastEvent && setRsvpOpen(true)}
              type="button"
              disabled={isPastEvent}
            >
              {isPastEvent ? "Event Closed" : "RSVP"}
            </button>
            <span className="text-sm text-muted-foreground font-sans ml-1">{rsvps} RSVP'd</span>
            <div className="flex -space-x-3">
              {avatars.slice(0, 4).map((avatar, idx) => (
                <img
                  key={avatar}
                  src={avatar}
                  className={`inline-block h-8 w-8 rounded-full border-2 border-card bg-muted transition-transform duration-200 hover:scale-110 ${
                    idx === 0 ? "z-10" : `z-${10 - idx}`
                  }`}
                  alt={`Attendee avatar`}
                />
              ))}
              {avatars.length > 4 && (
                <span className="h-8 w-8 rounded-full bg-accent text-foreground font-semibold flex items-center justify-center text-xs border-2 border-card ml-2 hover:scale-110 transition-transform duration-200">
                  +{avatars.length - 4}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
