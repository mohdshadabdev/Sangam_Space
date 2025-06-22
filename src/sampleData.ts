export type Club = {
  name: string;
  key: string;
  desc: string;
  logo: string; // url (placeholder for now)
  color: string;
};
export type Event = {
  id: string;
  clubKey: string;
  title: string;
  description: string;
  banner: string; // url
  date: string; // ISO
  time: string;
  venue: string;
  tags: string[];
  isTrending?: boolean;
  isToday?: boolean;
  rsvps: number;
  avatars: string[];
};

export const clubs: Club[] = [
  {
    key: "gdg",
    name: "GDG Prayagraj",
    desc: "Google Developer Group of Prayagraj. Tech sessions, Google product workshops & more.",
    logo: "https://placehold.co/48x48/4f8cff/fff?text=GDG",
    color: "from-neon-blue to-neon-purple",
  },
  {
    key: "tfug",
    name: "TFUG Prayagraj",
    desc: "TensorFlow User Group, Prayagraj. AI/ML workshops and community meetups.",
    logo: "https://placehold.co/48x48/9836ff/fff?text=TFUG",
    color: "from-neon-purple to-neon-blue",
  },
  {
    key: "bizwhiz",
    name: "BizWhiz",
    desc: "Pitch contests, talks, and entrepreneurship programs.",
    logo: "https://placehold.co/48x48/ff9900/fff?text=BW",
    color: "from-neon-orange to-neon-red",
  },
  {
    key: "codify",
    name: "Codify Club",
    desc: "Coding sessions, weekly tech events, and hackathons.",
    logo: "https://placehold.co/48x48/4f8cff/fff?text=CC",
    color: "from-neon-blue to-neon-red",
  },
  {
    key: "ffdg",
    name: "FFDG Prayagraj",
    desc: "FlutterFlow Developer Group: Low/No-code app building sessions.",
    logo: "https://placehold.co/48x48/ff75c8/fff?text=FFDG",
    color: "from-neon-purple to-neon-orange",
  },
  {
    key: "ppu",
    name: "PPUU",
    desc: "Prerogative Pointers United University – student chapter, tech education workshops.",
    logo: "https://placehold.co/48x48/4f8cff/fff?text=PPUU",
    color: "from-neon-blue to-neon-red",
  },
  {
    key: "scc",
    name: "SCC",
    desc: "Shambhunath Coding Club – code jams & learning circles.",
    logo: "https://placehold.co/48x48/9836ff/fff?text=SCC",
    color: "from-neon-purple to-neon-blue",
  },
  {
    key: "wikitech",
    name: "WikiClub Tech UIT",
    desc: "Empowering students to contribute to the Wikimedia ecosystem through open-source projects.",
    logo: "https://media.licdn.com/dms/image/D560BAQG0Qo12fLw18w/company-logo_200_200/0/1719331908639/wikitech_uit_logo?e=1729728000&v=beta&t=7E4z2_H2N7FzD_j_J3J8f6h9d3k2w1h8m3v8q4t2u0",
    color: "from-neon-blue to-neon-green",
  },
];

