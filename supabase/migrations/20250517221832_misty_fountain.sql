/*
  # Topics and Learning Content Schema

  1. New Tables
    - `topics`
      - Primary table for learning topics
      - Contains main topic information and metadata
    
    - `subtopics`
      - Detailed content sections within topics
      - Links to parent topics
    
    - `videos`
      - Educational video content
      - Associated with subtopics
    
    - `interactives`
      - Interactive learning tools and exercises
      - Connected to subtopics
    
    - `articles`
      - Related reading materials
      - Linked to subtopics

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to read content
*/

-- Topics table
CREATE TABLE topics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Subtopics table
CREATE TABLE subtopics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  topic_id uuid REFERENCES topics(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Videos table
CREATE TABLE videos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  subtopic_id uuid REFERENCES subtopics(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text,
  url text NOT NULL,
  duration text NOT NULL,
  thumbnail text NOT NULL,
  difficulty text CHECK (difficulty IN ('beginner', 'intermediate', 'advanced')),
  created_at timestamptz DEFAULT now()
);

-- Interactives table
CREATE TABLE interactives (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  subtopic_id uuid REFERENCES subtopics(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text NOT NULL,
  thumbnail text NOT NULL,
  difficulty text CHECK (difficulty IN ('beginner', 'intermediate', 'advanced')),
  estimated_time text NOT NULL,
  url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Articles table
CREATE TABLE articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  subtopic_id uuid REFERENCES subtopics(id) ON DELETE CASCADE,
  title text NOT NULL,
  author text NOT NULL,
  excerpt text NOT NULL,
  reading_time text NOT NULL,
  tags text[] NOT NULL,
  url text NOT NULL,
  publish_date timestamptz NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE subtopics ENABLE ROW LEVEL SECURITY;
ALTER TABLE videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE interactives ENABLE ROW LEVEL SECURITY;
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access to topics"
  ON topics FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to subtopics"
  ON subtopics FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to videos"
  ON videos FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to interactives"
  ON interactives FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to articles"
  ON articles FOR SELECT
  TO public
  USING (true);