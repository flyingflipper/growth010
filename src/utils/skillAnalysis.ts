// Utility to analyze and compile skills from all scenarios
import { scenarios } from '../data/scenarios';

interface SkillRecommendation {
  skill: string;
  reason: string;
  link: string;
  scenarioId: string;
  scenarioTitle: string;
  choiceId: string;
}

export function getAllSkillRecommendations(): SkillRecommendation[] {
  const allSkills: SkillRecommendation[] = [];

  scenarios.forEach(scenario => {
    scenario.choices.forEach(choice => {
      if (choice.enhancedConsequences?.skillRecommendations) {
        choice.enhancedConsequences.skillRecommendations.forEach(skill => {
          allSkills.push({
            ...skill,
            scenarioId: scenario.id,
            scenarioTitle: scenario.title,
            choiceId: choice.id
          });
        });
      }
    });
  });

  return allSkills;
}

export function getUniqueSkills(): string[] {
  const allSkills = getAllSkillRecommendations();
  const uniqueSkills = new Set(allSkills.map(skill => skill.skill));
  return Array.from(uniqueSkills).sort();
}

export function getSkillsByCategory(): Record<string, SkillRecommendation[]> {
  const allSkills = getAllSkillRecommendations();
  const categories: Record<string, SkillRecommendation[]> = {};

  allSkills.forEach(skill => {
    const category = categorizeSkill(skill.skill);
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push(skill);
  });

  return categories;
}

function categorizeSkill(skillName: string): string {
  const communicationSkills = [
    'Technical Communication', 'Direct Communication', 'Difficult Conversations',
    'Feedback Delivery', 'Business Communication', 'Strategic Communication',
    'Client Education', 'Stakeholder Communication', 'Performance Communication',
    'Evidence-Based Communication', 'Communication Style Assessment',
    'Professional Communication', 'Upward Feedback', 'Business Storytelling',
    'Strategic Research Communication', 'Data Communication', 'Risk Communication'
  ];

  const leadershipSkills = [
    'Collaborative Leadership', 'Strategic Influence', 'Peer Leadership',
    'Team Leadership', 'Cross-functional Leadership', 'Influence Without Authority',
    'Leadership Courage', 'Project Leadership Courage', 'Executive Presence',
    'Strategic Presence', 'Collaborative Problem Solving', 'Creative Problem Solving'
  ];

  const relationshipSkills = [
    'Manager Relationship Building', 'Cross-functional Collaboration',
    'Peer Collaboration', 'Internal Networking', 'Relationship Management',
    'Relationship Repair', 'Client Relationships', 'Stakeholder Management',
    'Business Partnership', 'Cross-functional Facilitation'
  ];

  const analyticalSkills = [
    'Performance Documentation', 'Process Improvement', 'Systems Thinking',
    'Strategic Planning', 'Scope Management', 'Data-Driven Decision Making',
    'Rapid Analytics', 'Strategic Decision Making', 'Rapid User Research',
    'Research Ethics', 'Quality Advocacy'
  ];

  const personalDevelopmentSkills = [
    'Self-Awareness Development', 'Growth Mindset Development',
    'Development Planning', 'Career Strategy', 'Professional Assertiveness',
    'Career Advocacy', 'Opportunity Recognition', 'Skill Development'
  ];

  const projectManagementSkills = [
    'Meeting Management', 'Career Planning Communication', 'Agile Development Practices',
    'Project Conflict Resolution', 'Strategic Initiative Leadership',
    'Rapid Prototyping', 'Strategic Compromise'
  ];

  if (communicationSkills.includes(skillName)) return 'Communication & Feedback';
  if (leadershipSkills.includes(skillName)) return 'Leadership & Influence';
  if (relationshipSkills.includes(skillName)) return 'Relationship Management';
  if (analyticalSkills.includes(skillName)) return 'Strategic & Analytical';
  if (personalDevelopmentSkills.includes(skillName)) return 'Personal Development';
  if (projectManagementSkills.includes(skillName)) return 'Project & Process Management';
  
  return 'Other';
}

// Generate the complete analysis
export function generateSkillAnalysis() {
  const allSkills = getAllSkillRecommendations();
  const uniqueSkills = getUniqueSkills();
  const skillsByCategory = getSkillsByCategory();
  
  console.log('=== COMPLETE SKILL ANALYSIS ===\n');
  
  console.log(`Total skill recommendations across all scenarios: ${allSkills.length}`);
  console.log(`Unique skills identified: ${uniqueSkills.length}\n`);
  
  console.log('=== SKILLS BY CATEGORY ===\n');
  Object.entries(skillsByCategory).forEach(([category, skills]) => {
    console.log(`${category} (${skills.length} recommendations):`);
    const uniqueInCategory = new Set(skills.map(s => s.skill));
    Array.from(uniqueInCategory).sort().forEach(skill => {
      const count = skills.filter(s => s.skill === skill).length;
      console.log(`  • ${skill} (${count}x)`);
    });
    console.log('');
  });
  
  console.log('=== ALL UNIQUE SKILLS (ALPHABETICAL) ===\n');
  uniqueSkills.forEach(skill => {
    const count = allSkills.filter(s => s.skill === skill).length;
    console.log(`• ${skill} (${count}x)`);
  });
  
  return {
    totalRecommendations: allSkills.length,
    uniqueSkills: uniqueSkills.length,
    skillsByCategory,
    allSkills: uniqueSkills
  };
}