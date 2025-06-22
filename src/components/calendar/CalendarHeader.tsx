
import React from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight, Calendar, Users } from "lucide-react";
import { ViewMode } from "../../types/calendar";
import { format } from "date-fns";

interface CalendarHeaderProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

const CalendarHeader = ({ viewMode, setViewMode, selectedDate, setSelectedDate }: CalendarHeaderProps) => {
  const navigateMonth = (direction: "prev" | "next") => {
    const newDate = new Date(selectedDate);
    if (direction === "prev") {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setSelectedDate(newDate);
  };

  const navigateWeek = (direction: "prev" | "next") => {
    const newDate = new Date(selectedDate);
    if (direction === "prev") {
      newDate.setDate(newDate.getDate() - 7);
    } else {
      newDate.setDate(newDate.getDate() + 7);
    }
    setSelectedDate(newDate);
  };

  const navigate = viewMode === "month" ? navigateMonth : navigateWeek;

  return (
    <div className="mb-6 sm:mb-8 animate-fade-in-up px-4 sm:px-0">
      <div className="text-center mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-purple bg-clip-text text-transparent">
          Your Event Calendar
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">Plan your week with Sangam Space</p>
      </div>

      <div className="flex flex-col gap-4 bg-card/50 backdrop-blur-sm rounded-2xl p-3 sm:p-4 border border-border/50">
        {/* View Toggle */}
        <div className="flex justify-center">
          <div className="flex items-center gap-1 sm:gap-2 bg-accent/50 rounded-xl p-1">
            <Button
              variant={viewMode === "month" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("month")}
              className="transition-all duration-200 text-xs sm:text-sm"
            >
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Month
            </Button>
            <Button
              variant={viewMode === "week" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("week")}
              className="transition-all duration-200 text-xs sm:text-sm"
            >
              <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Week
            </Button>
          </div>
        </div>

        {/* Date Navigation */}
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("prev")}
            className="hover:scale-105 transition-transform p-2 sm:p-2"
          >
            <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
          </Button>
          
          <div className="text-center flex-1">
            <h2 className="text-lg sm:text-xl font-bold text-foreground">
              {format(selectedDate, viewMode === "month" ? "MMMM yyyy" : "MMM d, yyyy")}
            </h2>
            {viewMode === "week" && (
              <p className="text-xs sm:text-sm text-muted-foreground">
                Week of {format(selectedDate, "MMM d")}
              </p>
            )}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("next")}
            className="hover:scale-105 transition-transform p-2 sm:p-2"
          >
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </Button>
        </div>

        {/* Today Button */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSelectedDate(new Date())}
            className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-neon-blue/30 hover:scale-105 transition-all text-xs sm:text-sm"
          >
            Today
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CalendarHeader;
