import { Archetype } from '../types';

export const archetypes: Archetype[] = [
  {
    id: 'visionary',
    name: 'The Visionary',
    description: 'You see the big picture and inspire others with your ideas. You\'re naturally forward-thinking and can articulate compelling futures that motivate teams.',
    strengths: [
      'Strategic thinking',
      'Creative problem-solving',
      'Inspiring others',
      'Seeing future possibilities'
    ],
    challenges: [
      'May overlook practical details',
      'Can be perceived as unrealistic',
      'Might struggle with day-to-day execution',
      'Sometimes resistant to others\' input'
    ],
    growthAreas: ['decision-making', 'self-awareness', 'assertiveness']
  },
  {
    id: 'executor',
    name: 'The Executor',
    description: 'You excel at getting things done and following through on commitments. You\'re reliable, organized, and focused on results.',
    strengths: [
      'Strong follow-through',
      'Organized and methodical',
      'Practical problem-solving',
      'Reliable performance'
    ],
    challenges: [
      'May miss opportunities for innovation',
      'Can focus too much on process over people',
      'Might struggle with ambiguity',
      'Sometimes resistant to change'
    ],
    growthAreas: ['decision-making', 'self-awareness', 'emotional-intelligence']
  },
  {
    id: 'connector',
    name: 'The Connector',
    description: 'You build bridges between people and ideas. You\'re empathetic, communicative, and skilled at facilitating collaboration.',
    strengths: [
      'Strong interpersonal skills',
      'Empathy and emotional intelligence',
      'Building consensus',
      'Creating psychological safety'
    ],
    challenges: [
      'May avoid necessary conflict',
      'Can struggle with making tough decisions alone',
      'Might prioritize relationships over results',
      'Sometimes too dependent on others\' input'
    ],
    growthAreas: ['assertiveness', 'decision-making', 'self-awareness']
  },
  {
    id: 'analyst',
    name: 'The Analyst',
    description: 'You excel at critical thinking and data-driven decisions. You\'re thorough, logical, and skilled at uncovering insights others miss.',
    strengths: [
      'Critical thinking',
      'Data analysis',
      'Logical reasoning',
      'Attention to detail'
    ],
    challenges: [
      'May overthink decisions',
      'Can struggle with quick, intuitive choices',
      'Might appear detached or critical',
      'Sometimes misses emotional context'
    ],
    growthAreas: ['decision-making', 'emotional-intelligence', 'assertiveness']
  },
  {
    id: 'catalyst',
    name: 'The Catalyst',
    description: 'A dynamic change-maker who sparks momentum, energizes teams, and drives action through influence. Catalysts thrive in ambiguity and help break inertia by pushing ideas and people into motion.',
    strengths: [
      'Energizing and motivating others',
      'Driving change and momentum',
      'Thriving in ambiguous situations',
      'Breaking through inertia'
    ],
    challenges: [
      'May push too hard or too fast',
      'Can overlook the need for stability',
      'Might struggle with routine tasks',
      'Sometimes impatient with slower processes'
    ],
    growthAreas: ['emotional-intelligence', 'self-awareness', 'decision-making']
  },
  {
    id: 'builder',
    name: 'The Builder',
    description: 'A hands-on creator who takes ideas from concept to completion through ownership, persistence, and structured effort. Builders combine creativity and execution to deliver real, lasting results.',
    strengths: [
      'Taking ownership and accountability',
      'Persistent and determined',
      'Combining creativity with execution',
      'Delivering tangible results'
    ],
    challenges: [
      'May become too focused on perfection',
      'Can struggle with delegation',
      'Might resist changing direction mid-project',
      'Sometimes overlooks team dynamics'
    ],
    growthAreas: ['assertiveness', 'emotional-intelligence', 'self-awareness']
  }
];

export const getArchetypeById = (id: string): Archetype | undefined => {
  return archetypes.find(archetype => archetype.id === id);
};