import React from "react";
import { Link } from "react-router-dom";
import GradientHeading from "./GradientHeading";
import ClubCard from "./ClubCard";

const clubsData = [
  {
    name: "GDG Prayagraj",
    image: "https://media.konfhub.com/event_poster/2024/October/08/1728587723424-6e4f70aa-fbb7-4c99-9a45-151d6254d9be.png",
    about: (
      <>
        <span className="block font-medium mb-1">Google Developers Group Prayagraj (GDG Prayagraj)</span>
        is for developers interested in Google's developer technology: Android, App Engine, Chrome, Maps API, YouTube API & Google Calendar API.<br />
        <span className="block mt-1">We organize CodeLabs, tech talks, hackathons, devFests & study jams.
        Free and open to all who want to learn software dev with Google tools or open-source.</span>
      </>
    ),
    socials: [
      { label: "Social Links", url: "https://linktr.ee/gdgprayagraj" },
    ],
    organizers: [
      {
        name: "Ankit Kumar Verma",
        image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/ankit_kumar_verma_chYpsKX.jpeg",
        profileUrl: "https://gdg.community.dev/u/mjd9x3/",
      },
    ],
    events: [
      {
        name: "Build With AI",
        date: "26 Mar 2025",
        image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/GDG24-BwAI-Bevy-EventThumb-Blue%20%282%29_flFteli.png",
      },
      {
        name: "Devfest",
        date: "26 Oct 2024",
        image: "https://media.konfhub.com/event_poster/2024/October/08/1728587723424-6e4f70aa-fbb7-4c99-9a45-151d6254d9be.png",
      },
      {
        name: "Google I/O",
        date: "29 Jun 2024",
        image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*-aYw7sGJfxM0x3XWN57M0g.png",
      },
    ],
  },
  {
    name: "TFUG Prayagraj",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSosJ9Inu4Nq4ZiwL97eDq8diTournVlAfnGA&s",
    about:
      "TensorFlow User Groups (TFUGs) are communities of developers, engineers, data scientists, and ML practitioners who are passionate about TensorFlow and related technologies.",
    organizers: [
      {
        name: "Ankit Kumar Verma",
        image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/ankit_kumar_verma_chYpsKX.jpeg",
        profileUrl: "#",
      },
      {
        name: "Hridyesh Gupta",
        image: "https://gdgprayagraj.com/_next/image?url=%2Fcore-team%2Fhridyesh.png&w=1920&q=75",
        profileUrl: "#",
      },
    ],
    events: [
      {
        name: "Kaggle Olympiad",
        date: "10 May 2025",
        image: "https://kaggle.com/competitions/101017/images/header",
      },
    ],
  },
  {
    name: "Codify Club",
    image: "https://pps.whatsapp.net/v/t61.24694-24/442457938_714514990705048_4031384478786705579_n.jpg?ccb=11-4&oh=01_Q5Aa1gH3l47afkBkZe4gS5Az8zHYCSGkJoTxFSzZAt1qCRNDQw&oe=684710BB&_nc_sid=5e03e0&_nc_cat=106",
    about:
      "Codify, the coolest club at United University for all you coding enthusiasts! Whether you're a coding freak or just a newbie aspiring geek, we've got something for everyone. Join our awesome community to learn, collaborate, and have a blast together. From fun workshops to rigorous hackathons, we've got all sorts of cool stuff lined up. Come on in and let's geek out together.",
    organizers: [
      {
        name: "Rohit Singh",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
        profileUrl: "#",
      },
    ],
    events: [
      {
        name: "Hackdiwas",
        image: "https://hackdiwas.github.io/codify-club/assets/image/hackdiwas%20logo%20black%20colour.png",
      },
      {
        name: "Hackdiwas 2.0",
        image: "https://hackdiwas.github.io/codify-club/assets/image/hackdiwas%20logo%20black%20colour.png",
      },
    ],
  },
  {
    name: "WikiClub Tech UIT",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=200&q=80",
    about: (
      <>
        WikiTech-United Institute of Technology, where knowledge and innovation converge! Our WikiTech chapter is a dynamic community dedicated to empowering students to make impactful contributions to the Wikimedia ecosystem through technology and open-source projects. At WikiTech-UIT, our mission is to ignite a passion for collaborative learning, foster innovative thinking, and enable students to thrive as leaders in the world of technology and open knowledge.
        <div className="text-sm text-gray-400 mt-2">
          <div>Contact: contactatwikitechuit@gmail.com</div>
          <div>Location: Student Center UIT, Prayagraj</div>
        </div>
      </>
    ),
    socials: [
      { label: "LinkedIn", url: "https://in.linkedin.com/company/wikitech-uit" },
    ],
    organizers: [
      {
        name: "Hridyesh Gupta",
        image: "https://gdgprayagraj.com/_next/image?url=%2Fcore-team%2Fhridyesh.png&w=1920&q=75",
        profileUrl: "https://www.linkedin.com/in/hridyesh-gupta/",
      },
    ],
    events: [
      {
        name: "Intro to Open Source",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=200&q=80",
      },
    ],
  },
];

// Helper function to get club ID from name
const getClubId = (clubName: string) => {
  const idMap: { [key: string]: string } = {
    "GDG Prayagraj": "gdg-prayagraj",
    "TFUG Prayagraj": "tfug-prayagraj",
    "Codify Club": "codify-club",
    "WikiClub Tech UIT": "wikiclub-tech-uit"
  };
  return idMap[clubName] || clubName.toLowerCase().replace(/\s+/g, '-');
};

const ClubsShowcase = () => (
  <section className="w-full max-w-7xl mx-auto px-1 py-14" id="clubs">
    <div className="mb-8">
      <GradientHeading gradient="orange-red" className="text-3xl md:text-4xl">
        Featured Clubs
      </GradientHeading>
      <p className="text-md mt-2 text-gray-400 max-w-xl">
        Meet some of Prayagraj's most active university tech clubs and communities. Join, connect, and be part of the action!
      </p>
    </div>
    <div className="grid gap-8 md:grid-cols-2">
      {clubsData.map((club) => (
        <div key={club.name} className="flex flex-col">
          <ClubCard {...club} />
          <div className="mt-4 flex justify-center">
            <Link to={`/clubs/${getClubId(club.name)}`}>
              <span className="text-neon-purple hover:text-neon-blue transition-colors duration-300 font-medium cursor-pointer">
                Learn more →
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ClubsShowcase;
