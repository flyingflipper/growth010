import { Scenario } from '../../types';

export const resourceAllocationConflictScenario: Scenario = {
  id: 'resource-allocation-conflict',
  title: 'Resource Allocation Conflict',
  description: 'Address a situation where your manager consistently assigns the most interesting projects to other team members.',
  situation: 'Over the past six months, you\'ve noticed that your manager consistently assigns high-visibility, strategic projects to two specific team members while giving you routine maintenance work and smaller initiatives. When the latest exciting project—redesigning the company\'s flagship product—was announced, it was again assigned to your colleague who joined the team after you. You feel your skills and experience are being underutilized, and you\'re concerned this pattern is limiting your career growth and learning opportunities.',
  roleContext: {
    yourRole: 'Senior UX Designer',
    teamSize: '6-person design team',
    timeline: 'This pattern has been ongoing for 6 months',
    stakes: 'Career advancement and skill development opportunities',
    pressure: 'You\'re considering looking for opportunities elsewhere if this continues',
    stakeholders: 'Design Manager, fellow designers, Product team, your career development',
    history: 'You\'ve been with the company for 2 years, have strong performance reviews, but haven\'t worked on a major project in 8 months'
  },
  choices: [
    {
      id: 'direct-manager-conversation',
      text: 'Schedule a one-on-one with your manager to directly discuss project assignments and your career goals.',
      feedback: 'This direct approach shows professionalism and advocacy for your career while maintaining the relationship. It gives your manager a chance to explain and adjust.',
      consequences: {
        immediate: 'Your manager becomes aware of your concerns and may not have realized the pattern.',
        shortTerm: 'You get clarity on assignment criteria and may see more balanced project distribution.',
        longTerm: 'Stronger communication with your manager and more intentional career development conversations.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 8 },
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
          longTerm: 'high' as const
        },
        stakeholderImpacts: [
          {
            stakeholder: 'Design Manager',
            impact: 'Appreciates the direct communication and becomes more aware of project distribution patterns',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Fellow Designers',
            impact: 'May see more equitable project distribution and appreciate your professional approach',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Product Team',
            impact: 'Benefits from your increased engagement and contributions to strategic projects',
            severity: 'positive' as const
          }
        ],
        alternatives: {
          immediate: 'Prepare specific examples of projects you\'d like to work on',
          shortTerm: 'Propose a project rotation system if the conversation goes well',
          longTerm: 'Establish regular career development discussions with your manager'
        },
        mitigation: {
          immediate: 'Frame the conversation around career growth rather than fairness complaints',
          shortTerm: 'Follow up with specific project interests and skill development goals',
          longTerm: 'Document your project preferences and career objectives for ongoing reference'
        },
        reflectionPrompts: [
          'How can you present your case for more challenging projects without criticizing current assignments?',
          'What specific skills or experiences are you hoping to gain from different types of projects?',
          'How might your manager\'s perspective on project assignments differ from your own?'
        ],
        skillRecommendations: [
          {
            skill: 'Career Advocacy',
            reason: 'Learn to effectively communicate your career goals and project interests',
            link: '/topics/foundational-mindsets/assertiveness'
          },
          {
            skill: 'Manager Relationship Building',
            reason: 'Understand how to build stronger communication with your manager about development',
            link: '/library/manager-relationships'
          }
        ],
        realWorldExample: {
          title: 'Software Engineer Project Discussion',
          description: 'A senior developer had an open conversation with their manager about wanting more challenging projects after being assigned mostly maintenance work.',
          outcome: 'The manager revealed they thought the developer preferred stable work. They adjusted assignments, and the developer led a major architecture project within two months.'
        }
      }
    },
    {
      id: 'propose-project-rotation',
      text: 'Suggest implementing a project rotation system to ensure all team members get diverse experiences.',
      feedback: 'This systemic approach benefits the entire team while addressing your specific concern. It shows leadership thinking and collaborative problem-solving.',
      consequences: {
        immediate: 'Your manager appreciates the team-focused suggestion and sees your strategic thinking.',
        shortTerm: 'Implementation creates more equitable project distribution across the team.',
        longTerm: 'You become known as someone who improves team processes and advocates for fairness.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 6 },
        { area: 'emotional-intelligence', impact: 8 },
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
            stakeholder: 'Design Manager',
            impact: 'Impressed by your systems thinking and team-focused approach to problem-solving',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Fellow Designers',
            impact: 'Benefit from more diverse project opportunities and see your leadership initiative',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Product Team',
            impact: 'Gets to work with different designers and benefits from diverse perspectives',
            severity: 'positive' as const
          }
        ],
        alternatives: {
          immediate: 'Start with a pilot rotation for one upcoming project',
          shortTerm: 'Propose criteria for project assignments based on skill development needs',
          longTerm: 'Suggest regular team discussions about project preferences and growth goals'
        },
        mitigation: {
          immediate: 'Ensure the proposal addresses team needs, not just your own situation',
          shortTerm: 'Be prepared to help implement and refine the rotation system',
          longTerm: 'Use this initiative to demonstrate leadership and process improvement skills'
        },
        reflectionPrompts: [
          'How can you frame this proposal to benefit the entire team\'s development?',
          'What criteria should guide project assignments to ensure fairness and growth?',
          'How might this initiative demonstrate your leadership potential?'
        ],
        skillRecommendations: [
          {
            skill: 'Systems Thinking',
            reason: 'Learn to identify and propose improvements to team processes and structures',
            link: '/topics/foundational-mindsets/decision-making'
          },
          {
            skill: 'Team Leadership',
            reason: 'Understand how to drive positive change that benefits the entire team',
            link: '/library/team-leadership'
          }
        ],
        realWorldExample: {
          title: 'Marketing Team Rotation Success',
          description: 'A marketing specialist proposed a project rotation system after noticing uneven distribution of interesting campaigns across the team.',
          outcome: 'The rotation system was implemented and led to better team skill development and higher engagement. The specialist was promoted to team lead within a year.'
        }
      }
    },
    {
      id: 'volunteer-for-projects',
      text: 'Proactively volunteer for upcoming projects and clearly express your interest in challenging work.',
      feedback: 'This proactive approach shows initiative and enthusiasm, though it may not address the underlying assignment patterns.',
      consequences: {
        immediate: 'Your manager sees your enthusiasm and may consider you for future projects.',
        shortTerm: 'You get more visibility for your interests, but may still face the same assignment patterns.',
        longTerm: 'Reputation as someone eager to take on challenges, though systemic issues may persist.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 5 },
        { area: 'emotional-intelligence', impact: 4 },
        { area: 'decision-making', impact: 5 }
      ],
      enhancedConsequences: {
        severity: {
          immediate: 'positive' as const,
          shortTerm: 'neutral' as const,
          longTerm: 'neutral' as const
        },
        confidence: {
          immediate: 'high' as const,
          shortTerm: 'medium' as const,
          longTerm: 'low' as const
        },
        stakeholderImpacts: [
          {
            stakeholder: 'Design Manager',
            impact: 'Sees your enthusiasm but may not change existing assignment patterns',
            severity: 'neutral' as const
          },
          {
            stakeholder: 'Fellow Designers',
            impact: 'May appreciate your initiative or see it as competing for limited opportunities',
            severity: 'neutral' as const
          },
          {
            stakeholder: 'Product Team',
            impact: 'Notices your interest in contributing to strategic projects',
            severity: 'positive' as const
          }
        ],
        alternatives: {
          immediate: 'Combine volunteering with direct conversation about assignment criteria',
          shortTerm: 'Ask for feedback on what would make you a stronger candidate for strategic projects',
          longTerm: 'Consider more systematic approaches if volunteering doesn\'t change patterns'
        },
        mitigation: {
          immediate: 'Be specific about which types of projects interest you and why',
          shortTerm: 'Track whether your volunteering leads to actual assignment changes',
          longTerm: 'Be prepared to escalate if proactive approach doesn\'t yield results'
        },
        reflectionPrompts: [
          'What specific projects or types of work would best support your career development?',
          'How can you demonstrate readiness for more challenging assignments?',
          'What might be preventing your manager from assigning you to strategic projects?'
        ],
        skillRecommendations: [
          {
            skill: 'Proactive Communication',
            reason: 'Learn to effectively express your interests and capabilities',
            link: '/topics/foundational-mindsets/assertiveness'
          },
          {
            skill: 'Opportunity Recognition',
            reason: 'Understand how to identify and pursue growth opportunities',
            link: '/library/opportunity-recognition'
          }
        ],
        realWorldExample: {
          title: 'Product Designer Volunteering',
          description: 'A product designer consistently volunteered for high-profile projects but continued to be assigned routine work.',
          outcome: 'After six months of volunteering without assignment changes, the designer had a direct conversation with their manager and learned about specific skills they needed to develop first.'
        }
      }
    },
    {
      id: 'seek-cross-functional-opportunities',
      text: 'Build relationships with other teams to find project opportunities outside your direct manager\'s assignments.',
      feedback: 'This creative approach expands your network and opportunities while working around the current limitation.',
      consequences: {
        immediate: 'Other teams appreciate your initiative and may include you in their projects.',
        shortTerm: 'You gain diverse experience and visibility across the organization.',
        longTerm: 'Broader network and reputation, though it may not solve the core team dynamic issue.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 7 },
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
          longTerm: 'medium' as const
        },
        stakeholderImpacts: [
          {
            stakeholder: 'Cross-functional Teams',
            impact: 'Appreciate your initiative and benefit from your design expertise',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Design Manager',
            impact: 'May appreciate your initiative or feel bypassed depending on communication',
            severity: 'neutral' as const
          },
          {
            stakeholder: 'Fellow Designers',
            impact: 'May see your networking success and learn from your approach',
            severity: 'positive' as const
          }
        ],
        alternatives: {
          immediate: 'Keep your manager informed about cross-functional collaboration opportunities',
          shortTerm: 'Use cross-functional experience to demonstrate readiness for strategic projects',
          longTerm: 'Leverage broader network for internal opportunities or external career moves'
        },
        mitigation: {
          immediate: 'Ensure cross-functional work doesn\'t conflict with your primary responsibilities',
          shortTerm: 'Communicate with your manager about the value of cross-functional experience',
          longTerm: 'Be prepared that this approach may not address the core assignment issue'
        },
        reflectionPrompts: [
          'How can cross-functional collaboration enhance your skills and visibility?',
          'What value can you bring to other teams that might not be utilized in your current role?',
          'How might this networking approach support your long-term career goals?'
        ],
        skillRecommendations: [
          {
            skill: 'Cross-functional Collaboration',
            reason: 'Learn to build relationships and contribute value across different teams',
            link: '/library/cross-functional-collaboration'
          },
          {
            skill: 'Internal Networking',
            reason: 'Understand how to build professional relationships within your organization',
            link: '/library/internal-networking'
          }
        ],
        realWorldExample: {
          title: 'UX Designer Cross-team Success',
          description: 'A UX designer started collaborating with the marketing team on campaign designs after being limited to maintenance projects in their core role.',
          outcome: 'The cross-functional work showcased their strategic design thinking. They were eventually transferred to a new strategic design role and later promoted to design lead.'
        }
      }
    },
    {
      id: 'document-and-escalate',
      text: 'Document the pattern of assignments and discuss with HR or your manager\'s supervisor.',
      feedback: 'This formal approach ensures the issue is addressed at a higher level, but may damage your relationship with your direct manager.',
      consequences: {
        immediate: 'Your manager feels blindsided and the relationship becomes strained.',
        shortTerm: 'Higher-level attention may lead to changes, but daily working relationship suffers.',
        longTerm: 'Potential resolution of the issue, but possible long-term tension with your manager.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 9 },
        { area: 'emotional-intelligence', impact: 3 },
        { area: 'decision-making', impact: 7 }
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
            stakeholder: 'Design Manager',
            impact: 'Feels blindsided and may become defensive about their management practices',
            severity: 'negative' as const
          },
          {
            stakeholder: 'HR or Senior Leadership',
            impact: 'Appreciates proper escalation but may question why direct communication wasn\'t tried first',
            severity: 'neutral' as const
          },
          {
            stakeholder: 'Fellow Designers',
            impact: 'May feel uncomfortable about team dynamics and escalation approach',
            severity: 'negative' as const
          }
        ],
        alternatives: {
          immediate: 'Try direct conversation with your manager first before escalating',
          shortTerm: 'Use escalation as guidance-seeking rather than complaint filing',
          longTerm: 'Focus on rebuilding manager relationship while addressing systemic issues'
        },
        mitigation: {
          immediate: 'Frame escalation as seeking guidance rather than filing a complaint',
          shortTerm: 'Work to rebuild trust with your manager through consistent performance',
          longTerm: 'Use this experience to develop better direct communication skills'
        },
        reflectionPrompts: [
          'What makes you feel that escalation is necessary before trying direct communication?',
          'How might this approach affect your daily working relationship with your manager?',
          'What alternative approaches could address the issue while preserving relationships?'
        ],
        skillRecommendations: [
          {
            skill: 'Conflict Resolution',
            reason: 'Learn to address workplace issues before they require formal escalation',
            link: '/topics/foundational-mindsets/assertiveness'
          },
          {
            skill: 'Relationship Repair',
            reason: 'Understand how to rebuild professional relationships after conflicts',
            link: '/library/relationship-repair'
          }
        ],
        realWorldExample: {
          title: 'Developer Assignment Escalation',
          description: 'A software developer escalated project assignment concerns to HR without first discussing directly with their manager.',
          outcome: 'HR addressed the issue, but the manager relationship remained strained. The developer eventually transferred to another team to get a fresh start.'
        }
      }
    },
    {
      id: 'peer-collaboration',
      text: 'Collaborate with colleagues who get interesting projects to gain exposure and learning opportunities.',
      feedback: 'This collaborative approach builds relationships and creates learning opportunities, though it may not address the root assignment issue.',
      consequences: {
        immediate: 'Colleagues are willing to share knowledge and include you in their work.',
        shortTerm: 'You gain skills and visibility through collaboration and knowledge sharing.',
        longTerm: 'Strong peer relationships and expanded skills, but assignment patterns may continue.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 4 },
        { area: 'emotional-intelligence', impact: 8 },
        { area: 'decision-making', impact: 5 }
      ],
      enhancedConsequences: {
        severity: {
          immediate: 'positive' as const,
          shortTerm: 'positive' as const,
          longTerm: 'neutral' as const
        },
        confidence: {
          immediate: 'high' as const,
          shortTerm: 'high' as const,
          longTerm: 'medium' as const
        },
        stakeholderImpacts: [
          {
            stakeholder: 'Fellow Designers',
            impact: 'Appreciate your collaborative approach and willingness to contribute',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Design Manager',
            impact: 'Sees your team collaboration but assignment patterns may not change',
            severity: 'neutral' as const
          },
          {
            stakeholder: 'Product Team',
            impact: 'Benefits from your additional input and perspective on strategic projects',
            severity: 'positive' as const
          }
        ],
        alternatives: {
          immediate: 'Use collaboration to demonstrate your capabilities for strategic work',
          shortTerm: 'Leverage collaborative experience to make case for direct project assignments',
          longTerm: 'Combine collaboration with more direct approaches to address assignment patterns'
        },
        mitigation: {
          immediate: 'Ensure collaboration doesn\'t create additional workload without recognition',
          shortTerm: 'Track how collaborative contributions could support your case for better assignments',
          longTerm: 'Be prepared that collaboration alone may not solve the core assignment issue'
        },
        reflectionPrompts: [
          'How can collaboration help you develop skills needed for strategic project assignments?',
          'What value can you add to colleagues\' projects that demonstrates your capabilities?',
          'How might this collaborative approach complement other strategies for career advancement?'
        ],
        skillRecommendations: [
          {
            skill: 'Peer Collaboration',
            reason: 'Learn to build mutually beneficial relationships with colleagues',
            link: '/library/peer-collaboration'
          },
          {
            skill: 'Skill Development Through Observation',
            reason: 'Understand how to learn and grow through collaborative opportunities',
            link: '/library/skill-development'
          }
        ],
        realWorldExample: {
          title: 'Graphic Designer Collaboration Strategy',
          description: 'A graphic designer collaborated extensively with colleagues on strategic projects while continuing to receive routine assignments.',
          outcome: 'The collaboration built strong relationships and skills, but didn\'t change assignment patterns. The designer eventually used the collaborative experience to successfully interview for a strategic role at another company.'
        }
      }
    }
  ],
  growthAreas: ['assertiveness', 'emotional-intelligence', 'decision-making'],
  difficulty: 'applied',
  xpReward: 75
};