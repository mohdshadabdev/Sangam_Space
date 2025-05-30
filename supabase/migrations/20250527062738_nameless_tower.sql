/*
  # Create tables for UniMeet application

  1. New Tables
    - `clubs` - Stores information about university clubs
    - `events` - Stores event details created by clubs
    - `rsvps` - Stores attendee RSVP information
  
  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated and anonymous users
*/

-- Create clubs table
CREATE TABLE IF NOT EXISTS clubs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  logo_url text,
  color_theme text,
  created_at timestamptz DEFAULT now()
);

-- Create events table
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  date date NOT NULL,
  time text NOT NULL,
  venue text NOT NULL,
  banner_url text,
  club_id uuid REFERENCES clubs(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now()
);

-- Create RSVPs table
CREATE TABLE IF NOT EXISTS rsvps (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id uuid REFERENCES events(id) ON DELETE CASCADE,
  name text NOT NULL,
  email text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE clubs ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE rsvps ENABLE ROW LEVEL SECURITY;

-- RLS Policies for clubs

-- Admins can do everything with clubs
CREATE POLICY "Admins can do everything with clubs"
  ON clubs
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);
  
-- Anyone can view clubs
CREATE POLICY "Anyone can view clubs"
  ON clubs
  FOR SELECT
  TO anon
  USING (true);

-- RLS Policies for events

-- Admins can do everything with events
CREATE POLICY "Admins can do everything with events"
  ON events
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);
  
-- Anyone can view events
CREATE POLICY "Anyone can view events"
  ON events
  FOR SELECT
  TO anon
  USING (true);

-- RLS Policies for RSVPs

-- Admins can view and manage all RSVPs
CREATE POLICY "Admins can do everything with RSVPs"
  ON rsvps
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);
  
-- Anonymous users can create RSVPs
CREATE POLICY "Anonymous users can create RSVPs"
  ON rsvps
  FOR INSERT
  TO anon
  WITH CHECK (true);
  
-- Anonymous users can view RSVPs for events
CREATE POLICY "Anonymous users can view RSVPs"
  ON rsvps
  FOR SELECT
  TO anon
  USING (true);