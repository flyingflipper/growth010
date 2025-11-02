import { Assessment, MicroAssessment } from '../types';

export const archetypeAssessment: Assessment = {
  id: 'archetype-assessment',
  title: 'Work Style Assessment',
  questions: [
    {
      id: 'q1',
      text: 'When facing a problem at work, I typically:',
      options: [
        {
          id: 'q1-a',
          text: 'Look for innovative, out-of-the-box solutions',
          archetypePoints: { visionary: 3, executor: 0, connector: 1, analyst: 1, catalyst: 2, builder: 1 }
        },
        {
          id: 'q1-b',
          text: 'Break it down into actionable steps and execute methodically',
          archetypePoints: { visionary: 0, executor: 3, connector: 0, analyst: 2, catalyst: 0, builder: 3 }
        },
        {
          id: 'q1-c',
          text: 'Gather input from others to find a collaborative solution',
          archetypePoints: { visionary: 1, executor: 0, connector: 3, analyst: 0, catalyst: 1, builder: 0 }
        },
        {
          id: 'q1-d',
          text: 'Analyze all available data to find the most logical approach',
          archetypePoints: { visionary: 1, executor: 1, connector: 0, analyst: 3, catalyst: 0, builder: 1 }
        },
        {
          id: 'q1-e',
          text: 'Push for immediate action to get momentum going',
          archetypePoints: { visionary: 1, executor: 1, connector: 0, analyst: 0, catalyst: 3, builder: 2 }
        }
      ]
    },
    {
      id: 'q2',
      text: 'In meetings, I\'m most likely to:',
      options: [
        {
          id: 'q2-a',
          text: 'Share big ideas and inspire new directions',
          archetypePoints: { visionary: 3, executor: 0, connector: 1, analyst: 0, catalyst: 2, builder: 0 }
        },
        {
          id: 'q2-b',
          text: 'Focus on action items and next steps',
          archetypePoints: { visionary: 0, executor: 3, connector: 0, analyst: 1, catalyst: 2, builder: 3 }
        },
        {
          id: 'q2-c',
          text: 'Ensure everyone\'s perspective is heard and valued',
          archetypePoints: { visionary: 0, executor: 0, connector: 3, analyst: 0, catalyst: 1, builder: 0 }
        },
        {
          id: 'q2-d',
          text: 'Question assumptions and analyze potential outcomes',
          archetypePoints: { visionary: 1, executor: 1, connector: 0, analyst: 3, catalyst: 0, builder: 1 }
        },
        {
          id: 'q2-e',
          text: 'Energize the room and push for decisions',
          archetypePoints: { visionary: 1, executor: 1, connector: 1, analyst: 0, catalyst: 3, builder: 1 }
        }
      ]
    },
    {
      id: 'q3',
      text: 'I feel most fulfilled at work when:',
      options: [
        {
          id: 'q3-a',
          text: 'I\'m creating something new or transformative',
          archetypePoints: { visionary: 3, executor: 0, connector: 0, analyst: 1, catalyst: 2, builder: 3 }
        },
        {
          id: 'q3-b',
          text: 'I complete tasks and hit my targets',
          archetypePoints: { visionary: 0, executor: 3, connector: 0, analyst: 1, catalyst: 1, builder: 2 }
        },
        {
          id: 'q3-c',
          text: 'I help others succeed and strengthen team bonds',
          archetypePoints: { visionary: 0, executor: 0, connector: 3, analyst: 0, catalyst: 1, builder: 0 }
        },
        {
          id: 'q3-d',
          text: 'I solve complex problems through careful analysis',
          archetypePoints: { visionary: 1, executor: 1, connector: 0, analyst: 3, catalyst: 0, builder: 1 }
        },
        {
          id: 'q3-e',
          text: 'I drive change and see momentum building',
          archetypePoints: { visionary: 2, executor: 1, connector: 1, analyst: 0, catalyst: 3, builder: 1 }
        }
      ]
    },
    {
      id: 'q4',
      text: 'When receiving feedback, I prefer it to be:',
      options: [
        {
          id: 'q4-a',
          text: 'Focused on possibilities and my potential',
          archetypePoints: { visionary: 3, executor: 0, connector: 1, analyst: 0, catalyst: 2, builder: 1 }
        },
        {
          id: 'q4-b',
          text: 'Clear, direct, and actionable',
          archetypePoints: { visionary: 0, executor: 3, connector: 0, analyst: 2, catalyst: 1, builder: 3 }
        },
        {
          id: 'q4-c',
          text: 'Delivered with empathy and care for the relationship',
          archetypePoints: { visionary: 0, executor: 0, connector: 3, analyst: 0, catalyst: 0, builder: 0 }
        },
        {
          id: 'q4-d',
          text: 'Detailed, evidence-based, and logical',
          archetypePoints: { visionary: 0, executor: 1, connector: 0, analyst: 3, catalyst: 0, builder: 1 }
        },
        {
          id: 'q4-e',
          text: 'Energizing and focused on moving forward',
          archetypePoints: { visionary: 1, executor: 1, connector: 1, analyst: 0, catalyst: 3, builder: 2 }
        }
      ]
    },
    {
      id: 'q5',
      text: 'My colleagues would most likely describe me as:',
      options: [
        {
          id: 'q5-a',
          text: 'Innovative, inspiring, and forward-thinking',
          archetypePoints: { visionary: 3, executor: 0, connector: 1, analyst: 0, catalyst: 2, builder: 1 }
        },
        {
          id: 'q5-b',
          text: 'Reliable, organized, and results-oriented',
          archetypePoints: { visionary: 0, executor: 3, connector: 0, analyst: 1, catalyst: 0, builder: 2 }
        },
        {
          id: 'q5-c',
          text: 'Empathetic, collaborative, and supportive',
          archetypePoints: { visionary: 0, executor: 0, connector: 3, analyst: 0, catalyst: 1, builder: 0 }
        },
        {
          id: 'q5-d',
          text: 'Thoughtful, precise, and analytical',
          archetypePoints: { visionary: 0, executor: 1, connector: 0, analyst: 3, catalyst: 0, builder: 1 }
        },
        {
          id: 'q5-e',
          text: 'Energetic, influential, and action-oriented',
          archetypePoints: { visionary: 1, executor: 1, connector: 1, analyst: 0, catalyst: 3, builder: 2 }
        },
        {
          id: 'q5-f',
          text: 'Persistent, hands-on, and delivery-focused',
          archetypePoints: { visionary: 1, executor: 2, connector: 0, analyst: 1, catalyst: 1, builder: 3 }
        }
      ]
    },
    {
      id: 'q6',
      text: 'When starting a new project, I typically:',
      options: [
        {
          id: 'q6-a',
          text: 'Envision the end goal and work backwards',
          archetypePoints: { visionary: 3, executor: 1, connector: 0, analyst: 1, catalyst: 1, builder: 2 }
        },
        {
          id: 'q6-b',
          text: 'Create a detailed plan with clear milestones',
          archetypePoints: { visionary: 0, executor: 3, connector: 0, analyst: 2, catalyst: 0, builder: 2 }
        },
        {
          id: 'q6-c',
          text: 'Bring the team together to align on approach',
          archetypePoints: { visionary: 1, executor: 0, connector: 3, analyst: 0, catalyst: 1, builder: 0 }
        },
        {
          id: 'q6-d',
          text: 'Research best practices and analyze requirements',
          archetypePoints: { visionary: 0, executor: 1, connector: 0, analyst: 3, catalyst: 0, builder: 1 }
        },
        {
          id: 'q6-e',
          text: 'Jump in quickly to build momentum',
          archetypePoints: { visionary: 1, executor: 1, connector: 0, analyst: 0, catalyst: 3, builder: 1 }
        },
        {
          id: 'q6-f',
          text: 'Start building something tangible right away',
          archetypePoints: { visionary: 1, executor: 2, connector: 0, analyst: 0, catalyst: 2, builder: 3 }
        }
      ]
    }
  ]
};

