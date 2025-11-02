import { Topic } from '../types/library';

export const topics: Topic[] = [
  {
    id: 'foundational-mindsets',
    title: 'Foundational Mindsets & Behavioral Mastery',
    description: 'Master the core mindsets and behaviors that drive personal and professional growth.',
    subtopics: [
      {
        id: 'self-awareness',
        title: 'Self-Awareness & Meta-Cognition',
        description: 'Recognize and understand your thoughts and behaviors to drive personal growth.',
        videos: [
          {
            id: 'v1',
            title: 'Understanding Meta-Cognition',
            description: 'Learn the fundamentals of thinking about thinking and how it impacts your growth.',
            url: 'https://example.com/video1',
            duration: '5:30',
            thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
            difficulty: 'beginner'
          },
          {
            id: 'v2',
            title: 'Advanced Self-Reflection Techniques',
            description: 'Master advanced techniques for deeper self-awareness and personal insight.',
            url: 'https://example.com/video2',
            duration: '8:45',
            thumbnail: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
            difficulty: 'intermediate'
          },
          {
            id: 'v3',
            title: 'Emotional Intelligence in Practice',
            description: 'Apply emotional intelligence concepts in real-world situations.',
            url: 'https://example.com/video3',
            duration: '6:15',
            thumbnail: 'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg',
            difficulty: 'advanced'
          }
        ],
        interactives: [
          {
            id: 'i1',
            title: 'Self-Awareness Assessment',
            description: 'Evaluate your current level of self-awareness through interactive exercises.',
            thumbnail: 'https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg',
            difficulty: 'beginner',
            estimatedTime: '15 mins',
            url: '/interactives/self-awareness'
          },
          {
            id: 'i2',
            title: 'Emotional Intelligence Simulator',
            description: 'Practice emotional intelligence in simulated workplace scenarios.',
            thumbnail: 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg',
            difficulty: 'intermediate',
            estimatedTime: '30 mins',
            url: '/interactives/ei-simulator'
          }
        ],
        articles: [
          {
            id: 'a1',
            title: 'The Science of Self-Awareness',
            author: 'Dr. Sarah Johnson',
            publishDate: new Date('2024-02-15'),
            excerpt: 'Explore the latest research on how self-awareness impacts professional development.',
            readingTime: '5 mins',
            tags: ['psychology', 'professional-development', 'research'],
            url: '/articles/science-of-self-awareness'
          },
          {
            id: 'a2',
            title: 'Building Better Habits Through Meta-Cognition',
            author: 'Michael Chen',
            publishDate: new Date('2024-02-10'),
            excerpt: 'Learn how understanding your thought processes can help create lasting behavioral change.',
            readingTime: '7 mins',
            tags: ['habits', 'psychology', 'personal-growth'],
            url: '/articles/better-habits'
          }
        ],
        content: `
# Self-Awareness & Meta-Cognition

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
   Regularly assess the effectiveness of your approaches
`,
        sources: [
          {
            name: 'Alabama Community College System',
            url: 'https://example.com/source1'
          },
          {
            name: 'arXiv',
            url: 'https://example.com/source2'
          }
        ]
      },
      {
        id: 'assertiveness',
        title: 'Assertiveness & Communication',
        description: 'Learn to communicate effectively and assert yourself professionally.',
        videos: [],
        content: `# Assertiveness & Communication\n\nContent coming soon...`
      },
      {
        id: 'emotional-intelligence',
        title: 'Emotional Intelligence',
        description: 'Develop your ability to understand and manage emotions effectively.',
        videos: [],
        content: `# Emotional Intelligence\n\nContent coming soon...`
      },
      {
        id: 'decision-making',
        title: 'Decision Making',
        description: 'Master strategic decision-making processes and techniques.',
        videos: [],
        content: `# Decision Making\n\nContent coming soon...`
      }
    ]
  }
];

export const getTopicById = (id: string): Topic | undefined => {
  return topics.find(topic => topic.id === id);
};

export const getSubtopicById = (topicId: string, subtopicId: string): Topic['subtopics'][0] | undefined => {
  const topic = getTopicById(topicId);
  return topic?.subtopics.find(subtopic => subtopic.id === subtopicId);
};