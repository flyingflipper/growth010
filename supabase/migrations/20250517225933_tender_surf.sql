/*
  # Add slugs to topics and subtopics

  1. Changes
    - Add slug columns to topics and subtopics tables
    - Create function to generate slugs
    - Add unique constraints on slugs
    - Add triggers to auto-generate slugs
  
  2. Security
    - Maintain existing RLS policies
*/

-- Function to generate slugs
CREATE OR REPLACE FUNCTION generate_slug(title text)
RETURNS text AS $$
BEGIN
  -- Convert to lowercase, replace spaces and special chars with hyphens
  RETURN lower(regexp_replace(
    regexp_replace(title, '[^a-zA-Z0-9\s-]', '', 'g'),
    '\s+', '-', 'g'
  ));
END;
$$ LANGUAGE plpgsql;

-- Add slug columns
ALTER TABLE topics 
ADD COLUMN slug text UNIQUE;

ALTER TABLE subtopics 
ADD COLUMN slug text;

-- Add unique constraint on topic_id + slug for subtopics
ALTER TABLE subtopics
ADD CONSTRAINT subtopics_topic_id_slug_key UNIQUE (topic_id, slug);

-- Create triggers to auto-generate slugs
CREATE OR REPLACE FUNCTION update_topic_slug()
RETURNS trigger AS $$
BEGIN
  NEW.slug := generate_slug(NEW.title);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION update_subtopic_slug()
RETURNS trigger AS $$
BEGIN
  NEW.slug := generate_slug(NEW.title);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_topic_slug
BEFORE INSERT OR UPDATE OF title ON topics
FOR EACH ROW
EXECUTE FUNCTION update_topic_slug();

CREATE TRIGGER set_subtopic_slug
BEFORE INSERT OR UPDATE OF title ON subtopics
FOR EACH ROW
EXECUTE FUNCTION update_subtopic_slug();

-- Update existing records
UPDATE topics SET slug = generate_slug(title);
UPDATE subtopics SET slug = generate_slug(title);