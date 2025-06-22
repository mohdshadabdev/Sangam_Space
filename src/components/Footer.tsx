import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Mail, Linkedin, Send, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from '@/hooks/use-toast';
import AdminLoginDialog from './AdminLoginDialog';

const Footer = () => {
  const [email, setEmail] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const [adminLoginOpen, setAdminLoginOpen] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate subscription
    toast({
      title: "Subscribed!",
      description: "You'll receive updates on the latest events",
    });
    setEmail('');
  };

  const scrollToTop = () => {
    // Navigate to home page first if not already there
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
      return;
    }
    
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToEvents = () => {
    // Navigate to home page first if not already there
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      setTimeout(() => {
        const eventsSection = document.querySelector('#events');
        if (eventsSection) {
          const rect = eventsSection.getBoundingClientRect();
          const offsetTop = window.pageYOffset + rect.top - 80;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    
    // Scroll to events section
    const eventsSection = document.querySelector('#events');
    if (eventsSection) {
      const rect = eventsSection.getBoundingClientRect();
      const offsetTop = window.pageYOffset + rect.top - 80; // 80px offset for navbar
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const scrollToClubs = () => {
    // Navigate to home page first if not already there
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      setTimeout(() => {
        const clubsSection = document.querySelector('#clubs');
        if (clubsSection) {
          const rect = clubsSection.getBoundingClientRect();
          const offsetTop = window.pageYOffset + rect.top - 80;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    
    // Scroll to clubs section
    const clubsSection = document.querySelector('#clubs');
    if (clubsSection) {
      const rect = clubsSection.getBoundingClientRect();
      const offsetTop = window.pageYOffset + rect.top - 80; // 80px offset for navbar
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    // Navigate to home page first if not already there
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
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
      const offsetTop = window.pageYOffset + rect.top - 80; // 80px offset for navbar
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <>
      <AdminLoginDialog 
        open={adminLoginOpen} 
        onOpenChange={setAdminLoginOpen} 
      />
      
      <footer className="w-full bg-gradient-to-b from-background to-muted/20 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand & Tagline */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent mb-4">
                SangamSpace
              </h3>
              <p className="text-lg text-muted-foreground mb-4 italic">
                "Find your space. Fuel your passion. Sangam it."
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground mb-3">📫 Contact Info:</h4>
                <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Mail size={16} />
                  <a href="mailto:mohdshadabdev@gmail.com" className="hover:underline">
                    mohdshadabdev@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin size={16} />
                  <a 
                    href="https://linkedin.com/in/mohdshadabdev" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    linkedin.com/in/mohdshadabdev
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <nav className="space-y-3">
                <button
                  onClick={scrollToTop}
                  className="block text-left text-muted-foreground hover:text-neon-blue transition-colors hover:translate-x-1 transform duration-200 bg-transparent border-none cursor-pointer p-0"
                >
                  Home
                </button>
                <button
                  onClick={scrollToEvents}
                  className="block text-left text-muted-foreground hover:text-neon-blue transition-colors hover:translate-x-1 transform duration-200 bg-transparent border-none cursor-pointer p-0"
                >
                  Explore Events
                </button>
                <Link 
                  to="/calendar" 
                  className="block text-muted-foreground hover:text-neon-blue transition-colors hover:translate-x-1 transform duration-200"
                >
                  Calendar
                </Link>
                <button
                  onClick={scrollToClubs}
                  className="block text-left text-muted-foreground hover:text-neon-blue transition-colors hover:translate-x-1 transform duration-200 bg-transparent border-none cursor-pointer p-0"
                >
                  Clubs
                </button>
                <button
                  onClick={scrollToContact}
                  className="block text-left text-muted-foreground hover:text-neon-blue transition-colors hover:translate-x-1 transform duration-200 bg-transparent border-none cursor-pointer p-0"
                >
                  Contact
                </button>
                <button
                  onClick={() => setAdminLoginOpen(true)}
                  className="flex items-center gap-2 text-left text-muted-foreground hover:text-neon-purple transition-colors hover:translate-x-1 transform duration-200 bg-transparent border-none cursor-pointer p-0"
                >
                  <Shield size={14} />
                  Admin Login
                </button>
              </nav>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Newsletter</h4>
              <p className="text-muted-foreground mb-4 text-sm">
                Stay updated on the latest events
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background/50 border-border/50 focus:border-neon-blue/50 focus:ring-neon-blue/20"
                />
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-neon-blue/80 to-neon-purple/80 hover:from-neon-blue hover:to-neon-purple text-white border-0 hover:shadow-lg hover:shadow-neon-blue/20 transition-all duration-300"
                >
                  <Send size={16} className="mr-2" />
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border/30">
            <div className="text-center text-muted-foreground">
              <p className="text-sm">
                © 2025 SangamSpace – Made with passion by{' '}
                <span className="text-neon-blue font-medium">Mohd Shadab</span>.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
