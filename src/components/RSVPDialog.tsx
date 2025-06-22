import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Sparkles, Calendar, MapPin, Clock, User, Mail, Phone, Building, CheckCircle, ExternalLink, Download } from "lucide-react";

type RSVPDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  eventTitle: string;
};

const RSVPDialog: React.FC<RSVPDialogProps> = ({ open, onOpenChange, eventTitle }) => {
  const [form, setForm] = useState({
    name: "",
    designation: "",
    city: "",
    contact: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    // Here you would handle sending an email/invitation, for now just simulate.
  }

  function handleDialogClose() {
    setTimeout(() => setSubmitted(false), 300); // reset after close (delay for smooth close)
    onOpenChange(false);
  }

  const handleAddToGoogleCalendar = () => {
    // Demo event details - in real app this would come from props
    const eventDate = new Date();
    eventDate.setDate(eventDate.getDate() + 7); // Next week
    const startDate = eventDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const endDate = new Date(eventDate.getTime() + 2 * 60 * 60 * 1000).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    
    const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(`You have successfully RSVP'd for ${eventTitle}. Looking forward to seeing you there!`)}&location=${encodeURIComponent('Sangam Space, Prayagraj')}`;
    
    window.open(googleUrl, "_blank");
  };

  const handleDownloadICS = () => {
    // Demo event details - in real app this would come from props
    const eventDate = new Date();
    eventDate.setDate(eventDate.getDate() + 7); // Next week
    const startDate = eventDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const endDate = new Date(eventDate.getTime() + 2 * 60 * 60 * 1000).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Sangam Space//EN
BEGIN:VEVENT
UID:${Date.now()}@sangamspace.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'}
DTSTART:${startDate}
DTEND:${endDate}
SUMMARY:${eventTitle}
DESCRIPTION:You have successfully RSVP'd for ${eventTitle}. Looking forward to seeing you there!
LOCATION:Sangam Space, Prayagraj
ORGANIZER:Sangam Space
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${eventTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.ics`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Dialog open={open} onOpenChange={open => (open ? onOpenChange(true) : handleDialogClose())}>
      <DialogContent className="max-w-lg bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 border-2 border-purple-500/30 shadow-2xl rounded-3xl backdrop-blur-xl overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse" />
        <div className="absolute top-0 left-1/4 w-24 h-24 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-20 h-20 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
        
        <div className="relative z-10">
          <DialogHeader className="text-center space-y-3 pb-4">
            <div className="flex justify-center mb-2">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center animate-pulse-glow">
                  <Sparkles className="w-6 h-6 text-white animate-pulse" />
                </div>
                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-lg opacity-50 animate-pulse" />
              </div>
            </div>
            
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-shimmer">
              Reserve Your Spot
            </DialogTitle>
            
            <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl p-3 border border-purple-500/30">
              <h3 className="text-base font-semibold text-white mb-1 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cyan-400" />
                {eventTitle}
              </h3>
              <DialogDescription className="text-gray-300 text-sm">
                Secure your place at this exclusive tech event. Join the future of innovation.
              </DialogDescription>
            </div>
          </DialogHeader>

          {!submitted ? (
            <form className="space-y-4 animate-fade-in-up" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-3">
                <div className="relative group">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-400 group-focus-within:text-cyan-400 transition-colors" />
                  <Input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Full Name"
                    value={form.name}
                    onChange={handleChange}
                    className="pl-10 bg-slate-800/50 border-purple-500/30 focus:border-cyan-400 rounded-xl h-10 text-white placeholder:text-gray-400 backdrop-blur-sm transition-all duration-300 focus:shadow-lg focus:shadow-cyan-400/20"
                  />
                </div>

                <div className="relative group">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-400 group-focus-within:text-cyan-400 transition-colors" />
                  <Input
                    type="text"
                    name="designation"
                    required
                    placeholder="Your Role (Student, Developer, etc.)"
                    value={form.designation}
                    onChange={handleChange}
                    className="pl-10 bg-slate-800/50 border-purple-500/30 focus:border-cyan-400 rounded-xl h-10 text-white placeholder:text-gray-400 backdrop-blur-sm transition-all duration-300 focus:shadow-lg focus:shadow-cyan-400/20"
                  />
                </div>

                <div className="relative group">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-400 group-focus-within:text-cyan-400 transition-colors" />
                  <Input
                    type="text"
                    name="city"
                    required
                    placeholder="Your City"
                    value={form.city}
                    onChange={handleChange}
                    className="pl-10 bg-slate-800/50 border-purple-500/30 focus:border-cyan-400 rounded-xl h-10 text-white placeholder:text-gray-400 backdrop-blur-sm transition-all duration-300 focus:shadow-lg focus:shadow-cyan-400/20"
                  />
                </div>

                <div className="relative group">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-400 group-focus-within:text-cyan-400 transition-colors" />
                  <Input
                    type="text"
                    name="contact"
                    required
                    placeholder="Contact Number"
                    pattern="[0-9]{10,15}"
                    value={form.contact}
                    onChange={handleChange}
                    className="pl-10 bg-slate-800/50 border-purple-500/30 focus:border-cyan-400 rounded-xl h-10 text-white placeholder:text-gray-400 backdrop-blur-sm transition-all duration-300 focus:shadow-lg focus:shadow-cyan-400/20"
                  />
                </div>

                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-400 group-focus-within:text-cyan-400 transition-colors" />
                  <Input
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    className="pl-10 bg-slate-800/50 border-purple-500/30 focus:border-cyan-400 rounded-xl h-10 text-white placeholder:text-gray-400 backdrop-blur-sm transition-all duration-300 focus:shadow-lg focus:shadow-cyan-400/20"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 hover:from-cyan-400 hover:via-purple-500 hover:to-pink-500 text-white font-bold text-base rounded-xl shadow-2xl hover:shadow-cyan-400/30 transition-all duration-300 transform hover:scale-[1.02] relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Confirm RSVP
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-2">
                <Clock className="w-3 h-3" />
                Invitation details will be sent instantly
              </p>
            </form>
          ) : (
            <div className="text-center space-y-4 py-6 animate-scale-in">
              <div className="relative mx-auto w-20 h-20 mb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full flex items-center justify-center animate-pulse-glow">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full blur-xl opacity-50 animate-pulse" />
              </div>
              
              <div className="space-y-3">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  🎉 You're In!
                </h2>
                <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl p-4 border border-green-500/30">
                  <p className="text-base text-white mb-1 font-semibold">RSVP Confirmed Successfully</p>
                  <p className="text-gray-300 text-sm">
                    Your digital invitation and event details have been sent to your email. 
                    Get ready for an amazing experience!
                  </p>
                </div>
              </div>

              {/* Calendar Action Buttons */}
              <div className="flex flex-col gap-3 mt-6">
                <Button
                  onClick={handleAddToGoogleCalendar}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-400/30 flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Add to Google Calendar
                </Button>
                
                <Button
                  onClick={handleDownloadICS}
                  variant="outline"
                  className="w-full border-purple-500/30 bg-slate-800/50 text-white hover:bg-slate-700/50 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-400/20 flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download .ics File
                </Button>
              </div>

              <Button 
                onClick={() => onOpenChange(false)} 
                className="mt-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white px-6 py-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-400/30"
              >
                Continue Exploring
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RSVPDialog;
