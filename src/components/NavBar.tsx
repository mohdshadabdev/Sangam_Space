
import React, { useState } from "react";
import { Menu, Sun, Moon } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "./ThemeProvider";
import EventOrganizeForm from "./EventOrganizeForm";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [organizeFormOpen, setOrganizeFormOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const isEventsPage = location.pathname === '/events';

  const scrollToContact = () => {
    // Navigate to home page first if not already there
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      // Use setTimeout to ensure navigation completes before scrolling
      setTimeout(() => {
        const contactSection = document.querySelector('#contact-us');
        if (contactSection) {
          const rect = contactSection.getBoundingClientRect();
          const offsetTop = window.pageYOffset + rect.top - 80;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    
    // Scroll to contact section
    const contactSection = document.querySelector('#contact-us');
    if (contactSection) {
      const rect = contactSection.getBoundingClientRect();
      const offsetTop = window.pageYOffset + rect.top - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    // Navigate to home page first if not already there
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      // Use setTimeout to ensure navigation completes before scrolling
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
      return;
    }
    
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigationClick = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const links = [
    { name: "Events", to: "/events" },
    { name: "Clubs", to: "/clubs" },
    { name: "Calendar", to: "/calendar" },
    { name: "Contact Us", onClick: scrollToContact },
    { name: "Organize Event", onClick: () => setOrganizeFormOpen(true) },
  ];

  const handleLinkClick = (link: typeof links[0]) => {
    if (link.onClick) {
      link.onClick();
    } else if (link.to) {
      handleNavigationClick();
    }
    setOpen(false);
  };

  return (
    <>
      <EventOrganizeForm 
        open={organizeFormOpen} 
        onOpenChange={setOrganizeFormOpen} 
      />
      
      <nav className="sticky top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-lg transition-all duration-300 animate-slide-in-left">
        <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-10 h-14 sm:h-16 max-w-screen-2xl mx-auto relative z-10">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 font-heading text-lg sm:text-xl md:text-2xl font-bold tracking-tight hover:opacity-90 transition-all duration-300 animate-shimmer bg-transparent border-none cursor-pointer p-0"
          >
            <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-red bg-clip-text text-transparent shimmer-text">
              Sangam Space
            </span>
          </button>
          
          <div className="hidden md:flex gap-4 lg:gap-6 items-center">
            {links.map((l, index) => (
              l.to ? (
                <Link
                  key={l.name}
                  to={l.to}
                  onClick={() => handleLinkClick(l)}
                  className="text-sm lg:text-lg text-foreground hover:text-neon-blue transition-all duration-300 py-2 font-medium relative group animate-fade-in-up hover:animate-float"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {l.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ) : (
                <button
                  key={l.name}
                  onClick={() => handleLinkClick(l)}
                  className="text-sm lg:text-lg text-foreground hover:text-neon-blue transition-all duration-300 py-2 font-medium relative group animate-fade-in-up hover:animate-float bg-transparent border-none cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {l.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple transition-all duration-300 group-hover:w-full"></span>
                </button>
              )
            ))}
            
            <button
              onClick={toggleTheme}
              className="ml-2 lg:ml-4 p-2 rounded-full bg-card hover:bg-accent transition-all duration-300 hover:scale-110 animate-pulse-glow border border-neon-blue/30"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={18} className="text-neon-orange animate-float" />
              ) : (
                <Moon size={18} className="text-neon-blue animate-float" />
              )}
            </button>
          </div>
          
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 rounded-full bg-card hover:bg-accent transition-all duration-300 hover:scale-110 animate-pulse-glow border border-neon-blue/30"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={16} className="text-neon-orange" />
              ) : (
                <Moon size={16} className="text-neon-blue" />
              )}
            </button>
            
            <button
              className="flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-2xl hover:bg-accent active:scale-95 transition-all duration-300 animate-pulse-glow"
              onClick={() => setOpen(!open)}
              aria-label="Open menu"
            >
              <Menu size={20} className="sm:size-6 text-neon-blue" />
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {open && (
          <div className="md:hidden animate-slide-in-right backdrop-blur-md bg-background/95 border-b border-border px-3 sm:px-5 py-3 sm:py-4 space-y-1 sm:space-y-2 relative z-10">
            {links.map((l, index) => (
              l.to ? (
                <Link
                  key={l.name}
                  to={l.to}
                  onClick={() => handleLinkClick(l)}
                  className="block w-full text-left text-base sm:text-lg text-foreground hover:text-neon-blue py-2 sm:py-2.5 font-medium transition-all duration-300 rounded hover:bg-accent animate-fade-in-up px-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {l.name}
                </Link>
              ) : (
                <button
                  key={l.name}
                  onClick={() => handleLinkClick(l)}
                  className="block w-full text-left text-base sm:text-lg text-foreground hover:text-neon-blue py-2 sm:py-2.5 font-medium transition-all duration-300 rounded hover:bg-accent animate-fade-in-up bg-transparent border-none cursor-pointer px-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {l.name}
                </button>
              )
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
