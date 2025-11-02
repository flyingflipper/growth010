import { Scenario } from '../../types';

export const clientFeedbackDisagreementScenario: Scenario = {
  id: 'client-feedback-disagreement',
  title: 'Client Feedback Implementation Disagreement',
  description: 'Navigate a conflict with an account manager about implementing client feedback that you believe will compromise the creative integrity of a design project.',
  situation: 'You\'re a graphic designer working on a rebranding project for a major client. After presenting the initial concepts, the client provided feedback requesting significant changes that you believe will weaken the design\'s impact and effectiveness. The account manager, Lisa, is pushing for immediate implementation of all client requests, saying "the client is always right, and we need to keep them happy for future business." However, you feel strongly that some of the requested changes will result in a generic, ineffective design that won\'t achieve the client\'s stated goals. The revised presentation is due in three days, and you need to find a path forward.',
  roleContext: {
    yourRole: 'Senior Graphic Designer',
    teamSize: 'Creative team of 5 people plus account management',
    timeline: 'Revised presentation due in 3 days, final deliverables in 2 weeks',
    stakes: 'Major rebranding project worth $150K, potential for ongoing relationship',
    pressure: 'Account manager concerned about client satisfaction and future business',
    stakeholders: 'Account Manager (Lisa), Client, Creative Director, Design Team',
    history: 'You and Lisa have worked successfully on previous client projects'
  },
  choices: [
    {
      id: 'implement-all-feedback',
      text: 'Implement all client feedback as requested to maintain the relationship and avoid conflict.',
      feedback: 'While this maintains client satisfaction in the short term, it may result in an ineffective design that doesn\'t achieve the client\'s business goals and could damage your professional reputation.',
      consequences: {
        immediate: 'Lisa feels supported and the client relationship remains smooth.',
        shortTerm: 'The design may not perform well in market testing or real-world application.',
        longTerm: 'Your portfolio includes work that doesn\'t represent your best capabilities, and the client may blame you for poor results.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 2 },
        { area: 'emotional-intelligence', impact: 6 },
        { area: 'decision-making', impact: 3 }
      ],
      enhancedConsequences: {
        severity: {
          immediate: 'neutral' as const,
          shortTerm: 'negative' as const,
          longTerm: 'negative' as const
        },
        confidence: {
          immediate: 'high' as const,
          shortTerm: 'medium' as const,
          longTerm: 'low' as const
        },
        stakeholderImpacts: [
          {
            stakeholder: 'Lisa (Account Manager)',
            impact: 'Feels supported and maintains smooth client relationship management',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Client',
            impact: 'Gets what they asked for but may not achieve their business objectives',
            severity: 'negative' as const
          },
          {
            stakeholder: 'Creative Team',
            impact: 'May lose respect for your creative advocacy and professional standards',
            severity: 'negative' as const
          }
        ],
        alternatives: {
          immediate: 'At minimum, document your concerns about the design effectiveness',
          shortTerm: 'Propose A/B testing the original vs. revised concepts',
          longTerm: 'Develop better client education processes about design strategy'
        },
        mitigation: {
          immediate: 'Ensure the client understands the potential impact of their requested changes',
          shortTerm: 'Include performance metrics and success measures in the final presentation',
          longTerm: 'Build stronger relationships with clients to better influence design decisions'
        },
        reflectionPrompts: [
          'What are the long-term implications of compromising creative standards?',
          'How might this decision affect your professional reputation and portfolio?',
          'What would you advise another designer in this same situation?'
        ],
        skillRecommendations: [
          {
            skill: 'Creative Advocacy',
            reason: 'Learn to advocate for design decisions while maintaining client relationships',
            link: '/topics/foundational-mindsets/assertiveness'
          },
          {
            skill: 'Client Education',
            reason: 'Understand how to help clients make informed design decisions',
            link: '/library/client-education'
          }
        ],
        realWorldExample: {
          title: 'Restaurant Rebranding Compromise',
          description: 'A designer implemented all client feedback for a restaurant rebrand, despite concerns that the changes would make the brand forgettable.',
          outcome: 'The rebrand failed to differentiate the restaurant in a competitive market. Sales declined, and the client blamed the design team. The designer\'s reputation suffered, and the agency lost the account.'
        }
      }
    },
    {
      id: 'refuse-changes',
      text: 'Firmly refuse to implement the changes, insisting that your original design is the best solution.',
      feedback: 'While this protects creative integrity, it may damage client relationships and could be seen as inflexible or not understanding business needs.',
      consequences: {
        immediate: 'Lisa feels frustrated and the client may view the agency as difficult to work with.',
        shortTerm: 'The client relationship becomes strained, potentially affecting project completion and payment.',
        longTerm: 'You may be seen as difficult to work with, limiting your involvement in client-facing projects.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 8 },
        { area: 'emotional-intelligence', impact: 3 },
        { area: 'decision-making', impact: 4 }
      ],
      enhancedConsequences: {
        severity: {
          immediate: 'negative' as const,
          shortTerm: 'negative' as const,
          longTerm: 'negative' as const
        },
        confidence: {
          immediate: 'high' as const,
          shortTerm: 'medium' as const,
          longTerm: 'medium' as const
        },
        stakeholderImpacts: [
          {
            stakeholder: 'Lisa (Account Manager)',
            impact: 'Feels unsupported and may struggle to maintain client relationship',
            severity: 'negative' as const
          },
          {
            stakeholder: 'Client',
            impact: 'May feel dismissed and question the agency\'s collaborative approach',
            severity: 'negative' as const
          },
          {
            stakeholder: 'Creative Team',
            impact: 'May appreciate creative advocacy but see approach as too confrontational',
            severity: 'neutral' as const
          }
        ],
        alternatives: {
          immediate: 'Propose alternative solutions that address client concerns while maintaining design integrity',
          shortTerm: 'Collaborate with Lisa to find creative solutions that satisfy both design and business goals',
          longTerm: 'Establish better upfront communication about design strategy and decision-making'
        },
        mitigation: {
          immediate: 'Explain the business rationale behind design decisions, not just creative preferences',
          shortTerm: 'Work with Lisa to present alternative approaches that meet client objectives',
          longTerm: 'Build stronger relationships by showing flexibility and collaborative problem-solving'
        },
        reflectionPrompts: [
          'How can you advocate for design quality while maintaining collaborative relationships?',
          'What alternative solutions might achieve both creative and business goals?',
          'How might your approach affect future client-designer collaboration?'
        ],
        skillRecommendations: [
          {
            skill: 'Collaborative Problem Solving',
            reason: 'Learn to find solutions that address multiple stakeholder concerns',
            link: '/topics/foundational-mindsets/decision-making'
          },
          {
            skill: 'Client Relationship Management',
            reason: 'Understand how to advocate for design while building client trust',
            link: '/library/client-relationships'
          }
        ],
        realWorldExample: {
          title: 'Tech Startup Logo Conflict',
          description: 'A designer refused to implement client feedback on a logo design, insisting their original concept was superior without proposing alternatives.',
          outcome: 'The client felt dismissed and terminated the project. The agency lost the account and the designer was removed from client-facing work. The designer\'s reputation for collaboration suffered significantly.'
        }
      }
    },
    {
      id: 'collaborative-solution',
      text: 'Work with Lisa to understand the client\'s underlying concerns and propose alternative solutions that address their needs while maintaining design integrity.',
      feedback: 'This collaborative approach respects both creative standards and client relationships, often leading to innovative solutions that satisfy all stakeholders.',
      consequences: {
        immediate: 'Lisa feels supported and you both engage in creative problem-solving for the client.',
        shortTerm: 'You develop solutions that address client concerns while maintaining design effectiveness.',
        longTerm: 'You build a reputation as a collaborative professional who can balance creative and business needs effectively.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 7 },
        { area: 'emotional-intelligence', impact: 8 },
        { area: 'decision-making', impact: 8 }
      ],
      enhancedConsequences: {
        severity: {
          immediate: 'positive' as const,
          shortTerm: 'positive' as const,
          longTerm: 'positive' as const
        },
        confidence: {
          immediate: 'high' as const,
          shortTerm: 'high' as const,
          longTerm: 'high' as const
        },
        stakeholderImpacts: [
          {
            stakeholder: 'Lisa (Account Manager)',
            impact: 'Feels supported and appreciates the collaborative approach to client challenges',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Client',
            impact: 'Feels heard and gets solutions that address their concerns while achieving business goals',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Creative Team',
            impact: 'Sees effective advocacy for design quality combined with collaborative problem-solving',
            severity: 'positive' as const
          }
        ],
        alternatives: {
          shortTerm: 'If collaboration doesn\'t yield solutions quickly, escalate to the creative director for guidance',
          longTerm: 'Establish regular client-creative collaboration sessions for future projects'
        },
        mitigation: {
          immediate: 'Set clear timeline for finding solutions given the upcoming presentation deadline',
          shortTerm: 'Document the agreed-upon approach and client expectations',
          longTerm: 'Use this collaboration as a model for future client-creative partnerships'
        },
        reflectionPrompts: [
          'How can you frame design decisions in terms of client business objectives?',
          'What can you learn from Lisa\'s client perspective that might inform your creative approach?',
          'How might this collaborative approach influence future client projects?'
        ],
        skillRecommendations: [
          {
            skill: 'Client-Creative Collaboration',
            reason: 'Learn to bridge creative and business perspectives effectively',
            link: '/topics/foundational-mindsets/decision-making'
          },
          {
            skill: 'Strategic Design Communication',
            reason: 'Understand how to present creative decisions in business terms',
            link: '/library/strategic-design'
          }
        ],
        realWorldExample: {
          title: 'Healthcare Brand Redesign Success',
          description: 'A designer and account manager collaborated to understand why a healthcare client wanted "more corporate" branding, discovering concerns about credibility.',
          outcome: 'They developed a solution that maintained creative impact while addressing credibility concerns. The rebrand increased patient trust and became a case study for the agency\'s strategic design approach.'
        }
      }
    },
    {
      id: 'present-alternatives',
      text: 'Create multiple design variations that address the client\'s concerns while preserving different levels of creative integrity.',
      feedback: 'This approach provides the client with choices while demonstrating the impact of different design decisions, often leading to more informed client decisions.',
      consequences: {
        immediate: 'Lisa appreciates having options to present, and the client feels they have control over the decision.',
        shortTerm: 'The client can see the trade-offs between different approaches and make more informed choices.',
        longTerm: 'You build a reputation for thorough, client-focused design work while maintaining creative standards.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 6 },
        { area: 'emotional-intelligence', impact: 7 },
        { area: 'decision-making', impact: 8 }
      ],
      enhancedConsequences: {
        severity: {
          immediate: 'positive' as const,
          shortTerm: 'positive' as const,
          longTerm: 'positive' as const
        },
        confidence: {
          immediate: 'high' as const,
          shortTerm: 'high' as const,
          longTerm: 'high' as const
        },
        stakeholderImpacts: [
          {
            stakeholder: 'Lisa (Account Manager)',
            impact: 'Appreciates having multiple options to present and feels supported in client management',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Client',
            impact: 'Feels empowered to make informed decisions and sees the agency as thorough and professional',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Creative Team',
            impact: 'Sees strategic approach to client work that maintains creative standards',
            severity: 'positive' as const
          }
        ],
        alternatives: {
          immediate: 'If time is limited, focus on the most critical design elements for variation',
          shortTerm: 'Use client feedback on alternatives to refine the final design direction',
          longTerm: 'Establish this multi-option approach as standard practice for client presentations'
        },
        mitigation: {
          immediate: 'Clearly explain the strategic rationale behind each design variation',
          shortTerm: 'Guide the client toward the most effective option through strategic presentation',
          longTerm: 'Use this approach to build stronger client relationships and design advocacy skills'
        },
        reflectionPrompts: [
          'How can presenting options help clients understand the impact of design decisions?',
          'What can you learn from client reactions to different design approaches?',
          'How might this approach influence how you handle future client feedback?'
        ],
        skillRecommendations: [
          {
            skill: 'Strategic Design Presentation',
            reason: 'Learn to present design options in ways that guide client decision-making',
            link: '/library/design-presentation'
          },
          {
            skill: 'Client Design Education',
            reason: 'Understand how to help clients make informed design decisions',
            link: '/topics/foundational-mindsets/assertiveness'
          }
        ],
        realWorldExample: {
          title: 'Retail Chain Rebranding Options',
          description: 'A designer created three logo variations showing different levels of modernization, helping a traditional retail client understand the impact of design choices.',
          outcome: 'The client chose a middle option that modernized their brand while maintaining heritage elements. Sales increased 25% after the rebrand, and the agency won additional projects based on their strategic approach.'
        }
      }
    },
    {
      id: 'educate-client',
      text: 'Propose a client meeting to educate them about design strategy and the reasoning behind your original recommendations.',
      feedback: 'This approach builds client understanding and trust while positioning you as a strategic partner, though it requires strong communication skills and client openness.',
      consequences: {
        immediate: 'Lisa may be concerned about challenging the client, but appreciates your strategic thinking.',
        shortTerm: 'The client gains better understanding of design decisions and may become more collaborative.',
        longTerm: 'You establish yourself as a strategic design consultant rather than just an implementer.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 7 },
        { area: 'emotional-intelligence', impact: 6 },
        { area: 'decision-making', impact: 7 }
      ],
      enhancedConsequences: {
        severity: {
          immediate: 'neutral' as const,
          shortTerm: 'positive' as const,
          longTerm: 'positive' as const
        },
        confidence: {
          immediate: 'medium' as const,
          shortTerm: 'high' as const,
          longTerm: 'high' as const
        },
        stakeholderImpacts: [
          {
            stakeholder: 'Lisa (Account Manager)',
            impact: 'May initially worry about client reaction but appreciates the strategic approach',
            severity: 'neutral' as const
          },
          {
            stakeholder: 'Client',
            impact: 'Gains valuable design education and may become a more strategic partner',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Creative Team',
            impact: 'Sees professional advocacy for design strategy and client education',
            severity: 'positive' as const
          }
        ],
        alternatives: {
          immediate: 'Start with a collaborative discussion rather than formal education session',
          shortTerm: 'Include case studies and examples to support design recommendations',
          longTerm: 'Establish regular strategic design consultations as part of client relationships'
        },
        mitigation: {
          immediate: 'Frame the meeting as collaborative exploration rather than client education',
          shortTerm: 'Include Lisa in the strategic discussion to maintain account management relationships',
          longTerm: 'Use successful outcomes to build credibility for future strategic design discussions'
        },
        reflectionPrompts: [
          'How can you educate clients about design strategy without appearing condescending?',
          'What examples and case studies would most effectively support your design recommendations?',
          'How might client education change the nature of your professional relationships?'
        ],
        skillRecommendations: [
          {
            skill: 'Strategic Design Consulting',
            reason: 'Learn to position yourself as a strategic partner rather than just a service provider',
            link: '/library/design-consulting'
          },
          {
            skill: 'Client Presentation Skills',
            reason: 'Understand how to effectively communicate design strategy to business stakeholders',
            link: '/topics/foundational-mindsets/assertiveness'
          }
        ],
        realWorldExample: {
          title: 'Financial Services Brand Strategy Session',
          description: 'A designer proposed a strategy session to help a financial client understand how their brand positioning affected customer trust and acquisition.',
          outcome: 'The client became highly engaged in the strategic process and approved a more ambitious rebrand. The relationship evolved into ongoing strategic consulting, and the designer was promoted to creative strategist.'
        }
      }
    }
  ],
  growthAreas: ['assertiveness', 'emotional-intelligence', 'decision-making'],
  difficulty: 'foundational',
  xpReward: 50
};