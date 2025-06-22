
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import GradientHeading from "../components/GradientHeading";
import { Calendar, MapPin, Users, ExternalLink, Mail, Globe, ArrowLeft, Linkedin, User } from "lucide-react";

const clubsDetailData = {
  "gdg-prayagraj": {
    name: "GDG Prayagraj",
    logo: "https://media.konfhub.com/event_poster/2024/October/08/1728587723424-6e4f70aa-fbb7-4c99-9a45-151d6254d9be.png",
    banner: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=1200&q=80",
    about: "Google Developer Group Prayagraj (GDG Prayagraj) is for developers interested in Google's developer technology: Android, App Engine, Chrome, Maps API, YouTube API & Google Calendar API. We organize CodeLabs, tech talks, hackathons, devFests & study jams. Free and open to all who want to learn software dev with Google tools or open-source.",
    color: "from-neon-blue to-neon-purple",
    links: [
      { label: "Website", url: "https://gdg.community.dev/gdg-prayagraj/", icon: Globe },
      { label: "Social Links", url: "https://linktr.ee/gdgprayagraj", icon: ExternalLink },
    ],
    organizers: [
      {
        name: "Ankit Kumar Verma",
        role: "Lead Organizer",
        image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/ankit_kumar_verma_chYpsKX.jpeg",
        profileUrl: "https://gdg.community.dev/u/mjd9x3/",
        linkedinUrl: "https://www.linkedin.com/in/ankit-kumar-verma-081804160",
        bio: "Passionate developer and community leader with 5+ years of experience in Android development."
      },
      {
        name: "Priya Sharma",
        role: "Co-Organizer",
        image: "https://randomuser.me/api/portraits/women/32.jpg",
        profileUrl: "#",
        bio: "Full-stack developer specializing in web technologies and cloud computing."
      }
    ],
    upcomingEvents: [
      {
        name: "Build With AI",
        date: "26 Mar 2025",
        time: "02:00 PM",
        venue: "IITP Auditorium",
        image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/GDG24-BwAI-Bevy-EventThumb-Blue%20%282%29_flFteli.png",
        description: "Learn to build AI-powered applications with Google's latest tools and frameworks."
      },
      {
        name: "Android Development Workshop",
        date: "15 Apr 2025",
        time: "10:00 AM",
        venue: "GDG Hub",
        image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=500&q=80",
        description: "Hands-on workshop on modern Android development with Kotlin and Jetpack Compose."
      }
    ],
    pastEvents: [
      {
        name: "Devfest 2024",
        date: "26 Oct 2024",
        image: "https://media.konfhub.com/event_poster/2024/October/08/1728587723424-6e4f70aa-fbb7-4c99-9a45-151d6254d9be.png",
        description: "Annual developer festival with talks, workshops, and networking."
      },
      {
        name: "Google I/O Extended",
        date: "29 Jun 2024",
        image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*-aYw7sGJfxM0x3XWN57M0g.png",
        description: "Local viewing party and discussion of Google I/O announcements."
      }
    ],
    contact: {
      email: "gdgprayagraj@gmail.com",
      phone: "+91 98765 43210",
      address: "Tech Hub, Prayagraj, UP"
    }
  },
  "tfug-prayagraj": {
    name: "TFUG Prayagraj",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSosJ9Inu4Nq4ZiwL97eDq8diTournVlAfnGA&s",
    banner: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    about: "TensorFlow User Groups (TFUGs) are communities of developers, engineers, data scientists, and ML practitioners who are passionate about TensorFlow and related technologies. Our mission is to create a collaborative environment for learning and sharing knowledge about machine learning and artificial intelligence.",
    color: "from-neon-purple to-neon-blue",
    links: [
      { label: "TensorFlow Hub", url: "https://tensorflow.org/community", icon: Globe },
      { label: "GitHub", url: "https://github.com/tfug-prayagraj", icon: ExternalLink },
    ],
    organizers: [
      {
        name: "Ankit Kumar Verma",
        role: "Lead Organizer",
        image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/ankit_kumar_verma_chYpsKX.jpeg",
        profileUrl: "#",
        linkedinUrl: "#",
        bio: "Passionate developer and community leader with 5+ years of experience in Android development."
      },
      {
        name: "Hridyesh Gupta",
        role: "Co-Organizer",
        image: "https://gdgprayagraj.com/_next/image?url=%2Fcore-team%2Fhridyesh.png&w=1920&q=75",
        profileUrl: "#",
        linkedinUrl: "#",
        bio: "Open source advocate and community leader passionate about the Wikimedia ecosystem."
      }
    ],
    upcomingEvents: [
      {
        name: "Kaggle Olympiad",
        date: "10 May 2025",
        time: "09:00 AM",
        venue: "AI Lab, IITP",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80",
        description: "Competitive machine learning contest with real-world datasets."
      }
    ],
    pastEvents: [
      {
        name: "TensorFlow Workshop",
        date: "15 Dec 2024",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80",
        description: "Introduction to TensorFlow and neural networks."
      }
    ],
    contact: {
      email: "tfugprayagraj@gmail.com",
      phone: "+91 87654 32109",
      address: "AI Research Center, Prayagraj"
    }
  },
  "bizwhiz": {
    name: "BizWhiz",
    logo: "https://placehold.co/48x48/ff9900/fff?text=BW",
    banner: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
    about: "BizWhiz is an entrepreneurship club focused on nurturing the next generation of business leaders and innovators. We organize pitch contests, business talks, and entrepreneurship programs to help students and professionals turn their ideas into successful ventures.",
    color: "from-neon-orange to-neon-red",
    links: [
      { label: "LinkedIn", url: "https://linkedin.com/company/bizwhiz", icon: ExternalLink },
      { label: "Instagram", url: "https://instagram.com/bizwhiz", icon: ExternalLink },
    ],
    organizers: [
      {
        name: "Arjun Mehta",
        role: "President",
        image: "https://randomuser.me/api/portraits/men/28.jpg",
        profileUrl: "#",
        linkedinUrl: "#",
        bio: "Serial entrepreneur and startup mentor with multiple successful exits."
      }
    ],
    upcomingEvents: [
      {
        name: "Startup Pitch Battle",
        date: "20 Mar 2025",
        time: "06:00 PM",
        venue: "Innovation Hub",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=500&q=80",
        description: "Monthly pitch competition for emerging startups and entrepreneurs."
      }
    ],
    pastEvents: [
      {
        name: "Entrepreneur's Night",
        date: "05 Feb 2025",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=500&q=80",
        description: "Networking event with successful entrepreneurs and investors."
      }
    ],
    contact: {
      email: "hello@bizwhiz.com",
      phone: "+91 76543 21098",
      address: "Business Incubator, Prayagraj"
    }
  },
  "codify-club": {
    name: "Codify Club",
    logo: "https://pps.whatsapp.net/v/t61.24694-24/442457938_714514990705048_4031384478786705579_n.jpg?ccb=11-4&oh=01_Q5Aa1gH3l47afkBkZe4gS5Az8zHYCSGkJoTxFSzZAt1qCRNDQw&oe=684710BB&_nc_sid=5e03e0&_nc_cat=106",
    banner: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=1200&q=80",
    about: "Codify, the coolest club at United University for all you coding enthusiasts! Whether you're a coding freak or just a newbie aspiring geek, we've got something for everyone. Join our awesome community to learn, collaborate, and have a blast together. From fun workshops to rigorous hackathons, we've got all sorts of cool stuff lined up.",
    color: "from-neon-blue to-neon-red",
    links: [
      { label: "GitHub", url: "https://github.com/codify-club", icon: ExternalLink },
      { label: "Discord", url: "https://discord.gg/codify", icon: ExternalLink },
    ],
    organizers: [
      {
        name: "Rohit Singh",
        role: "President",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
        profileUrl: "#",
        linkedinUrl: "#",
        bio: "Full-stack developer and open source contributor with passion for teaching."
      }
    ],
    upcomingEvents: [
      {
        name: "Code Sprint 2025",
        date: "28 Mar 2025",
        time: "08:00 AM",
        venue: "Computer Lab A",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
        description: "24-hour coding marathon with exciting challenges and prizes."
      }
    ],
    pastEvents: [
      {
        name: "Hackdiwas 2.0",
        date: "12 Jan 2025",
        image: "https://hackdiwas.github.io/codify-club/assets/image/hackdiwas%20logo%20black%20colour.png",
        description: "Annual hackathon celebrating innovation and creativity."
      },
      {
        name: "Hackdiwas",
        date: "15 Nov 2024",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80",
        description: "First edition of our flagship hackathon event with coding challenges and prizes."
      }
    ],
    contact: {
      email: "codifyclub@uu.edu",
      phone: "+91 65432 10987",
      address: "United University, Prayagraj"
    }
  },
  "ffdg-prayagraj": {
    name: "FFDG Prayagraj",
    logo: "https://secure.meetupstatic.com/photos/event/9/8/3/b/clean_524618971.webp",
    banner: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    about: "The FlutterFlow Developer Group Prayagraj is a vibrant community for developers, designers, and tech enthusiasts in Prayagraj who are passionate about FlutterFlow—a visual app development platform. They aim to foster learning, collaboration, and innovation in the FlutterFlow ecosystem.",
    color: "from-neon-purple to-neon-orange",
    links: [
      { label: "Meetup", url: "https://meetup.com/ffdg-prayagraj", icon: ExternalLink },
      { label: "FlutterFlow", url: "https://flutterflow.io", icon: Globe },
    ],
    organizers: [
      {
        name: "Neha Gupta",
        role: "Community Lead",
        image: "https://randomuser.me/api/portraits/women/25.jpg",
        profileUrl: "#",
        linkedinUrl: "#",
        bio: "No-code advocate and FlutterFlow expert helping others build apps without coding."
      }
    ],
    upcomingEvents: [
      {
        name: "No-Code App Workshop",
        date: "05 Apr 2025",
        time: "02:00 PM",
        venue: "Design Studio",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=500&q=80",
        description: "Build your first mobile app without writing a single line of code."
      }
    ],
    pastEvents: [
      {
        name: "FlutterFlow Innovators Hackathon",
        date: "18 Nov 2024",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=80",
        description: "Creative hackathon focused on no-code app development."
      }
    ],
    contact: {
      email: "ffdgprayagraj@gmail.com",
      phone: "+91 54321 09876",
      address: "Innovation Center, Prayagraj"
    }
  },
  "ppuu": {
    name: "PPUU",
    logo: "https://placehold.co/48x48/4f8cff/fff?text=PPUU",
    banner: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    about: "Prerogative Pointers United University (PPUU) is a student chapter focused on advanced programming concepts, data structures, and algorithms. We organize workshops on pointers, memory management, and system programming to help students master low-level programming concepts.",
    color: "from-neon-blue to-neon-red",
    links: [
      { label: "University Portal", url: "https://ppuu.edu", icon: Globe },
      { label: "Resources", url: "https://github.com/ppuu", icon: ExternalLink },
    ],
    organizers: [
      {
        name: "Prof. Amit Sharma",
        role: "Faculty Advisor",
        image: "https://randomuser.me/api/portraits/men/55.jpg",
        profileUrl: "#",
        linkedinUrl: "#",
        bio: "Computer Science professor specializing in systems programming and algorithms."
      }
    ],
    upcomingEvents: [
      {
        name: "Pointers Workshop",
        date: "12 Apr 2025",
        time: "11:00 AM",
        venue: "Seminar Hall",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=500&q=80",
        description: "Deep dive into advanced pointer concepts and memory management."
      }
    ],
    pastEvents: [
      {
        name: "Algorithm Contest",
        date: "25 Jan 2025",
        image: "https://images.unsplash.com/photo-1509048191080-d2b6cfbc2253?auto=format&fit=crop&w=500&q=80",
        description: "Competitive programming contest focusing on advanced algorithms."
      }
    ],
    contact: {
      email: "ppuu@university.edu",
      phone: "+91 43210 98765",
      address: "PPUU Campus, Prayagraj"
    }
  },
  "scc": {
    name: "SCC",
    logo: "https://placehold.co/48x48/9836ff/fff?text=SCC",
    banner: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=1200&q=80",
    about: "Shambhunath Coding Club (SCC) is a community-driven coding club that organizes code jams, learning circles, and collaborative programming sessions. We focus on building a supportive environment where programmers of all levels can learn, grow, and contribute to open source projects.",
    color: "from-neon-purple to-neon-blue",
    links: [
      { label: "GitHub", url: "https://github.com/scc-club", icon: ExternalLink },
      { label: "Discord", url: "https://discord.gg/scc", icon: ExternalLink },
    ],
    organizers: [
      {
        name: "Vikram Yadav",
        role: "Club President",
        image: "https://randomuser.me/api/portraits/men/35.jpg",
        profileUrl: "#",
        linkedinUrl: "#",
        bio: "Software engineer and open source enthusiast with expertise in competitive programming."
      }
    ],
    upcomingEvents: [
      {
        name: "Code Jam Spring",
        date: "22 Mar 2025",
        time: "10:00 AM",
        venue: "SCC Hub",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80",
        description: "Quarterly coding competition with algorithmic challenges."
      }
    ],
    pastEvents: [
      {
        name: "Open Source Contribution Day",
        date: "08 Feb 2025",
        image: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=500&q=80",
        description: "Workshop on contributing to open source projects."
      }
    ],
    contact: {
      email: "scc.club@gmail.com",
      phone: "+91 32109 87654",
      address: "Shambhunath Institute, Prayagraj"
    }
  },
  "wikiclub-tech-uit": {
    name: "WikiClub Tech UIT",
    logo: "https://media.licdn.com/dms/image/v2/D563DAQGKwY3kTuZxKg/image-scale_191_1128/image-scale_191_1128/0/1719332041869/wikitech_uit_cover?e=2147483647&v=beta&t=91PS0qsIs-A9Tr_Gszc2L-pH2qfc5kuPREIopPzvERw",
    banner: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80",
    about: "WikiTech-United Institute of Technology, where knowledge and innovation converge! Our WikiTech chapter is a dynamic community dedicated to empowering students to make impactful contributions to the Wikimedia ecosystem through technology and open-source projects. At WikiTech-UIT, our mission is to ignite a passion for collaborative learning, foster innovative thinking, and enable students to thrive as leaders in the world of technology and open knowledge.",
    color: "from-neon-purple to-neon-red",
    links: [
      { label: "LinkedIn", url: "https://in.linkedin.com/company/wikitech-uit", icon: ExternalLink },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Main_Page", icon: Globe },
    ],
    organizers: [
      {
        name: "Hridyesh Gupta",
        role: "Community Lead",
        image: "https://gdgprayagraj.com/_next/image?url=%2Fcore-team%2Fhridyesh.png&w=1920&q=75",
        profileUrl: "https://hridyesh.com/",
        linkedinUrl: "https://www.linkedin.com/in/hridyesh-gupta/",
        bio: "Open source advocate and community leader passionate about the Wikimedia ecosystem."
      }
    ],
    upcomingEvents: [
      {
        name: "Wikipedia Edit-a-thon",
        date: "18 Apr 2025",
        time: "02:00 PM",
        venue: "Student Center UIT",
        image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=500&q=80",
        description: "Collaborative editing session to improve Wikipedia articles on technology topics."
      },
      {
        name: "Open Source Contribution Workshop",
        date: "25 Apr 2025",
        time: "10:00 AM",
        venue: "UIT Computer Lab",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=80",
        description: "Learn how to contribute to open source projects and make your first pull request."
      }
    ],
    pastEvents: [
      {
        name: "Intro to Open Source",
        date: "15 Feb 2025",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=80",
        description: "Introduction to open source development and the Wikimedia ecosystem."
      },
      {
        name: "Wikimedia Community Meetup",
        date: "28 Jan 2025",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80",
        description: "Community gathering to discuss ongoing Wikimedia projects."
      }
    ],
    contact: {
      email: "contactatwikitechuit@gmail.com",
      phone: "+91 98765 12345",
      address: "Student Center UIT, Prayagraj"
    }
  },
  "bridge4u": {
    name: "Bridge4U",
    logo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=200&q=80",
    banner: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    about: "Bridge4U - United University Student Chapter. Bridging the gap between Engineering, Management, and Law students at United University. We create a unified platform for interdisciplinary learning, collaboration, and professional development across all branches of study. Our mission is to foster cross-departmental connections through workshops, seminars, and networking events that prepare students for the modern interdisciplinary workplace.",
    color: "from-neon-orange to-neon-purple",
    links: [
      { label: "Instagram", url: "https://instagram.com/bridge4u_uu", icon: ExternalLink },
      { label: "LinkedIn", url: "https://linkedin.com/company/bridge4u-united-university", icon: ExternalLink },
    ],
    organizers: [
      {
        name: "Priya Sharma",
        role: "President",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        profileUrl: "#",
        linkedinUrl: "https://www.linkedin.com/in/priya-sharma-bridge4u/",
        bio: "Management student passionate about interdisciplinary collaboration and student leadership."
      },
      {
        name: "Arjun Mehta",
        role: "Vice President",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        profileUrl: "#",
        linkedinUrl: "https://www.linkedin.com/in/arjun-mehta-uu/",
        bio: "Engineering student focused on bridging technical and business perspectives."
      },
      {
        name: "Sneha Verma",
        role: "Legal Affairs Head",
        image: "https://randomuser.me/api/portraits/women/28.jpg",
        profileUrl: "#",
        linkedinUrl: "https://www.linkedin.com/in/sneha-verma-law/",
        bio: "Law student specializing in technology law and intellectual property rights."
      }
    ],
    upcomingEvents: [
      {
        name: "Tech-Law Summit",
        date: "15 Feb 2025",
        time: "02:00 PM",
        venue: "United University Auditorium",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80",
        description: "Exploring the intersection of technology and law with industry experts."
      },
      {
        name: "Management Skills Workshop",
        date: "8 Mar 2025",
        time: "10:00 AM",
        venue: "Management Block",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&q=80",
        description: "Essential management skills for engineering and law students."
      },
      {
        name: "Cross-Disciplinary Hackathon",
        date: "22 Apr 2025",
        time: "09:00 AM",
        venue: "Innovation Lab",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80",
        description: "Teams of engineering, management, and law students solving real-world problems."
      },
      {
        name: "Career Fair 2025",
        date: "10 May 2025",
        time: "11:00 AM",
        venue: "University Grounds",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=80",
        description: "Connecting students with employers across all disciplines."
      }
    ],
    pastEvents: [
      {
        name: "Interdisciplinary Panel Discussion",
        date: "15 Dec 2024",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=500&q=80",
        description: "Panel discussion on future career trends across engineering, management, and law."
      },
      {
        name: "Winter Networking Event",
        date: "20 Nov 2024",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80",
        description: "Networking event bringing together students from all university departments."
      }
    ],
    contact: {
      email: "bridge4u@uniteduniversity.edu.in",
      phone: "+91 98765 00001",
      address: "United University Campus, Prayagraj"
    }
  }
};

