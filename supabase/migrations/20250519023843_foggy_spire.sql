/*
  # Update slug handling

  1. Changes
    - Add function to normalize slugs
    - Update existing slugs to ensure consistency
    - Add verification query
*/

-- Function to normalize slugs
CREATE OR REPLACE FUNCTION normalize_slug(input_text text)
RETURNS text AS $$
BEGIN
  RETURN lower(regexp_replace(
    regexp_replace(
      regexp_replace(input_text, '[^a-zA-Z0-9\s-]', '', 'g'),
      '\s+', '-', 'g'
    ),
    '-+', '-', 'g'
  ));
END;
$$ LANGUAGE plpgsql;

-- Update existing slugs to ensure consistency
UPDATE subtopics
SET slug = normalize_slug(slug)
WHERE slug != normalize_slug(slug);

-- Verify the updates
SELECT s.id, s.title, s.slug, t.slug as topic_slug
FROM subtopics s
JOIN topics t ON s.topic_id = t.id
ORDER BY s.slug;