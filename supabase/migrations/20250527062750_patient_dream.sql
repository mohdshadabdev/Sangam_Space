/*
  # Insert sample data for UniMeet application

  1. Sample Data
    - Insert sample clubs
    - Insert sample events
*/

-- Insert sample clubs
INSERT INTO clubs (id, name, description, logo_url, color_theme)
VALUES
  ('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Codify Club', 'A community of passionate coders and problem solvers.', 'https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', '#3B82F6'),
  ('b2c3d4e5-f6a1-7890-abcd-ef1234567891', 'Wiki-Tech UIT', 'Sharing knowledge and building technical documentation.', 'https://images.pexels.com/photos/714699/pexels-photo-714699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', '#10B981'),
  ('c3d4e5f6-a1b2-7890-abcd-ef1234567892', 'TechnoHackers', 'Breaking things and building them back better.', 'https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', '#F97316'),
  ('d4e5f6a1-b2c3-7890-abcd-ef1234567893', 'TFUG', 'TensorFlow User Group dedicated to machine learning.', 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', '#EC4899'),
  ('e5f6a1b2-c3d4-7890-abcd-ef1234567894', 'GDG Prayagraj', 'Google Developer Group for the latest tech.', 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', '#22C55E'),
  ('f6a1b2c3-d4e5-7890-abcd-ef1234567895', 'Prerogative Pointers', 'Advanced programming and systems design.', 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', '#8B5CF6'),
  ('1a2b3c4d-5e6f-7890-abcd-ef1234567896', 'Bridge4U', 'Connecting students with industry professionals.', 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', '#FB7185'),
  ('2b3c4d5e-6f1a-7890-abcd-ef1234567897', 'Unitedities', 'Uniting diverse disciplines for innovative projects.', 'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', '#0EA5E9'),
  ('3c4d5e6f-1a2b-7890-abcd-ef1234567898', 'SCC', 'Shambhunath Coding Club for competitive programming.', 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', '#FBBF24');

-- Insert sample events
INSERT INTO events (title, description, date, time, venue, banner_url, club_id)
VALUES
  ('Hack the Future', 'A 36-hour hackathon to build your next-gen project. Join us for a weekend of coding, collaboration, and creativity as we tackle real-world problems with innovative solutions.

## What to Expect
- Form teams of up to 4 members
- Work on projects in various categories
- Mentorship from industry professionals
- Prizes worth $5000

## Schedule
- Day 1: Kickoff and team formation
- Day 2: Hacking and workshops
- Day 3: Presentations and awards

Bring your laptops and your A-game!', '2025-07-12', '10:00 AM', 'United Auditorium', 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'a1b2c3d4-e5f6-7890-abcd-ef1234567890'),
  
  ('AI for Everyone', 'An intro workshop on TensorFlow and building smart models. This hands-on session is perfect for beginners who want to get started with machine learning.

## Topics Covered
- Introduction to AI and ML concepts
- TensorFlow basics
- Building your first neural network
- Practical applications in everyday projects

No prior experience required, just bring your curiosity and a laptop!', '2025-06-20', '2:00 PM', 'Lab-3, AI Block', 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'd4e5f6a1-b2c3-7890-abcd-ef1234567893'),
  
  ('Google I/O Recap', 'Latest highlights and tech from Google I/O 2025. Join us as we discuss the latest announcements, demos, and future technologies showcased at this year''s Google I/O.

## Agenda
- Android and Flutter updates
- AI and Machine Learning breakthroughs
- Cloud and Web Technologies
- Q&A with Google Developer Experts

This is a virtual event - link will be shared with registered participants.', '2025-07-05', '4:00 PM', 'Online (Google Meet)', 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'e5f6a1b2-c3d4-7890-abcd-ef1234567894'),
  
  ('Tech Talk: DevOps Simplified', 'Learn how to streamline your development workflow with modern DevOps practices. This session is aimed at developers who want to understand CI/CD pipelines, infrastructure as code, and automated testing.

## What You''ll Learn
- Setting up GitHub Actions
- Docker for consistent environments
- Automated testing strategies
- Deployment best practices

Bring your laptop to follow along with the demonstrations.', '2025-06-28', '5:00 PM', 'UIT Seminar Hall', 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'b2c3d4e5-f6a1-7890-abcd-ef1234567891'),
  
  ('Bridge the Gap', 'Connect with alumni and industry professionals to explore career opportunities. This networking event brings together current students with successful graduates and industry leaders.

## Event Highlights
- Panel discussion with alumni
- Industry insights from leading companies
- Resume review sessions
- Networking lunch

Dress code: Business casual', '2025-07-01', '1:00 PM', 'Bridge Courtyard', 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', '1a2b3c4d-5e6f-7890-abcd-ef1234567896'),
  
  ('Competitive Programming Bootcamp', 'Sharpen your algorithm skills with intensive problem-solving sessions. This bootcamp is designed to prepare you for competitive programming contests like ICPC, Google CodeJam, and HackerRank competitions.

## Schedule
- Day 1: Time complexity and data structures
- Day 2: Graph algorithms and dynamic programming
- Day 3: Mock contest and problem analysis

Prerequisites: Basic programming knowledge in C++, Java, or Python', '2025-06-15', '9:00 AM', 'Computer Science Lab', 'https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', '3c4d5e6f-1a2b-7890-abcd-ef1234567898'),
  
  ('Web3 and Blockchain Fundamentals', 'Explore the basics of blockchain technology and Web3 development. This workshop will introduce you to the concepts behind decentralized applications and smart contracts.

## Topics Covered
- Blockchain fundamentals
- Smart contracts with Solidity
- Building dApps
- NFTs and tokenomics

No prior blockchain experience needed, but familiarity with JavaScript is helpful.', '2025-07-08', '3:00 PM', 'Tech Hub, Room 101', 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'f6a1b2c3-d4e5-7890-abcd-ef1234567895'),
  
  ('Interdisciplinary Innovation Challenge', 'Collaborate with students from different disciplines to solve real-world problems. This unique event brings together students from engineering, business, design, and humanities to work on innovative solutions.

## Challenge Areas
- Sustainable development
- Healthcare accessibility
- Education technology
- Urban mobility

Teams will be formed during the event to ensure diversity of skills and perspectives.', '2025-07-20', '10:00 AM', 'Innovation Center', 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', '2b3c4d5e-6f1a-7890-abcd-ef1234567897'),
  
  ('Cybersecurity Workshop', 'Learn ethical hacking techniques and how to secure your applications. This hands-on workshop will cover common vulnerabilities and how to defend against them.

## Workshop Content
- OWASP Top 10 vulnerabilities
- Penetration testing basics
- Secure coding practices
- Network security fundamentals

Participants should bring laptops with admin access for installing security tools.', '2025-06-25', '11:00 AM', 'Security Lab', 'https://images.pexels.com/photos/5380651/pexels-photo-5380651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'c3d4e5f6-a1b2-7890-abcd-ef1234567892');