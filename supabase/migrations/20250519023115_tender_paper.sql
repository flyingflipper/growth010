/*
  # Update slugs to use hyphens

  1. Changes
    - Update all slugs to replace spaces with hyphens
    - Ensure consistent slug format across all tables
    - Add NOT NULL constraint to slug columns
  
  2. Security
    - No changes to RLS policies
*/

-- First, ensure slug columns are required
ALTER TABLE topics 
ALTER COLUMN slug SET NOT NULL;

ALTER TABLE subtopics 
ALTER COLUMN slug SET NOT NULL;

-- Update the slug generation function to ensure consistent formatting
CREATE OR REPLACE FUNCTION generate_slug(title text)
RETURNS text AS $$
BEGIN
  RETURN lower(regexp_replace(
    regexp_replace(
      regexp_replace(
        regexp_replace(title, '&', 'and', 'g'),  -- Replace & with 'and'
        '[^a-zA-Z0-9\s-]', '', 'g'               -- Remove special characters except spaces and hyphens
      ),
      '\s+', '-', 'g'                           -- Replace spaces with hyphens
    ),
    '-+', '-', 'g'                              -- Replace multiple hyphens with single hyphen
  ));
END;
$$ LANGUAGE plpgsql;

-- Drop and recreate triggers to use new function
DROP TRIGGER IF EXISTS set_topic_slug ON topics;
DROP TRIGGER IF EXISTS set_subtopic_slug ON subtopics;

CREATE TRIGGER set_topic_slug
BEFORE INSERT OR UPDATE OF title ON topics
FOR EACH ROW
EXECUTE FUNCTION update_topic_slug();

CREATE TRIGGER set_subtopic_slug
BEFORE INSERT OR UPDATE OF title ON subtopics
FOR EACH ROW
EXECUTE FUNCTION update_subtopic_slug();

-- Update existing slugs
UPDATE topics 
SET slug = generate_slug(title)
WHERE slug LIKE '% %' OR slug IS NULL;

UPDATE subtopics 
SET slug = generate_slug(title)
WHERE slug LIKE '% %' OR slug IS NULL;

-- Verify the updates
SELECT id, title, slug FROM topics;
SELECT id, title, slug FROM subtopics;