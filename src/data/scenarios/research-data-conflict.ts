import { Scenario } from '../../types';

export const researchDataConflictScenario: Scenario = {
  id: 'research-data-conflict',
  title: 'Research Data Interpretation Conflict',
  description: 'Navigate a disagreement with a product marketing manager about how to present user research findings that could impact product strategy.',
  situation: 'You\'re a UX researcher who just completed a comprehensive user study on a new feature. The data shows that while users can complete tasks successfully, they express frustration with the complexity and would prefer a simpler approach. However, the product marketing manager, James, wants to highlight only the positive completion rates in the upcoming stakeholder presentation, arguing that "we need to show momentum to secure budget for the next quarter." He\'s concerned that presenting the user frustration data will make the feature look like a failure. The presentation to senior leadership is tomorrow, and you need to decide how to handle this conflict between research integrity and business pressure.',
  roleContext: {
    yourRole: 'UX Researcher',
    teamSize: 'Product team of 8 people including PM, designers, developers',
    timeline: 'Stakeholder presentation scheduled for tomorrow morning',
    stakes: 'Q4 budget allocation and feature roadmap decisions',
    pressure: 'Marketing team needs positive metrics to justify continued investment',
    stakeholders: 'Product Marketing Manager (James), Product Manager, Senior Leadership, Design Team',
    history: 'You and James have collaborated well on previous research presentations'
  },
  choices: [
    {
      id: 'present-full-data',
      text: 'Insist on presenting the complete research findings, including both positive metrics and user frustration data.',
      feedback: 'This approach maintains research integrity and provides stakeholders with complete information for decision-making, though it may create tension with marketing goals.',
      consequences: {
        immediate: 'James feels frustrated that you\'re not supporting the business case, creating immediate tension.',
        shortTerm: 'Leadership gets complete information but may question the feature\'s viability, potentially affecting budget.',
        longTerm: 'You build a reputation for research integrity, but may be seen as not understanding business needs.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 8 },
        { area: 'emotional-intelligence', impact: 4 },
        { area: 'decision-making', impact: 7 }
      ],
      enhancedConsequences: {
        severity: {
          immediate: 'negative' as const,
          shortTerm: 'neutral' as const,
          longTerm: 'positive' as const
        },
        confidence: {
          immediate: 'high' as const,
          shortTerm: 'medium' as const,
          longTerm: 'high' as const
        },
        stakeholderImpacts: [
          {
            stakeholder: 'James (Product Marketing Manager)',
            impact: 'Feels unsupported and may view you as not understanding business priorities',
            severity: 'negative' as const
          },
          {
            stakeholder: 'Senior Leadership',
            impact: 'Gets complete information for decision-making but may question feature investment',
            severity: 'neutral' as const
          },
          {
            stakeholder: 'Product Team',
            impact: 'Appreciates research integrity and complete user perspective',
            severity: 'positive' as const
          }
        ],
        alternatives: {
          immediate: 'Frame the user frustration as opportunities for improvement rather than failures',
          shortTerm: 'Propose solutions alongside the problems to maintain forward momentum',
          longTerm: 'Work with James to develop better frameworks for presenting complex research findings'
        },
        mitigation: {
          immediate: 'Emphasize how addressing user concerns will lead to better long-term success',
          shortTerm: 'Provide specific recommendations for improving the user experience',
          longTerm: 'Build stronger relationships by showing how research supports business goals'
        },
        reflectionPrompts: [
          'How can you present challenging research findings in a way that supports business goals?',
          'What\'s the long-term impact on user experience if frustration data is ignored?',
          'How might you better collaborate with marketing to frame research insights?'
        ],
        skillRecommendations: [
          {
            skill: 'Business Communication',
            reason: 'Learn to present research findings in business-relevant terms',
            link: '/topics/foundational-mindsets/assertiveness'
          },
          {
            skill: 'Stakeholder Influence',
            reason: 'Understand how to advocate for user needs while supporting business objectives',
            link: '/library/stakeholder-influence'
          }
        ],
        realWorldExample: {
          title: 'E-commerce Checkout Research Conflict',
          description: 'A UX researcher insisted on presenting user frustration data about a new checkout flow despite marketing pressure to focus only on conversion rates.',
          outcome: 'Leadership initially questioned the feature but ultimately invested in improvements. The enhanced checkout flow increased both conversion and satisfaction, validating the complete research approach.'
        }
      }
    },
    {
      id: 'compromise-presentation',
      text: 'Work with James to find a balanced way to present both the positive metrics and improvement opportunities.',
      feedback: 'This collaborative approach respects both research integrity and business needs, potentially leading to better stakeholder understanding and decision-making.',
      consequences: {
        immediate: 'James feels heard and you both work together to craft a compelling narrative that includes all data.',
        shortTerm: 'Leadership gets complete information presented in a business-friendly way, supporting informed decisions.',
        longTerm: 'You build a reputation for being both rigorous and business-savvy, strengthening cross-functional relationships.'
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
            stakeholder: 'James (Product Marketing Manager)',
            impact: 'Feels supported and appreciates the collaborative approach to business communication',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Senior Leadership',
            impact: 'Gets complete, well-framed information that supports strategic decision-making',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Product Team',
            impact: 'Sees effective cross-functional collaboration and research-informed product strategy',
            severity: 'positive' as const
          }
        ],
        alternatives: {
          shortTerm: 'If collaboration doesn\'t work quickly, escalate to the product manager for guidance',
          longTerm: 'Establish regular research-marketing collaboration sessions for future projects'
        },
        mitigation: {
          immediate: 'Set clear boundaries about what research findings must be included',
          shortTerm: 'Document the agreed-upon presentation approach for future reference',
          longTerm: 'Use this collaboration as a model for future research-marketing partnerships'
        },
        reflectionPrompts: [
          'How can you frame research findings to support both user advocacy and business goals?',
          'What can you learn from James\'s marketing perspective that improves your research communication?',
          'How might this collaborative approach influence future research presentations?'
        ],
        skillRecommendations: [
          {
            skill: 'Cross-functional Collaboration',
            reason: 'Learn to bridge research and marketing perspectives effectively',
            link: '/topics/foundational-mindsets/decision-making'
          },
          {
            skill: 'Strategic Communication',
            reason: 'Understand how to present research insights in business-strategic terms',
            link: '/library/strategic-communication'
          }
        ],
        realWorldExample: {
          title: 'SaaS Platform User Research Success',
          description: 'A UX researcher and marketing manager collaborated to present user feedback as "optimization opportunities" with clear ROI projections.',
          outcome: 'Leadership approved both the current feature and additional budget for user experience improvements. The collaborative approach became the standard for research presentations across the company.'
        }
      }
    },
    {
      id: 'defer-to-marketing',
      text: 'Agree to present only the positive metrics as James suggests, focusing on business momentum.',
      feedback: 'While this maintains team harmony and supports immediate business goals, it compromises research integrity and may lead to poor long-term product decisions.',
      consequences: {
        immediate: 'James feels supported and the presentation aligns with marketing objectives.',
        shortTerm: 'Leadership may approve continued investment based on incomplete information.',
        longTerm: 'User frustration issues remain unaddressed, potentially leading to bigger problems and loss of research credibility.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 3 },
        { area: 'emotional-intelligence', impact: 5 },
        { area: 'decision-making', impact: 4 }
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
            stakeholder: 'James (Product Marketing Manager)',
            impact: 'Feels supported and gets the business-focused presentation he wanted',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Senior Leadership',
            impact: 'Makes decisions based on incomplete information, potentially leading to poor outcomes',
            severity: 'negative' as const
          },
          {
            stakeholder: 'Product Team',
            impact: 'May lose trust in research integrity and user advocacy',
            severity: 'negative' as const
          }
        ],
        alternatives: {
          immediate: 'At minimum, document the complete findings for future reference',
          shortTerm: 'Find other ways to communicate user concerns to the product team',
          longTerm: 'Develop better frameworks for balancing research integrity with business needs'
        },
        mitigation: {
          immediate: 'Ensure the complete research findings are documented and accessible',
          shortTerm: 'Schedule follow-up sessions to address user experience concerns',
          longTerm: 'Work to establish clearer guidelines for research presentation standards'
        },
        reflectionPrompts: [
          'What are the long-term implications of compromising research integrity?',
          'How might this decision affect your credibility as a user advocate?',
          'What would you advise another researcher in this same situation?'
        ],
        skillRecommendations: [
          {
            skill: 'Professional Assertiveness',
            reason: 'Learn to advocate for research standards while maintaining business relationships',
            link: '/topics/foundational-mindsets/assertiveness'
          },
          {
            skill: 'Research Ethics',
            reason: 'Understand how to maintain research integrity in business environments',
            link: '/library/research-ethics'
          }
        ],
        realWorldExample: {
          title: 'Mobile App Research Compromise',
          description: 'A researcher agreed to present only positive usability metrics, hiding significant user frustration with a new navigation system.',
          outcome: 'The feature launched with poor user reviews and high support tickets. The researcher lost credibility when the hidden issues became apparent, and the feature required a costly redesign.'
        }
      }
    },
    {
      id: 'escalate-to-pm',
      text: 'Bring the disagreement to the product manager to decide on the presentation approach.',
      feedback: 'While this ensures a decision gets made, it may signal inability to resolve cross-functional conflicts and could damage your relationship with James.',
      consequences: {
        immediate: 'The product manager makes a decision, but both you and James may feel the collaboration failed.',
        shortTerm: 'Future research-marketing discussions may be more formal and less collaborative.',
        longTerm: 'You may be seen as someone who escalates rather than solves cross-functional challenges independently.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 4 },
        { area: 'emotional-intelligence', impact: 4 },
        { area: 'decision-making', impact: 5 }
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
          longTerm: 'medium' as const
        },
        stakeholderImpacts: [
          {
            stakeholder: 'James (Product Marketing Manager)',
            impact: 'May feel that the collaborative process was abandoned and direct communication failed',
            severity: 'negative' as const
          },
          {
            stakeholder: 'Product Manager',
            impact: 'Has to resolve conflicts that could be handled at the team level, may question team collaboration',
            severity: 'negative' as const
          },
          {
            stakeholder: 'Product Team',
            impact: 'May see this as avoiding direct problem-solving and cross-functional collaboration',
            severity: 'negative' as const
          }
        ],
        alternatives: {
          immediate: 'Try collaborative problem-solving first, then escalate if needed',
          shortTerm: 'Use the product manager as a facilitator rather than decision-maker',
          longTerm: 'Develop skills in cross-functional conflict resolution'
        },
        mitigation: {
          immediate: 'Frame the escalation as seeking guidance rather than asking for a decision',
          shortTerm: 'Work with James to present unified options to the product manager',
          longTerm: 'Focus on building direct collaboration skills for future cross-functional challenges'
        },
        reflectionPrompts: [
          'What makes you feel that escalation is necessary at this stage?',
          'How might this approach affect your future working relationship with James?',
          'What collaboration skills could you develop to handle this situation more directly?'
        ],
        skillRecommendations: [
          {
            skill: 'Cross-functional Conflict Resolution',
            reason: 'Learn to resolve research-marketing disagreements before they require management intervention',
            link: '/topics/foundational-mindsets/assertiveness'
          },
          {
            skill: 'Peer Collaboration',
            reason: 'Understand how to work effectively with colleagues from different disciplines',
            link: '/library/peer-collaboration'
          }
        ],
        realWorldExample: {
          title: 'Product Team Research Escalation',
          description: 'A researcher immediately escalated a presentation disagreement to the product manager without attempting collaborative resolution.',
          outcome: 'The product manager resolved the immediate issue but asked both team members to work on their collaboration skills. Future research presentations required PM approval, reducing team autonomy.'
        }
      }
    },
    {
      id: 'reframe-findings',
      text: 'Propose reframing the user frustration data as "optimization opportunities" with clear improvement recommendations.',
      feedback: 'This approach maintains research integrity while presenting findings in a business-positive way, potentially satisfying both research standards and marketing needs.',
      consequences: {
        immediate: 'James appreciates the business-friendly framing while you maintain research completeness.',
        shortTerm: 'Leadership gets complete information presented as opportunities rather than problems.',
        longTerm: 'You build a reputation for translating research insights into actionable business recommendations.'
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
            stakeholder: 'James (Product Marketing Manager)',
            impact: 'Appreciates the business-friendly approach while getting complete research insights',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Senior Leadership',
            impact: 'Gets complete information framed as strategic opportunities for improvement',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Product Team',
            impact: 'Sees research insights translated into actionable product strategy',
            severity: 'positive' as const
          }
        ],
        alternatives: {
          shortTerm: 'Include specific ROI projections for the optimization opportunities',
          longTerm: 'Develop standard frameworks for presenting research findings in business terms'
        },
        mitigation: {
          immediate: 'Ensure the reframing doesn\'t minimize the importance of user concerns',
          shortTerm: 'Follow up with specific timelines and resources needed for improvements',
          longTerm: 'Use this approach as a model for future research-business communication'
        },
        reflectionPrompts: [
          'How can you consistently frame research findings as business opportunities?',
          'What business language resonates most effectively with different stakeholders?',
          'How might this reframing approach influence how research is valued in the organization?'
        ],
        skillRecommendations: [
          {
            skill: 'Business Storytelling',
            reason: 'Learn to present research insights in compelling business narratives',
            link: '/library/business-storytelling'
          },
          {
            skill: 'Strategic Research Communication',
            reason: 'Understand how to translate user insights into business strategy',
            link: '/topics/foundational-mindsets/assertiveness'
          }
        ],
        realWorldExample: {
          title: 'Healthcare App Research Reframing',
          description: 'A UX researcher reframed user confusion about a medical app as "engagement optimization opportunities" with projected user retention improvements.',
          outcome: 'Leadership approved additional UX investment based on the clear business case. The improved app saw 40% better user retention, validating the research-driven approach and establishing the researcher as a strategic partner.'
        }
      }
    }
  ],
  growthAreas: ['assertiveness', 'emotional-intelligence', 'decision-making'],
  difficulty: 'foundational',
  xpReward: 50
};