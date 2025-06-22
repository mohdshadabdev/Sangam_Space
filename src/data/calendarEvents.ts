
import { CalendarEvent } from "../types/calendar";

export const sampleCalendarEvents: CalendarEvent[] = [
  // January 2025
  {
    id: "1",
    title: "New Year Tech Meetup",
    description: "Start the year with latest tech trends and networking.",
    date: new Date(2025, 0, 10), // January 10, 2025
    time: "18:00",
    endTime: "20:00",
    club: "Tech Innovators Society",
    type: "Tech",
    location: "Innovation Hub",
    organizer: "Tech Team",
    isRSVPd: true,
    attendeeCount: 35,
    maxAttendees: 50
  },
  {
    id: "2",
    title: "Winter Photography Walk",
    description: "Capture the beauty of winter landscapes.",
    date: new Date(2025, 0, 25), // January 25, 2025
    time: "09:00",
    endTime: "12:00",
    club: "Photography Club",
    type: "Workshop",
    location: "City Park",
    organizer: "Photo Society",
    isRSVPd: false,
    attendeeCount: 20,
    maxAttendees: 30
  },

  // February 2025
  {
    id: "3",
    title: "Valentine's Cultural Show",
    description: "Celebrate love with music, dance and poetry.",
    date: new Date(2025, 1, 14), // February 14, 2025
    time: "19:00",
    endTime: "22:00",
    club: "Cultural Society",
    type: "Cultural",
    location: "Main Auditorium",
    organizer: "Cultural Committee",
    isRSVPd: true,
    attendeeCount: 150,
    maxAttendees: 200
  },
  {
    id: "27",
    title: "Tech-Law Summit",
    description: "Bridging technology and legal frameworks for the future.",
    date: new Date(2025, 1, 15), // February 15, 2025
    time: "10:00",
    endTime: "17:00",
    club: "Bridge4U",
    type: "Business",
    location: "Law Auditorium",
    organizer: "Priya Sharma",
    isRSVPd: false,
    attendeeCount: 80,
    maxAttendees: 120
  },
  {
    id: "4",
    title: "Business Plan Workshop",
    description: "Learn to create winning business plans.",
    date: new Date(2025, 1, 28), // February 28, 2025
    time: "14:00",
    endTime: "17:00",
    club: "Entrepreneurship Hub",
    type: "Business",
    location: "Conference Room",
    organizer: "Business Mentor",
    isRSVPd: false,
    attendeeCount: 40,
    maxAttendees: 60
  },

  // March 2025
  {
    id: "28",
    title: "Management Skills Workshop",
    description: "Essential leadership and management skills for students.",
    date: new Date(2025, 2, 8), // March 8, 2025
    time: "14:00",
    endTime: "17:00",
    club: "Bridge4U",
    type: "Workshop",
    location: "Management Block",
    organizer: "Arjun Mehta",
    isRSVPd: true,
    attendeeCount: 60,
    maxAttendees: 80
  },
  {
    id: "5",
    title: "Holi Festival Celebration",
    description: "Colorful celebration of spring and joy.",
    date: new Date(2025, 2, 13), // March 13, 2025
    time: "15:00",
    endTime: "18:00",
    club: "International Student Union",
    type: "Cultural",
    location: "Open Ground",
    organizer: "Festival Committee",
    isRSVPd: true,
    attendeeCount: 200,
    maxAttendees: 300
  },
  {
    id: "6",
    title: "Spring Wellness Retreat",
    description: "Rejuvenate your mind and body this spring.",
    date: new Date(2025, 2, 22), // March 22, 2025
    time: "08:00",
    endTime: "16:00",
    club: "Wellness Society",
    type: "Wellness",
    location: "Garden Pavilion",
    organizer: "Wellness Team",
    isRSVPd: false,
    attendeeCount: 30,
    maxAttendees: 40
  },

  // April 2025
  {
    id: "7",
    title: "AI & Machine Learning Summit",
    description: "Explore the future of artificial intelligence.",
    date: new Date(2025, 3, 15), // April 15, 2025
    time: "10:00",
    endTime: "17:00",
    club: "AI Society",
    type: "Tech",
    location: "Tech Center",
    organizer: "AI Research Team",
    isRSVPd: true,
    attendeeCount: 80,
    maxAttendees: 100
  },
  {
    id: "8",
    title: "Spring Photography Contest",
    description: "Capture the beauty of blooming spring.",
    date: new Date(2025, 3, 20), // April 20, 2025
    time: "11:00",
    endTime: "15:00",
    club: "Photography Club",
    type: "Workshop",
    location: "Botanical Garden",
    organizer: "Photo Contest Team",
    isRSVPd: false,
    attendeeCount: 25,
    maxAttendees: 35
  },
  {
    id: "29",
    title: "Cross-Disciplinary Hackathon",
    description: "24-hour hackathon bringing together Engineering, Management, and Law students.",
    date: new Date(2025, 3, 22), // April 22, 2025
    time: "09:00",
    endTime: "18:00",
    club: "Bridge4U",
    type: "Tech",
    location: "Innovation Center",
    organizer: "Bridge4U Team",
    isRSVPd: true,
    attendeeCount: 100,
    maxAttendees: 150
  },

  // May 2025
  {
    id: "30",
    title: "Career Fair 2025",
    description: "Meet recruiters from top companies across Engineering, Management, and Law sectors.",
    date: new Date(2025, 4, 10), // May 10, 2025
    time: "10:00",
    endTime: "17:00",
    club: "Bridge4U",
    type: "Business",
    location: "University Convention Center",
    organizer: "Sneha Verma",
    isRSVPd: false,
    attendeeCount: 300,
    maxAttendees: 500
  },
  {
    id: "9",
    title: "Mother's Day Special Concert",
    description: "Honoring mothers with beautiful melodies.",
    date: new Date(2025, 4, 11), // May 11, 2025
    time: "18:30",
    endTime: "21:00",
    club: "Music Society",
    type: "Cultural",
    location: "Concert Hall",
    organizer: "Music Department",
    isRSVPd: true,
    attendeeCount: 180,
    maxAttendees: 250
  },
  {
    id: "10",
    title: "Startup Pitch Battle",
    description: "Young entrepreneurs present their innovative ideas.",
    date: new Date(2025, 4, 25), // May 25, 2025
    time: "14:00",
    endTime: "18:00",
    club: "Entrepreneurship Hub",
    type: "Business",
    location: "Innovation Center",
    organizer: "Startup Incubator",
    isRSVPd: false,
    attendeeCount: 60,
    maxAttendees: 80
  },

  // June 2025
  {
    id: "11",
    title: "Google Tech Trends 2025",
    description: "Explore the latest technology trends and innovations from Google.",
    date: new Date(2025, 5, 15), // June 15, 2025
    time: "17:00",
    endTime: "19:00",
    club: "GDG Prayagraj",
    type: "Tech",
    location: "Conference Hall A",
    organizer: "Google Developer Group",
    isRSVPd: true,
    attendeeCount: 150,
    maxAttendees: 200
  },
  {
    id: "12",
    title: "React Workshop: Building Modern UIs",
    description: "Learn advanced React patterns and hooks in this hands-on workshop.",
    date: new Date(2025, 5, 20), // June 20, 2025
    time: "14:00",
    endTime: "17:00",
    club: "Tech Innovators Society",
    type: "Tech",
    location: "Tech Lab 301",
    organizer: "Sarah Chen",
    isRSVPd: true,
    attendeeCount: 45,
    maxAttendees: 50
  },
  {
    id: "13",
    title: "Summer Solstice Yoga",
    description: "Welcome summer with peaceful yoga session.",
    date: new Date(2025, 5, 21), // June 21, 2025
    time: "06:00",
    endTime: "07:30",
    club: "Wellness Society",
    type: "Wellness",
    location: "Rooftop Garden",
    organizer: "Yoga Instructor",
    isRSVPd: false,
    attendeeCount: 20,
    maxAttendees: 30
  },

  // July 2025
  {
    id: "14",
    title: "Independence Day Photography Exhibition",
    description: "Showcase patriotic photography and stories.",
    date: new Date(2025, 6, 4), // July 4, 2025
    time: "10:00",
    endTime: "18:00",
    club: "Photography Club",
    type: "Cultural",
    location: "Art Gallery",
    organizer: "Heritage Committee",
    isRSVPd: true,
    attendeeCount: 100,
    maxAttendees: 150
  },
  {
    id: "15",
    title: "Summer Coding Bootcamp",
    description: "Intensive coding workshop for beginners.",
    date: new Date(2025, 6, 20), // July 20, 2025
    time: "09:00",
    endTime: "17:00",
    club: "Tech Innovators Society",
    type: "Workshop",
    location: "Computer Lab",
    organizer: "Coding Mentors",
    isRSVPd: false,
    attendeeCount: 30,
    maxAttendees: 40
  },

  // August 2025
  {
    id: "16",
    title: "Friendship Day Celebration",
    description: "Celebrate bonds of friendship with games and activities.",
    date: new Date(2025, 7, 3), // August 3, 2025
    time: "16:00",
    endTime: "20:00",
    club: "Social Activities Club",
    type: "Cultural",
    location: "Recreation Center",
    organizer: "Social Committee",
    isRSVPd: true,
    attendeeCount: 120,
    maxAttendees: 180
  },
  {
    id: "17",
    title: "Digital Marketing Masterclass",
    description: "Master the art of digital marketing and social media.",
    date: new Date(2025, 7, 18), // August 18, 2025
    time: "14:00",
    endTime: "17:00",
    club: "Entrepreneurship Hub",
    type: "Business",
    location: "Marketing Lab",
    organizer: "Digital Expert",
    isRSVPd: false,
    attendeeCount: 45,
    maxAttendees: 60
  },

  // September 2025
  {
    id: "18",
    title: "Ganesh Chaturthi Festival",
    description: "Traditional celebration with cultural performances.",
    date: new Date(2025, 8, 10), // September 10, 2025
    time: "17:00",
    endTime: "21:00",
    club: "Cultural Society",
    type: "Cultural",
    location: "Festival Ground",
    organizer: "Festival Committee",
    isRSVPd: true,
    attendeeCount: 250,
    maxAttendees: 350
  },
  {
    id: "19",
    title: "Autumn Photography Workshop",
    description: "Capture the golden hues of autumn season.",
    date: new Date(2025, 8, 25), // September 25, 2025
    time: "08:00",
    endTime: "12:00",
    club: "Photography Club",
    type: "Workshop",
    location: "Nature Trail",
    organizer: "Nature Photographers",
    isRSVPd: false,
    attendeeCount: 18,
    maxAttendees: 25
  },

  // October 2025
  {
    id: "20",
    title: "Diwali Festival of Lights",
    description: "Grand celebration of lights with traditional performances.",
    date: new Date(2025, 9, 20), // October 20, 2025
    time: "18:00",
    endTime: "22:00",
    club: "International Student Union",
    type: "Cultural",
    location: "Main Auditorium",
    organizer: "Raj Patel",
    isRSVPd: true,
    attendeeCount: 200,
    maxAttendees: 300
  },
  {
    id: "21",
    title: "Halloween Tech Talk",
    description: "Spooky tech stories and cybersecurity awareness.",
    date: new Date(2025, 9, 31), // October 31, 2025
    time: "19:00",
    endTime: "21:00",
    club: "Tech Innovators Society",
    type: "Tech",
    location: "Tech Auditorium",
    organizer: "Security Team",
    isRSVPd: false,
    attendeeCount: 65,
    maxAttendees: 80
  },

  // November 2025
  {
    id: "22",
    title: "Thanksgiving Gratitude Workshop",
    description: "Practice mindfulness and gratitude this thanksgiving.",
    date: new Date(2025, 10, 27), // November 27, 2025
    time: "10:00",
    endTime: "13:00",
    club: "Wellness Society",
    type: "Wellness",
    location: "Meditation Hall",
    organizer: "Mindfulness Coach",
    isRSVPd: true,
    attendeeCount: 35,
    maxAttendees: 50
  },
  {
    id: "23",
    title: "Black Friday Business Seminar",
    description: "E-commerce strategies for maximum sales impact.",
    date: new Date(2025, 10, 29), // November 29, 2025
    time: "15:00",
    endTime: "18:00",
    club: "Entrepreneurship Hub",
    type: "Business",
    location: "Business Center",
    organizer: "E-commerce Expert",
    isRSVPd: false,
    attendeeCount: 55,
    maxAttendees: 70
  },

  // December 2025
  {
    id: "24",
    title: "Christmas Carol Concert",
    description: "Melodious Christmas carols to spread joy and cheer.",
    date: new Date(2025, 11, 20), // December 20, 2025
    time: "19:00",
    endTime: "21:30",
    club: "Music Society",
    type: "Cultural",
    location: "Cathedral Hall",
    organizer: "Choir Director",
    isRSVPd: true,
    attendeeCount: 180,
    maxAttendees: 250
  },
  {
    id: "25",
    title: "Year-End Tech Showcase",
    description: "Students showcase their best tech projects of the year.",
    date: new Date(2025, 11, 28), // December 28, 2025
    time: "14:00",
    endTime: "18:00",
    club: "Tech Innovators Society",
    type: "Tech",
    location: "Innovation Lab",
    organizer: "Project Committee",
    isRSVPd: false,
    attendeeCount: 90,
    maxAttendees: 120
  },
  {
    id: "26",
    title: "New Year Resolution Workshop",
    description: "Set meaningful goals and resolutions for the new year.",
    date: new Date(2025, 11, 30), // December 30, 2025
    time: "16:00",
    endTime: "18:00",
    club: "Wellness Society",
    type: "Wellness",
    location: "Workshop Room",
    organizer: "Life Coach",
    isRSVPd: true,
    attendeeCount: 40,
    maxAttendees: 60
  }
];
