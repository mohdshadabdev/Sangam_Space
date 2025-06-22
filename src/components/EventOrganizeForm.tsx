
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Calendar, MapPin, Clock, Users, Tag, CheckCircle, Sparkles, CalendarIcon, Building2, X } from "lucide-react";
import { Calendar as CalendarComponent } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import TimePicker from "./TimePicker";

interface EventOrganizeFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EventOrganizeForm = ({ open, onOpenChange }: EventOrganizeFormProps) => {
  // Get current date and time for defaults
  const now = new Date();
  const currentDate = format(now, "yyyy-MM-dd");
  const currentTime = format(now, "HH:mm");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    organizationName: "",
    date: currentDate,
    time: currentTime,
    venue: "",
    category: "",
    expectedAttendees: "",
    contactEmail: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(now);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Event organized:", formData);
    setIsSubmitted(true);
    
    // Reset form after 10 seconds and close dialog
    setTimeout(() => {
      setIsSubmitted(false);
      onOpenChange(false);
      const resetNow = new Date();
      setFormData({
        title: "",
        description: "",
        organizationName: "",
        date: format(resetNow, "yyyy-MM-dd"),
        time: format(resetNow, "HH:mm"),
        venue: "",
        category: "",
        expectedAttendees: "",
        contactEmail: ""
      });
      setSelectedDate(resetNow);
    }, 10000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(date);
      setFormData({
        ...formData,
        date: format(date, "yyyy-MM-dd")
      });
    }
  };

  const handleTimeChange = (time: string) => {
    setFormData({
      ...formData,
      time: time
    });
  };

  const handleDialogClose = () => {
    if (!isSubmitted) {
      onOpenChange(false);
    }
  };

  const handleSuccessClose = () => {
    setIsSubmitted(false);
    onOpenChange(false);
    const resetNow = new Date();
    setFormData({
      title: "",
      description: "",
      organizationName: "",
      date: format(resetNow, "yyyy-MM-dd"),
      time: format(resetNow, "HH:mm"),
      venue: "",
      category: "",
      expectedAttendees: "",
      contactEmail: ""
    });
    setSelectedDate(resetNow);
  };

  return (
    <Dialog open={open} onOpenChange={handleDialogClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-purple bg-clip-text text-transparent">
                Organize Your Event
              </DialogTitle>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Event Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all"
                    placeholder="Enter your event title"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all resize-none"
                    placeholder="Describe your event"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    <Building2 className="inline w-4 h-4 mr-1" />
                    Organization Name
                  </label>
                  <input
                    type="text"
                    name="organizationName"
                    value={formData.organizationName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all"
                    placeholder="Enter your organization or company name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    <Calendar className="inline w-4 h-4 mr-1" />
                    Date *
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal px-4 py-3 h-auto rounded-xl border border-border bg-card text-foreground hover:bg-accent",
                          !selectedDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={selectedDate}
                        onSelect={handleDateSelect}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    <Clock className="inline w-4 h-4 mr-1" />
                    Time *
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal px-4 py-3 h-auto rounded-xl border border-border bg-card text-foreground hover:bg-accent"
                      >
                        <Clock className="mr-2 h-4 w-4" />
                        {formData.time}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <TimePicker
                        value={formData.time}
                        onChange={handleTimeChange}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    <MapPin className="inline w-4 h-4 mr-1" />
                    Venue *
                  </label>
                  <input
                    type="text"
                    name="venue"
                    value={formData.venue}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all"
                    placeholder="Event venue"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    <Tag className="inline w-4 h-4 mr-1" />
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all"
                  >
                    <option value="">Select category</option>
                    <option value="Tech">Tech</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Conference">Conference</option>
                    <option value="Seminar">Seminar</option>
                    <option value="Cultural">Cultural</option>
                    <option value="Sports">Sports</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    <Users className="inline w-4 h-4 mr-1" />
                    Expected Attendees
                  </label>
                  <input
                    type="number"
                    name="expectedAttendees"
                    value={formData.expectedAttendees}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all"
                    placeholder="Approximate number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Contact Email *
                  </label>
                  <input
                    type="email"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-neon-orange via-neon-red to-neon-red text-white hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  Submit Event
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 px-6 text-center relative overflow-hidden">
            {/* Close button */}
            <button
              onClick={handleSuccessClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors z-10"
            >
              <X className="w-5 h-5 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300" />
            </button>

            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-blue rounded-full animate-ping opacity-40"></div>
              <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-neon-purple rounded-full animate-pulse opacity-30" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-neon-orange rounded-full animate-ping opacity-35" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-neon-red rounded-full animate-pulse opacity-25" style={{ animationDelay: '3s' }}></div>
            </div>

            {/* Success icon with animation */}
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-scale-in shadow-2xl">
                <CheckCircle className="w-10 h-10 text-white animate-fade-in" style={{ animationDelay: '0.2s' }} />
              </div>
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
              </div>
            </div>

            {/* Success message */}
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent mb-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Event Submitted Successfully! 🎉
            </h2>
            
            <div className="space-y-3 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Thank you for organizing an event with Sangam Space!
              </p>
              <p className="text-sm text-muted-foreground/80 max-w-md mx-auto">
                Our team will review your submission and publish it soon. You'll receive a confirmation email at <span className="font-semibold text-neon-blue">{formData.contactEmail}</span>
              </p>
            </div>

            {/* Decorative elements */}
            <div className="mt-8 flex items-center justify-center space-x-2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="w-2 h-2 bg-neon-blue rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-neon-purple rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-neon-orange rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>

            {/* Auto-close indicator */}
            <div className="mt-6 text-xs text-muted-foreground/60 animate-fade-in" style={{ animationDelay: '1s' }}>
              This dialog will close automatically in 10 seconds...
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EventOrganizeForm;
