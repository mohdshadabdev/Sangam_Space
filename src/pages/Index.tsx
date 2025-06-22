
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import EventFeed from "../components/EventFeed";
import WelcomeDialog from "../components/WelcomeDialog";
import ClubsShowcase from "../components/ClubsShowcase";
import ContactUs from "../components/ContactUs";
import FaqChatbot from "../components/FaqChatbot";
import Footer from "../components/Footer";

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Only show on the first visit per session
    if (!sessionStorage.getItem("welcomeShown")) {
      setShowWelcome(true);
    }
  }, []);

  const handleClose = () => {
    setShowWelcome(false);
    sessionStorage.setItem("welcomeShown", "true");
  };

  return (
    <div className="bg-background min-h-screen w-full">
      <WelcomeDialog open={showWelcome} onOpenChange={open => {
        if (!open) handleClose();
      }} />
      <NavBar />
      <main className="w-full min-h-screen relative">
        <HeroSection />
        <div className="px-4 sm:px-6 lg:px-8">
          <EventFeed />
          <ClubsShowcase />
          <ContactUs />
        </div>
      </main>
      <Footer />
      <FaqChatbot />
    </div>
  );
};

export default Index;
