/*
  # Add content for Emotional Intelligence subtopic

  1. Changes
    - Update content for 'Emotional Intelligence' subtopic
    - Add videos, interactives, and articles for the subtopic
*/

-- Update subtopic content
UPDATE subtopics 
SET content = '# Emotional Intelligence

Emotional intelligence (EI) is the ability to understand, use, and manage emotions effectively. This module explores how to develop and apply emotional intelligence in professional settings.

## Core Components of Emotional Intelligence

1. **Self-Awareness**
   - Recognizing your own emotions
   - Understanding emotional triggers
   - Identifying patterns in emotional responses

2. **Self-Management**
   - Regulating emotional reactions
   - Maintaining composure under pressure
   - Adapting to changing situations

3. **Social Awareness**
   - Reading room dynamics
   - Understanding others'' perspectives
   - Recognizing organizational dynamics

4. **Relationship Management**
   - Building strong professional relationships
   - Managing conflict effectively
   - Influencing and leading others

## Practical Applications

### In Leadership
- Reading team dynamics
- Providing effective feedback
- Managing difficult conversations

### In Teamwork
- Contributing to psychological safety
- Building trust and rapport
- Navigating team conflicts

### In Personal Growth
- Developing resilience
- Managing stress
- Building authentic connections

## Development Strategies

1. **Practice Active Listening**
   - Focus fully on the speaker
   - Notice non-verbal cues
   - Confirm understanding before responding

2. **Emotional Vocabulary Building**
   - Expand your emotional language
   - Practice precise emotion naming
   - Understand emotion intensity levels

3. **Reflection Exercises**
   - Daily emotion journaling
   - Situation-response analysis
   - Impact assessment

## Assessment Tools

- Emotion tracking logs
- Feedback collection methods
- Progress measurement frameworks'
WHERE id = 'a1b2c3d4-e5f6-4a3b-8c7d-9e0f1a2b3c4d';

-- Add videos
INSERT INTO videos (subtopic_id, title, description, url, duration, thumbnail, difficulty) VALUES
  ('a1b2c3d4-e5f6-4a3b-8c7d-9e0f1a2b3c4d', 
   'Understanding Emotional Intelligence', 
   'Learn the fundamentals of emotional intelligence and its impact on professional success.',
   'https://example.com/ei-intro',
   '7:15',
   'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
   'beginner'),
  ('a1b2c3d4-e5f6-4a3b-8c7d-9e0f1a2b3c4d',
   'Advanced EI Techniques',
   'Master advanced emotional intelligence strategies for complex workplace situations.',
   'https://example.com/ei-advanced',
   '12:30',
   'https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg',
   'advanced');

-- Add interactives
INSERT INTO interactives (subtopic_id, title, description, thumbnail, difficulty, estimated_time, url) VALUES
  ('a1b2c3d4-e5f6-4a3b-8c7d-9e0f1a2b3c4d',
   'EI Assessment Tool',
   'Evaluate your emotional intelligence across key dimensions.',
   'https://images.pexels.com/photos/3183199/pexels-photo-3183199.jpeg',
   'beginner',
   '20 mins',
   '/interactives/ei-assessment'),
  ('a1b2c3d4-e5f6-4a3b-8c7d-9e0f1a2b3c4d',
   'Workplace Scenarios Simulator',
   'Practice applying EI in realistic workplace situations.',
   'https://images.pexels.com/photos/3183200/pexels-photo-3183200.jpeg',
   'intermediate',
   '45 mins',
   '/interactives/ei-scenarios');

-- Add articles
INSERT INTO articles (subtopic_id, title, author, excerpt, reading_time, tags, url, publish_date) VALUES
  ('a1b2c3d4-e5f6-4a3b-8c7d-9e0f1a2b3c4d',
   'The Business Case for Emotional Intelligence',
   'Dr. Emma Roberts',
   'Explore how emotional intelligence drives business success and career advancement.',
   '8 mins',
   ARRAY['leadership', 'professional-development', 'emotional-intelligence'],
   '/articles/ei-business-case',
   '2024-03-01'),
  ('a1b2c3d4-e5f6-4a3b-8c7d-9e0f1a2b3c4d',
   'Developing EI Through Daily Practice',
   'James Wilson',
   'Learn practical exercises to build your emotional intelligence skills every day.',
   '6 mins',
   ARRAY['personal-growth', 'habits', 'emotional-intelligence'],
   '/articles/ei-daily-practice',
   '2024-03-15');