export const events: Event[] = [
  {
    id: "1",
    clubKey: "gdg",
    title: "Google Tech Trends 2025",
    description: "Explore the latest in AI, Web, and Mobile with Google experts.",
    banner: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    date: new Date(Date.now() + 1000 * 60 * 60 * 8).toISOString().slice(0, 10), // Today
    time: "05:00 PM",
    venue: "IITP Auditorium",
    tags: ["Tech", "Happening Today", "Trending"],
    isTrending: true,
    isToday: true,
    rsvps: 47,
    avatars: [
      "https://randomuser.me/api/portraits/men/32.jpg",
      "https://randomuser.me/api/portraits/women/44.jpg",
      "https://randomuser.me/api/portraits/men/53.jpg",
    ],
  },
  {
    id: "2",
    clubKey: "tfug",
    title: "ML Workshop: Build AI with TensorFlow",
    description: "Hands-on ML with TensorFlow by TFUG core team.",
    banner: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    date: new Date(Date.now() + 1000 * 60 * 60 * 48).toISOString().slice(0, 10), // 2 days later
    time: "02:00 PM",
    venue: "Vibrant Hall",
    tags: ["Workshop", "AI/ML"],
    rsvps: 33,
    avatars: [
      "https://randomuser.me/api/portraits/women/12.jpg",
      "https://randomuser.me/api/portraits/men/24.jpg",
      "https://randomuser.me/api/portraits/women/19.jpg",
    ],
  },
  {
    id: "3",
    clubKey: "bizwhiz",
    title: "BizWhiz Pitch Fest",
    description: "Pitch your startup and win resources! Networking and feedback included.",
    banner: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    date: new Date(Date.now() + 1000 * 60 * 60 * 72).toISOString().slice(0, 10), // 3 days later
    time: "11:00 AM",
    venue: "BizHub, Block C",
    tags: ["Entrepreneurship", "Pitch", "Trending"],
    isTrending: true,
    rsvps: 21,
    avatars: [
      "https://randomuser.me/api/portraits/men/76.jpg",
      "https://randomuser.me/api/portraits/women/42.jpg",
    ],
  },
  {
    id: "4",
    clubKey: "codify",
    title: "CodeSprint: Summer Hackathon",
    description: "24-hour hackathon with tech talks and great prizes.",
    banner: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    date: new Date(Date.now() + 1000 * 60 * 60 * 96).toISOString().slice(0, 10), // 4 days later
    time: "09:00 AM",
    venue: "Block-IT Arena",
    tags: ["Tech", "Hackathon"],
    rsvps: 64,
    avatars: [
      "https://randomuser.me/api/portraits/men/20.jpg",
      "https://randomuser.me/api/portraits/women/33.jpg",
      "https://randomuser.me/api/portraits/men/39.jpg",
      "https://randomuser.me/api/portraits/women/29.jpg",
    ],
  },
  {
    id: "5",
    clubKey: "ffdg",
    title: "FlutterFlow: Low-Code App Jam",
    description: "Build live mobile apps and win cool swags!",
    banner: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    date: new Date(Date.now() + 1000 * 60 * 60 * 120).toISOString().slice(0, 10), // 5 days later
    time: "01:00 PM",
    venue: "FFDG Studio",
    tags: ["No-Code", "Workshop"],
    rsvps: 18,
    avatars: [
      "https://randomuser.me/api/portraits/men/90.jpg",
      "https://randomuser.me/api/portraits/women/24.jpg",
    ],
  },
  {
    id: "6",
    clubKey: "ppu",
    title: "Tech Dive: PPUU Edition",
    description: "Workshop on advanced pointers and optimization.",
    banner: "https://images.unsplash.com/photo-1465101178521-c1a9136a03e1?auto=format&fit=crop&w=800&q=80",
    date: new Date(Date.now() + 1000 * 60 * 60 * 144).toISOString().slice(0, 10), // 6 days later
    time: "12:30 PM",
    venue: "UIU Seminar Room",
    tags: ["Tech", "Workshop"],
    rsvps: 26,
    avatars: [
      "https://randomuser.me/api/portraits/women/66.jpg",
      "https://randomuser.me/api/portraits/men/28.jpg",
    ],
  },
  {
    id: "7",
    clubKey: "scc",
    title: "Shambhunath Coder’s Meetup",
    description: "Solve, share, and learn with coding peers.",
    banner: "https://images.unsplash.com/photo-1466729630777-43e3e82fa41c?auto=format&fit=crop&w=800&q=80",
    date: new Date(Date.now() + 1000 * 60 * 60 * 192).toISOString().slice(0, 10), // 8 days later
    time: "6:30 PM",
    venue: "SCC Hub",
    tags: ["Tech", "Community"],
    rsvps: 15,
    avatars: [
      "https://randomuser.me/api/portraits/men/11.jpg",
      "https://randomuser.me/api/portraits/women/15.jpg",
    ],
  },
  {
    id: "8",
    clubKey: "gdg",
    title: "Firebase Workshop: Backend Made Easy",
    description: "Learn to build scalable backends with Firebase services.",
    banner: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    date: new Date(Date.now() + 1000 * 60 * 60 * 216).toISOString().slice(0, 10),
    time: "03:00 PM",
    venue: "Google Campus",
    tags: ["Tech", "Firebase", "Backend"],
    rsvps: 38,
    avatars: [
      "https://randomuser.me/api/portraits/men/41.jpg",
      "https://randomuser.me/api/portraits/women/37.jpg",
      "https://randomuser.me/api/portraits/men/28.jpg",
    ],
  },
  {
    id: "9",
    clubKey: "tfug",
    title: "Deep Learning with TensorFlow 2.0",
    description: "Advanced neural networks and deep learning concepts.",
    banner: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    date: new Date(Date.now() + 1000 * 60 * 60 * 240).toISOString().slice(0, 10),
    time: "10:00 AM",
    venue: "AI Research Lab",
    tags: ["AI/ML", "Deep Learning", "Research"],
    rsvps: 42,
    avatars: [
      "https://randomuser.me/api/portraits/women/55.jpg",
      "https://randomuser.me/api/portraits/men/62.jpg",
    ],
  },
  {
    id: "10",
    clubKey: "bizwhiz",
    title: "Startup Funding Masterclass",
    description: "Learn how to secure funding for your startup idea.",
    banner: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80",
    date: new Date(Date.now() + 1000 * 60 * 60 * 264).toISOString().slice(0, 10),
    time: "06:00 PM",
    venue: "Innovation Hub",
    tags: ["Entrepreneurship", "Funding", "Business"],
    rsvps: 56,
    avatars: [
      "https://randomuser.me/api/portraits/men/73.jpg",
      "https://randomuser.me/api/portraits/women/68.jpg",
      "https://randomuser.me/api/portraits/men/44.jpg",
    ],
  },
  {
    id: "11",
    clubKey: "codify",
    title: "React Native Mobile Development",
    description: "Build cross-platform mobile apps with React Native.",
    banner: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    date: new Date(Date.now() + 1000 * 60 * 60 * 288).toISOString().slice(0, 10),
    time: "02:30 PM",
    venue: "Mobile Dev Lab",
    tags: ["Tech", "Mobile", "React Native"],
    rsvps: 29,
    avatars: [
      "https://randomuser.me/api/portraits/women/22.jpg",
      "https://randomuser.me/api/portraits/men/18.jpg",
    ],
  },
  {
    id: "12",
    clubKey: "ffdg",
    title: "UI/UX Design with FlutterFlow",
    description: "Create beautiful user interfaces without code.",
    banner: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
    date: new Date(Date.now() + 1000 * 60 * 60 * 312).toISOString().slice(0, 10),
    time: "11:00 AM",
    venue: "Design Studio",
    tags: ["Design", "UI/UX", "No-Code"],
    rsvps: 34,
    avatars: [
      "https://randomuser.me/api/portraits/women/89.jpg",
      "https://randomuser.me/api/portraits/men/91.jpg",
      "https://randomuser.me/api/portraits/women/77.jpg",
    ],
  },
  {
    id: "13",
    clubKey: "wikitech",
    title: "Intro to Open Source Contribution",
    description: "Learn how to find projects, make your first pull request, and become part of the open-source community.",
    banner: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=800&q=80",
    date: new Date(Date.now() + 1000 * 60 * 60 * 336).toISOString().slice(0, 10), // 14 days later
    time: "02:00 PM",
    venue: "UIT Campus, Open Space",
    tags: ["Tech", "Open Source", "Workshop"],
    rsvps: 22,
    avatars: [
      "https://randomuser.me/api/portraits/men/50.jpg",
      "https://randomuser.me/api/portraits/women/50.jpg",
    ],
  },
];

