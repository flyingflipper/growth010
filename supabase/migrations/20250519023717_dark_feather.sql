-- Check current slugs
SELECT id, title, slug FROM topics;
SELECT id, title, slug FROM subtopics;

-- Show the full subtopic data for verification
SELECT s.*, t.slug as topic_slug
FROM subtopics s
JOIN topics t ON s.topic_id = t.id;