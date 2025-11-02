export interface Skill {
  id: string;
  name: string;
  category: string;
  description: string;
  level: 'foundational' | 'bridge' | 'advanced';
  estimatedTime: string;
  prerequisites?: string[];
  relatedScenarios: string[];
  keyTechniques: string[];
  practicalApplications: string[];
  resources: {
    articles?: { title: string; url: string; readingTime: string }[];
    videos?: { title: string; url: string; duration: string }[];
    exercises?: { title: string; description: string; timeRequired: string }[];
  };
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
  skillCount: number;
}

// Map category names to IDs and colors
const categoryMapping: Record<string, { id: string; color: string; icon: string; description: string }> = {
  'Communication & Feedback': {
    id: 'communication-feedback',
    color: 'blue',
    icon: 'MessageCircle',
    description: 'Essential skills for clear, effective workplace communication and feedback delivery'
  },
  'Relational & Social Intelligence': {
    id: 'relational-social',
    color: 'green',
    icon: 'Heart',
    description: 'Building and maintaining strong professional relationships and social awareness'
  },
  'Influence & Leadership': {
    id: 'influence-leadership',
    color: 'purple',
    icon: 'Users',
    description: 'Advanced skills for leading and influencing without formal authority'
  },
  'Analytical Thinking & Strategy': {
    id: 'analytical-strategy',
    color: 'indigo',
    icon: 'Brain',
    description: 'Data-driven decision making and strategic thinking capabilities'
  },
  'Execution & Process Agility': {
    id: 'execution-process',
    color: 'teal',
    icon: 'Settings',
    description: 'Effective project execution and process improvement skills'
  },
  'Self-Mastery & Personal Development': {
    id: 'self-mastery',
    color: 'orange',
    icon: 'TrendingUp',
    description: 'Self-awareness and continuous growth mindsets'
  },
  'Innovation & Creative Thinking': {
    id: 'innovation-creative',
    color: 'red',
    icon: 'Lightbulb',
    description: 'Creative problem-solving and innovation capabilities'
  },
  'Digital Dexterity & Tech Fluency': {
    id: 'digital-tech',
    color: 'emerald',
    icon: 'Monitor',
    description: 'Technology adoption and digital workflow optimization'
  },
  'Cultural Fluency & Inclusion': {
    id: 'cultural-inclusion',
    color: 'pink',
    icon: 'Globe',
    description: 'Cross-cultural communication and inclusive practices'
  },
  'Organizational Navigation & Career Capital': {
    id: 'organizational-career',
    color: 'slate',
    icon: 'Building',
    description: 'Navigating organizational dynamics and building career capital'
  }
};

