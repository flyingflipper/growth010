/*
  # Initial Data Migration

  1. New Data
    - Topics: Foundational mindsets and behavioral mastery
    - Subtopics: Self-awareness, assertiveness, emotional intelligence, and decision making
    - Videos: Educational content for self-awareness
    - Interactives: Assessment tools and simulators
    - Articles: Professional development content

  2. Structure
    - All records use valid UUIDs
    - Maintains referential integrity between tables
    - Includes rich content and metadata
*/

-- Insert topics
INSERT INTO topics (id, title, description) VALUES
  ('67e2c14e-4f23-4f0d-9895-2e69c0d1e34f', 'Foundational Mindsets & Behavioral Mastery', 'Master the core mindsets and behaviors that drive personal and professional growth.');

-- Insert subtopics
INSERT INTO subtopics (id, topic_id, title, description, content) VALUES
  ('d4c12a8b-6c3f-4f48-b210-234981c9b7d1', '67e2c14e-4f23-4f0d-9895-2e69c0d1e34f', 'Self-Awareness & Meta-Cognition', 'Recognize and understand your thoughts and behaviors to drive personal growth.',
    '# Self-Awareness & Meta-Cognition

Self-awareness and meta-cognition are fundamental skills that form the foundation of personal and professional growth. This module explores how to develop these capabilities and apply them in your daily work.

## What is Meta-Cognition?

Meta-cognition is "thinking about thinking" - the ability to:
- Understand your own thought processes
- Monitor your learning and performance
- Adjust your strategies based on self-reflection

## Key Components

1. **Self-Reflection**
   - Regular assessment of thoughts and behaviors
   - Understanding personal triggers and patterns
   - Identifying areas for improvement

2. **Strategy Assessment**
   - Evaluating the effectiveness of current approaches
   - Adjusting methods based on outcomes
   - Developing new strategies when needed

3. **Emotional Awareness**
   - Recognizing emotional states
   - Understanding emotional impacts on decision-making
   - Managing emotional responses

## Practical Applications

- Daily reflection practices
- Decision-making journals
- Feedback integration methods
- Performance review techniques

## Exercises

1. **Thought Mapping**
   Document your thought process during important decisions

2. **Behavior Pattern Analysis**
   Track recurring situations and your responses

3. **Strategy Review**
   Regularly assess the effectiveness of your approaches'),
  ('f8c2e4d1-3b5a-4f67-9c8d-1e2f3a4b5c6d', '67e2c14e-4f23-4f0d-9895-2e69c0d1e34f', 'Assertiveness & Communication', 'Learn to communicate effectively and assert yourself professionally.',
    '# Assertiveness & Communication\n\nContent coming soon...'),
  ('a1b2c3d4-e5f6-4a3b-8c7d-9e0f1a2b3c4d', '67e2c14e-4f23-4f0d-9895-2e69c0d1e34f', 'Emotional Intelligence', 'Develop your ability to understand and manage emotions effectively.',
    '# Emotional Intelligence\n\nContent coming soon...'),
  ('b2c3d4e5-f6a7-4b3c-8d7e-0f1a2b3c4d5e', '67e2c14e-4f23-4f0d-9895-2e69c0d1e34f', 'Decision Making', 'Master strategic decision-making processes and techniques.',
    '# Decision Making\n\nContent coming soon...');

-- Insert videos
INSERT INTO videos (id, subtopic_id, title, description, url, duration, thumbnail, difficulty) VALUES
  ('c3d4e5f6-a7b8-4c3d-8e7f-1a2b3c4d5e6f', 'd4c12a8b-6c3f-4f48-b210-234981c9b7d1', 'Understanding Meta-Cognition', 'Learn the fundamentals of thinking about thinking and how it impacts your growth.', 'https://example.com/video1', '5:30', 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg', 'beginner'),
  ('d4e5f6a7-b8c9-4d3e-9f7a-2a3b4c5d6e7f', 'd4c12a8b-6c3f-4f48-b210-234981c9b7d1', 'Advanced Self-Reflection Techniques', 'Master advanced techniques for deeper self-awareness and personal insight.', 'https://example.com/video2', '8:45', 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg', 'intermediate'),
  ('e5f6a7b8-c9d0-4e3f-8a7b-3a4b5c6d7e8f', 'd4c12a8b-6c3f-4f48-b210-234981c9b7d1', 'Emotional Intelligence in Practice', 'Apply emotional intelligence concepts in real-world situations.', 'https://example.com/video3', '6:15', 'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg', 'advanced');

-- Insert interactives
INSERT INTO interactives (id, subtopic_id, title, description, thumbnail, difficulty, estimated_time, url) VALUES
  ('f6a7b8c9-d0e1-4f3f-9a7b-4a5b6c7d8e9f', 'd4c12a8b-6c3f-4f48-b210-234981c9b7d1', 'Self-Awareness Assessment', 'Evaluate your current level of self-awareness through interactive exercises.', 'https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg', 'beginner', '15 mins', '/interactives/self-awareness'),
  ('a7b8c9d0-e1f2-4f3f-9b7c-5a6b7c8d9e0f', 'd4c12a8b-6c3f-4f48-b210-234981c9b7d1', 'Emotional Intelligence Simulator', 'Practice emotional intelligence in simulated workplace scenarios.', 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg', 'intermediate', '30 mins', '/interactives/ei-simulator');

-- Insert articles
INSERT INTO articles (id, subtopic_id, title, author, excerpt, reading_time, tags, url, publish_date) VALUES
  ('b8c9d0e1-f2f3-4f3f-9c7d-6a7b8c9d0e1f', 'd4c12a8b-6c3f-4f48-b210-234981c9b7d1', 'The Science of Self-Awareness', 'Dr. Sarah Johnson', 'Explore the latest research on how self-awareness impacts professional development.', '5 mins', ARRAY['psychology', 'professional-development', 'research'], '/articles/science-of-self-awareness', '2024-02-15'),
  ('c9d0e1f2-f3f4-4f3f-9d7e-7a8b9c0d1e2f', 'd4c12a8b-6c3f-4f48-b210-234981c9b7d1', 'Building Better Habits Through Meta-Cognition', 'Michael Chen', 'Learn how understanding your thought processes can help create lasting behavioral change.', '7 mins', ARRAY['habits', 'psychology', 'personal-growth'], '/articles/better-habits', '2024-02-10');