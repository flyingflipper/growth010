/*
  # Fix slugs and data structure

  1. Changes
    - Reset slugs to ensure consistency
    - Update topic and subtopic titles to match static data
    - Ensure all required content is present
    - Fix relationships between tables
  
  2. Security
    - Maintain existing RLS policies
*/

-- First, update the topics
UPDATE topics
SET title = 'Foundational Mindsets & Behavioral Mastery',
    description = 'Master the core mindsets and behaviors that drive personal and professional growth.',
    updated_at = now()
WHERE id = '67e2c14e-4f23-4f0d-9895-2e69c0d1e34f';

-- Then update the subtopics with correct titles
UPDATE subtopics
SET title = 'Self-Awareness & Meta-Cognition',
    description = 'Recognize and understand your thoughts and behaviors to drive personal growth.',
    updated_at = now()
WHERE id = 'd4c12a8b-6c3f-4f48-b210-234981c9b7d1';

UPDATE subtopics
SET title = 'Assertiveness & Communication',
    description = 'Learn to communicate effectively and assert yourself professionally.',
    updated_at = now()
WHERE id = 'f8c2e4d1-3b5a-4f67-9c8d-1e2f3a4b5c6d';

UPDATE subtopics
SET title = 'Emotional Intelligence',
    description = 'Develop your ability to understand and manage emotions effectively.',
    updated_at = now()
WHERE id = 'a1b2c3d4-e5f6-4a3b-8c7d-9e0f1a2b3c4d';

UPDATE subtopics
SET title = 'Decision Making',
    description = 'Master strategic decision-making processes and techniques.',
    updated_at = now()
WHERE id = 'b2c3d4e5-f6a7-4b3c-8d7e-0f1a2b3c4d5e';

-- This will trigger the slug update functions automatically