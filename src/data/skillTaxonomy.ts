export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  level: 'foundational' | 'applied';
  prerequisites?: string[];
  skills: Skill[];
}

export interface Skill {
  id: string;
  name: string;
  description: string;
  level: 'foundational' | 'applied';
  category: string;
  prerequisites?: string[];
  scenarios: string[];
  estimatedTime: string;
}

export const skillTaxonomy: SkillCategory[] = [
  {
    id: 'foundational-mindsets',
    name: 'Foundational Mindsets',
    description: 'Core psychological and behavioral foundations for professional growth',
    level: 'foundational',
    skills: [
      {
        id: 'self-awareness',
        name: 'Self-Awareness & Meta-Cognition',
        description: 'Understanding your thoughts, emotions, and behavioral patterns',
        level: 'foundational',
        category: 'foundational-mindsets',
        scenarios: ['difficult-feedback'],
        estimatedTime: '2-3 weeks'
      },
      {
        id: 'emotional-intelligence',
        name: 'Emotional Intelligence',
        description: 'Recognizing and managing emotions in yourself and others',
        level: 'foundational',
        category: 'foundational-mindsets',
        scenarios: ['difficult-feedback', 'cross-functional-conflict'],
        estimatedTime: '3-4 weeks'
      },
      {
        id: 'growth-mindset',
        name: 'Growth Mindset',
        description: 'Believing in your ability to develop and improve through effort',
        level: 'foundational',
        category: 'foundational-mindsets',
        scenarios: [],
        estimatedTime: '2-3 weeks'
      }
    ]
  },
  {
    id: 'communication-foundations',
    name: 'Communication Foundations',
    description: 'Essential communication skills for professional effectiveness',
    level: 'foundational',
    skills: [
      {
        id: 'active-listening',
        name: 'Active Listening',
        description: 'Fully engaging with and understanding others in conversation',
        level: 'foundational',
        category: 'communication-foundations',
        scenarios: ['cross-functional-conflict'],
        estimatedTime: '1-2 weeks'
      },
      {
        id: 'assertiveness',
        name: 'Assertiveness',
        description: 'Expressing your needs and boundaries clearly and respectfully',
        level: 'foundational',
        category: 'communication-foundations',
        scenarios: ['difficult-feedback', 'cross-functional-conflict'],
        estimatedTime: '2-3 weeks'
      },
      {
        id: 'feedback-skills',
        name: 'Giving & Receiving Feedback',
        description: 'Effectively sharing and processing constructive feedback',
        level: 'foundational',
        category: 'communication-foundations',
        prerequisites: ['assertiveness', 'emotional-intelligence'],
        scenarios: ['difficult-feedback'],
        estimatedTime: '2-3 weeks'
      }
    ]
  },
  {
    id: 'decision-making-foundations',
    name: 'Decision-Making Foundations',
    description: 'Core skills for making effective decisions under uncertainty',
    level: 'foundational',
    skills: [
      {
        id: 'critical-thinking',
        name: 'Critical Thinking',
        description: 'Analyzing information objectively to make reasoned judgments',
        level: 'foundational',
        category: 'decision-making-foundations',
        scenarios: ['strategic-decision'],
        estimatedTime: '3-4 weeks'
      },
      {
        id: 'problem-solving',
        name: 'Problem Solving',
        description: 'Systematically identifying and resolving challenges',
        level: 'foundational',
        category: 'decision-making-foundations',
        scenarios: ['strategic-decision', 'cross-functional-conflict'],
        estimatedTime: '2-3 weeks'
      }
    ]
  },
  {
    id: 'applied-leadership',
    name: 'Applied Leadership',
    description: 'Advanced leadership skills for complex workplace situations',
    level: 'applied',
    prerequisites: ['self-awareness', 'emotional-intelligence', 'assertiveness'],
    skills: [
      {
        id: 'influence-without-authority',
        name: 'Influence Without Authority',
        description: 'Leading and motivating others without formal power',
        level: 'applied',
        category: 'applied-leadership',
        prerequisites: ['assertiveness', 'emotional-intelligence'],
        scenarios: ['cross-functional-conflict'],
        estimatedTime: '4-6 weeks'
      },
      {
        id: 'strategic-communication',
        name: 'Strategic Communication',
        description: 'Crafting messages that drive action and alignment',
        level: 'applied',
        category: 'applied-leadership',
        prerequisites: ['assertiveness', 'feedback-skills'],
        scenarios: ['difficult-feedback', 'cross-functional-conflict'],
        estimatedTime: '3-4 weeks'
      },
      {
        id: 'conflict-resolution',
        name: 'Conflict Resolution',
        description: 'Mediating and resolving disputes between team members',
        level: 'applied',
        category: 'applied-leadership',
        prerequisites: ['emotional-intelligence', 'active-listening'],
        scenarios: ['cross-functional-conflict'],
        estimatedTime: '4-5 weeks'
      }
    ]
  },
  {
    id: 'applied-strategy',
    name: 'Applied Strategy',
    description: 'Advanced strategic thinking and execution skills',
    level: 'applied',
    prerequisites: ['critical-thinking', 'problem-solving'],
    skills: [
      {
        id: 'strategic-decision-making',
        name: 'Strategic Decision Making',
        description: 'Making high-stakes decisions with incomplete information',
        level: 'applied',
        category: 'applied-strategy',
        prerequisites: ['critical-thinking', 'problem-solving'],
        scenarios: ['strategic-decision'],
        estimatedTime: '5-6 weeks'
      },
      {
        id: 'stakeholder-management',
        name: 'Stakeholder Management',
        description: 'Managing relationships and expectations across diverse groups',
        level: 'applied',
        category: 'applied-strategy',
        prerequisites: ['influence-without-authority', 'strategic-communication'],
        scenarios: ['strategic-decision', 'cross-functional-conflict'],
        estimatedTime: '4-5 weeks'
      }
    ]
  },
  {
    id: 'applied-execution',
    name: 'Applied Execution',
    description: 'Advanced skills for delivering results in complex environments',
    level: 'applied',
    prerequisites: ['problem-solving'],
    skills: [
      {
        id: 'change-management',
        name: 'Change Management',
        description: 'Leading organizational and team transitions effectively',
        level: 'applied',
        category: 'applied-execution',
        prerequisites: ['influence-without-authority', 'strategic-communication'],
        scenarios: [],
        estimatedTime: '6-8 weeks'
      },
      {
        id: 'performance-management',
        name: 'Performance Management',
        description: 'Developing and optimizing team and individual performance',
        level: 'applied',
        category: 'applied-execution',
        prerequisites: ['feedback-skills', 'strategic-communication'],
        scenarios: ['difficult-feedback'],
        estimatedTime: '4-6 weeks'
      }
    ]
  }
];

export const getSkillById = (id: string): Skill | undefined => {
  for (const category of skillTaxonomy) {
    const skill = category.skills.find(s => s.id === id);
    if (skill) return skill;
  }
  return undefined;
};

export const getSkillsByLevel = (level: 'foundational' | 'applied'): Skill[] => {
  return skillTaxonomy
    .filter(category => category.level === level)
    .flatMap(category => category.skills);
};

export const getPrerequisites = (skillId: string): Skill[] => {
  const skill = getSkillById(skillId);
  if (!skill?.prerequisites) return [];
  
  return skill.prerequisites
    .map(prereqId => getSkillById(prereqId))
    .filter(Boolean) as Skill[];
};

export const getSkillProgress = (skillId: string, completedScenarios: string[]): number => {
  const skill = getSkillById(skillId);
  if (!skill || skill.scenarios.length === 0) return 0;
  
  const completedSkillScenarios = skill.scenarios.filter(scenarioId => 
    completedScenarios.includes(scenarioId)
  );
  
  return (completedSkillScenarios.length / skill.scenarios.length) * 100;
};