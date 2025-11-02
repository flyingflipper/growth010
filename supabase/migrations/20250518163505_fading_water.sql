-- Drop existing constraints and triggers first
DROP TRIGGER IF EXISTS set_topic_slug ON topics;
DROP TRIGGER IF EXISTS set_subtopic_slug ON subtopics;
DROP FUNCTION IF EXISTS update_topic_slug();
DROP FUNCTION IF EXISTS update_subtopic_slug();
DROP FUNCTION IF EXISTS generate_slug();

-- Recreate the slug generation function with better handling
CREATE OR REPLACE FUNCTION generate_slug(title text)
RETURNS text AS $$
BEGIN
  RETURN lower(regexp_replace(
    regexp_replace(
      regexp_replace(title, '&', 'and', 'g'),  -- Replace & with 'and'
      '[^a-zA-Z0-9\s-]', '', 'g'               -- Remove special characters
    ),
    '\s+', '-', 'g'                            -- Replace spaces with hyphens
  ));
END;
$$ LANGUAGE plpgsql;

-- Recreate triggers with better error handling
CREATE OR REPLACE FUNCTION update_topic_slug()
RETURNS trigger AS $$
BEGIN
  IF NEW.title IS NULL THEN
    RAISE EXCEPTION 'Title cannot be null';
  END IF;
  NEW.slug := generate_slug(NEW.title);
  RETURN NEW;
EXCEPTION WHEN OTHERS THEN
  RAISE EXCEPTION 'Error generating slug for topic: %', SQLERRM;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION update_subtopic_slug()
RETURNS trigger AS $$
BEGIN
  IF NEW.title IS NULL THEN
    RAISE EXCEPTION 'Title cannot be null';
  END IF;
  NEW.slug := generate_slug(NEW.title);
  RETURN NEW;
EXCEPTION WHEN OTHERS THEN
  RAISE EXCEPTION 'Error generating slug for subtopic: %', SQLERRM;
END;
$$ LANGUAGE plpgsql;

-- Recreate triggers
CREATE TRIGGER set_topic_slug
BEFORE INSERT OR UPDATE OF title ON topics
FOR EACH ROW
EXECUTE FUNCTION update_topic_slug();

CREATE TRIGGER set_subtopic_slug
BEFORE INSERT OR UPDATE OF title ON subtopics
FOR EACH ROW
EXECUTE FUNCTION update_subtopic_slug();

-- Update existing slugs with better formatting
UPDATE topics 
SET title = title 
WHERE true;

UPDATE subtopics 
SET title = title 
WHERE true;