// Load skills from the complete skill graph
const skillsFromGraph = [
  {
    "skill": "Communication Framing & Intent Clarity",
    "category": "Communication & Feedback",
    "level": "Foundational",
    "prerequisites": []
  },
  {
    "skill": "Communication Style Awareness",
    "category": "Communication & Feedback",
    "level": "Foundational",
    "prerequisites": []
  },
  {
    "skill": "Feedback Delivery",
    "category": "Communication & Feedback",
    "level": "Bridge",
    "prerequisites": [
      "Communication Framing & Intent Clarity"
    ]
  },
  {
    "skill": "Stakeholder Communication",
    "category": "Communication & Feedback",
    "level": "Bridge",
    "prerequisites": [
      "Communication Style Awareness"
    ]
  },
  {
    "skill": "Difficult Conversations",
    "category": "Communication & Feedback",
    "level": "Advanced",
    "prerequisites": [
      "Feedback Delivery",
      "Empathy in Action",
      "Emotional Regulation"
    ]
  },
  {
    "skill": "Strategic Communication",
    "category": "Communication & Feedback",
    "level": "Advanced",
    "prerequisites": [
      "Stakeholder Communication",
      "Communication Framing & Intent Clarity"
    ]
  },
  {
    "skill": "Business Communication",
    "category": "Communication & Feedback",
    "level": "Bridge",
    "prerequisites": [
      "Communication Framing & Intent Clarity"
    ]
  },
  {
    "skill": "Storytelling & Business Narrative",
    "category": "Communication & Feedback",
    "level": "Advanced",
    "prerequisites": [
      "Strategic Communication",
      "Empathy in Action"
    ]
  },
  {
    "skill": "Risk Communication",
    "category": "Communication & Feedback",
    "level": "Advanced",
    "prerequisites": [
      "Strategic Communication",
      "Stakeholder Communication"
    ]
  },
  {
    "skill": "Research Communication",
    "category": "Communication & Feedback",
    "level": "Bridge",
    "prerequisites": [
      "Communication Style Awareness"
    ]
  },
  {
    "skill": "Empathy in Action",
    "category": "Relational & Social Intelligence",
    "level": "Foundational",
    "prerequisites": []
  },
  {
    "skill": "Internal Networking",
    "category": "Relational & Social Intelligence",
    "level": "Foundational",
    "prerequisites": []
  },
  {
    "skill": "Peer Collaboration & Leadership",
    "category": "Relational & Social Intelligence",
    "level": "Bridge",
    "prerequisites": [
      "Empathy in Action"
    ]
  },
  {
    "skill": "Conflict Navigation & Resolution",
    "category": "Relational & Social Intelligence",
    "level": "Bridge",
    "prerequisites": [
      "Peer Collaboration & Leadership"
    ]
  },
  {
    "skill": "Psychological Safety Promotion",
    "category": "Relational & Social Intelligence",
    "level": "Advanced",
    "prerequisites": [
      "Empathy in Action",
      "Conflict Navigation & Resolution"
    ]
  },
  {
    "skill": "Stakeholder Management",
    "category": "Relational & Social Intelligence",
    "level": "Bridge",
    "prerequisites": [
      "Empathy in Action",
      "Internal Networking"
    ]
  },
  {
    "skill": "Relationship Management & Repair",
    "category": "Relational & Social Intelligence",
    "level": "Advanced",
    "prerequisites": [
      "Stakeholder Management",
      "Conflict Navigation & Resolution"
    ]
  },
  {
    "skill": "Cross-functional Facilitation",
    "category": "Relational & Social Intelligence",
    "level": "Bridge",
    "prerequisites": [
      "Peer Collaboration & Leadership"
    ]
  },
  {
    "skill": "Client Relationships",
    "category": "Relational & Social Intelligence",
    "level": "Bridge",
    "prerequisites": [
      "Stakeholder Management"
    ]
  },
  {
    "skill": "Manager Relationship Building",
    "category": "Relational & Social Intelligence",
    "level": "Bridge",
    "prerequisites": [
      "Internal Networking",
      "Professional Assertiveness"
    ]
  },
  {
    "skill": "Collaborative Leadership",
    "category": "Influence & Leadership",
    "level": "Foundational",
    "prerequisites": []
  },
  {
    "skill": "Decision Facilitation",
    "category": "Influence & Leadership",
    "level": "Foundational",
    "prerequisites": []
  },
  {
    "skill": "Influence Without Authority",
    "category": "Influence & Leadership",
    "level": "Bridge",
    "prerequisites": [
      "Collaborative Leadership"
    ]
  },
  {
    "skill": "Vision Communication",
    "category": "Influence & Leadership",
    "level": "Bridge",
    "prerequisites": [
      "Strategic Communication"
    ]
  },
  {
    "skill": "Political Acumen",
    "category": "Influence & Leadership",
    "level": "Advanced",
    "prerequisites": [
      "Influence Without Authority"
    ]
  },
  {
    "skill": "Strategic Presence",
    "category": "Influence & Leadership",
    "level": "Advanced",
    "prerequisites": [
      "Strategic Communication",
      "Political Acumen",
      "Emotional Regulation",
      "Systems Thinking"
    ]
  },
  {
    "skill": "Strategic & Executive Presence",
    "category": "Influence & Leadership",
    "level": "Advanced",
    "prerequisites": [
      "Strategic Presence"
    ]
  },
  {
    "skill": "Strategic Influence",
    "category": "Influence & Leadership",
    "level": "Advanced",
    "prerequisites": [
      "Influence Without Authority",
      "Vision Communication"
    ]
  },
  {
    "skill": "Leadership Courage",
    "category": "Influence & Leadership",
    "level": "Advanced",
    "prerequisites": [
      "Emotional Regulation",
      "Strategic Presence"
    ]
  },
  {
    "skill": "Project & Team Leadership",
    "category": "Influence & Leadership",
    "level": "Bridge",
    "prerequisites": [
      "Collaborative Leadership"
    ]
  },
  {
    "skill": "Facilitative Leadership",
    "category": "Influence & Leadership",
    "level": "Bridge",
    "prerequisites": [
      "Decision Facilitation"
    ]
  },
  {
    "skill": "Critical Thinking",
    "category": "Analytical Thinking & Strategy",
    "level": "Foundational",
    "prerequisites": []
  },
  {
    "skill": "Data-Driven Decision Making",
    "category": "Analytical Thinking & Strategy",
    "level": "Foundational",
    "prerequisites": []
  },
  {
    "skill": "Systems Thinking",
    "category": "Analytical Thinking & Strategy",
    "level": "Bridge",
    "prerequisites": [
      "Critical Thinking"
    ]
  },
  {
    "skill": "Strategic Planning",
    "category": "Analytical Thinking & Strategy",
    "level": "Advanced",
    "prerequisites": [
      "Systems Thinking",
      "Data-Driven Decision Making"
    ]
  },
  {
    "skill": "Scope & Prioritization",
    "category": "Analytical Thinking & Strategy",
    "level": "Bridge",
    "prerequisites": [
      "Critical Thinking"
    ]
  },
  {
    "skill": "Research Ethics & Integrity",
    "category": "Analytical Thinking & Strategy",
    "level": "Bridge",
    "prerequisites": [
      "Data-Driven Decision Making"
    ]
  },
  {
    "skill": "Process Improvement",
    "category": "Analytical Thinking & Strategy",
    "level": "Bridge",
    "prerequisites": [
      "Systems Thinking"
    ]
  },
  {
    "skill": "Quality Advocacy",
    "category": "Analytical Thinking & Strategy",
    "level": "Bridge",
    "prerequisites": [
      "Process Improvement"
    ]
  },
  {
    "skill": "Rapid User Research & Analytics",
    "category": "Analytical Thinking & Strategy",
    "level": "Bridge",
    "prerequisites": [
      "Data-Driven Decision Making"
    ]
  },
  {
    "skill": "Insight Communication",
    "category": "Analytical Thinking & Strategy",
    "level": "Advanced",
    "prerequisites": [
      "Strategic Communication",
      "Data-Driven Decision Making"
    ]
  },
  {
    "skill": "Mental Model Development",
    "category": "Analytical Thinking & Strategy",
    "level": "Advanced",
    "prerequisites": [
      "Systems Thinking",
      "Strategic Planning"
    ]
  },
  {
    "skill": "Meeting Facilitation & Management",
    "category": "Execution & Process Agility",
    "level": "Foundational",
    "prerequisites": []
  },
  {
    "skill": "Initiative Ownership",
    "category": "Execution & Process Agility",
    "level": "Foundational",
    "prerequisites": []
  },
  {
    "skill": "Agile Practices & Rituals",
    "category": "Execution & Process Agility",
    "level": "Bridge",
    "prerequisites": [
      "Initiative Ownership"
    ]
  },
  {
    "skill": "Strategic Compromise",
    "category": "Execution & Process Agility",
    "level": "Advanced",
    "prerequisites": [
      "Agile Practices & Rituals",
      "Execution Rigor"
    ]
  },
  {
    "skill": "Execution Rigor",
    "category": "Execution & Process Agility",
    "level": "Bridge",
    "prerequisites": [
      "Meeting Facilitation & Management"
    ]
  },
  {
    "skill": "Project Conflict Resolution",
    "category": "Execution & Process Agility",
    "level": "Bridge",
    "prerequisites": [
      "Conflict Navigation & Resolution"
    ]
  },
  {
    "skill": "Prioritization Under Pressure",
    "category": "Execution & Process Agility",
    "level": "Bridge",
    "prerequisites": [
      "Scope & Prioritization"
    ]
  },
  {
    "skill": "Delegation & Alignment",
    "category": "Execution & Process Agility",
    "level": "Advanced",
    "prerequisites": [
      "Execution Rigor",
      "Project & Team Leadership"
    ]
  },
  {
    "skill": "Growth Mindset & Self-Awareness",
    "category": "Self-Mastery & Personal Development",
    "level": "Foundational",
    "prerequisites": []
  },
  {
    "skill": "Time & Energy Management",
    "category": "Self-Mastery & Personal Development",
    "level": "Foundational",
    "prerequisites": []
  },
  {
    "skill": "Self-Directed Learning",
    "category": "Self-Mastery & Personal Development",
    "level": "Bridge",
    "prerequisites": [
      "Growth Mindset & Self-Awareness"
    ]
  },
  {
    "skill": "Emotional Regulation",
    "category": "Self-Mastery & Personal Development",
    "level": "Bridge",
    "prerequisites": [
      "Growth Mindset & Self-Awareness"
    ]
  },
  {
    "skill": "Career Advocacy & Strategy",
    "category": "Self-Mastery & Personal Development",
    "level": "Advanced",
    "prerequisites": [
      "Professional Assertiveness",
      "Opportunity Recognition"
    ]
  },
  {
    "skill": "Professional Assertiveness",
    "category": "Self-Mastery & Personal Development",
    "level": "Bridge",
    "prerequisites": [
      "Self-Directed Learning"
    ]
  },
  {
    "skill": "Opportunity Recognition",
    "category": "Self-Mastery & Personal Development",
    "level": "Bridge",
    "prerequisites": [
      "Time & Energy Management"
    ]
  },
  {
    "skill": "Development Planning",
    "category": "Self-Mastery & Personal Development",
    "level": "Bridge",
    "prerequisites": [
      "Growth Mindset & Self-Awareness"
    ]
  },
  {
    "skill": "Resilience & Emotional Regulation",
    "category": "Self-Mastery & Personal Development",
    "level": "Bridge",
    "prerequisites": [
      "Emotional Regulation"
    ]
  },
  {
    "skill": "Feedback-Seeking",
    "category": "Self-Mastery & Personal Development",
    "level": "Bridge",
    "prerequisites": [
      "Growth Mindset & Self-Awareness"
    ]
  },
  {
    "skill": "Creative Thinking & Idea Generation",
    "category": "Innovation & Creative Thinking",
    "level": "Foundational",
    "prerequisites": []
  },
  {
    "skill": "Pattern Recognition",
    "category": "Innovation & Creative Thinking",
    "level": "Foundational",
    "prerequisites": []
  },
  {
    "skill": "Design Thinking",
    "category": "Innovation & Creative Thinking",
    "level": "Bridge",
    "prerequisites": [
      "Creative Thinking & Idea Generation"
    ]
  },
  {
    "skill": "Innovation Process & Culture",
    "category": "Innovation & Creative Thinking",
    "level": "Advanced",
    "prerequisites": [
      "Design Thinking",
      "Psychological Safety Promotion",
      "Opportunity Recognition"
    ]
  },
  {
    "skill": "Constraint-Driven Innovation",
    "category": "Innovation & Creative Thinking",
    "level": "Advanced",
    "prerequisites": [
      "Innovation Process & Culture"
    ]
  },
  {
    "skill": "Lateral Thinking",
    "category": "Innovation & Creative Thinking",
    "level": "Bridge",
    "prerequisites": [
      "Creative Thinking & Idea Generation"
    ]
  },
  {
    "skill": "Experimentation & Iterative Learning",
    "category": "Innovation & Creative Thinking",
    "level": "Bridge",
    "prerequisites": [
      "Design Thinking"
    ]
  },
  {
    "skill": "Digital Literacy",
    "category": "Digital Dexterity & Tech Fluency",
    "level": "Foundational",
    "prerequisites": []
  },
  {
    "skill": "Tech Curiosity & Exploration",
    "category": "Digital Dexterity & Tech Fluency",
    "level": "Foundational",
    "prerequisites": []
  },
  {
    "skill": "Data Comfort",
    "category": "Digital Dexterity & Tech Fluency",
    "level": "Bridge",
    "prerequisites": [
      "Digital Literacy"
    ]
  },
  {
    "skill": "Responsible Use of Tech",
    "category": "Digital Dexterity & Tech Fluency",
    "level": "Advanced",
    "prerequisites": [
      "Critical Thinking",
      "Inclusion Practices in Team Settings",
      "Self-Directed Learning"
    ]
  },
  {
    "skill": "Tool Adoption & Optimization",
    "category": "Digital Dexterity & Tech Fluency",
    "level": "Bridge",
    "prerequisites": [
      "Tech Curiosity & Exploration"
    ]
  },
  {
    "skill": "Workflow Automation",
    "category": "Digital Dexterity & Tech Fluency",
    "level": "Bridge",
    "prerequisites": [
      "Tool Adoption & Optimization"
    ]
  },
  {
    "skill": "Cross-Cultural Communication",
    "category": "Cultural Fluency & Inclusion",
    "level": "Foundational",
    "prerequisites": []
  },
  {
    "skill": "Inclusion Practices in Team Settings",
    "category": "Cultural Fluency & Inclusion",
    "level": "Bridge",
    "prerequisites": [
      "Cross-Cultural Communication"
    ]
  },
  {
    "skill": "Psychological Inclusion",
    "category": "Cultural Fluency & Inclusion",
    "level": "Advanced",
    "prerequisites": [
      "Inclusion Practices in Team Settings"
    ]
  },
  {
    "skill": "Diversity of Thought Appreciation",
    "category": "Cultural Fluency & Inclusion",
    "level": "Bridge",
    "prerequisites": [
      "Cross-Cultural Communication"
    ]
  },
  {
    "skill": "Navigating Bias & Microaggressions",
    "category": "Cultural Fluency & Inclusion",
    "level": "Advanced",
    "prerequisites": [
      "Inclusion Practices in Team Settings"
    ]
  },
  {
    "skill": "Inclusive Decision-Making",
    "category": "Cultural Fluency & Inclusion",
    "level": "Advanced",
    "prerequisites": [
      "Inclusion Practices in Team Settings"
    ]
  },
  {
    "skill": "Organizational Savvy",
    "category": "Organizational Navigation & Career Capital",
    "level": "Foundational",
    "prerequisites": []
  },
  {
    "skill": "Reputation & Visibility Building",
    "category": "Organizational Navigation & Career Capital",
    "level": "Bridge",
    "prerequisites": [
      "Organizational Savvy"
    ]
  },
  {
    "skill": "Executive Alignment & Calibration",
    "category": "Organizational Navigation & Career Capital",
    "level": "Bridge",
    "prerequisites": [
      "Organizational Savvy"
    ]
  },
  {
    "skill": "Sponsorship",
    "category": "Organizational Navigation & Career Capital",
    "level": "Advanced",
    "prerequisites": [
      "Internal Networking",
      "Reputation & Visibility Building",
      "Strategic Presence",
      "Career Advocacy & Strategy"
    ]
  },
  {
    "skill": "Navigating Org Politics",
    "category": "Organizational Navigation & Career Capital",
    "level": "Bridge",
    "prerequisites": [
      "Organizational Savvy"
    ]
  },
  {
    "skill": "Sponsorship vs. Mentorship",
    "category": "Organizational Navigation & Career Capital",
    "level": "Advanced",
    "prerequisites": [
      "Internal Networking",
      "Reputation & Visibility Building"
    ]
  },
  {
    "skill": "Career Capital Management",
    "category": "Organizational Navigation & Career Capital",
    "level": "Advanced",
    "prerequisites": [
      "Career Advocacy & Strategy",
      "Sponsorship"
    ]
  }
];

