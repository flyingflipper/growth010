import { Scenario } from '../../types';

export const difficultFeedbackScenario: Scenario = {
  id: 'difficult-feedback',
  title: 'Delivering Difficult Feedback',
  description: 'Navigate a challenging conversation with a team member who isn\'t meeting project expectations.',
  situation: 'You\'re leading a cross-functional project team of 6 people working on a critical product launch. One of your team members, Alex, has been consistently missing deliverable deadlines and their work quality has been below the team\'s standards. This is affecting the entire project timeline and team morale. Other team members have started to notice and are having to pick up the slack. You need to address this with Alex in your next one-on-one check-in.',
  roleContext: {
    yourRole: 'Project Team Lead',
    teamSize: '6-person cross-functional project team',
    timeline: 'This pattern has been ongoing for 3 weeks',
    stakes: 'Critical product launch in 5 weeks, with executive visibility',
    pressure: 'Other team members are starting to express frustration privately',
    stakeholders: 'Project team members, Product Manager, Engineering Lead, Design Lead',
    history: 'Alex was specifically chosen for this project due to their expertise in this domain'
  },
  choices: [
    {
      id: 'direct-feedback',
      text: 'Be direct and focus on the performance issues, clearly stating expectations and consequences.',
      feedback: 'Your straightforward approach ensures clarity about the project requirements, but without balancing it with empathy, the feedback might be received defensively, potentially damaging team dynamics.',
      consequences: {
        immediate: 'Alex becomes defensive and shuts down during the conversation.',
        shortTerm: 'They may improve temporarily but feel isolated from the team and start disengaging.',
        longTerm: 'You might lose a valuable team member\'s expertise, and other team members may view you as too harsh, affecting team psychological safety.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 8 },
        { area: 'emotional-intelligence', impact: 2 }
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
            stakeholder: 'Alex (Team Member)',
            impact: 'Feels attacked and becomes defensive, may lose confidence and withdraw from team collaboration',
            severity: 'negative' as const
          },
          {
            stakeholder: 'Project Team',
            impact: 'May worry about receiving similar harsh feedback, reducing psychological safety',
            severity: 'negative' as const
          },
          {
            stakeholder: 'Product Manager',
            impact: 'Sees you as decisive but may question your team leadership skills',
            severity: 'neutral' as const
          }
        ],
        alternatives: {
          immediate: 'Start with empathy: "I know you\'re committed to this project\'s success, and I want to help you contribute your best work."',
          shortTerm: 'Follow up with support and resources rather than just monitoring performance',
          longTerm: 'Build a development plan together to address root causes of the performance issues'
        },
        mitigation: {
          immediate: 'Acknowledge their domain expertise first and express confidence in their ability to improve',
          shortTerm: 'Schedule regular check-ins and provide specific, actionable guidance on project deliverables',
          longTerm: 'Invest in their professional development and celebrate improvements publicly to the team'
        },
        reflectionPrompts: [
          'How might your delivery style affect Alex\'s willingness to be vulnerable about challenges they\'re facing?',
          'What underlying issues might be causing the performance problems (workload, unclear requirements, personal challenges)?',
          'How can you balance accountability with maintaining team psychological safety?'
        ],
        skillRecommendations: [
          {
            skill: 'Emotional Intelligence',
            reason: 'Better reading of emotional cues would help you adjust your approach for team dynamics',
            link: '/topics/foundational-mindsets/emotional-intelligence'
          },
          {
            skill: 'Peer Leadership Skills',
            reason: 'Learning to influence and guide peers without formal authority',
            link: '/library/peer-leadership'
          }
        ],
        realWorldExample: {
          title: 'Software Project Team Conflict',
          description: 'A technical lead used direct feedback with a struggling team member, focusing only on missed deadlines without exploring causes.',
          outcome: 'The team member became withdrawn and stopped participating in team discussions. The project suffered from loss of their domain expertise, and team collaboration deteriorated.'
        }
      }
    },
    {
      id: 'sandwich-method',
      text: 'Use the "feedback sandwich" approach, starting with positives, addressing the issues, then ending with encouragement.',
      feedback: 'While this approach feels comfortable and maintains team harmony, research shows it often dilutes the core message. Alex might only remember the positive parts and miss the urgency of needed changes.',
      consequences: {
        immediate: 'The conversation feels pleasant, but the core message about project impact gets lost.',
        shortTerm: 'Performance issues continue because the urgency wasn\'t communicated effectively, affecting team deliverables.',
        longTerm: 'You\'ll need to have this conversation again, and Alex may feel blindsided by eventual project consequences or team frustration.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 4 },
        { area: 'emotional-intelligence', impact: 5 }
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
            stakeholder: 'Alex (Team Member)',
            impact: 'Feels good about the conversation but misses the urgency of needed changes for project success',
            severity: 'neutral' as const
          },
          {
            stakeholder: 'Project Team',
            impact: 'Continues to be affected by performance issues and may lose confidence in your leadership',
            severity: 'negative' as const
          },
          {
            stakeholder: 'Product Manager',
            impact: 'May question your ability to address project risks directly',
            severity: 'negative' as const
          }
        ],
        alternatives: {
          immediate: 'Use the SBI model (Situation-Behavior-Impact) for clearer feedback about project impact',
          shortTerm: 'Follow up within a week to ensure the message was understood and project timeline is on track',
          longTerm: 'Be more direct in future project conversations while maintaining team relationships'
        },
        mitigation: {
          immediate: 'End the conversation by asking Alex to summarize what they heard about project expectations',
          shortTerm: 'Set specific, measurable project goals with clear deadlines and team dependencies',
          longTerm: 'Document the conversation and create accountability checkpoints with the team'
        },
        reflectionPrompts: [
          'How can you be both supportive and clear about project requirements?',
          'What would happen if you were more direct about the impact on team deliverables?',
          'How might Alex interpret mixed messages about their project performance?'
        ],
        skillRecommendations: [
          {
            skill: 'Direct Communication',
            reason: 'Learning to be clear without being harsh improves project communication',
            link: '/topics/foundational-mindsets/assertiveness'
          },
          {
            skill: 'Project Feedback Models',
            reason: 'Structured approaches like SBI can replace the sandwich method for project contexts',
            link: '/library/effective-feedback'
          }
        ],
        realWorldExample: {
          title: 'Marketing Project Lead\'s Gentle Approach',
          description: 'A project lead used the sandwich method with an underperforming team member, emphasizing positives about their contributions.',
          outcome: 'The team member was shocked when removed from the project two weeks later, saying they thought they were doing well based on previous feedback. The project timeline suffered significantly.'
        }
      }
    },
    {
      id: 'coaching-approach',
      text: 'Take a coaching approach, asking questions to help them recognize the issues and develop their own solutions.',
      feedback: 'This approach builds lasting growth by developing self-awareness and ownership, while maintaining strong team relationships. It requires more time and skill to execute effectively but often yields the best long-term results.',
      consequences: {
        immediate: 'Alex feels heard and becomes engaged in problem-solving for the project.',
        shortTerm: 'They take ownership of improvement plans and show genuine commitment to team success.',
        longTerm: 'You develop a stronger, more self-aware team member who can handle similar project challenges independently and becomes a better collaborator.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 6 },
        { area: 'emotional-intelligence', impact: 8 }
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
            stakeholder: 'Alex (Team Member)',
            impact: 'Feels supported and empowered to improve, maintains dignity and team standing',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Project Team',
            impact: 'Sees you as a supportive leader who invests in team members and maintains team cohesion',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Product Manager',
            impact: 'Recognizes your team leadership and development skills',
            severity: 'positive' as const
          }
        ],
        alternatives: {
          shortTerm: 'If progress is slow, you might need to be more direct about project timeline constraints',
          longTerm: 'Consider formal coaching training to enhance these peer leadership skills further'
        },
        reflectionPrompts: [
          'What questions helped Alex discover insights about their project performance on their own?',
          'How did maintaining curiosity rather than judgment change the team dynamic?',
          'What did you learn about the root causes of their performance issues that might affect other team members?'
        ],
        skillRecommendations: [
          {
            skill: 'Active Listening',
            reason: 'Essential for effective coaching conversations with team peers',
            link: '/topics/foundational-mindsets/assertiveness'
          },
          {
            skill: 'Powerful Questioning',
            reason: 'Learn to ask questions that promote self-discovery in project contexts',
            link: '/library/coaching-questions'
          }
        ],
        realWorldExample: {
          title: 'Agile Team Lead Success',
          description: 'A scrum master used coaching questions to help a struggling developer identify that unclear user stories were causing quality issues.',
          outcome: 'The developer became one of the team\'s strongest contributors within a month and later helped improve the team\'s story refinement process.'
        }
      }
    },
    {
      id: 'delay-feedback',
      text: 'Postpone the conversation until you have more data or until project pressures aren\'t as high.',
      feedback: 'Delaying necessary feedback allows project problems to persist and may signal to other team members that underperformance is acceptable, potentially affecting overall team standards.',
      consequences: {
        immediate: 'You avoid an uncomfortable conversation, but the project issues continue.',
        shortTerm: 'Project deliverables suffer, and other team members notice the lack of accountability.',
        longTerm: 'You lose credibility as a team leader, and performance standards across the project team may decline.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 1 },
        { area: 'emotional-intelligence', impact: 3 }
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
          longTerm: 'high' as const
        },
        stakeholderImpacts: [
          {
            stakeholder: 'Alex (Team Member)',
            impact: 'Continues poor performance, unaware of the severity of impact on project and team',
            severity: 'negative' as const
          },
          {
            stakeholder: 'Project Team',
            impact: 'Loses respect for your leadership and questions fairness of project expectations',
            severity: 'negative' as const
          },
          {
            stakeholder: 'Product Manager',
            impact: 'Questions your ability to manage project performance and team dynamics',
            severity: 'negative' as const
          }
        ],
        alternatives: {
          immediate: 'Schedule the conversation for later today rather than postponing indefinitely',
          shortTerm: 'Prepare talking points about project impact to make the conversation more structured',
          longTerm: 'Develop your comfort with difficult team conversations through practice'
        },
        mitigation: {
          immediate: 'Set a specific date within 48 hours for the conversation',
          shortTerm: 'Address the delay with Alex and apologize for not acting sooner on project concerns',
          longTerm: 'Implement regular team check-ins to catch project issues earlier'
        },
        reflectionPrompts: [
          'What fears or concerns are driving your desire to delay this project conversation?',
          'How might your avoidance be perceived by other team members who are picking up the slack?',
          'What would you advise another team lead in this project situation?'
        ],
        skillRecommendations: [
          {
            skill: 'Difficult Conversations',
            reason: 'Building comfort with challenging discussions is essential for team leadership',
            link: '/topics/foundational-mindsets/assertiveness'
          },
          {
            skill: 'Project Leadership Courage',
            reason: 'Learn to act despite discomfort for the good of the project and team',
            link: '/library/leadership-courage'
          }
        ],
        realWorldExample: {
          title: 'Design Team Lead\'s Avoidance',
          description: 'A design team lead avoided addressing a team member\'s frequent missed deadlines for three weeks, hoping it would resolve itself.',
          outcome: 'Other team members began missing deadlines, citing unfairness. The project launch was delayed by two weeks, and team morale plummeted significantly.'
        }
      }
    },
    {
      id: 'collaborative-solution',
      text: 'Frame it as a team challenge and work together to identify obstacles and create an improvement plan.',
      feedback: 'This collaborative approach maintains team relationships while addressing project performance. It leverages the team dynamic and shared project ownership, though it may take longer to see individual results.',
      consequences: {
        immediate: 'Alex feels supported rather than criticized and opens up about project challenges.',
        shortTerm: 'You gain insights into systemic project issues affecting performance and build stronger team trust.',
        longTerm: 'Alex becomes more proactive about seeking help, and the overall team collaboration and project culture improves.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 5 },
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
          shortTerm: 'medium' as const,
          longTerm: 'medium' as const
        },
        stakeholderImpacts: [
          {
            stakeholder: 'Alex (Team Member)',
            impact: 'Feels valued and supported, more likely to be open about project challenges',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Project Team',
            impact: 'Sees collaborative problem-solving modeled, feels safer to raise project issues',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Product Manager',
            impact: 'Appreciates your team-building approach but may want faster project results',
            severity: 'neutral' as const
          }
        ],
        alternatives: {
          immediate: 'Be clear that while you\'re collaborating, project performance must improve',
          shortTerm: 'Set specific project milestones to ensure progress is being made',
          longTerm: 'Be prepared to escalate if collaborative approach doesn\'t yield project results'
        },
        mitigation: {
          immediate: 'Document the conversation and agreed-upon action items for project deliverables',
          shortTerm: 'Schedule weekly check-ins to monitor progress on project goals',
          longTerm: 'Have a backup plan if performance doesn\'t improve within 2 weeks given project timeline'
        },
        reflectionPrompts: [
          'How can you balance collaboration with project accountability?',
          'What systemic project issues might be contributing to this performance problem?',
          'How will you know if this approach is working within the project timeline?'
        ],
        skillRecommendations: [
          {
            skill: 'Collaborative Problem Solving',
            reason: 'Learn techniques for involving team members in finding project solutions',
            link: '/topics/foundational-mindsets/decision-making'
          },
          {
            skill: 'Team Systems Thinking',
            reason: 'Understanding how individual performance connects to team project success',
            link: '/library/systems-thinking'
          }
        ],
        realWorldExample: {
          title: 'Product Team Lead\'s Partnership',
          description: 'A team lead worked with a struggling team member to identify that unclear project requirements were causing quality issues.',
          outcome: 'Together they created a requirements checklist that improved the entire team\'s output. The team member became a champion for quality processes and project success.'
        }
      }
    },
    {
      id: 'escalate-to-manager',
      text: 'Document the issues and involve your manager or the Product Manager to ensure proper process and project protection.',
      feedback: 'While this protects the project procedurally, it may damage team trust and miss opportunities for genuine improvement through direct team leadership.',
      consequences: {
        immediate: 'Alex feels blindsided and the team relationship becomes formal and distant.',
        shortTerm: 'Management processes may improve documentation but could create an adversarial team dynamic.',
        longTerm: 'You may be seen as someone who doesn\'t handle difficult team conversations directly, affecting team trust and your leadership credibility.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 3 },
        { area: 'emotional-intelligence', impact: 2 },
        { area: 'decision-making', impact: 4 }
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
            stakeholder: 'Alex (Team Member)',
            impact: 'Feels betrayed and may become defensive or disengaged from the team',
            severity: 'negative' as const
          },
          {
            stakeholder: 'Project Team',
            impact: 'May lose trust in your ability to handle team issues directly',
            severity: 'negative' as const
          },
          {
            stakeholder: 'Product Manager',
            impact: 'Appreciates proper escalation but may question why you didn\'t try direct conversation first',
            severity: 'neutral' as const
          }
        ],
        alternatives: {
          immediate: 'Have a direct team conversation first, then involve management if needed',
          shortTerm: 'Use management as a resource for guidance rather than taking over the team situation',
          longTerm: 'Develop your skills in handling difficult team conversations independently'
        },
        mitigation: {
          immediate: 'Explain to Alex that you want to ensure fairness and proper project support',
          shortTerm: 'Work with management to create a development plan rather than just documentation',
          longTerm: 'Rebuild team trust by being more direct in future team situations'
        },
        reflectionPrompts: [
          'What made you feel that management involvement was necessary at this stage?',
          'How might this approach affect your relationship with other team members?',
          'What team leadership skills could you develop to handle this situation more directly?'
        ],
        skillRecommendations: [
          {
            skill: 'Team Conflict Resolution',
            reason: 'Learn to address team performance issues before they require management intervention',
            link: '/topics/foundational-mindsets/assertiveness'
          },
          {
            skill: 'Peer Leadership',
            reason: 'Understand how to lead and influence team members without formal authority',
            link: '/library/peer-leadership'
          }
        ],
        realWorldExample: {
          title: 'Engineering Team Lead\'s Escalation',
          description: 'A team lead immediately involved their manager for a performance issue without attempting direct team conversation first.',
          outcome: 'The team member felt ambushed and other team members lost confidence in the lead\'s ability to handle team issues. The manager recommended the lead try direct conversation first in future situations.'
        }
      }
    }
  ],
  growthAreas: ['assertiveness', 'emotional-intelligence', 'communication'],
  difficulty: 'foundational',
  xpReward: 50
};