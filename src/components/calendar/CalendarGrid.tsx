
import React from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth, isSameDay, isToday } from "date-fns";
import { CalendarEvent, ViewMode } from "../../types/calendar";
import { cn } from "../../lib/utils";

interface CalendarGridProps {
  viewMode: ViewMode;
  selectedDate: Date;
  events: CalendarEvent[];
  onDateClick: (date: Date, events: CalendarEvent[]) => void;
}

const CalendarGrid = ({ viewMode, selectedDate, events, onDateClick }: CalendarGridProps) => {
  const monthStart = startOfMonth(selectedDate);
  const monthEnd = endOfMonth(selectedDate);
  const calendarStart = startOfWeek(monthStart);
  const calendarEnd = endOfWeek(monthEnd);

  const weekStart = startOfWeek(selectedDate);
  const weekEnd = endOfWeek(selectedDate);

  const days = eachDayOfInterval({
    start: viewMode === "month" ? calendarStart : weekStart,
    end: viewMode === "month" ? calendarEnd : weekEnd,
  });

  const getEventsForDate = (date: Date) => {
    return events.filter(event => isSameDay(event.date, date));
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

  if (viewMode === "week") {
    return (
      <div className="animate-fade-in px-2 sm:px-0">
        <div className="grid grid-cols-7 gap-0.5 sm:gap-1 mb-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="p-1 sm:p-2 text-center text-xs sm:text-sm font-medium text-muted-foreground">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-0.5 sm:gap-1">
          {days.map((day) => {
            const dayEvents = getEventsForDate(day);
            const hasRSVPdEvents = dayEvents.some(event => event.isRSVPd);
            
            return (
              <div
                key={day.toISOString()}
                onClick={() => onDateClick(day, dayEvents)}
                className={cn(
                  "min-h-[100px] sm:min-h-[140px] p-1 sm:p-2 border border-border/30 rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg group",
                  isToday(day) && "bg-neon-blue/10 border-neon-blue/50",
                  hasRSVPdEvents && "ring-1 sm:ring-2 ring-neon-purple/30",
                  dayEvents.length > 0 && "border-neon-blue/40 bg-card/40",
                  "bg-card/30 backdrop-blur-sm hover:bg-card/50"
                )}
              >
                <div className={cn(
                  "text-xs sm:text-sm font-medium mb-1 sm:mb-2",
                  isToday(day) ? "text-neon-blue font-bold" : "text-foreground"
                )}>
                  {format(day, "d")}
                </div>
                
                <div className="space-y-0.5 sm:space-y-1">
                  {dayEvents.slice(0, 2).map((event) => (
                    <div
                      key={event.id}
                      className="text-xs p-1 sm:p-1.5 rounded bg-card/80 group-hover:bg-card/95 transition-colors border-l-2 sm:border-l-3 shadow-sm"
                      style={{ borderLeftColor: getTypeColor(event.type).replace('bg-', '') === 'purple-500' ? '#8b5cf6' : 
                                                getTypeColor(event.type).replace('bg-', '') === 'green-500' ? '#10b981' :
                                                getTypeColor(event.type).replace('bg-', '') === 'red-500' ? '#ef4444' :
                                                getTypeColor(event.type).replace('bg-', '') === 'orange-500' ? '#f97316' :
                                                getTypeColor(event.type).replace('bg-', '') === 'blue-500' ? '#3b82f6' : '#6b7280' }}
                    >
                      <div className="font-bold truncate text-foreground text-xs mb-0.5 sm:mb-1 leading-tight">{event.title}</div>
                      <div className="text-muted-foreground truncate text-xs opacity-90 hidden sm:block">{event.club}</div>
                      <div className="text-muted-foreground text-xs font-medium">{event.time}</div>
                    </div>
                  ))}
                  {dayEvents.length > 2 && (
                    <div className="text-xs text-muted-foreground font-medium bg-accent/50 rounded px-1 sm:px-1.5 py-0.5">
                      +{dayEvents.length - 2} more
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in px-2 sm:px-0">
      <div className="grid grid-cols-7 gap-0.5 sm:gap-1 mb-2">
        {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day, index) => (
          <div key={day} className="p-2 sm:p-3 text-center text-xs sm:text-sm font-semibold text-foreground bg-accent/30 rounded-lg">
            <span className="hidden sm:inline">{day}</span>
            <span className="sm:hidden">{day.slice(0, 3)}</span>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-0.5 sm:gap-1">
        {days.map((day) => {
          const dayEvents = getEventsForDate(day);
          const hasRSVPdEvents = dayEvents.some(event => event.isRSVPd);
          
          return (
            <div
              key={day.toISOString()}
              onClick={() => onDateClick(day, dayEvents)}
              className={cn(
                "min-h-[80px] sm:min-h-[120px] p-1 sm:p-2 border border-border/30 rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg group",
                !isSameMonth(day, selectedDate) && "text-muted-foreground/50 bg-muted/20",
                isToday(day) && "bg-neon-blue/10 border-neon-blue/50",
                hasRSVPdEvents && "ring-1 sm:ring-2 ring-neon-purple/30",
                dayEvents.length > 0 && isSameMonth(day, selectedDate) && "border-neon-blue/40 bg-card/40",
                "bg-card/30 backdrop-blur-sm hover:bg-card/50"
              )}
            >
              <div className={cn(
                "text-xs sm:text-sm font-medium mb-1 sm:mb-2",
                isToday(day) ? "text-neon-blue font-bold" : "text-foreground",
                !isSameMonth(day, selectedDate) && "text-muted-foreground/50"
              )}>
                {format(day, "d")}
              </div>
              
              <div className="space-y-0.5 sm:space-y-1">
                {dayEvents.slice(0, 1).map((event) => (
                  <div
                    key={event.id}
                    className="text-xs p-1 sm:p-1.5 rounded bg-card/80 group-hover:bg-card/95 transition-colors border-l-2 sm:border-l-3 shadow-sm"
                    style={{ borderLeftColor: getTypeColor(event.type).replace('bg-', '') === 'purple-500' ? '#8b5cf6' : 
                                              getTypeColor(event.type).replace('bg-', '') === 'green-500' ? '#10b981' :
                                              getTypeColor(event.type).replace('bg-', '') === 'red-500' ? '#ef4444' :
                                              getTypeColor(event.type).replace('bg-', '') === 'orange-500' ? '#f97316' :
                                              getTypeColor(event.type).replace('bg-', '') === 'blue-500' ? '#3b82f6' : '#6b7280' }}
                  >
                    <div className="font-bold truncate text-foreground text-xs mb-0.5 leading-tight">{event.title}</div>
                    <div className="text-muted-foreground truncate text-xs opacity-90 hidden sm:block">{event.club}</div>
                  </div>
                ))}
                {dayEvents.length > 1 && (
                  <div className="text-xs text-muted-foreground font-medium bg-accent/50 rounded px-1 sm:px-1.5 py-0.5">
                    +{dayEvents.length - 1} more
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGrid;
