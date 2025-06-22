
import React, { useState } from "react";
import { Link } from "react-router-dom";
import GradientHeading from "./GradientHeading";
import EventOrganizeForm from "./EventOrganizeForm";

// Use Sangam/river themed image as background
const heroBgImg =
  "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=1500&q=80";

const tagline = "Sangam Space – Prayagraj's Hub for College & Tech Events";
const subtext =
  "Where Prayagraj's Campus & Tech Vibes Converge. Discover, share, and organize the hottest campus & tech events in one smart space.";

const HeroSection = () => {
  const [organizeFormOpen, setOrganizeFormOpen] = useState(false);

  return (
    <section
      className="w-full flex flex-col items-center py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 relative overflow-hidden select-none min-h-[450px] sm:min-h-[520px] animate-fade-in-up"
      style={{
        background: `linear-gradient(180deg, hsl(var(--background))/80 0%, hsl(var(--background))/90 80%), url('${heroBgImg}') center center / cover no-repeat`,
      }}
    >
      <EventOrganizeForm 
        open={organizeFormOpen} 
        onOpenChange={setOrganizeFormOpen} 
      />

      {/* Tiranga Laser Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Saffron laser beams */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60 animate-laser-move"></div>
        <div className="absolute top-16 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-40 animate-laser-move-reverse"></div>
        
        {/* White laser beams */}
        <div className="absolute top-32 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-laser-move"></div>
        <div className="absolute top-48 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-30 animate-laser-move-reverse"></div>
        
        {/* Green laser beams */}
        <div className="absolute bottom-32 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-60 animate-laser-move"></div>
        <div className="absolute bottom-16 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-40 animate-laser-move-reverse"></div>
        
        {/* Diagonal laser beams */}
        <div className="absolute top-1/4 -left-full w-[200%] h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-30 rotate-12 animate-diagonal-laser"></div>
        <div className="absolute top-1/2 -left-full w-[200%] h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-30 -rotate-12 animate-diagonal-laser-reverse"></div>
      </div>

      {/* Subtle animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-neon-blue rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-neon-purple rounded-full animate-pulse opacity-30" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-neon-orange rounded-full animate-pulse opacity-35" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Hero BG Visuals Overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-30 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 40% 10%, rgba(79,140,255,0.2) 0%, transparent 70%), radial-gradient(ellipse at 80% 110%, rgba(152,54,255,0.15) 0%, transparent 100%)",
        }}
      />
      
      <div className="p-1 rounded-3xl mb-4 sm:mb-6">
        <GradientHeading className="z-10 mb-2 sm:mb-4 drop-shadow-2xl text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl" gradient="blue-purple">
          Sangam Space
        </GradientHeading>
      </div>
      
      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-foreground/90 z-10 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl text-center mb-2 font-heading px-2">
        {tagline}
      </h2>
      
      <p className="mt-2 md:mt-4 mb-6 sm:mb-8 lg:mb-10 text-sm sm:text-base lg:text-lg text-muted-foreground z-10 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl text-center font-sans px-2">
        {subtext}
      </p>
      
      <div className="z-10 flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 w-full max-w-xs sm:max-w-none justify-center">
        <Link
          to="/events"
          className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-3xl font-semibold text-base sm:text-lg bg-gradient-to-r from-neon-blue via-neon-purple to-neon-purple text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
        >
          Explore Events
        </Link>
        <button
          onClick={() => setOrganizeFormOpen(true)}
          className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-3xl font-semibold text-base sm:text-lg bg-gradient-to-r from-neon-orange via-neon-red to-neon-red text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          Organize Yours
        </button>
      </div>

      {/* Subtle floating geometric shapes */}
      <div className="absolute top-20 right-4 sm:right-10 w-12 sm:w-16 h-12 sm:h-16 border border-neon-blue/20 rotate-45 opacity-20"></div>
      <div className="absolute bottom-20 left-4 sm:left-10 w-8 sm:w-12 h-8 sm:h-12 border border-neon-purple/20 rounded-full opacity-25"></div>
    </section>
  );
};

export default HeroSection;
