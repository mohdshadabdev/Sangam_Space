
import React, { useState } from "react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "../ui/drawer";
import { Button } from "../ui/button";
import { Calendar, Clock, MapPin, Users, ExternalLink, Download, Star } from "lucide-react";
import { format } from "date-fns";
import { CalendarEvent } from "../../types/calendar";
import RSVPDialog from "../RSVPDialog";

interface EventDetailsDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  date: Date;
  events: CalendarEvent[];
}

const EventDetailsDrawer = ({ open, onOpenChange, date, events }: EventDetailsDrawerProps) => {
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [selectedEventTitle, setSelectedEventTitle] = useState("");

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

  const handleRSVP = (event: CalendarEvent) => {
    setSelectedEventTitle(event.title);
    setRsvpOpen(true);
  };

  const handleAddToGoogleCalendar = (event: CalendarEvent) => {
    const startDate = format(event.date, "yyyyMMdd");
    const startTime = event.time.replace(":", "");
    const endTime = event.endTime?.replace(":", "") || "2359";
    
    const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startDate}T${startTime}00/${startDate}T${endTime}00&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
    
    window.open(googleUrl, "_blank");
  };

  const handleDownloadICS = (event: CalendarEvent) => {
    const startDate = format(event.date, "yyyyMMdd");
    const startTime = event.time.replace(":", "") + "00";
    const endTime = (event.endTime?.replace(":", "") || "2359") + "00";
    
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Sangam Space//EN
BEGIN:VEVENT
UID:${event.id}@sangamspace.com
DTSTAMP:${format(new Date(), "yyyyMMdd'T'HHmmss'Z'")}
DTSTART:${startDate}T${startTime}
DTEND:${startDate}T${endTime}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
ORGANIZER:${event.organizer}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${event.title}.ics`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <RSVPDialog 
        open={rsvpOpen} 
        onOpenChange={setRsvpOpen} 
        eventTitle={selectedEventTitle} 
      />
      
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent className="max-h-[85vh] sm:max-h-[80vh]">
          <DrawerHeader className="border-b border-border/30 px-4 sm:px-6">
            <DrawerTitle className="text-lg sm:text-xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              {format(date, "EEEE, MMMM d, yyyy")}
            </DrawerTitle>
            <p className="text-muted-foreground text-sm sm:text-base">
              {events.length === 0 ? "No events scheduled" : `${events.length} event${events.length > 1 ? "s" : ""} scheduled`}
            </p>
          </DrawerHeader>

          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto">
            {events.length === 0 ? (
              <div className="text-center py-8">
                <Calendar className="w-10 sm:w-12 h-10 sm:h-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No events on this date</p>
              </div>
            ) : (
              events.map((event) => (
                <div
                  key={event.id}
                  className="bg-card/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-border/30 hover:border-border/50 transition-all duration-200"
                >
                  {/* Event Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-3 h-3 rounded-full ${getTypeColor(event.type)}`} />
                        <span className="text-xs sm:text-sm font-medium text-muted-foreground">{event.type}</span>
                        {event.isRSVPd && (
                          <Star className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-500 fill-current" />
                        )}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-foreground mb-1">{event.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{event.description}</p>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="grid grid-cols-1 gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                      <Clock className="w-3 sm:w-4 h-3 sm:h-4" />
                      <span>{event.time} {event.endTime && `- ${event.endTime}`}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                      <MapPin className="w-3 sm:w-4 h-3 sm:h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                      <Users className="w-3 sm:w-4 h-3 sm:h-4" />
                      <span>{event.attendeeCount} {event.maxAttendees && `/ ${event.maxAttendees}`} attendees</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                      <span className="font-medium">Organizer:</span>
                      <span>{event.organizer}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
                    <Button
                      onClick={() => handleRSVP(event)}
                      className={`${
                        event.isRSVPd
                          ? "bg-green-600 hover:bg-green-700"
                          : "bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-lg"
                      } transition-all duration-200 text-sm sm:text-base w-full sm:w-auto`}
                      size="sm"
                    >
                      {event.isRSVPd ? "RSVP'd" : "RSVP Now"}
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleAddToGoogleCalendar(event)}
                      className="flex items-center gap-2 text-xs sm:text-sm w-full sm:w-auto"
                    >
                      <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4" />
                      <span className="hidden sm:inline">Add to Google Calendar</span>
                      <span className="sm:hidden">Google Cal</span>
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDownloadICS(event)}
                      className="flex items-center gap-2 text-xs sm:text-sm w-full sm:w-auto"
                    >
                      <Download className="w-3 sm:w-4 h-3 sm:h-4" />
                      <span className="hidden sm:inline">Download .ics</span>
                      <span className="sm:hidden">.ics</span>
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default EventDetailsDrawer;
