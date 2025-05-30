/*
  # Insert sample data for UniMeet application

  1. Sample Data
    - Insert sample clubs
    - Insert sample events
*/

-- Insert sample clubs
INSERT INTO clubs (id, name, description, logo_url, color_theme)
VALUES
  ('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Codify Club', 'United University''s most vibrant coding club. Open for beginners and pros. We organize workshops, hackathons, and more.', 'https://pps.whatsapp.net/v/t61.24694-24/442457938_714514990705048_4031384478786705579_n.jpg?ccb=11-4&oh=01_Q5Aa1gH3l47afkBkZe4gS5Az8zHYCSGkJoTxFSzZAt1qCRNDQw&oe=684710BB&_nc_sid=5e03e0&_nc_cat=106', '#3B82F6'),
  
  ('d4e5f6a1-b2c3-7890-abcd-ef1234567893', 'TFUG', 'A developer community for those passionate about TensorFlow and ML technologies.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSosJ9Inu4Nq4ZiwL97eDq8diTournVlAfnGA&s', '#EC4899'),
  
  ('e5f6a1b2-c3d4-7890-abcd-ef1234567894', 'GDG Prayagraj', 'Google Developers Group Prayagraj is for developers interested in Google''s tech—from Android to Maps API. We host Codelabs, devFests, and more. Free and open to all tech enthusiasts.', 'https://media.konfhub.com/event_poster/2024/October/08/1728587723424-6e4f70aa-fbb7-4c99-9a45-151d6254d9be.png', '#22C55E'),
  
  ('f6a1b2c3-d4e5-7890-abcd-ef1234567895', 'FFDG Prayagraj', 'A buzzing community for FlutterFlow enthusiasts in Prayagraj. Learn, build, and collaborate visually using FlutterFlow.', 'https://secure.meetupstatic.com/photos/event/9/8/3/b/clean_524618971.webp', '#8B5CF6');

-- Insert sample events
INSERT INTO events (title, description, date, time, venue, banner_url, club_id)
VALUES
  -- GDG Prayagraj Events
  ('Build With AI', 'Join us for an exciting day of AI exploration and hands-on development. Learn about the latest AI tools and technologies from Google.

## Event Details
- Hands-on workshops
- Live coding sessions
- Networking opportunities
- Expert speakers

Organized by: Ankit Kumar Verma
Profile: https://gdg.community.dev/u/mjd9x3/

Join our community: https://linktr.ee/gdgprayagraj', '2025-03-26', '10:00 AM', 'United Auditorium', 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/GDG24-BwAI-Bevy-EventThumb-Blue%20%282%29_flFteli.png', 'e5f6a1b2-c3d4-7890-abcd-ef1234567894'),
  
  ('DevFest 2024', 'The biggest Google Developer Groups event of the year! Join us for a day full of tech talks, workshops, and networking.

## Highlights
- Keynote speakers
- Technical sessions
- Code labs
- Community networking

Organized by: GDG Prayagraj Team', '2024-10-26', '9:00 AM', 'Tech Hub', 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*-aYw7sGJfxM0x3XWN57M0g.png', 'e5f6a1b2-c3d4-7890-abcd-ef1234567894'),
  
  ('Google I/O Extended', 'Experience the magic of Google I/O right here in Prayagraj! Join us for live streams, local speakers, and hands-on activities.

## Schedule
- Keynote watch party
- Local speaker sessions
- Interactive workshops
- Community meetup', '2024-06-29', '10:00 AM', 'Virtual Event', 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*-aYw7sGJfxM0x3XWN57M0g.png', 'e5f6a1b2-c3d4-7890-abcd-ef1234567894'),

  -- TFUG Events
  ('Kaggle Olympiad', 'Join us for an exciting data science competition! Put your ML skills to the test and compete with fellow enthusiasts.

## Competition Details
- Real-world datasets
- Multiple challenge categories
- Mentorship sessions
- Prizes for winners

Bring your laptop and enthusiasm for machine learning!', '2025-05-10', '9:00 AM', 'AI Lab', 'https://kaggle.com/competitions/101017/images/header', 'd4e5f6a1-b2c3-7890-abcd-ef1234567893'),

  -- Codify Club Events
  ('Hackdiwas', 'The annual flagship hackathon of Codify Club! 24 hours of coding, creativity, and innovation.

## Event Highlights
- 24-hour coding sprint
- Mentorship support
- Amazing prizes
- Free swag for all participants

Get ready to code, create, and conquer!', '2024-11-15', '10:00 AM', 'Main Campus', 'https://hackdiwas.github.io/codify-club/assets/image/hackdiwas%20logo%20black%20colour.png', 'a1b2c3d4-e5f6-7890-abcd-ef1234567890'),

  ('Hackdiwas 2.0', 'The bigger and better version of our flagship hackathon! 36 hours of non-stop innovation.

## What''s New
- Extended duration: 36 hours
- Industry mentors
- Bigger prize pool
- International participants welcome

Are you ready to push your limits?', '2025-04-20', '9:00 AM', 'Innovation Hub', 'https://hackdiwas.github.io/codify-club/assets/image/hackdiwas%20logo%20black%20colour.png', 'a1b2c3d4-e5f6-7890-abcd-ef1234567890'),

  -- FFDG Events
  ('FlutterFlow Innovators Hackathon', 'Design, build, and deploy mobile apps without writing code! Join us for this unique no-code hackathon.

## Event Features
- FlutterFlow workshops
- Team formation
- Live deployment
- Expert mentorship

Perfect for both beginners and experienced developers!', '2025-06-15', '10:00 AM', 'Digital Studio', 'https://secure.meetupstatic.com/photos/event/9/8/3/b/clean_524618971.webp', 'f6a1b2c3-d4e5-7890-abcd-ef1234567895');