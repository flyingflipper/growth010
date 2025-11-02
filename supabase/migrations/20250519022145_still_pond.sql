-- First, let's see what slugs we have
SELECT id, title, slug FROM topics;
SELECT id, title, slug, topic_id FROM subtopics;

-- Update the slugs to match our expected format
UPDATE topics
SET slug = 'foundational-mindsets'
WHERE id = '67e2c14e-4f23-4f0d-9895-2e69c0d1e34f';

UPDATE subtopics
SET slug = 'self-awareness-meta-cognition'
WHERE id = 'd4c12a8b-6c3f-4f48-b210-234981c9b7d1';

UPDATE subtopics
SET slug = 'assertiveness-communication'
WHERE id = 'f8c2e4d1-3b5a-4f67-9c8d-1e2f3a4b5c6d';

UPDATE subtopics
SET slug = 'emotional-intelligence'
WHERE id = 'a1b2c3d4-e5f6-4a3b-8c7d-9e0f1a2b3c4d';

UPDATE subtopics
SET slug = 'decision-making'
WHERE id = 'b2c3d4e5-f6a7-4b3c-8d7e-0f1a2b3c4d5e';

-- Verify the updates
SELECT id, title, slug FROM topics;
SELECT id, title, slug, topic_id FROM subtopics;