import { Scenario } from '../../types';

export const performanceReviewDisagreementScenario: Scenario = {
  id: 'performance-review-disagreement',
  title: 'Performance Review Disagreement',
  description: 'Navigate a situation where you strongly disagree with your manager\'s assessment of your performance.',
  situation: 'Your annual performance review rated you as "meets expectations" despite what you believe was an exceptional year. You led a successful product launch, mentored two junior colleagues, and exceeded your sales targets by 15%. Your manager cited "communication issues" and "need for more strategic thinking" as areas holding you back from a higher rating. You feel this assessment is unfair and doesn\'t reflect your actual contributions.',
  roleContext: {
    yourRole: 'Senior Marketing Specialist',
    teamSize: '8-person marketing team',
    timeline: 'Performance review cycle just completed, promotion decisions happening in 2 weeks',
    stakes: 'Promotion to Marketing Manager role and 20% salary increase at stake',
    pressure: 'You know two peers received "exceeds expectations" ratings for what you consider lesser contributions',
    stakeholders: 'Direct manager, HR Business Partner, Marketing Director, junior team members you mentored',
    history: 'This is your third year in the role, previous reviews were "exceeds expectations"'
  },
  choices: [
    {
      id: 'formal-review-request',
      text: 'Request a formal review of your performance assessment through HR processes.',
      feedback: 'This approach ensures proper documentation and process, but may strain your relationship with your manager and could be seen as confrontational.',
      consequences: {
        immediate: 'Your manager feels challenged and the relationship becomes more formal and distant.',
        shortTerm: 'HR review may or may not change the rating, but the process creates tension in daily interactions.',
        longTerm: 'You may get a fair assessment, but your manager might be less likely to advocate for you in future opportunities.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 8 },
        { area: 'emotional-intelligence', impact: 3 },
        { area: 'decision-making', impact: 6 }
      ],
      enhancedConsequences: {
        severity: {
          immediate: 'negative' as const,
          shortTerm: 'negative' as const,
          longTerm: 'neutral' as const
        },
        confidence: {
          immediate: 'high' as const,
          shortTerm: 'high' as const,
          longTerm: 'medium' as const
        },
        stakeholderImpacts: [
          {
            stakeholder: 'Direct Manager',
            impact: 'Feels challenged and may become defensive about their assessment decisions',
            severity: 'negative' as const
          },
          {
            stakeholder: 'HR Business Partner',
            impact: 'Appreciates proper process but may view this as a relationship management issue',
            severity: 'neutral' as const
          },
          {
            stakeholder: 'Marketing Team',
            impact: 'May see this as setting a precedent for challenging performance reviews',
            severity: 'neutral' as const
          }
        ],
        alternatives: {
          immediate: 'Try a direct conversation with your manager first before involving HR',
          shortTerm: 'Focus on understanding the specific feedback rather than challenging the rating',
          longTerm: 'Build stronger ongoing communication with your manager throughout the year'
        },
        mitigation: {
          immediate: 'Frame the request as seeking clarity rather than challenging the assessment',
          shortTerm: 'Work to rebuild the manager relationship through consistent performance',
          longTerm: 'Use this experience to establish clearer performance expectations going forward'
        },
        reflectionPrompts: [
          'What specific evidence could support your case for a higher rating?',
          'How might your manager\'s perspective on your performance differ from your own?',
          'What would be the most constructive way to address this disagreement?'
        ],
        skillRecommendations: [
          {
            skill: 'Performance Communication',
            reason: 'Learn to discuss performance expectations and feedback more effectively',
            link: '/topics/foundational-mindsets/assertiveness'
          },
          {
            skill: 'Manager Relationship Management',
            reason: 'Understand how to build stronger ongoing communication with your manager',
            link: '/library/manager-relationships'
          }
        ],
        realWorldExample: {
          title: 'Sales Team Performance Dispute',
          description: 'A sales representative formally challenged their performance review through HR after exceeding targets but receiving a "meets expectations" rating.',
          outcome: 'HR upheld the original rating, citing feedback about collaboration issues. The relationship with the manager remained strained, and the rep transferred teams six months later.'
        }
      }
    },
    {
      id: 'direct-conversation',
      text: 'Schedule a private meeting with your manager to discuss the assessment and seek specific feedback.',
      feedback: 'This direct approach shows maturity and openness to feedback while advocating for yourself. It maintains the relationship while addressing your concerns.',
      consequences: {
        immediate: 'Your manager appreciates the professional approach and is willing to have an open dialogue.',
        shortTerm: 'You gain clarity on expectations and may be able to address the specific concerns raised.',
        longTerm: 'Stronger working relationship and clearer path to improvement, though the current rating may not change.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 7 },
        { area: 'emotional-intelligence', impact: 8 },
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
            impact: 'Appreciates the professional approach and feels respected in the conversation',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Marketing Team',
            impact: 'Sees professional handling of performance feedback and conflict resolution',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Junior Team Members',
            impact: 'Observes mature approach to receiving and discussing feedback',
            severity: 'positive' as const
          }
        ],
        alternatives: {
          shortTerm: 'If the conversation doesn\'t yield clarity, consider involving HR for guidance',
          longTerm: 'Establish regular check-ins to prevent future performance surprises'
        },
        mitigation: {
          immediate: 'Prepare specific examples of your contributions and ask for specific improvement areas',
          shortTerm: 'Follow up with a written summary of the discussion and agreed-upon next steps',
          longTerm: 'Use this conversation to establish ongoing performance dialogue throughout the year'
        },
        reflectionPrompts: [
          'How can you approach this conversation with genuine curiosity about your manager\'s perspective?',
          'What specific examples can you share that demonstrate your contributions?',
          'How might this conversation strengthen your working relationship going forward?'
        ],
        skillRecommendations: [
          {
            skill: 'Difficult Conversations',
            reason: 'Learn to navigate sensitive performance discussions while maintaining relationships',
            link: '/topics/foundational-mindsets/assertiveness'
          },
          {
            skill: 'Feedback Reception',
            reason: 'Understand how to receive and process performance feedback constructively',
            link: '/library/feedback-skills'
          }
        ],
        realWorldExample: {
          title: 'Marketing Manager Performance Discussion',
          description: 'A marketing specialist had an open conversation with their manager about a disappointing performance review, focusing on understanding expectations.',
          outcome: 'The conversation revealed misaligned expectations about strategic thinking. They created a development plan together, and the specialist was promoted the following year.'
        }
      }
    },
    {
      id: 'gather-evidence',
      text: 'Compile detailed documentation of your achievements and request a follow-up discussion.',
      feedback: 'This methodical approach provides concrete evidence for your case and shows professionalism, though it may come across as defensive.',
      consequences: {
        immediate: 'Your manager sees your preparation and takes your concerns more seriously.',
        shortTerm: 'The documentation helps clarify your contributions, potentially leading to a revised assessment.',
        longTerm: 'You establish a pattern of documenting achievements, which helps in future reviews.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 6 },
        { area: 'emotional-intelligence', impact: 5 },
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
          shortTerm: 'medium' as const,
          longTerm: 'high' as const
        },
        stakeholderImpacts: [
          {
            stakeholder: 'Direct Manager',
            impact: 'Appreciates the thorough documentation but may feel their judgment is being questioned',
            severity: 'neutral' as const
          },
          {
            stakeholder: 'HR Business Partner',
            impact: 'Values the professional approach and comprehensive documentation',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Marketing Team',
            impact: 'Sees the importance of documenting achievements and contributions',
            severity: 'positive' as const
          }
        ],
        alternatives: {
          immediate: 'Frame the documentation as seeking alignment rather than challenging the assessment',
          shortTerm: 'Use the evidence to have a collaborative discussion about expectations',
          longTerm: 'Establish ongoing documentation practices for continuous performance tracking'
        },
        mitigation: {
          immediate: 'Present the documentation as a tool for discussion rather than proof of error',
          shortTerm: 'Focus on future performance expectations rather than past assessment disputes',
          longTerm: 'Use this process to establish clearer success metrics and documentation practices'
        },
        reflectionPrompts: [
          'How can you present your achievements without appearing defensive or confrontational?',
          'What patterns in your documentation might reveal areas for genuine improvement?',
          'How might this documentation process improve your ongoing performance management?'
        ],
        skillRecommendations: [
          {
            skill: 'Performance Documentation',
            reason: 'Learn to effectively track and present your professional contributions',
            link: '/library/performance-tracking'
          },
          {
            skill: 'Evidence-Based Communication',
            reason: 'Understand how to use data and examples to support professional discussions',
            link: '/topics/foundational-mindsets/assertiveness'
          }
        ],
        realWorldExample: {
          title: 'Product Manager Achievement Portfolio',
          description: 'A product manager compiled detailed documentation of their project successes and team impact after receiving an unexpected performance rating.',
          outcome: 'The documentation revealed significant contributions that weren\'t fully recognized. The manager revised the assessment, and the PM was promoted within six months.'
        }
      }
    },
    {
      id: 'seek-peer-feedback',
      text: 'Ask colleagues and mentees for feedback to better understand the "communication issues" mentioned.',
      feedback: 'This shows self-awareness and genuine interest in improvement, though it may not directly address the rating dispute.',
      consequences: {
        immediate: 'Colleagues appreciate being asked and provide valuable insights into your working style.',
        shortTerm: 'You gain a better understanding of how others perceive you and can address any real issues.',
        longTerm: 'Improved self-awareness and stronger relationships, positioning you better for future reviews.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 4 },
        { area: 'emotional-intelligence', impact: 9 },
        { area: 'decision-making', impact: 5 }
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
            stakeholder: 'Marketing Team Colleagues',
            impact: 'Appreciate being asked for input and see your commitment to professional growth',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Junior Team Members',
            impact: 'Impressed by your openness to feedback and self-improvement approach',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Direct Manager',
            impact: 'Sees your proactive approach to addressing feedback and professional development',
            severity: 'positive' as const
          }
        ],
        alternatives: {
          immediate: 'Also seek feedback from cross-functional partners for broader perspective',
          shortTerm: 'Use the feedback to create a specific development plan',
          longTerm: 'Establish regular feedback collection as part of your professional practice'
        },
        mitigation: {
          immediate: 'Be prepared for feedback that might be difficult to hear',
          shortTerm: 'Focus on actionable insights rather than defending past behavior',
          longTerm: 'Use this feedback to build stronger ongoing relationships and communication'
        },
        reflectionPrompts: [
          'What patterns emerge from the feedback you receive from different colleagues?',
          'How might your communication style impact others differently than you intended?',
          'What specific changes could you make based on this feedback?'
        ],
        skillRecommendations: [
          {
            skill: 'Self-Awareness Development',
            reason: 'Learn to better understand your impact on others and professional blind spots',
            link: '/topics/foundational-mindsets/self-awareness'
          },
          {
            skill: 'Communication Style Assessment',
            reason: 'Understand how your communication style affects different stakeholders',
            link: '/topics/foundational-mindsets/assertiveness'
          }
        ],
        realWorldExample: {
          title: 'Engineering Lead Feedback Collection',
          description: 'An engineering lead sought feedback from team members after receiving criticism about communication style in their performance review.',
          outcome: 'The feedback revealed that their direct communication style was perceived as dismissive. They adjusted their approach and saw significant improvement in team relationships and subsequent reviews.'
        }
      }
    },
    {
      id: 'accept-and-improve',
      text: 'Accept the rating gracefully and ask for a specific development plan to address the concerns.',
      feedback: 'This mature response focuses on growth rather than dispute, though it may not address potential unfairness in the current assessment.',
      consequences: {
        immediate: 'Your manager is impressed by your professionalism and willingness to grow.',
        shortTerm: 'You get clear guidance on improvement areas and strong manager support for development.',
        longTerm: 'Strong relationship with your manager and clear path to promotion, though you may miss this cycle.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 3 },
        { area: 'emotional-intelligence', impact: 7 },
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
          longTerm: 'medium' as const
        },
        stakeholderImpacts: [
          {
            stakeholder: 'Direct Manager',
            impact: 'Impressed by your maturity and becomes more invested in your development',
            severity: 'positive' as const
          },
          {
            stakeholder: 'HR Business Partner',
            impact: 'Sees professional handling of performance feedback',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Marketing Team',
            impact: 'Observes professional response to feedback and growth mindset',
            severity: 'positive' as const
          }
        ],
        alternatives: {
          immediate: 'Still ask clarifying questions about the specific feedback areas',
          shortTerm: 'Request regular check-ins to track progress on development areas',
          longTerm: 'Consider whether this approach aligns with your career advancement timeline'
        },
        mitigation: {
          immediate: 'Ensure you understand the specific development areas clearly',
          shortTerm: 'Set measurable goals and timelines for improvement',
          longTerm: 'Track your progress and ensure your development efforts are recognized'
        },
        reflectionPrompts: [
          'How can you balance acceptance with advocating for your career advancement?',
          'What specific development areas will have the most impact on your future performance?',
          'How might this approach affect your timeline for career progression?'
        ],
        skillRecommendations: [
          {
            skill: 'Growth Mindset Development',
            reason: 'Learn to view feedback as opportunities for professional growth',
            link: '/topics/foundational-mindsets/self-awareness'
          },
          {
            skill: 'Development Planning',
            reason: 'Understand how to create and execute effective professional development plans',
            link: '/library/development-planning'
          }
        ],
        realWorldExample: {
          title: 'Finance Analyst Development Success',
          description: 'A finance analyst accepted critical feedback about strategic thinking and worked with their manager to create a development plan.',
          outcome: 'The analyst completed strategic thinking training, took on more analytical projects, and was promoted to senior analyst the following year with strong manager advocacy.'
        }
      }
    },
    {
      id: 'propose-360-feedback',
      text: 'Suggest implementing a 360-degree feedback process to get a more comprehensive view of your performance.',
      feedback: 'This innovative approach shows leadership thinking and could benefit the entire team, while addressing your specific situation.',
      consequences: {
        immediate: 'Your manager is intrigued by the suggestion and sees your strategic thinking.',
        shortTerm: 'Implementation takes time, but you demonstrate leadership in improving team processes.',
        longTerm: 'You become known as someone who drives positive change, though immediate rating concerns remain unresolved.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 6 },
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
          immediate: 'medium' as const,
          shortTerm: 'medium' as const,
          longTerm: 'high' as const
        },
        stakeholderImpacts: [
          {
            stakeholder: 'Direct Manager',
            impact: 'Impressed by your strategic thinking and process improvement mindset',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Marketing Team',
            impact: 'Benefits from improved feedback processes and sees your leadership initiative',
            severity: 'positive' as const
          },
          {
            stakeholder: 'HR Business Partner',
            impact: 'Appreciates the systematic approach to performance feedback improvement',
            severity: 'positive' as const
          }
        ],
        alternatives: {
          immediate: 'Start with informal 360 feedback collection while proposing formal process',
          shortTerm: 'Pilot the approach with your team before broader implementation',
          longTerm: 'Use this initiative to demonstrate strategic thinking and process improvement skills'
        },
        mitigation: {
          immediate: 'Ensure the proposal doesn\'t appear to be solely about your own situation',
          shortTerm: 'Be prepared for the process to take time and may not immediately address your rating',
          longTerm: 'Focus on the broader team benefits while tracking your own development'
        },
        reflectionPrompts: [
          'How can you frame this proposal as benefiting the entire team rather than just addressing your situation?',
          'What would comprehensive 360 feedback reveal about your performance and impact?',
          'How might leading this initiative demonstrate the strategic thinking your manager mentioned?'
        ],
        skillRecommendations: [
          {
            skill: 'Process Improvement',
            reason: 'Learn to identify and implement better systems and processes',
            link: '/library/process-improvement'
          },
          {
            skill: 'Strategic Initiative Leadership',
            reason: 'Understand how to propose and lead organizational improvements',
            link: '/topics/foundational-mindsets/decision-making'
          }
        ],
        realWorldExample: {
          title: 'HR Specialist 360 Implementation',
          description: 'An HR specialist proposed implementing 360 feedback after receiving mixed performance review feedback about their stakeholder relationships.',
          outcome: 'The 360 process revealed strong cross-functional relationships and strategic thinking. The specialist was promoted to HR manager and led the company-wide 360 implementation.'
        }
      }
    }
  ],
  growthAreas: ['assertiveness', 'emotional-intelligence', 'decision-making'],
  difficulty: 'applied',
  xpReward: 75
};