// Generate skill categories from the data
export const skillCategories: SkillCategory[] = Object.entries(categoryMapping).map(([categoryName, config]) => {
  const skillCount = skillsFromGraph.filter(skill => skill.category === categoryName).length;
  return {
    id: config.id,
    name: categoryName,
    description: config.description,
    color: config.color,
    icon: config.icon,
    skillCount
  };
});

// Convert skills from graph to our format
export const skills: Skill[] = skillsFromGraph.map((skillData, index) => {
  const categoryConfig = categoryMapping[skillData.category];
  const skillId = skillData.skill.toLowerCase()
    .replace(/[^a-z0-9\s&]/g, '')
    .replace(/\s+/g, '-')
    .replace(/&/g, 'and');

  // Map level names
  const levelMap: Record<string, 'foundational' | 'bridge' | 'advanced'> = {
    'Foundational': 'foundational',
    'Bridge': 'bridge', 
    'Advanced': 'advanced'
  };

  // Generate descriptions based on skill name and category
  const generateDescription = (skillName: string, category: string): string => {
    const descriptions: Record<string, string> = {
      'Communication Framing & Intent Clarity': 'Master the art of clear, purposeful communication that ensures your message is understood and actionable.',
      'Communication Style Awareness': 'Understand different communication styles and adapt your approach to connect effectively with diverse audiences.',
      'Feedback Delivery': 'Provide constructive feedback that drives improvement while maintaining positive relationships and psychological safety.',
      'Stakeholder Communication': 'Communicate effectively with diverse stakeholders, tailoring your message to their needs and perspectives.',
      'Difficult Conversations': 'Navigate challenging discussions with confidence, addressing sensitive topics while preserving relationships.',
      'Strategic Communication': 'Craft and deliver messages that align with organizational goals and drive strategic outcomes.',
      'Business Communication': 'Communicate complex ideas in business-friendly language that resonates with executives and decision-makers.',
      'Storytelling & Business Narrative': 'Use compelling narratives to influence, persuade, and drive action in professional settings.',
      'Risk Communication': 'Effectively communicate risks, uncertainties, and potential impacts to stakeholders at all levels.',
      'Research Communication': 'Present research findings and data insights in clear, actionable formats for diverse audiences.',
      'Empathy in Action': 'Demonstrate genuine understanding and consideration for others\' perspectives and experiences.',
      'Internal Networking': 'Build and maintain valuable professional relationships within your organization.',
      'Peer Collaboration & Leadership': 'Lead and collaborate effectively with peers without formal authority.',
      'Conflict Navigation & Resolution': 'Address and resolve workplace conflicts constructively and professionally.',
      'Psychological Safety Promotion': 'Create environments where team members feel safe to speak up, take risks, and be vulnerable.',
      'Stakeholder Management': 'Effectively manage relationships and expectations across diverse stakeholder groups.',
      'Relationship Management & Repair': 'Build, maintain, and repair professional relationships even after conflicts or setbacks.',
      'Cross-functional Facilitation': 'Facilitate productive collaboration across different departments and disciplines.',
      'Client Relationships': 'Build and maintain strong, trust-based relationships with external clients and customers.',
      'Manager Relationship Building': 'Develop productive, mutually beneficial relationships with your direct manager.',
      'Collaborative Leadership': 'Lead through collaboration, shared decision-making, and collective accountability.',
      'Decision Facilitation': 'Guide groups through effective decision-making processes and build consensus.',
      'Influence Without Authority': 'Persuade and motivate others without relying on formal power or hierarchy.',
      'Vision Communication': 'Articulate compelling visions that inspire and align teams toward common goals.',
      'Political Acumen': 'Navigate organizational politics and power dynamics effectively and ethically.',
      'Strategic Presence': 'Project confidence, credibility, and strategic thinking in high-stakes situations.',
      'Strategic & Executive Presence': 'Command attention and respect in executive-level interactions and strategic discussions.',
      'Strategic Influence': 'Shape organizational direction and decisions through strategic thinking and influence.',
      'Leadership Courage': 'Make difficult decisions and take bold action when leadership is needed.',
      'Project & Team Leadership': 'Lead projects and teams to successful outcomes through effective coordination and motivation.',
      'Facilitative Leadership': 'Lead by facilitating others\' success and enabling team performance.',
      'Critical Thinking': 'Analyze information objectively and make reasoned judgments based on evidence.',
      'Data-Driven Decision Making': 'Use data and analytics to inform strategic choices and business decisions.',
      'Systems Thinking': 'Understand complex systems and how different parts interact to influence outcomes.',
      'Strategic Planning': 'Develop comprehensive strategies that align resources with long-term objectives.',
      'Scope & Prioritization': 'Define project scope and prioritize tasks effectively to maximize impact.',
      'Research Ethics & Integrity': 'Conduct research and analysis with high ethical standards and integrity.',
      'Process Improvement': 'Identify and implement systematic improvements to workflows and processes.',
      'Quality Advocacy': 'Champion quality standards and ensure excellence in deliverables and outcomes.',
      'Rapid User Research & Analytics': 'Quickly gather and analyze user insights to inform product and service decisions.',
      'Insight Communication': 'Transform complex data and analysis into clear, actionable insights for stakeholders.',
      'Mental Model Development': 'Build and refine mental frameworks for understanding complex business situations.',
      'Meeting Facilitation & Management': 'Plan and facilitate productive meetings that achieve clear outcomes.',
      'Initiative Ownership': 'Take full ownership of projects and initiatives from conception to completion.',
      'Agile Practices & Rituals': 'Apply agile methodologies and practices for iterative, adaptive project delivery.',
      'Strategic Compromise': 'Find strategic solutions that balance competing interests and constraints.',
      'Execution Rigor': 'Maintain high standards of execution and follow-through on commitments.',
      'Project Conflict Resolution': 'Address and resolve conflicts that arise during project execution.',
      'Prioritization Under Pressure': 'Make effective prioritization decisions when facing time constraints and competing demands.',
      'Delegation & Alignment': 'Effectively delegate tasks while maintaining alignment and accountability.',
      'Growth Mindset & Self-Awareness': 'Cultivate a mindset focused on learning and develop deep self-understanding.',
      'Time & Energy Management': 'Optimize your time and energy allocation for maximum productivity and well-being.',
      'Self-Directed Learning': 'Take ownership of your learning and development journey.',
      'Emotional Regulation': 'Manage your emotions effectively in challenging professional situations.',
      'Career Advocacy & Strategy': 'Strategically advocate for your career advancement and professional growth.',
      'Professional Assertiveness': 'Express your needs and boundaries clearly while respecting others.',
      'Opportunity Recognition': 'Identify and capitalize on opportunities for growth and advancement.',
      'Development Planning': 'Create and execute comprehensive plans for your professional development.',
      'Resilience & Emotional Regulation': 'Bounce back from setbacks and maintain emotional stability under pressure.',
      'Feedback-Seeking': 'Actively seek and incorporate feedback to accelerate your growth and improvement.',
      'Creative Thinking & Idea Generation': 'Generate innovative ideas and creative solutions to complex problems.',
      'Pattern Recognition': 'Identify patterns and trends that others might miss to gain strategic insights.',
      'Design Thinking': 'Apply human-centered design principles to solve complex problems.',
      'Innovation Process & Culture': 'Foster innovation through systematic processes and cultural change.',
      'Constraint-Driven Innovation': 'Turn limitations and constraints into catalysts for creative solutions.',
      'Lateral Thinking': 'Approach problems from unexpected angles to discover breakthrough solutions.',
      'Experimentation & Iterative Learning': 'Use experimentation and iteration to test ideas and learn quickly.',
      'Digital Literacy': 'Navigate digital tools and platforms effectively in professional contexts.',
      'Tech Curiosity & Exploration': 'Maintain curiosity about new technologies and their potential applications.',
      'Data Comfort': 'Work confidently with data, analytics, and quantitative information.',
      'Responsible Use of Tech': 'Use technology ethically and responsibly while considering broader impacts.',
      'Tool Adoption & Optimization': 'Quickly adopt new tools and optimize workflows for maximum efficiency.',
      'Workflow Automation': 'Identify and implement automation opportunities to improve productivity.',
      'Cross-Cultural Communication': 'Communicate effectively across different cultural contexts and backgrounds.',
      'Inclusion Practices in Team Settings': 'Create inclusive team environments where everyone can contribute their best.',
      'Psychological Inclusion': 'Foster deep psychological inclusion where all team members feel valued and heard.',
      'Diversity of Thought Appreciation': 'Value and leverage diverse perspectives and thinking styles.',
      'Navigating Bias & Microaggressions': 'Recognize and address bias and microaggressions in professional settings.',
      'Inclusive Decision-Making': 'Make decisions that consider diverse perspectives and promote equity.',
      'Organizational Savvy': 'Understand and navigate organizational dynamics, culture, and unwritten rules.',
      'Reputation & Visibility Building': 'Build a strong professional reputation and increase your visibility within the organization.',
      'Executive Alignment & Calibration': 'Align your work and communication with executive priorities and expectations.',
      'Sponsorship': 'Develop and leverage sponsorship relationships for career advancement.',
      'Navigating Org Politics': 'Navigate organizational politics effectively while maintaining integrity.',
      'Sponsorship vs. Mentorship': 'Understand and leverage both sponsorship and mentorship relationships strategically.',
      'Career Capital Management': 'Build and strategically deploy your career capital for maximum impact.'
    };

    return descriptions[skillName] || `Develop expertise in ${skillName.toLowerCase()} to enhance your professional capabilities.`;
  };

  // Generate estimated time based on level
  const getEstimatedTime = (level: string): string => {
    switch (level) {
      case 'Foundational': return '2-3 weeks';
      case 'Bridge': return '3-4 weeks';
      case 'Advanced': return '4-6 weeks';
      default: return '3-4 weeks';
    }
  };

  // Map some skills to related scenarios
  const getRelatedScenarios = (skillName: string): string[] => {
    const scenarioMap: Record<string, string[]> = {
      'Feedback Delivery': ['difficult-feedback'],
      'Difficult Conversations': ['difficult-feedback', 'performance-review-disagreement'],
      'Stakeholder Communication': ['cross-functional-disagreement', 'project-timeline-conflict'],
      'Conflict Navigation & Resolution': ['cross-functional-disagreement'],
      'Influence Without Authority': ['cross-functional-disagreement', 'project-timeline-conflict'],
      'Manager Relationship Building': ['career-growth-1on1', 'performance-review-disagreement'],
      'Professional Assertiveness': ['taking-credit', 'resource-allocation-conflict'],
      'Strategic Communication': ['research-data-conflict', 'client-feedback-disagreement'],
      'Cross-functional Facilitation': ['cross-functional-disagreement', 'project-timeline-conflict']
    };
    return scenarioMap[skillName] || [];
  };

  // Generate key techniques based on skill name
  const getKeyTechniques = (skillName: string): string[] => {
    const techniqueMap: Record<string, string[]> = {
      'Feedback Delivery': [
        'SBI (Situation-Behavior-Impact) model',
        'Timing and context consideration',
        'Two-way dialogue facilitation',
        'Action-oriented recommendations'
      ],
      'Difficult Conversations': [
        'Preparation and framing',
        'Active listening under pressure',
        'De-escalation strategies',
        'Finding common ground'
      ],
      'Stakeholder Communication': [
        'Audience analysis and adaptation',
        'Message tailoring by stakeholder type',
        'Multi-channel communication strategies',
        'Expectation management'
      ],
      'Influence Without Authority': [
        'Building credibility and trust',
        'Finding mutual benefits',
        'Storytelling for influence',
        'Coalition building'
      ],
      'Strategic Communication': [
        'Executive summary frameworks',
        'Data storytelling techniques',
        'Persuasive presentation structures',
        'Strategic messaging alignment'
      ]
    };
    
    return techniqueMap[skillName] || [
      'Core principles and frameworks',
      'Practical application methods',
      'Best practice techniques',
      'Measurement and improvement'
    ];
  };

  // Generate practical applications
  const getPracticalApplications = (skillName: string): string[] => {
    const applicationMap: Record<string, string[]> = {
      'Feedback Delivery': [
        'Performance review conversations',
        'Project retrospectives',
        'Peer feedback sessions',
        'Coaching discussions'
      ],
      'Difficult Conversations': [
        'Performance improvement discussions',
        'Conflict resolution meetings',
        'Salary negotiations',
        'Project disagreements'
      ],
      'Stakeholder Communication': [
        'Executive status updates',
        'Cross-functional project updates',
        'Client presentations',
        'Change management communications'
      ],
      'Influence Without Authority': [
        'Leading cross-functional projects',
        'Gaining stakeholder buy-in',
        'Driving organizational change',
        'Influencing senior leadership'
      ]
    };

    return applicationMap[skillName] || [
      'Daily work interactions',
      'Team collaboration',
      'Project management',
      'Professional development'
    ];
  };

  return {
    id: skillId,
    name: skillData.skill,
    category: categoryConfig?.id || 'other',
    description: generateDescription(skillData.skill, skillData.category),
    level: levelMap[skillData.level] || 'foundational',
    estimatedTime: getEstimatedTime(skillData.level),
    prerequisites: skillData.prerequisites,
    relatedScenarios: getRelatedScenarios(skillData.skill),
    keyTechniques: getKeyTechniques(skillData.skill),
    practicalApplications: getPracticalApplications(skillData.skill),
    resources: {
      articles: [
        { 
          title: `Mastering ${skillData.skill}`, 
          url: `/articles/${skillId}`, 
          readingTime: '8 mins' 
        }
      ],
      videos: [
        { 
          title: `${skillData.skill} in Practice`, 
          url: `/videos/${skillId}`, 
          duration: '12:30' 
        }
      ],
      exercises: [
        { 
          title: `${skillData.skill} Practice Exercise`, 
          description: `Hands-on practice to develop your ${skillData.skill.toLowerCase()} capabilities`, 
          timeRequired: '45 mins' 
        }
      ]
    }
  };
});

export const getSkillsByCategory = (categoryId: string): Skill[] => {
  // Direct comparison with the category ID
  return skills.filter(skill => skill.category === categoryId);
};

export const getSkillById = (skillId: string): Skill | undefined => {
  return skills.find(skill => skill.id === skillId);
};

export const getRelatedSkills = (skillId: string): Skill[] => {
  const skill = getSkillById(skillId);
  if (!skill) return [];
  
  return skills.filter(s => 
    s.category === skill.category && 
    s.id !== skillId
  ).slice(0, 3);
};

export const getSkillsByLevel = (level: 'foundational' | 'bridge' | 'advanced'): Skill[] => {
  return skills.filter(skill => skill.level === level);
};

export const searchSkills = (query: string): Skill[] => {
  const lowercaseQuery = query.toLowerCase();
  return skills.filter(skill => 
    skill.name.toLowerCase().includes(lowercaseQuery) ||
    skill.description.toLowerCase().includes(lowercaseQuery) ||
    skill.keyTechniques.some(technique => technique.toLowerCase().includes(lowercaseQuery))
  );
};