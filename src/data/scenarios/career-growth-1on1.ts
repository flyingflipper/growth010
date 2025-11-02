import { Scenario } from '../../types';

export const careerGrowth1on1Scenario: Scenario = {
  id: 'career-growth-1on1',
  title: 'Seeking Career Growth in Project-Focused 1:1s',
  description: 'Redirect your one-on-one meetings from project updates to meaningful career development discussions.',
  situation: 'Your weekly one-on-one meetings with your manager have become routine project status updates. Every week, the conversation focuses on deliverables, deadlines, and operational issues. When you try to bring up career development, training opportunities, or your long-term goals, your manager quickly redirects back to immediate work priorities. You\'re feeling stuck in your current role and frustrated that you\'re not getting the mentorship and growth guidance you need to advance your career.',
  roleContext: {
    yourRole: 'Financial Analyst',
    teamSize: '12-person finance team',
    timeline: 'This pattern has been consistent for the past 8 months',
    stakes: 'Career advancement and professional development',
    pressure: 'You see peers in other departments getting promoted while you feel stagnant',
    stakeholders: 'Direct manager, Finance Director, your professional development',
    history: 'You\'ve been in the role for 18 months, consistently meet targets, but haven\'t had substantive career conversations'
  },
  choices: [
    {
      id: 'send-agenda-beforehand',
      text: 'Send a structured agenda before each 1:1 that includes both project updates and career development topics.',
      feedback: 'This proactive approach sets clear expectations and ensures career topics get dedicated time. It shows professionalism and planning.',
      consequences: {
        immediate: 'Your manager appreciates the structure and comes prepared for both types of discussions.',
        shortTerm: 'More balanced conversations that address both immediate work and long-term growth.',
        longTerm: 'Consistent career development discussions lead to clearer growth path and opportunities.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 6 },
        { area: 'emotional-intelligence', impact: 6 },
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
            stakeholder: 'Direct Manager',
            impact: 'Appreciates the structure and preparation, becomes more engaged in career discussions',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Finance Team',
            impact: 'May adopt similar structured approaches to their own 1:1 meetings',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Finance Director',
            impact: 'Notices improved communication and professional development focus',
            severity: 'positive' as const
          }
        ],
        alternatives: {
          immediate: 'Start with a simple agenda format and refine based on what works',
          shortTerm: 'Include specific career goals and development requests in the agenda',
          longTerm: 'Use agenda success to propose more formal career development planning'
        },
        mitigation: {
          immediate: 'Balance operational and developmental topics to maintain manager buy-in',
          shortTerm: 'Be flexible with agenda timing while maintaining career development focus',
          longTerm: 'Use structured approach to document career development progress over time'
        },
        reflectionPrompts: [
          'How can you structure agendas to ensure both operational and developmental needs are met?',
          'What specific career development topics are most important to discuss regularly?',
          'How might this structured approach improve the overall quality of your 1:1 meetings?'
        ],
        skillRecommendations: [
          {
            skill: 'Meeting Management',
            reason: 'Learn to structure and facilitate productive professional conversations',
            link: '/library/meeting-management'
          },
          {
            skill: 'Career Planning Communication',
            reason: 'Understand how to effectively discuss career goals with your manager',
            link: '/topics/foundational-mindsets/assertiveness'
          }
        ],
        realWorldExample: {
          title: 'Marketing Analyst Agenda Success',
          description: 'A marketing analyst started sending structured agendas for 1:1s that included both project updates and career development topics.',
          outcome: 'The manager appreciated the preparation and began dedicating equal time to career discussions. The analyst was promoted to senior analyst within eight months.'
        }
      }
    },
    {
      id: 'request-separate-meetings',
      text: 'Ask for separate monthly career development meetings in addition to weekly operational 1:1s.',
      feedback: 'This approach acknowledges both needs while creating dedicated space for growth conversations. It shows respect for operational needs while advocating for development.',
      consequences: {
        immediate: 'Your manager understands the importance of career development and agrees to the additional time.',
        shortTerm: 'Clear separation allows for focused discussions on both operational and developmental topics.',
        longTerm: 'Structured approach to career development with regular progress check-ins and goal setting.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 7 },
        { area: 'emotional-intelligence', impact: 7 },
        { area: 'decision-making', impact: 7 }
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
            stakeholder: 'Direct Manager',
            impact: 'Appreciates the clear separation and can focus appropriately on each type of discussion',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Finance Team',
            impact: 'May see this as a model for their own career development conversations',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Finance Director',
            impact: 'Notices increased focus on team member development and career planning',
            severity: 'positive' as const
          }
        ],
        alternatives: {
          immediate: 'Start with quarterly career meetings if monthly seems too frequent',
          shortTerm: 'Use career meetings to create formal development plans and goals',
          longTerm: 'Leverage career meeting structure for promotion discussions and advancement planning'
        },
        mitigation: {
          immediate: 'Come prepared with specific career topics and goals for the dedicated meetings',
          shortTerm: 'Ensure career meetings remain focused and productive to maintain manager support',
          longTerm: 'Use the separate meeting structure to track and document career development progress'
        },
        reflectionPrompts: [
          'How can you make the most of dedicated career development time with your manager?',
          'What specific career goals and development needs should be the focus of these meetings?',
          'How might this separation improve both operational efficiency and career development?'
        ],
        skillRecommendations: [
          {
            skill: 'Career Development Planning',
            reason: 'Learn to structure and guide productive career development conversations',
            link: '/library/career-development'
          },
          {
            skill: 'Goal Setting and Tracking',
            reason: 'Understand how to set and monitor progress on professional development goals',
            link: '/topics/foundational-mindsets/decision-making'
          }
        ],
        realWorldExample: {
          title: 'Operations Analyst Career Meetings',
          description: 'An operations analyst requested monthly career development meetings separate from weekly operational 1:1s.',
          outcome: 'The separate meetings led to a clear development plan, targeted skill building, and promotion to operations manager within 14 months.'
        }
      }
    },
    {
      id: 'direct-conversation-about-pattern',
      text: 'Have a direct conversation about the meeting pattern and express your need for career guidance.',
      feedback: 'This honest approach addresses the issue directly while maintaining professionalism. It gives your manager insight into your career aspirations.',
      consequences: {
        immediate: 'Your manager realizes they\'ve been too focused on operations and commits to better balance.',
        shortTerm: 'Immediate improvement in meeting quality with more attention to your development needs.',
        longTerm: 'Stronger manager relationship and more intentional career development support.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 8 },
        { area: 'emotional-intelligence', impact: 8 },
        { area: 'decision-making', impact: 6 }
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
            stakeholder: 'Direct Manager',
            impact: 'Appreciates the honest feedback and becomes more aware of your career development needs',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Finance Team',
            impact: 'May benefit from improved manager awareness of team development needs',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Finance Director',
            impact: 'Sees improved manager-employee communication and development focus',
            severity: 'positive' as const
          }
        ],
        alternatives: {
          immediate: 'Frame the conversation around your career aspirations rather than criticism of current meetings',
          shortTerm: 'Follow up with specific development goals and requests for guidance',
          longTerm: 'Use improved communication to build stronger ongoing manager relationship'
        },
        mitigation: {
          immediate: 'Approach the conversation with curiosity and collaboration rather than complaint',
          shortTerm: 'Be specific about the type of career guidance and support you\'re seeking',
          longTerm: 'Maintain focus on career development while continuing to excel in operational responsibilities'
        },
        reflectionPrompts: [
          'How can you frame this conversation to be constructive rather than critical?',
          'What specific career guidance and support are you hoping to receive from your manager?',
          'How might this honest conversation strengthen your professional relationship?'
        ],
        skillRecommendations: [
          {
            skill: 'Difficult Conversations',
            reason: 'Learn to address sensitive topics while maintaining professional relationships',
            link: '/topics/foundational-mindsets/assertiveness'
          },
          {
            skill: 'Feedback Delivery',
            reason: 'Understand how to give constructive feedback to your manager professionally',
            link: '/library/upward-feedback'
          }
        ],
        realWorldExample: {
          title: 'HR Specialist Manager Conversation',
          description: 'An HR specialist had a direct conversation with their manager about the lack of career development focus in their 1:1 meetings.',
          outcome: 'The manager appreciated the feedback and realized they had been too operationally focused. They restructured meetings and the specialist was promoted to HR manager within a year.'
        }
      }
    },
    {
      id: 'propose-development-plan',
      text: 'Create a personal development plan and ask your manager to help you execute it.',
      feedback: 'This initiative shows ownership of your career while engaging your manager as a partner in your growth.',
      consequences: {
        immediate: 'Your manager is impressed by your initiative and becomes more invested in your development.',
        shortTerm: 'Clear development goals provide structure for career-focused conversations.',
        longTerm: 'Accelerated career growth with manager support and clear milestones.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 7 },
        { area: 'emotional-intelligence', impact: 6 },
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
            stakeholder: 'Direct Manager',
            impact: 'Impressed by your initiative and becomes more engaged in supporting your development',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Finance Director',
            impact: 'Notices your proactive approach to career development and strategic thinking',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Finance Team',
            impact: 'May be inspired to create their own development plans and take ownership of growth',
            severity: 'positive' as const
          }
        ],
        alternatives: {
          immediate: 'Research development plan templates and best practices before creating yours',
          shortTerm: 'Include specific timelines, milestones, and success metrics in your plan',
          longTerm: 'Use the development plan as a foundation for promotion discussions and career advancement'
        },
        mitigation: {
          immediate: 'Ensure your development plan aligns with business needs and team goals',
          shortTerm: 'Be realistic about timelines and resource requirements for your development goals',
          longTerm: 'Regularly update and refine your development plan based on progress and changing priorities'
        },
        reflectionPrompts: [
          'What specific skills and experiences do you need to advance in your career?',
          'How can your development plan benefit both your growth and team objectives?',
          'What support and resources will you need from your manager to execute your plan?'
        ],
        skillRecommendations: [
          {
            skill: 'Strategic Career Planning',
            reason: 'Learn to create comprehensive development plans that drive career advancement',
            link: '/library/career-planning'
          },
          {
            skill: 'Self-Directed Learning',
            reason: 'Understand how to take ownership of your professional development',
            link: '/topics/foundational-mindsets/decision-making'
          }
        ],
        realWorldExample: {
          title: 'Financial Analyst Development Plan Success',
          description: 'A financial analyst created a comprehensive development plan focused on strategic analysis skills and presented it to their manager.',
          outcome: 'The manager was impressed by the initiative and provided resources for training and stretch assignments. The analyst was promoted to senior analyst and then finance manager within 18 months.'
        }
      }
    },
    {
      id: 'seek-mentorship-elsewhere',
      text: 'Find mentorship and career guidance from other senior leaders while maintaining operational 1:1s.',
      feedback: 'This approach gets your needs met while working around your manager\'s limitations, though it may not address the core relationship issue.',
      consequences: {
        immediate: 'You find valuable mentorship from other leaders who are willing to invest in your growth.',
        shortTerm: 'Expanded network and diverse perspectives on career development.',
        longTerm: 'Strong professional relationships across the organization, though manager relationship remains limited.'
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
          longTerm: 'medium' as const
        },
        stakeholderImpacts: [
          {
            stakeholder: 'Senior Leaders/Mentors',
            impact: 'Appreciate your initiative and become invested in your career development',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Direct Manager',
            impact: 'May not realize the gap in career support they\'re providing',
            severity: 'neutral' as const
          },
          {
            stakeholder: 'Finance Team',
            impact: 'May see your networking success and learn from your approach',
            severity: 'positive' as const
          }
        ],
        alternatives: {
          immediate: 'Keep your manager informed about mentorship relationships to maintain transparency',
          shortTerm: 'Use external mentorship insights to improve conversations with your manager',
          longTerm: 'Leverage broader network for internal opportunities or career advancement'
        },
        mitigation: {
          immediate: 'Ensure mentorship relationships don\'t create conflicts with your manager',
          shortTerm: 'Be strategic about which mentors can provide the most valuable career guidance',
          longTerm: 'Consider whether external mentorship is sufficient or if manager relationship needs direct attention'
        },
        reflectionPrompts: [
          'What specific career guidance are you hoping to get from mentors that you\'re not receiving from your manager?',
          'How can you leverage mentorship relationships to accelerate your career development?',
          'What might be the long-term implications of not addressing the career development gap with your manager?'
        ],
        skillRecommendations: [
          {
            skill: 'Mentorship and Networking',
            reason: 'Learn to build and maintain valuable mentoring relationships',
            link: '/library/mentorship'
          },
          {
            skill: 'Internal Relationship Building',
            reason: 'Understand how to develop professional relationships across the organization',
            link: '/library/internal-networking'
          }
        ],
        realWorldExample: {
          title: 'Accounting Specialist Mentorship Network',
          description: 'An accounting specialist built mentoring relationships with senior finance leaders after struggling to get career guidance from their direct manager.',
          outcome: 'The mentorship network provided valuable career advice and visibility. The specialist was eventually recruited by one of their mentors for a senior role in another division.'
        }
      }
    },
    {
      id: 'escalate-to-hr',
      text: 'Discuss the lack of career development support with HR or your manager\'s supervisor.',
      feedback: 'This formal approach ensures your development needs are addressed at a higher level, but may strain your direct manager relationship.',
      consequences: {
        immediate: 'Your manager feels criticized and the relationship becomes more formal.',
        shortTerm: 'Higher-level intervention may improve development support but creates tension.',
        longTerm: 'Potential career advancement through organizational support, but possible long-term manager relationship issues.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 9 },
        { area: 'emotional-intelligence', impact: 3 },
        { area: 'decision-making', impact: 5 }
      ],
      enhancedConsequences: {
        severity: {
          immediate: 'negative' as const,
          shortTerm: 'neutral' as const,
          longTerm: 'negative' as const
        },
        confidence: {
          immediate: 'high' as const,
          shortTerm: 'medium' as const,
          longTerm: 'medium' as const
        },
        stakeholderImpacts: [
          {
            stakeholder: 'Direct Manager',
            impact: 'Feels criticized and may become defensive about their management approach',
            severity: 'negative' as const
          },
          {
            stakeholder: 'HR or Finance Director',
            impact: 'Appreciates being informed but may question why direct communication wasn\'t tried first',
            severity: 'neutral' as const
          },
          {
            stakeholder: 'Finance Team',
            impact: 'May feel uncomfortable about escalation and team dynamics',
            severity: 'negative' as const
          }
        ],
        alternatives: {
          immediate: 'Try direct conversation with your manager before escalating to higher levels',
          shortTerm: 'Use escalation as guidance-seeking rather than complaint filing',
          longTerm: 'Focus on rebuilding manager relationship while addressing development needs'
        },
        mitigation: {
          immediate: 'Frame escalation as seeking guidance on career development rather than criticizing your manager',
          shortTerm: 'Work to rebuild trust with your manager through consistent performance and communication',
          longTerm: 'Use this experience to develop better direct communication skills for future situations'
        },
        reflectionPrompts: [
          'What makes you feel that escalation is necessary before trying direct communication with your manager?',
          'How might this approach affect your daily working relationship and team dynamics?',
          'What alternative approaches could address your development needs while preserving relationships?'
        ],
        skillRecommendations: [
          {
            skill: 'Direct Communication',
            reason: 'Learn to address professional needs before requiring higher-level intervention',
            link: '/topics/foundational-mindsets/assertiveness'
          },
          {
            skill: 'Relationship Management',
            reason: 'Understand how to maintain professional relationships while advocating for your needs',
            link: '/library/relationship-management'
          }
        ],
        realWorldExample: {
          title: 'Business Analyst HR Escalation',
          description: 'A business analyst escalated lack of career development support to HR without first attempting direct conversation with their manager.',
          outcome: 'HR addressed the issue and the manager provided more development support, but the relationship remained strained. The analyst eventually transferred to another team for a fresh start.'
        }
      }
    }
  ],
  growthAreas: ['assertiveness', 'emotional-intelligence', 'decision-making'],
  difficulty: 'applied',
  xpReward: 75
};