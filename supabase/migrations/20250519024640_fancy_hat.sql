/*
  # Update slug handling and lookup functionality

  1. Changes
    - Normalize all slugs to use hyphens consistently
    - Update slug generation function
    - Add index for faster slug lookups
    - Update existing data to use consistent slugs

  2. Security
    - No changes to RLS policies needed
*/

-- Update the slug normalization function
CREATE OR REPLACE FUNCTION normalize_slug(input_text text)
RETURNS text AS $$
BEGIN
  RETURN lower(regexp_replace(
    regexp_replace(
      regexp_replace(
        regexp_replace(input_text, '[^a-zA-Z0-9\s-]', '', 'g'),  -- Remove special characters
        '\s+', '-', 'g'                                          -- Replace spaces with hyphens
      ),
      '-+', '-', 'g'                                            -- Replace multiple hyphens
    ),
    '-$|^-', '', 'g'                                            -- Remove leading/trailing hyphens
  ));
END;
$$ LANGUAGE plpgsql;

-- Update existing slugs
UPDATE topics
SET slug = normalize_slug(slug)
WHERE slug != normalize_slug(slug);

UPDATE subtopics
SET 
  slug = normalize_slug(slug),
  display_slug = normalize_slug(display_slug)
WHERE slug != normalize_slug(slug) OR display_slug != normalize_slug(display_slug);

-- Update alternative slugs to use hyphens
UPDATE subtopics
SET alternative_slugs = ARRAY(
  SELECT normalize_slug(unnest(alternative_slugs))
  WHERE alternative_slugs IS NOT NULL
);

-- Add index for faster slug lookups
CREATE INDEX IF NOT EXISTS idx_subtopics_display_slug ON subtopics (display_slug);
CREATE INDEX IF NOT EXISTS idx_subtopics_alternative_slugs ON subtopics USING gin (alternative_slugs);

-- Verify the updates
SELECT id, title, slug, display_slug, alternative_slugs 
FROM subtopics 
ORDER BY slug;