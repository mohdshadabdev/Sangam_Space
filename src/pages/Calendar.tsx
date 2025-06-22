
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import CalendarHeader from "../components/calendar/CalendarHeader";
import CalendarGrid from "../components/calendar/CalendarGrid";
import CalendarFilters from "../components/calendar/CalendarFilters";
import EventDetailsDrawer from "../components/calendar/EventDetailsDrawer";
import { CalendarEvent } from "../types/calendar";
import { sampleCalendarEvents } from "../data/calendarEvents";

const Calendar = () => {
  const [viewMode, setViewMode] = useState<"month" | "week">("month");
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedClub, setSelectedClub] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [showMyEvents, setShowMyEvents] = useState(false);
  const [selectedDateEvents, setSelectedDateEvents] = useState<CalendarEvent[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const filteredEvents = sampleCalendarEvents.filter(event => {
    if (selectedClub && event.club !== selectedClub) return false;
    if (selectedType && event.type !== selectedType) return false;
    if (showMyEvents && !event.isRSVPd) return false;
    return true;
  });

  const handleDateClick = (date: Date, events: CalendarEvent[]) => {
    setSelectedDate(date);
    setSelectedDateEvents(events);
    setDrawerOpen(true);
  };

  return (
    <div className="bg-background min-h-screen w-full">
      <NavBar />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <CalendarHeader 
          viewMode={viewMode}
          setViewMode={setViewMode}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        
        <CalendarFilters
          selectedClub={selectedClub}
          setSelectedClub={setSelectedClub}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          showMyEvents={showMyEvents}
          setShowMyEvents={setShowMyEvents}
        />

        <CalendarGrid
          viewMode={viewMode}
          selectedDate={selectedDate}
          events={filteredEvents}
          onDateClick={handleDateClick}
        />

        <EventDetailsDrawer
          open={drawerOpen}
          onOpenChange={setDrawerOpen}
          date={selectedDate}
          events={selectedDateEvents}
        />
      </main>
    </div>
  );
};

export default Calendar;
