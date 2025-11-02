import { Scenario } from '../../types';

export const crossFunctionalDisagreementScenario: Scenario = {
  id: 'cross-functional-disagreement',
  title: 'Cross-Functional Feature Disagreement',
  description: 'Navigate a technical disagreement with a UX designer about feature implementation that\'s blocking development progress.',
  situation: 'You\'re a frontend developer working on a new user dashboard feature. The UX designer, Maya, has created a design that requires complex animations and micro-interactions that you believe will significantly impact page performance and loading times. When you raised these concerns, Maya insisted that the user experience is paramount and that "technical limitations shouldn\'t compromise good design." The feature is due for review with the product manager in two days, and you need to find a path forward that works for both the user experience and technical performance.',
  roleContext: {
    yourRole: 'Frontend Developer',
    teamSize: 'Cross-functional product team of 6 people',
    timeline: 'Feature review scheduled in 2 days, sprint ends in 1 week',
    stakes: 'User dashboard is a key feature for Q4 product goals',
    pressure: 'Product manager expects demo-ready feature, performance metrics are being monitored',
    stakeholders: 'UX Designer (Maya), Product Manager, Backend Developer, QA Engineer',
    history: 'You and Maya have worked well together on previous features'
  },
  choices: [
    {
      id: 'implement-as-designed',
      text: 'Implement the design exactly as specified and address performance issues later if they arise.',
      feedback: 'This approach maintains team harmony and respects the design process, but may create technical debt and performance problems that are harder to fix later.',
      consequences: {
        immediate: 'Maya feels supported and the design vision is preserved for the upcoming review.',
        shortTerm: 'Performance issues may emerge during testing, requiring significant rework under time pressure.',
        longTerm: 'Technical debt accumulates, and you may be seen as someone who doesn\'t advocate for technical best practices.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 3 },
        { area: 'emotional-intelligence', impact: 6 },
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
          shortTerm: 'high' as const,
          longTerm: 'medium' as const
        },
        stakeholderImpacts: [
          {
            stakeholder: 'Maya (UX Designer)',
            impact: 'Feels respected and supported, maintains confidence in the collaborative process',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Product Manager',
            impact: 'Gets the expected demo but may face performance issues that delay release',
            severity: 'negative' as const
          },
          {
            stakeholder: 'Development Team',
            impact: 'May lose confidence in your technical advocacy and decision-making',
            severity: 'negative' as const
          }
        ],
        alternatives: {
          immediate: 'Propose a phased implementation where core functionality comes first, animations second',
          shortTerm: 'Set up performance monitoring to catch issues early in the development cycle',
          longTerm: 'Establish technical review processes earlier in the design phase'
        },
        mitigation: {
          immediate: 'Document the performance risks and timeline for addressing them',
          shortTerm: 'Implement performance monitoring and set clear metrics for acceptable performance',
          longTerm: 'Work with Maya to establish design-development collaboration guidelines'
        },
        reflectionPrompts: [
          'How might avoiding technical advocacy affect your professional reputation?',
          'What are the long-term implications of accumulating technical debt?',
          'How can you better communicate technical constraints during the design phase?'
        ],
        skillRecommendations: [
          {
            skill: 'Technical Communication',
            reason: 'Learn to articulate technical concerns in terms of user and business impact',
            link: '/topics/foundational-mindsets/assertiveness'
          },
          {
            skill: 'Cross-functional Collaboration',
            reason: 'Understand how to balance technical and design considerations effectively',
            link: '/library/cross-functional-collaboration'
          }
        ],
        realWorldExample: {
          title: 'E-commerce Platform Performance Issues',
          description: 'A developer implemented complex animations as designed without addressing performance concerns, thinking they could optimize later.',
          outcome: 'The feature caused significant page load delays, leading to user complaints and a rushed redesign that took three weeks to fix during a critical sales period.'
        }
      }
    },
    {
      id: 'refuse-implementation',
      text: 'Firmly decline to implement the design as specified, insisting on a simpler version for performance reasons.',
      feedback: 'While this protects technical quality, it may damage your relationship with Maya and could be seen as inflexible or not collaborative.',
      consequences: {
        immediate: 'Maya feels frustrated and may view you as difficult to work with or not understanding user needs.',
        shortTerm: 'The design-development relationship becomes strained, affecting future collaboration.',
        longTerm: 'You may be seen as someone who blocks creative solutions, potentially limiting your involvement in design decisions.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 8 },
        { area: 'emotional-intelligence', impact: 3 },
        { area: 'decision-making', impact: 5 }
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
            stakeholder: 'Maya (UX Designer)',
            impact: 'Feels dismissed and may lose trust in the collaborative design-development process',
            severity: 'negative' as const
          },
          {
            stakeholder: 'Product Manager',
            impact: 'May see you as inflexible and not focused on user experience goals',
            severity: 'negative' as const
          },
          {
            stakeholder: 'Development Team',
            impact: 'May appreciate technical advocacy but could see approach as too confrontational',
            severity: 'neutral' as const
          }
        ],
        alternatives: {
          immediate: 'Propose specific alternative solutions that balance performance and user experience',
          shortTerm: 'Collaborate with Maya to find creative solutions that meet both technical and design goals',
          longTerm: 'Establish better upfront communication about technical constraints in the design process'
        },
        mitigation: {
          immediate: 'Explain the user impact of performance issues, not just technical concerns',
          shortTerm: 'Work with Maya to prototype alternative approaches that preserve the design intent',
          longTerm: 'Build stronger relationships by showing flexibility and creative problem-solving'
        },
        reflectionPrompts: [
          'How can you advocate for technical quality while maintaining collaborative relationships?',
          'What alternative solutions might achieve both performance and user experience goals?',
          'How might your approach affect future design-development collaboration?'
        ],
        skillRecommendations: [
          {
            skill: 'Collaborative Problem Solving',
            reason: 'Learn to find solutions that address multiple stakeholder concerns',
            link: '/topics/foundational-mindsets/decision-making'
          },
          {
            skill: 'Influence Without Authority',
            reason: 'Understand how to advocate for technical concerns while building relationships',
            link: '/library/influence-without-authority'
          }
        ],
        realWorldExample: {
          title: 'Mobile App Design Conflict',
          description: 'A mobile developer refused to implement a designer\'s complex navigation system, insisting on a simpler approach without proposing alternatives.',
          outcome: 'The designer felt dismissed and complained to the product manager. The developer was seen as difficult to work with, and future design decisions were made without their input.'
        }
      }
    },
    {
      id: 'collaborative-solution',
      text: 'Propose working together to find alternative approaches that achieve the design goals while maintaining performance.',
      feedback: 'This collaborative approach respects both design and technical concerns while building stronger cross-functional relationships and often leads to innovative solutions.',
      consequences: {
        immediate: 'Maya feels heard and you both engage in creative problem-solving for the feature.',
        shortTerm: 'You develop a solution that balances user experience and performance, strengthening your working relationship.',
        longTerm: 'You build a reputation as a collaborative problem-solver who can bridge technical and design concerns effectively.'
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
            stakeholder: 'Maya (UX Designer)',
            impact: 'Feels respected and engaged in finding solutions, learns about technical considerations',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Product Manager',
            impact: 'Sees effective cross-functional collaboration and gets a solution that balances multiple concerns',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Development Team',
            impact: 'Observes good technical advocacy combined with collaborative problem-solving',
            severity: 'positive' as const
          }
        ],
        alternatives: {
          shortTerm: 'If collaboration doesn\'t yield solutions quickly, escalate to the product manager for guidance',
          longTerm: 'Establish regular design-development collaboration sessions for future projects'
        },
        mitigation: {
          immediate: 'Set clear timeline for finding solutions given the upcoming review deadline',
          shortTerm: 'Document the agreed-upon approach and performance expectations',
          longTerm: 'Use this collaboration as a model for future design-development partnerships'
        },
        reflectionPrompts: [
          'How can you frame technical constraints as opportunities for creative solutions?',
          'What can you learn from Maya\'s design perspective that might inform your technical approach?',
          'How might this collaborative approach influence future cross-functional projects?'
        ],
        skillRecommendations: [
          {
            skill: 'Design-Development Collaboration',
            reason: 'Learn to bridge technical and design perspectives effectively',
            link: '/topics/foundational-mindsets/decision-making'
          },
          {
            skill: 'Creative Problem Solving',
            reason: 'Understand how to find innovative solutions that satisfy multiple constraints',
            link: '/library/creative-problem-solving'
          }
        ],
        realWorldExample: {
          title: 'SaaS Dashboard Optimization Success',
          description: 'A frontend developer and UX designer collaborated to create a progressive loading approach that preserved complex interactions while maintaining performance.',
          outcome: 'Their solution became a design pattern used across the product. Both gained recognition for innovative cross-functional collaboration, and their partnership became highly sought after for complex features.'
        }
      }
    },
    {
      id: 'escalate-to-pm',
      text: 'Bring the disagreement to the product manager to make the final decision on priorities.',
      feedback: 'While this ensures a decision gets made, it may signal inability to resolve cross-functional conflicts independently and could damage your relationship with Maya.',
      consequences: {
        immediate: 'The product manager makes a decision, but both you and Maya may feel like the collaboration failed.',
        shortTerm: 'Future design-development discussions may be more formal and less collaborative.',
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
            stakeholder: 'Maya (UX Designer)',
            impact: 'May feel that the collaborative process was abandoned and direct communication failed',
            severity: 'negative' as const
          },
          {
            stakeholder: 'Product Manager',
            impact: 'Has to resolve conflicts that could be handled at the team level, may question team collaboration',
            severity: 'negative' as const
          },
          {
            stakeholder: 'Development Team',
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
          shortTerm: 'Work with Maya to present a unified set of options to the product manager',
          longTerm: 'Focus on building direct collaboration skills for future cross-functional challenges'
        },
        reflectionPrompts: [
          'What makes you feel that escalation is necessary at this stage?',
          'How might this approach affect your future working relationship with Maya?',
          'What collaboration skills could you develop to handle this situation more directly?'
        ],
        skillRecommendations: [
          {
            skill: 'Cross-functional Conflict Resolution',
            reason: 'Learn to resolve design-development disagreements before they require management intervention',
            link: '/topics/foundational-mindsets/assertiveness'
          },
          {
            skill: 'Peer Collaboration',
            reason: 'Understand how to work effectively with colleagues from different disciplines',
            link: '/library/peer-collaboration'
          }
        ],
        realWorldExample: {
          title: 'Product Team Escalation Backfire',
          description: 'A developer immediately escalated a design disagreement to the product manager without attempting collaborative resolution.',
          outcome: 'The product manager resolved the immediate issue but asked both team members to work on their collaboration skills. Future projects were more closely supervised, reducing their autonomy.'
        }
      }
    },
    {
      id: 'prototype-alternatives',
      text: 'Suggest creating quick prototypes of different approaches to test performance and user experience trade-offs.',
      feedback: 'This data-driven approach provides objective evidence for decision-making while demonstrating technical initiative and respect for user experience research.',
      consequences: {
        immediate: 'Maya appreciates the user-centered approach, and you both engage in evidence-based problem-solving.',
        shortTerm: 'You develop solutions based on actual data rather than assumptions, leading to better outcomes.',
        longTerm: 'You build a reputation as someone who uses data and prototyping to solve complex cross-functional challenges.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 6 },
        { area: 'emotional-intelligence', impact: 7 },
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
            stakeholder: 'Maya (UX Designer)',
            impact: 'Appreciates the user-centered, evidence-based approach to resolving the disagreement',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Product Manager',
            impact: 'Values the data-driven approach and gets objective evidence for decision-making',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Development Team',
            impact: 'Sees good technical leadership and innovative problem-solving approach',
            severity: 'positive' as const
          }
        ],
        alternatives: {
          immediate: 'If time is too limited for prototyping, focus on the most critical performance concerns',
          shortTerm: 'Use prototyping results to establish design-development guidelines for future projects',
          longTerm: 'Advocate for regular prototyping phases in the product development process'
        },
        mitigation: {
          immediate: 'Set clear timeline and success criteria for the prototyping exercise',
          shortTerm: 'Document findings to inform future design-development decisions',
          longTerm: 'Build prototyping into the regular design-development workflow'
        },
        reflectionPrompts: [
          'How can prototyping help bridge the gap between design vision and technical constraints?',
          'What can you learn from this data-driven approach to apply to future cross-functional challenges?',
          'How might this collaborative problem-solving approach influence team dynamics?'
        ],
        skillRecommendations: [
          {
            skill: 'Rapid Prototyping',
            reason: 'Learn to quickly test and validate design-development solutions',
            link: '/library/rapid-prototyping'
          },
          {
            skill: 'Data-Driven Decision Making',
            reason: 'Understand how to use evidence to resolve cross-functional disagreements',
            link: '/topics/foundational-mindsets/decision-making'
          }
        ],
        realWorldExample: {
          title: 'Fintech App Performance Optimization',
          description: 'A developer and designer created multiple prototypes to test different interaction approaches, measuring both user engagement and performance metrics.',
          outcome: 'They discovered a hybrid approach that achieved 95% of the design vision with minimal performance impact. Their methodology was adopted as standard practice for complex features across the company.'
        }
      }
    },
    {
      id: 'compromise-solution',
      text: 'Propose implementing the core interactions now and adding the complex animations in a future iteration.',
      feedback: 'This phased approach allows for immediate progress while preserving the design vision for future enhancement, though it requires careful planning to ensure follow-through.',
      consequences: {
        immediate: 'Both you and Maya feel heard, and the feature can move forward for the upcoming review.',
        shortTerm: 'The core functionality is delivered on time, with a clear plan for design enhancements.',
        longTerm: 'You build a reputation for finding practical solutions that balance multiple concerns and timelines.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 6 },
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
          shortTerm: 'medium' as const,
          longTerm: 'medium' as const
        },
        stakeholderImpacts: [
          {
            stakeholder: 'Maya (UX Designer)',
            impact: 'Feels that her design vision is respected and will be implemented, just in phases',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Product Manager',
            impact: 'Gets a deliverable feature for the review with a clear roadmap for enhancements',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Development Team',
            impact: 'Appreciates the practical approach that balances technical and design concerns',
            severity: 'positive' as const
          }
        ],
        alternatives: {
          immediate: 'Ensure the phased approach is formally documented and prioritized in the product roadmap',
          shortTerm: 'Set specific success metrics for when to implement the enhanced interactions',
          longTerm: 'Use this as a model for managing complex feature development in future projects'
        },
        mitigation: {
          immediate: 'Get explicit commitment from the product manager for the future iteration',
          shortTerm: 'Track user feedback on the core functionality to inform the enhancement phase',
          longTerm: 'Establish clear processes for phased feature development across the team'
        },
        reflectionPrompts: [
          'How can you ensure that phased approaches actually get completed rather than abandoned?',
          'What can you learn from this compromise that applies to future cross-functional challenges?',
          'How might this approach influence how the team handles complex features going forward?'
        ],
        skillRecommendations: [
          {
            skill: 'Agile Development Practices',
            reason: 'Learn to break complex features into deliverable phases effectively',
            link: '/library/agile-practices'
          },
          {
            skill: 'Stakeholder Management',
            reason: 'Understand how to manage expectations and commitments across multiple stakeholders',
            link: '/library/stakeholder-management'
          }
        ],
        realWorldExample: {
          title: 'Social Media Platform Feature Rollout',
          description: 'A development team implemented a new content creation feature in phases, starting with core functionality and adding advanced interactions based on user feedback.',
          outcome: 'The phased approach allowed for user testing and iteration. The final feature exceeded the original design vision and became one of the platform\'s most popular tools.'
        }
      }
    }
  ],
  growthAreas: ['assertiveness', 'emotional-intelligence', 'decision-making'],
  difficulty: 'foundational',
  xpReward: 50
};