const ClubDetail = () => {
  const { clubId } = useParams();
  const club = clubsDetailData[clubId as keyof typeof clubsDetailData];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  if (!club) {
    return (
      <div className="min-h-screen bg-background">
        <NavBar />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Club Not Found</h1>
          <Link to="/clubs" className="text-neon-blue hover:text-neon-purple">
            ← Back to Clubs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={club.banner}
          alt={club.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <img
              src={club.logo}
              alt={club.name}
              className="w-20 h-20 md:w-24 md:h-24 rounded-2xl mx-auto mb-4 border-4 border-white/20"
            />
            <h1 className={`text-4xl md:text-6xl font-bold font-heading bg-gradient-to-r ${club.color} bg-clip-text text-transparent drop-shadow-2xl`}>
              {club.name}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          to="/clubs"
          className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-purple transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Clubs
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <section className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-2xl font-bold font-heading text-foreground mb-4">About</h2>
              <p className="text-muted-foreground leading-relaxed">{club.about}</p>
            </section>

            {/* Upcoming Events */}
            <section className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-2xl font-bold font-heading text-foreground mb-6">Upcoming Events</h2>
              <div className="space-y-4">
                {club.upcomingEvents.map((event, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-background rounded-xl border border-border">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{event.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{event.description}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {event.date} at {event.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {event.venue}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Past Events */}
            <section className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-2xl font-bold font-heading text-foreground mb-6">Past Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {club.pastEvents.map((event, index) => (
                  <div key={index} className="bg-background rounded-xl p-4 border border-border">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-32 rounded-lg object-cover mb-3"
                    />
                    <h3 className="font-semibold text-foreground mb-1">{event.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{event.description}</p>
                    <span className="text-xs text-muted-foreground">{event.date}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Links */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="text-xl font-bold font-heading text-foreground mb-4">Links</h3>
              <div className="space-y-3">
                {club.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-neon-blue hover:text-neon-purple transition-colors"
                  >
                    <link.icon size={18} />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Organizers */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="text-xl font-bold font-heading text-foreground mb-4">
                <Users size={20} className="inline mr-2" />
                Organizers
              </h3>
              <div className="space-y-4">
                {club.organizers.map((organizer, index) => (
                  <div key={index} className="flex gap-3">
                    <img
                      src={organizer.image}
                      alt={organizer.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{organizer.name}</h4>
                      <p className="text-sm text-neon-blue">{organizer.role}</p>
                      <p className="text-xs text-muted-foreground mt-1">{organizer.bio}</p>
                      <div className="flex gap-2 mt-2">
                        <a
                          href={organizer.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-neon-blue transition-colors"
                          title="LinkedIn Profile"
                        >
                          <Linkedin size={16} />
                        </a>
                        <a
                          href={organizer.profileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-neon-blue transition-colors"
                          title="Portfolio/Profile"
                        >
                          <User size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="text-xl font-bold font-heading text-foreground mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail size={18} />
                  <a href={`mailto:${club.contact.email}`} className="hover:text-neon-blue transition-colors">
                    {club.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin size={18} />
                  <span>{club.contact.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubDetail;
