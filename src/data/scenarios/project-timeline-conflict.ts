import { Scenario } from '../../types';

export const projectTimelineConflictScenario: Scenario = {
  id: 'project-timeline-conflict',
  title: 'Project Timeline Conflict',
  description: 'Navigate a timeline conflict between engineering and marketing departments with competing priorities.',
  situation: 'You\'re a product designer embedded in a cross-functional team. Engineering estimates the new feature will take 3 months, but marketing has already committed to clients that it will be ready in 6 weeks. The design is central to the product experience, and you\'re being asked to reduce scope or speed up the design process. The VP of Product wants to know your recommendation by end of week, and both engineering and marketing are looking to you to either validate their timeline or propose a compromise. The feature is critical for Q4 revenue goals, and there\'s significant pressure to find a solution that works for everyone.',
  roleContext: {
    yourRole: 'Senior Product Designer',
    teamSize: 'Cross-functional team of 12 people (design, engineering, marketing, product)',
    timeline: 'Decision needed by end of week, feature launch in 6 weeks vs 3 months',
    stakes: 'Q4 revenue goals and client commitments',
    pressure: 'VP of Product expecting recommendation, conflicting department priorities',
    stakeholders: 'Engineering Team, Marketing Team, VP of Product, Clients',
    history: 'You\'ve successfully navigated similar timeline conflicts before'
  },
  choices: [
    {
      id: 'collaborative-meeting',
      text: 'Schedule a joint meeting with both teams to understand what\'s truly critical and explore creative solutions together.',
      feedback: 'This collaborative approach builds alignment and often reveals innovative solutions that neither team considered independently.',
      consequences: {
        immediate: 'Both teams feel heard and engage in productive problem-solving together.',
        shortTerm: 'You discover creative compromises and build stronger cross-functional relationships.',
        longTerm: 'You establish yourself as a collaborative leader who can bridge departmental divides and find win-win solutions.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 7 },
        { area: 'emotional-intelligence', impact: 9 },
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
            stakeholder: 'Engineering Team',
            impact: 'Feels heard and appreciated for their technical expertise and realistic timeline estimates',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Marketing Team',
            impact: 'Appreciates the collaborative approach and opportunity to explain client commitments',
            severity: 'positive' as const
          },
          {
            stakeholder: 'VP of Product',
            impact: 'Sees strong cross-functional leadership and collaborative problem-solving skills',
            severity: 'positive' as const
          }
        ],
        alternatives: {
          shortTerm: 'If the meeting doesn\'t yield immediate solutions, propose a follow-up workshop with structured problem-solving techniques',
          longTerm: 'Establish regular cross-functional alignment meetings to prevent future timeline conflicts'
        },
        mitigation: {
          immediate: 'Set clear meeting objectives and time boundaries to ensure productive discussion',
          shortTerm: 'Document all proposed solutions and create action items with clear owners',
          longTerm: 'Use this collaborative success as a template for future cross-functional challenges'
        },
        reflectionPrompts: [
          'How can you facilitate productive conversations between teams with competing priorities?',
          'What techniques help uncover creative solutions that satisfy multiple stakeholders?',
          'How might this collaborative approach influence your reputation as a cross-functional leader?'
        ],
        skillRecommendations: [
          {
            skill: 'Cross-functional Facilitation',
            reason: 'Learn to guide productive discussions between teams with different priorities and perspectives',
            link: '/topics/foundational-mindsets/decision-making'
          },
          {
            skill: 'Creative Problem Solving',
            reason: 'Understand how to find innovative solutions that address multiple constraints simultaneously',
            link: '/library/creative-problem-solving'
          }
        ],
        realWorldExample: {
          title: 'SaaS Platform Feature Conflict Resolution',
          description: 'A product designer facilitated a joint meeting between engineering and sales teams facing a similar timeline conflict for a major client feature.',
          outcome: 'The collaborative session revealed a phased approach that delivered core functionality on time while maintaining technical quality. Both teams felt heard, and the solution became a model for future feature planning.'
        }
      }
    },
    {
      id: 'support-engineering',
      text: 'Support engineering\'s 3-month timeline and help marketing reset client expectations.',
      feedback: 'This approach prioritizes quality and technical feasibility, but requires difficult conversations with clients and may impact revenue goals.',
      consequences: {
        immediate: 'Marketing feels unsupported and faces challenging client conversations.',
        shortTerm: 'Quality design is delivered but some client relationships may be strained.',
        longTerm: 'Strong product foundation leads to better long-term client satisfaction and fewer post-launch issues.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 7 },
        { area: 'emotional-intelligence', impact: 5 },
        { area: 'decision-making', impact: 8 }
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
            stakeholder: 'Engineering Team',
            impact: 'Feels supported and appreciated for their technical expertise and realistic estimates',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Marketing Team',
            impact: 'Feels unsupported and faces difficult client conversations about timeline changes',
            severity: 'negative' as const
          },
          {
            stakeholder: 'VP of Product',
            impact: 'Appreciates quality focus but may question impact on revenue goals and client relationships',
            severity: 'neutral' as const
          }
        ],
        alternatives: {
          immediate: 'Offer to help marketing develop a communication strategy for clients that emphasizes quality benefits',
          shortTerm: 'Propose interim deliverables or prototypes to maintain client engagement during development',
          longTerm: 'Work with marketing to establish better timeline coordination processes for future features'
        },
        mitigation: {
          immediate: 'Collaborate with marketing on client communication strategy to minimize relationship damage',
          shortTerm: 'Provide regular progress updates and early previews to maintain client confidence',
          longTerm: 'Use the quality outcome to demonstrate the value of realistic timeline planning'
        },
        reflectionPrompts: [
          'How can you support technical quality while maintaining positive relationships with business stakeholders?',
          'What strategies help communicate the long-term benefits of realistic timeline planning?',
          'How might you better balance quality concerns with business pressures in future situations?'
        ],
        skillRecommendations: [
          {
            skill: 'Stakeholder Communication',
            reason: 'Learn to communicate technical decisions in terms of business value and long-term benefits',
            link: '/topics/foundational-mindsets/assertiveness'
          },
          {
            skill: 'Quality Advocacy',
            reason: 'Understand how to advocate for design and technical quality while maintaining business relationships',
            link: '/library/quality-advocacy'
          }
        ],
        realWorldExample: {
          title: 'E-commerce Platform Quality Decision',
          description: 'A product designer supported engineering\'s timeline for a checkout redesign despite marketing pressure for faster delivery.',
          outcome: 'The quality-focused approach resulted in a 40% improvement in conversion rates and significantly fewer post-launch issues. Marketing later acknowledged the value of the longer timeline.'
        }
      }
    },
    {
      id: 'support-marketing',
      text: 'Support marketing\'s 6-week timeline and propose design shortcuts to meet the deadline.',
      feedback: 'This maintains client relationships and revenue goals but may compromise design quality and create technical debt.',
      consequences: {
        immediate: 'Marketing feels supported and client commitments are maintained.',
        shortTerm: 'Feature launches on time but may have usability issues requiring post-launch fixes.',
        longTerm: 'Potential user experience problems and technical debt that could impact product reputation.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 4 },
        { area: 'emotional-intelligence', impact: 7 },
        { area: 'decision-making', impact: 5 }
      ],
      enhancedConsequences: {
        severity: {
          immediate: 'positive' as const,
          shortTerm: 'negative' as const,
          longTerm: 'negative' as const
        },
        confidence: {
          immediate: 'high' as const,
          shortTerm: 'high' as const,
          longTerm: 'medium' as const
        },
        stakeholderImpacts: [
          {
            stakeholder: 'Marketing Team',
            impact: 'Feels supported and can maintain client commitments and revenue goals',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Engineering Team',
            impact: 'Feels pressured to compromise technical quality and may struggle with rushed implementation',
            severity: 'negative' as const
          },
          {
            stakeholder: 'VP of Product',
            impact: 'Appreciates meeting revenue goals but may face quality issues and technical debt later',
            severity: 'neutral' as const
          }
        ],
        alternatives: {
          immediate: 'Propose specific design shortcuts that minimize quality impact while meeting timeline',
          shortTerm: 'Plan for immediate post-launch improvements to address quality compromises',
          longTerm: 'Use this experience to advocate for better timeline planning in future projects'
        },
        mitigation: {
          immediate: 'Document all quality compromises and create a plan for post-launch improvements',
          shortTerm: 'Monitor user feedback closely and prioritize fixes for any usability issues',
          longTerm: 'Work with leadership to establish more realistic timeline planning processes'
        },
        reflectionPrompts: [
          'What are the long-term implications of compromising design quality for short-term business goals?',
          'How can you better communicate the risks of rushed timelines to business stakeholders?',
          'What strategies could help balance immediate business needs with long-term product quality?'
        ],
        skillRecommendations: [
          {
            skill: 'Risk Communication',
            reason: 'Learn to effectively communicate the risks and trade-offs of timeline compromises',
            link: '/topics/foundational-mindsets/assertiveness'
          },
          {
            skill: 'Strategic Planning',
            reason: 'Understand how to balance short-term business needs with long-term product quality',
            link: '/library/strategic-planning'
          }
        ],
        realWorldExample: {
          title: 'Mobile App Rush Launch',
          description: 'A product team rushed a feature launch to meet marketing commitments, compromising on user testing and design refinement.',
          outcome: 'The feature launched on time but received poor user reviews and required three months of fixes. The rushed approach ultimately cost more time and resources than the original timeline would have required.'
        }
      }
    },
    {
      id: 'phased-approach',
      text: 'Propose a phased release: core functionality in 6 weeks, enhanced features in 3 months.',
      feedback: 'This compromise balances immediate business needs with quality standards, requiring careful scope management and stakeholder alignment.',
      consequences: {
        immediate: 'Both teams feel heard and work together on defining the phased approach.',
        shortTerm: 'Core functionality launches on time with a clear roadmap for enhancements.',
        longTerm: 'Establishes you as a strategic problem-solver and improves cross-functional collaboration.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 8 },
        { area: 'emotional-intelligence', impact: 9 },
        { area: 'decision-making', impact: 9 }
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
            stakeholder: 'Engineering Team',
            impact: 'Appreciates the realistic approach that allows for quality implementation of core features',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Marketing Team',
            impact: 'Gets core functionality to meet client commitments while understanding the enhancement timeline',
            severity: 'positive' as const
          },
          {
            stakeholder: 'VP of Product',
            impact: 'Sees strategic thinking and balanced approach that addresses both business and technical needs',
            severity: 'positive' as const
          }
        ],
        alternatives: {
          shortTerm: 'If phasing proves complex, consider alternative scope reduction strategies',
          longTerm: 'Use this phased approach as a template for future feature planning and timeline management'
        },
        mitigation: {
          immediate: 'Clearly define what constitutes "core functionality" vs "enhanced features" with all stakeholders',
          shortTerm: 'Establish clear success metrics for the initial phase to guide enhancement priorities',
          longTerm: 'Document the phased approach process for use in future timeline conflicts'
        },
        reflectionPrompts: [
          'How can you identify the most critical features that provide immediate value while planning for future enhancements?',
          'What communication strategies help stakeholders understand and support phased approaches?',
          'How might this strategic compromise approach influence your reputation as a problem-solver?'
        ],
        skillRecommendations: [
          {
            skill: 'Strategic Compromise',
            reason: 'Learn to find solutions that address multiple stakeholder needs through creative approaches',
            link: '/topics/foundational-mindsets/decision-making'
          },
          {
            skill: 'Scope Management',
            reason: 'Understand how to effectively prioritize and phase feature development',
            link: '/library/scope-management'
          }
        ],
        realWorldExample: {
          title: 'Fintech Dashboard Phased Release',
          description: 'A product designer proposed a phased approach for a complex analytics dashboard, delivering core reporting in 6 weeks and advanced features over 3 months.',
          outcome: 'The phased approach satisfied both business timelines and technical quality requirements. The initial release received positive feedback, and the enhancement roadmap became a model for future feature development.'
        }
      }
    },
    {
      id: 'user-research',
      text: 'Propose rapid user research to validate which features are essential for the initial launch.',
      feedback: 'This data-driven approach provides objective criteria for decisions, though it adds time to an already tight timeline.',
      consequences: {
        immediate: 'Teams appreciate the user-centered approach but worry about timeline impact.',
        shortTerm: 'Research provides clear direction but may delay decision-making.',
        longTerm: 'Data-driven decisions lead to better outcomes and establish you as a strategic, user-focused leader.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 6 },
        { area: 'emotional-intelligence', impact: 6 },
        { area: 'decision-making', impact: 8 }
      ],
      enhancedConsequences: {
        severity: {
          immediate: 'neutral' as const,
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
            stakeholder: 'Engineering Team',
            impact: 'Appreciates data-driven approach but concerned about additional timeline pressure',
            severity: 'neutral' as const
          },
          {
            stakeholder: 'Marketing Team',
            impact: 'Values user focus but worried about delaying client commitments further',
            severity: 'neutral' as const
          },
          {
            stakeholder: 'VP of Product',
            impact: 'Appreciates strategic, user-centered thinking but needs quick resolution',
            severity: 'positive' as const
          }
        ],
        alternatives: {
          immediate: 'Propose rapid research methods like user interviews or surveys that can be completed quickly',
          shortTerm: 'Use existing user data and analytics to inform decisions if new research isn\'t feasible',
          longTerm: 'Establish ongoing user research processes to inform future feature planning'
        },
        mitigation: {
          immediate: 'Design research plan that can provide insights within the decision timeline',
          shortTerm: 'Combine research insights with stakeholder input to make informed compromises',
          longTerm: 'Use research outcomes to demonstrate the value of user-centered decision making'
        },
        reflectionPrompts: [
          'How can you balance the need for user insights with urgent business timelines?',
          'What rapid research methods provide the most valuable insights for feature prioritization?',
          'How might advocating for user research influence your reputation as a strategic designer?'
        ],
        skillRecommendations: [
          {
            skill: 'Rapid User Research',
            reason: 'Learn to conduct meaningful user research within tight timeline constraints',
            link: '/library/rapid-research'
          },
          {
            skill: 'Data-Driven Decision Making',
            reason: 'Understand how to use user insights to inform strategic product decisions',
            link: '/topics/foundational-mindsets/decision-making'
          }
        ],
        realWorldExample: {
          title: 'B2B Software Feature Validation',
          description: 'A product designer proposed rapid user interviews to resolve a timeline conflict for a new workflow feature.',
          outcome: 'The 3-day research sprint revealed that users valued speed over advanced features. This insight led to a simplified design that met the 6-week timeline while delivering high user satisfaction.'
        }
      }
    },
    {
      id: 'escalate-decision',
      text: 'Present the trade-offs to the VP of Product and let them make the final decision.',
      feedback: 'While this ensures senior leadership involvement, it may be seen as avoiding responsibility and missing an opportunity to demonstrate strategic thinking.',
      consequences: {
        immediate: 'VP makes the decision but you may be seen as not taking ownership.',
        shortTerm: 'Conflict is resolved but your influence in future cross-functional decisions may be reduced.',
        longTerm: 'You may be excluded from strategic discussions and seen as someone who escalates rather than solves problems.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 3 },
        { area: 'emotional-intelligence', impact: 4 },
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
          shortTerm: 'high' as const,
          longTerm: 'medium' as const
        },
        stakeholderImpacts: [
          {
            stakeholder: 'Engineering Team',
            impact: 'May see you as not advocating for their technical concerns or taking leadership',
            severity: 'negative' as const
          },
          {
            stakeholder: 'Marketing Team',
            impact: 'May feel you\'re not supporting their business needs or showing initiative',
            severity: 'negative' as const
          },
          {
            stakeholder: 'VP of Product',
            impact: 'Gets the decision responsibility but may question your strategic thinking and leadership potential',
            severity: 'negative' as const
          }
        ],
        alternatives: {
          immediate: 'Present a recommended solution along with the trade-offs rather than just escalating the problem',
          shortTerm: 'Take ownership of implementing whatever decision is made and learn from the outcome',
          longTerm: 'Develop skills in cross-functional problem-solving to handle similar situations independently'
        },
        mitigation: {
          immediate: 'Frame the escalation as seeking guidance rather than avoiding responsibility',
          shortTerm: 'Take active ownership of implementing the VP\'s decision and managing stakeholder communication',
          longTerm: 'Use this experience to build better cross-functional problem-solving skills'
        },
        reflectionPrompts: [
          'What makes you feel that escalation is the best approach rather than proposing solutions?',
          'How might taking ownership of cross-functional problems affect your career development?',
          'What skills could you develop to handle similar timeline conflicts more independently?'
        ],
        skillRecommendations: [
          {
            skill: 'Strategic Problem Solving',
            reason: 'Learn to analyze complex situations and propose solutions rather than escalating decisions',
            link: '/topics/foundational-mindsets/decision-making'
          },
          {
            skill: 'Cross-functional Leadership',
            reason: 'Understand how to lead and influence across departments without formal authority',
            link: '/library/cross-functional-leadership'
          }
        ],
        realWorldExample: {
          title: 'Product Manager Escalation Pattern',
          description: 'A product manager consistently escalated cross-functional conflicts to senior leadership rather than proposing solutions.',
          outcome: 'Over time, the manager was excluded from strategic discussions and eventually moved to a more operational role. Leadership preferred team members who could solve problems independently.'
        }
      }
    }
  ],
  growthAreas: ['assertiveness', 'emotional-intelligence', 'decision-making'],
  difficulty: 'foundational',
  xpReward: 50
};