export const pastEvents: Event[] = [
  {
    id: "past1",
    clubKey: "gdg",
    title: "Android Development Bootcamp",
    description: "Complete Android development workshop with Kotlin.",
    banner: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800&q=80",
    date: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString().slice(0, 10),
    time: "10:00 AM",
    venue: "Tech Hub",
    tags: ["Tech", "Android", "Kotlin"],
    rsvps: 82,
    avatars: [
      "https://randomuser.me/api/portraits/men/12.jpg",
      "https://randomuser.me/api/portraits/women/25.jpg",
      "https://randomuser.me/api/portraits/men/38.jpg",
      "https://randomuser.me/api/portraits/women/51.jpg",
    ],
  },
  {
    id: "past2",
    clubKey: "tfug",
    title: "Computer Vision Workshop",
    description: "Image processing and computer vision with OpenCV.",
    banner: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=800&q=80",
    date: new Date(Date.now() - 1000 * 60 * 60 * 120).toISOString().slice(0, 10),
    time: "02:00 PM",
    venue: "CV Lab",
    tags: ["AI/ML", "Computer Vision", "OpenCV"],
    rsvps: 67,
    avatars: [
      "https://randomuser.me/api/portraits/women/33.jpg",
      "https://randomuser.me/api/portraits/men/45.jpg",
      "https://randomuser.me/api/portraits/women/62.jpg",
    ],
  },
  {
    id: "past3",
    clubKey: "bizwhiz",
    title: "Entrepreneurship Summit 2024",
    description: "Annual summit with industry leaders and investors.",
    banner: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80",
    date: new Date(Date.now() - 1000 * 60 * 60 * 168).toISOString().slice(0, 10),
    time: "09:00 AM",
    venue: "Convention Center",
    tags: ["Entrepreneurship", "Summit", "Networking"],
    rsvps: 156,
    avatars: [
      "https://randomuser.me/api/portraits/men/67.jpg",
      "https://randomuser.me/api/portraits/women/78.jpg",
      "https://randomuser.me/api/portraits/men/52.jpg",
      "https://randomuser.me/api/portraits/women/43.jpg",
    ],
  },
  {
    id: "past4",
    clubKey: "codify",
    title: "Web Development Marathon",
    description: "48-hour web development challenge with prizes.",
    banner: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    date: new Date(Date.now() - 1000 * 60 * 60 * 216).toISOString().slice(0, 10),
    time: "12:00 PM",
    venue: "Code Arena",
    tags: ["Tech", "Web Dev", "Challenge"],
    rsvps: 94,
    avatars: [
      "https://randomuser.me/api/portraits/women/14.jpg",
      "https://randomuser.me/api/portraits/men/27.jpg",
      "https://randomuser.me/api/portraits/women/35.jpg",
    ],
  },
  {
    id: "past5",
    clubKey: "scc",
    title: "Algorithms & Data Structures",
    description: "Comprehensive DSA workshop for competitive programming.",
    banner: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
    date: new Date(Date.now() - 1000 * 60 * 60 * 264).toISOString().slice(0, 10),
    time: "03:00 PM",
    venue: "Algorithm Lab",
    tags: ["Tech", "DSA", "Competitive Programming"],
    rsvps: 73,
    avatars: [
      "https://randomuser.me/api/portraits/men/56.jpg",
      "https://randomuser.me/api/portraits/women/41.jpg",
      "https://randomuser.me/api/portraits/men/29.jpg",
    ],
  },
  {
    id: "past6",
    clubKey: "ppu",
    title: "Open Source Contribution Drive",
    description: "Learn to contribute to open source projects effectively.",
    banner: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=800&q=80",
    date: new Date(Date.now() - 1000 * 60 * 60 * 312).toISOString().slice(0, 10),
    time: "04:30 PM",
    venue: "Open Source Hub",
    tags: ["Tech", "Open Source", "GitHub"],
    rsvps: 61,
    avatars: [
      "https://randomuser.me/api/portraits/women/58.jpg",
      "https://randomuser.me/api/portraits/men/64.jpg",
    ],
  },
];