export const microAssessments: MicroAssessment[] = [
  {
    id: 'mindset-check-1',
    question: 'How confident do you feel in your ability to handle challenging conversations at work?',
    options: [
      { id: 'mc1-1', text: 'Not at all confident', value: 1 },
      { id: 'mc1-2', text: 'Slightly confident', value: 2 },
      { id: 'mc1-3', text: 'Moderately confident', value: 3 },
      { id: 'mc1-4', text: 'Very confident', value: 4 },
      { id: 'mc1-5', text: 'Extremely confident', value: 5 }
    ]
  },
  {
    id: 'mindset-check-2',
    question: 'How willing are you to take calculated risks in your professional life?',
    options: [
      { id: 'mc2-1', text: 'Very unwilling', value: 1 },
      { id: 'mc2-2', text: 'Somewhat unwilling', value: 2 },
      { id: 'mc2-3', text: 'Neutral', value: 3 },
      { id: 'mc2-4', text: 'Somewhat willing', value: 4 },
      { id: 'mc2-5', text: 'Very willing', value: 5 }
    ]
  },
  {
    id: 'mindset-check-3',
    question: 'How often do you actively seek feedback to improve your performance?',
    options: [
      { id: 'mc3-1', text: 'Never', value: 1 },
      { id: 'mc3-2', text: 'Rarely', value: 2 },
      { id: 'mc3-3', text: 'Sometimes', value: 3 },
      { id: 'mc3-4', text: 'Often', value: 4 },
      { id: 'mc3-5', text: 'Very often', value: 5 }
    ]
  }
];