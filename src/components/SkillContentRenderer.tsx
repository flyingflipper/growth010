import React, { useState } from 'react';
import { CheckCircle, XCircle, Users, AlertTriangle, BookOpen, Play, FileText, Headphones, Monitor, PenTool as Tool, ChevronDown, ChevronUp, Target, Award, Clock, MessageCircle } from 'lucide-react';
import Card from './Card';
import PracticeScenario from './PracticeScenario';

interface SkillContentProps {
  content: any;
}

const SkillContentRenderer: React.FC<SkillContentProps> = ({ content }) => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['definition', 'pitfalls', 'scenarios']));

  // Early return if content is not available
  if (!content) {
    return <div className="p-4 text-center text-gray-500">Content not available</div>;
  }

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const getResourceIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'article': return <FileText className="w-4 h-4" />;
      case 'podcast': return <Headphones className="w-4 h-4" />;
      case 'video': return <Play className="w-4 h-4" />;
      case 'simulation': return <Monitor className="w-4 h-4" />;
      case 'tool': return <Tool className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const SectionHeader = ({ id, title, icon }: { id: string; title: string; icon: React.ReactNode }) => (
    <button
      onClick={() => toggleSection(id)}
      className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors rounded-lg border-b border-gray-200"
    >
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      {expandedSections.has(id) ? 
        <ChevronUp className="w-5 h-5 text-gray-500" /> : 
        <ChevronDown className="w-5 h-5 text-gray-500" />
      }
    </button>
  );

  // Function to safely render HTML content
  const renderHTML = (htmlContent: string) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="skill-content" />;
  };

  return (
    <div className="space-y-6">
      {/* Definition & Importance */}
      {content.definition && (
        <Card className="border border-gray-200 overflow-hidden">
          <SectionHeader 
            id="definition" 
            title="Skill Definition & Importance" 
            icon={<Target className="w-5 h-5 text-blue-600" />} 
          />
          {expandedSections.has('definition') && (
            <div className="p-6 space-y-6 bg-white">
              {content.definition.coreMessage && (
                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Core Message</h4>
                  <p className="text-blue-800">{content.definition.coreMessage}</p>
                </div>
              )}
              
              <div>
                {content.definition.whyItMatters && (
                  <>
                    <h4 className="font-semibold text-gray-900 mb-2">Why It Matters</h4>
                    <div className="text-gray-700 mb-3 skill-content">
                      {renderHTML(content.definition.whyItMatters)}
                    </div>
                  </>
                )}
                {content.definition.trustFoundation && (
                  <div className="mb-3">
                    <h4 className="font-semibold text-gray-900 mb-2">The Trust Foundation</h4>
                    <p className="text-gray-700">{content.definition.trustFoundation}</p>
                    <p className="text-blue-600 mt-3 mb-3">🔹 If there's no trust, feedback won't land—no matter how well it's worded.</p>
                    <p className="text-gray-700">📚 Want to go deeper? Explore the related skill: Building Trust in Professional Relationships.</p>
                  </div>
                )}
              </div>

              {content.definition.riskOfPoorFeedback && Array.isArray(content.definition.riskOfPoorFeedback) && (
                <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                  <h4 className="font-semibold text-red-900 mb-2">Common Risks of Avoiding Feedback</h4>
                  <ul className="space-y-1">
                    {content.definition.riskOfPoorFeedback.map((risk: string, index: number) => (
                      <li key={index} className="flex items-start text-red-800">
                        <span className="text-red-500 mr-2">•</span>
                        {risk}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <p className="text-gray-700">
                Whether you're giving feedback to a peer, receiving feedback from your manager, or navigating cross-functional tension, your ability to handle these moments with care and clarity is critical to your success.
              </p>
            </div>
          )}
        </Card>
      )}

      {/* Skill Maturity Levels */}
      {content.maturityLevels && Array.isArray(content.maturityLevels) && (
        <Card className="border border-gray-200 overflow-hidden">
          <SectionHeader 
            id="maturity" 
            title="Skill Maturity Levels" 
            icon={<Award className="w-5 h-5 text-blue-600" />} 
          />
          {expandedSections.has('maturity') && (
            <div className="p-6 bg-white">
              <div className="space-y-4">
                {content.maturityLevels.map((level: any, index: number) => {
                  // Generate different colors for different levels
                  const colors = [
                    'bg-gray-50 border-gray-200',
                    'bg-blue-50 border-blue-200',
                    'bg-green-50 border-green-200',
                    'bg-purple-50 border-purple-200',
                    'bg-indigo-50 border-indigo-200'
                  ];
                  const color = colors[index % colors.length];
                  
                  return (
                    <div key={index} className={`flex items-start p-4 rounded-lg border ${color}`}>
                      <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-gray-700 font-bold">{level.level || index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{level.name || 'Level'}</h4>
                        <p className="text-gray-700">{level.description || 'Description not available'}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </Card>
      )}

      {/* Micro-Scenarios */}
      {content.microScenarios && Array.isArray(content.microScenarios) && (
        <Card className="border border-gray-200 overflow-hidden">
          <SectionHeader 
            id="scenarios" 
            title="Practice Scenarios" 
            icon={<Users className="w-5 h-5 text-blue-600" />} 
          />
          {expandedSections.has('scenarios') && (
            <div className="p-6 space-y-6 bg-white">
              {content.microScenarios.map((scenario: any) => (
                <PracticeScenario
                  key={scenario.id}
                  id={scenario.id}
                  title={scenario.title}
                  scenario={scenario.scenario}
                  options={scenario.options}
                />
              ))}
            </div>
          )}
        </Card>
      )}

      {/* Role & Level Variants */}
      {content.roleLevelVariants && Array.isArray(content.roleLevelVariants) && (
        <Card className="border border-gray-200 overflow-hidden">
          <SectionHeader 
            id="roles" 
            title="Role & Level Applications" 
            icon={<Users className="w-5 h-5 text-blue-600" />} 
          />
          {expandedSections.has('roles') && (
            <div className="p-6 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.roleLevelVariants.map((variant: any, index: number) => {
                  // Generate different colors for different roles
                  const colors = [
                    'bg-blue-50 border-blue-200',
                    'bg-purple-50 border-purple-200',
                    'bg-green-50 border-green-200',
                    'bg-indigo-50 border-indigo-200'
                  ];
                  const color = colors[index % colors.length];
                  
                  return (
                    <div key={index} className={`p-4 rounded-lg border ${color}`}>
                      <h4 className="font-semibold text-gray-900 mb-2">{variant.role || 'Role'}</h4>
                      <p className="text-gray-700">{variant.focus || 'Focus area not specified'}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </Card>
      )}

      {/* Common Pitfalls */}
      {content.commonPitfalls && (
        <Card className="border border-gray-200 overflow-hidden">
          <SectionHeader 
            id="pitfalls" 
            title="Common Pitfalls & Misconceptions" 
            icon={<AlertTriangle className="w-5 h-5 text-blue-600" />} 
          />
          {expandedSections.has('pitfalls') && (
            <div className="p-6 bg-white">
              {content.commonPitfalls.description && (
                <p className="text-gray-700 mb-6">{content.commonPitfalls.description}</p>
              )}

              {content.commonPitfalls.selectiveFeedback && (
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">{content.commonPitfalls.selectiveFeedback.title}</h4>
                  <p className="text-gray-700 mb-4">{content.commonPitfalls.selectiveFeedback.description}</p>
                  
                  {content.commonPitfalls.selectiveFeedback.principles && Array.isArray(content.commonPitfalls.selectiveFeedback.principles) && (
                    <div className="bg-purple-50 border border-purple-100 rounded-lg p-5">
                      <ul className="space-y-3">
                        {content.commonPitfalls.selectiveFeedback.principles.map((principle: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <span className="text-purple-500 mr-2 mt-1">•</span>
                            <span className="text-gray-700">{principle}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {content.commonPitfalls.directCommunication && (
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">{content.commonPitfalls.directCommunication.title}</h4>
                  <p className="text-gray-700 mb-4">{content.commonPitfalls.directCommunication.description}</p>
                  
                  {content.commonPitfalls.directCommunication.principles && Array.isArray(content.commonPitfalls.directCommunication.principles) && (
                    <div className="bg-green-50 border border-green-100 rounded-lg p-5">
                      <ul className="space-y-3">
                        {content.commonPitfalls.directCommunication.principles.map((principle: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-500 mr-2 mt-1">•</span>
                            <span className="text-gray-700">{principle}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {content.commonPitfalls.choosingWords && (
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">{content.commonPitfalls.choosingWords.title}</h4>
                  <p className="text-gray-700 mb-4">{content.commonPitfalls.choosingWords.description}</p>
                  
                  {content.commonPitfalls.choosingWords.phrases && Array.isArray(content.commonPitfalls.choosingWords.phrases) && (
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {content.commonPitfalls.choosingWords.phrases.map((phrase: string, index: number) => (
                          <div key={index} className="flex items-start bg-white p-3 rounded-lg border border-blue-100">
                            <span className="text-blue-600 mr-2">"</span>
                            <span className="text-gray-700 italic">{phrase.replace(/"/g, '')}</span>
                            <span className="text-blue-600 ml-1">"</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {content.commonPitfalls.framingAndTiming && (
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">{content.commonPitfalls.framingAndTiming.title}</h4>
                  <p className="text-gray-700 mb-4">{content.commonPitfalls.framingAndTiming.description}</p>
                  
                  {content.commonPitfalls.framingAndTiming.questions && Array.isArray(content.commonPitfalls.framingAndTiming.questions) && (
                    <div className="bg-amber-50 border border-amber-100 rounded-lg p-5">
                      <ul className="space-y-3">
                        {content.commonPitfalls.framingAndTiming.questions.map((question: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              <span className="text-amber-700 font-bold text-xs">{index + 1}</span>
                            </div>
                            <span className="text-gray-700">{question}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Escalation Guidance Section */}
              {content.commonPitfalls.escalationGuidance && (
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">{content.commonPitfalls.escalationGuidance.title || "When and How to Escalate"}</h4>
                  <p className="text-gray-700 mb-4">{content.commonPitfalls.escalationGuidance.description}</p>
                  
                  {content.commonPitfalls.escalationGuidance.principles && Array.isArray(content.commonPitfalls.escalationGuidance.principles) && (
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-5 mb-4">
                      <h5 className="font-medium text-blue-900 mb-3">Core Principles</h5>
                      <ul className="space-y-2">
                        {content.commonPitfalls.escalationGuidance.principles.map((principle: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-700">{principle}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {content.commonPitfalls.escalationGuidance.escalationProcess && (
                    <div className="bg-green-50 border border-green-100 rounded-lg p-5 mb-4">
                      <h5 className="font-medium text-green-900 mb-3">{content.commonPitfalls.escalationGuidance.escalationProcess.title}</h5>
                      <ol className="space-y-2">
                        {content.commonPitfalls.escalationGuidance.escalationProcess.steps.map((step: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              <span className="text-green-700 font-bold text-xs">{index + 1}</span>
                            </div>
                            <span className="text-gray-700">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {content.commonPitfalls.escalationGuidance.whenToEscalate && (
                      <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-5">
                        <h5 className="font-medium text-indigo-900 mb-3">{content.commonPitfalls.escalationGuidance.whenToEscalate.title}</h5>
                        <ul className="space-y-2">
                          {content.commonPitfalls.escalationGuidance.whenToEscalate.examples.map((example: string, index: number) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-indigo-500 mr-2 mt-0.5" />
                              <span className="text-gray-700">{example}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {content.commonPitfalls.escalationGuidance.whenNotToEscalate && (
                      <div className="bg-red-50 border border-red-100 rounded-lg p-5">
                        <h5 className="font-medium text-red-900 mb-3">{content.commonPitfalls.escalationGuidance.whenNotToEscalate.title}</h5>
                        <ul className="space-y-2">
                          {content.commonPitfalls.escalationGuidance.whenNotToEscalate.examples.map((example: string, index: number) => (
                            <li key={index} className="flex items-start">
                              <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5" />
                              <span className="text-gray-700">{example}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  {content.commonPitfalls.escalationGuidance.impactOfPrematureEscalation && (
                    <div className="bg-amber-50 border border-amber-100 rounded-lg p-5">
                      <h5 className="font-medium text-amber-900 mb-3">{content.commonPitfalls.escalationGuidance.impactOfPrematureEscalation.title}</h5>
                      <ul className="space-y-2">
                        {content.commonPitfalls.escalationGuidance.impactOfPrematureEscalation.consequences.map((consequence: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <AlertTriangle className="w-4 h-4 text-amber-500 mr-2 mt-0.5" />
                            <span className="text-gray-700">{consequence}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {content.commonPitfalls.clarityNote && (
                <div className="mb-8 bg-gray-50 border-l-4 border-gray-300 rounded-r-lg p-4">
                  <p className="text-gray-700 italic">{content.commonPitfalls.clarityNote}</p>
                </div>
              )}

              {content.commonPitfalls.comparisonTable && Array.isArray(content.commonPitfalls.comparisonTable) && (
                <div className="overflow-x-auto bg-white rounded-lg border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr className="bg-gray-50">
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Good Feedback</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Poor Feedback</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Why It Matters</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {content.commonPitfalls.comparisonTable.map((row: any, index: number) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-6 py-4 text-sm font-medium text-green-700 bg-green-50">{row.good}</td>
                          <td className="px-6 py-4 text-sm text-red-700 bg-red-50">{row.poor}</td>
                          <td className="px-6 py-4 text-sm text-gray-700">{row.why}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </Card>
      )}

      {/* Case Study */}
      {content.caseStudy && content.caseStudy.story && (
        <Card className="border border-gray-200 overflow-hidden">
          <SectionHeader 
            id="casestudy" 
            title="Mini Case Study" 
            icon={<BookOpen className="w-5 h-5 text-blue-600" />} 
          />
          {expandedSections.has('casestudy') && (
            <div className="p-6 bg-white">
              <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-5">
                <h4 className="font-semibold text-indigo-900 mb-3">Real-World Example:</h4>
                <p className="text-indigo-800 leading-relaxed">{content.caseStudy.story}</p>
              </div>
            </div>
          )}
        </Card>
      )}

      {/* Practice Opportunities */}
      {content.practiceOpportunities && (
        <Card className="border border-gray-200 overflow-hidden">
          <SectionHeader 
            id="practice" 
            title="Practice Opportunities" 
            icon={<Target className="w-5 h-5 text-blue-600" />} 
          />
          {expandedSections.has('practice') && (
            <div className="p-6 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {content.practiceOpportunities.soloPractice && Array.isArray(content.practiceOpportunities.soloPractice) && (
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-3">Solo Practice</h4>
                    <ul className="space-y-2">
                      {content.practiceOpportunities.soloPractice.map((item: string, index: number) => (
                        <li key={index} className="flex items-start text-blue-800">
                          <span className="text-blue-500 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {content.practiceOpportunities.rolePlay && Array.isArray(content.practiceOpportunities.rolePlay) && (
                  <div className="bg-purple-50 border border-purple-100 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-900 mb-3">Role Play</h4>
                    <ul className="space-y-2">
                      {content.practiceOpportunities.rolePlay.map((item: string, index: number) => (
                        <li key={index} className="flex items-start text-purple-800">
                          <span className="text-purple-500 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {content.practiceOpportunities.liveApplication && Array.isArray(content.practiceOpportunities.liveApplication) && (
                  <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-3">Live Application</h4>
                    <ul className="space-y-2">
                      {content.practiceOpportunities.liveApplication.map((item: string, index: number) => (
                        <li key={index} className="flex items-start text-green-800">
                          <span className="text-green-500 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </Card>
      )}

      {/* Self-Reflection Prompts */}
      {content.selfReflectionPrompts && Array.isArray(content.selfReflectionPrompts) && (
        <Card className="border border-gray-200 overflow-hidden">
          <SectionHeader 
            id="reflection" 
            title="Self-Reflection Prompts" 
            icon={<Clock className="w-5 h-5 text-blue-600" />} 
          />
          {expandedSections.has('reflection') && (
            <div className="p-6 bg-white">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {content.selfReflectionPrompts.map((prompt: string, index: number) => (
                    <div key={index} className="flex items-start bg-white p-3 rounded-lg border border-gray-200">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-xs font-bold text-blue-700">{index + 1}</span>
                      </div>
                      <p className="text-gray-700">{prompt}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Card>
      )}

      {/* Learning Resources */}
      {content.learningResources && Array.isArray(content.learningResources) && (
        <Card className="border border-gray-200 overflow-hidden">
          <SectionHeader 
            id="resources" 
            title="Recommended Learning Resources" 
            icon={<BookOpen className="w-5 h-5 text-blue-600" />} 
          />
          {expandedSections.has('resources') && (
            <div className="p-6 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.learningResources.map((resource: any, index: number) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-blue-200 transition-colors">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-4 shadow-sm">
                      {resource.icon ? (
                        <span className="text-xl">{resource.icon}</span>
                      ) : (
                        getResourceIcon(resource.type || 'article')
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-medium text-blue-600">{resource.type || 'Resource'}</span>
                      <h4 className="font-medium text-gray-900">{resource.title || 'Resource Title'}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Card>
      )}
    </div>
  );
};

export default SkillContentRenderer;