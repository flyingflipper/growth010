-- Add display_slug column to subtopics
ALTER TABLE subtopics
ADD COLUMN display_slug text;

-- Update display_slug values
UPDATE subtopics
SET display_slug = CASE
  WHEN slug = 'self-awareness-meta-cognition' THEN 'self-awareness'
  WHEN slug = 'assertiveness-communication' THEN 'assertiveness'
  WHEN slug = 'emotional-intelligence' THEN 'emotional-intelligence'
  WHEN slug = 'decision-making' THEN 'decision-making'
  ELSE slug
END;

-- Add alternative_slugs column to subtopics
ALTER TABLE subtopics
ADD COLUMN alternative_slugs text[];

-- Update alternative_slugs values
UPDATE subtopics
SET alternative_slugs = CASE
  WHEN slug = 'self-awareness-meta-cognition' THEN ARRAY['meta-cognition']
  WHEN slug = 'assertiveness-communication' THEN ARRAY['communication']
  WHEN slug = 'emotional-intelligence' THEN ARRAY['ei']
  WHEN slug = 'decision-making' THEN ARRAY['decisive-action']
  ELSE ARRAY[]::text[]
END;