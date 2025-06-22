
import React from "react";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Filter, Star } from "lucide-react";
import { clubs } from "../../sampleData";

interface CalendarFiltersProps {
  selectedClub: string | null;
  setSelectedClub: (club: string | null) => void;
  selectedType: string | null;
  setSelectedType: (type: string | null) => void;
  showMyEvents: boolean;
  setShowMyEvents: (show: boolean) => void;
}

const eventTypes = ["Tech", "Cultural", "Workshop", "Wellness", "Business"];

const CalendarFilters = ({
  selectedClub,
  setSelectedClub,
  selectedType,
  setSelectedType,
  showMyEvents,
  setShowMyEvents,
}: CalendarFiltersProps) => {
  return (
    <div className="mb-6 animate-slide-in-left">
      <div className="flex flex-wrap items-center gap-4 bg-card/30 backdrop-blur-sm rounded-xl p-4 border border-border/30">
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Filter className="w-4 h-4" />
          Filters:
        </div>

        {/* Club Filter */}
        <Select value={selectedClub || "all-clubs"} onValueChange={(value) => setSelectedClub(value === "all-clubs" ? null : value)}>
          <SelectTrigger className="w-[180px] bg-background/50">
            <SelectValue placeholder="All Clubs" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-clubs">All Clubs</SelectItem>
            {clubs.map((club) => (
              <SelectItem key={club.key} value={club.name}>
                {club.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Event Type Filter */}
        <Select value={selectedType || "all-types"} onValueChange={(value) => setSelectedType(value === "all-types" ? null : value)}>
          <SelectTrigger className="w-[180px] bg-background/50">
            <SelectValue placeholder="All Types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-types">All Types</SelectItem>
            {eventTypes.map((type) => (
              <SelectItem key={type} value={type}>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${getTypeColor(type)}`} />
                  {type}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* My Events Toggle */}
        <Button
          variant={showMyEvents ? "default" : "outline"}
          size="sm"
          onClick={() => setShowMyEvents(!showMyEvents)}
          className="flex items-center gap-2 transition-all duration-200 hover:scale-105"
        >
          <Star className={`w-4 h-4 ${showMyEvents ? "fill-current" : ""}`} />
          My Events
        </Button>

        {/* Clear Filters */}
        {(selectedClub || selectedType || showMyEvents) && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setSelectedClub(null);
              setSelectedType(null);
              setShowMyEvents(false);
            }}
            className="text-muted-foreground hover:text-foreground"
          >
            Clear All
          </Button>
        )}
      </div>
    </div>
  );
};

const getTypeColor = (type: string) => {
  switch (type) {
    case "Tech": return "bg-purple-500";
    case "Cultural": return "bg-green-500";
    case "Workshop": return "bg-red-500";
    case "Wellness": return "bg-orange-500";
    case "Business": return "bg-blue-500";
    default: return "bg-gray-500";
  }
};

export default CalendarFilters;
