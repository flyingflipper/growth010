import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, Users, Clock, AlertTriangle } from 'lucide-react';
import { getScenarioById } from '../data/scenarios';
import { useUser } from '../context/UserContext';
import Button from '../components/Button';
import Card from '../components/Card';
import ConsequenceTimeline from '../components/ConsequenceTimeline';
import ConsequenceAnalysis from '../components/ConsequenceAnalysis';

const ScenarioPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addCompletedScenario, updateGrowthArea, updateStreak, user } = useUser();
  
  const [step, setStep] = useState<'intro' | 'scenario' | 'choice' | 'feedback' | 'reflection'>('intro');
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [reflectionText, setReflectionText] = useState('');
  
  // Get scenario data from the single scenarios file
  const scenario = id ? getScenarioById(id) : null;
  
  // Debug logging
  useEffect(() => {
    if (scenario) {
      console.log('Scenario loaded:', scenario.title);
      console.log('Number of choices:', scenario.choices.length);
      console.log('Choice IDs:', scenario.choices.map(c => c.id));
    }
  }, [scenario]);
  
  useEffect(() => {
    if (!scenario) {
      navigate('/scenarios');
    }
  }, [scenario, navigate]);
  
  if (!scenario) {
    return null;
  }
  
  const handleSelectChoice = (choiceId: string) => {
    setSelectedChoice(choiceId);
    setStep('choice');
  };
  
  const handleContinueToFeedback = () => {
    setStep('feedback');
  };
  
  const handleContinueToReflection = () => {
    setStep('reflection');
  };
  
  const handleComplete = () => {
    if (selectedChoice) {
      // Mark scenario as completed
      addCompletedScenario(scenario.id);
      
      // Update streak
      updateStreak();
      
      // Update growth areas based on the choice made
      const choice = scenario.choices.find(c => c.id === selectedChoice);
      if (choice) {
        choice.impactAreas.forEach(impact => {
          updateGrowthArea(impact.area, impact.impact);
        });
      }
      
      // Navigate back to scenarios list
      navigate('/scenarios');
    }
  };
  
  const selectedChoiceData = selectedChoice 
    ? scenario.choices.find(choice => choice.id === selectedChoice)
    : null;
  
  const renderContent = () => {
    switch (step) {
      case 'intro':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{scenario.title}</h2>
            <p className="text-gray-700 mb-6">{scenario.description}</p>
            
            {/* Role Context */}
            <Card className="bg-blue-50 border border-blue-200 mb-6">
              <h3 className="font-semibold text-blue-800 mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Your Role & Context
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-blue-700">Your Role:</span>
                  <p className="text-blue-800">{scenario.roleContext.yourRole}</p>
                </div>
                {scenario.roleContext.teamSize && (
                  <div>
                    <span className="font-medium text-blue-700">Team Size:</span>
                    <p className="text-blue-800">{scenario.roleContext.teamSize}</p>
                  </div>
                )}
                {scenario.roleContext.timeline && (
                  <div>
                    <span className="font-medium text-blue-700">Timeline:</span>
                    <p className="text-blue-800">{scenario.roleContext.timeline}</p>
                  </div>
                )}
                {scenario.roleContext.stakes && (
                  <div>
                    <span className="font-medium text-blue-700">Stakes:</span>
                    <p className="text-blue-800">{scenario.roleContext.stakes}</p>
                  </div>
                )}
                {scenario.roleContext.pressure && (
                  <div>
                    <span className="font-medium text-blue-700">Pressure:</span>
                    <p className="text-blue-800">{scenario.roleContext.pressure}</p>
                  </div>
                )}
                {scenario.roleContext.stakeholders && (
                  <div>
                    <span className="font-medium text-blue-700">Key Stakeholders:</span>
                    <p className="text-blue-800">{scenario.roleContext.stakeholders}</p>
                  </div>
                )}
              </div>
            </Card>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {scenario.growthAreas.map((area) => (
                <span 
                  key={area}
                  className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                >
                  {area.charAt(0).toUpperCase() + area.slice(1).replace('-', ' ')}
                </span>
              ))}
            </div>
            
            <div className="mt-8">
              <Button onClick={() => setStep('scenario')}>
                Start Scenario
              </Button>
            </div>
          </div>
        );
        
      case 'scenario':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Situation</h2>
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">{scenario.situation}</p>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">How would you respond?</h3>
            <p className="text-gray-600 mb-6">Choose the approach that best reflects how you would handle this situation:</p>
            
            <div className="space-y-4">
              {scenario.choices.map((choice, index) => {
                console.log(`Rendering choice ${index + 1}:`, choice.id, choice.text.substring(0, 50) + '...');
                return (
                  <Card 
                    key={choice.id} 
                    className="border border-gray-200 hover:border-blue-300 transition-all duration-200 hover:shadow-md"
                    onClick={() => handleSelectChoice(choice.id)}
                    hover
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-blue-600 font-semibold text-sm">{String.fromCharCode(65 + index)}</span>
                      </div>
                      <p className="text-gray-700 flex-1">{choice.text}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                {scenario.choices.length} response options available
              </p>
            </div>
          </div>
        );
        
      case 'choice':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Choice</h2>
            
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-gray-800 mb-2">The Situation</h3>
              <p className="text-gray-700 mb-6">{scenario.situation}</p>
              
              {selectedChoiceData && (
                <div className="bg-white border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">You chose:</h3>
                  <p className="text-gray-700">{selectedChoiceData.text}</p>
                </div>
              )}
            </div>
            
            <div className="mt-8 flex justify-between">
              <Button 
                variant="outline" 
                onClick={() => setStep('scenario')}
                className="flex items-center"
              >
                <ChevronLeft size={16} className="mr-1" />
                Change Response
              </Button>
              <Button 
                onClick={handleContinueToFeedback}
                className="flex items-center"
              >
                See Analysis
                <ChevronRight size={16} className="ml-1" />
              </Button>
            </div>
          </div>
        );
        
      case 'feedback':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Expert Analysis</h2>
            
            {selectedChoiceData && (
              <div className="mb-8 space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-800 mb-2">Your Approach:</h3>
                  <p className="text-gray-700">{selectedChoiceData.text}</p>
                </div>
                
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-800 mb-2">Expert Analysis:</h3>
                  <p className="text-gray-700 mb-6">{selectedChoiceData.feedback}</p>
                  
                  <h3 className="font-semibold text-gray-800 mb-4">Impact on Growth Areas:</h3>
                  <div className="space-y-4">
                    {selectedChoiceData.impactAreas.map((impact) => (
                      <div key={impact.area}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium">
                            {impact.area.charAt(0).toUpperCase() + impact.area.slice(1).replace('-', ' ')}
                          </span>
                          <span>{impact.impact}/10</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`rounded-full h-2 ${
                              impact.impact >= 7 
                                ? 'bg-green-500' 
                                : impact.impact >= 4 
                                  ? 'bg-blue-500' 
                                  : 'bg-orange-500'
                            }`}
                            style={{ width: `${impact.impact * 10}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Consequences */}
                {selectedChoiceData.enhancedConsequences && (
                  <div className="space-y-6">
                    <ConsequenceTimeline
                      consequences={selectedChoiceData.consequences}
                      severity={selectedChoiceData.enhancedConsequences.severity}
                      confidence={selectedChoiceData.enhancedConsequences.confidence}
                      alternatives={selectedChoiceData.enhancedConsequences.alternatives}
                      mitigation={selectedChoiceData.enhancedConsequences.mitigation}
                      userArchetype={user?.archetype}
                    />

                    <ConsequenceAnalysis
                      stakeholderImpacts={selectedChoiceData.enhancedConsequences.stakeholderImpacts}
                      industryContext={selectedChoiceData.enhancedConsequences.industryContext}
                      realWorldExample={selectedChoiceData.enhancedConsequences.realWorldExample}
                      reflectionPrompts={selectedChoiceData.enhancedConsequences.reflectionPrompts}
                      skillRecommendations={selectedChoiceData.enhancedConsequences.skillRecommendations}
                    />
                  </div>
                )}

                {/* Fallback for scenarios without enhanced consequences */}
                {!selectedChoiceData.enhancedConsequences && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2 text-yellow-600" />
                      Potential Consequences
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-yellow-800">Immediate Impact:</h4>
                        <p className="text-yellow-700 text-sm">{selectedChoiceData.consequences.immediate}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-yellow-800">Short-term (1-3 months):</h4>
                        <p className="text-yellow-700 text-sm">{selectedChoiceData.consequences.shortTerm}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-yellow-800">Long-term (6+ months):</h4>
                        <p className="text-yellow-700 text-sm">{selectedChoiceData.consequences.longTerm}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            <div className="mt-8 flex justify-between">
              <Button 
                variant="outline" 
                onClick={() => setStep('choice')}
                className="flex items-center"
              >
                <ChevronLeft size={16} className="mr-1" />
                Back
              </Button>
              <Button 
                onClick={handleContinueToReflection}
                className="flex items-center"
              >
                Reflect
                <ChevronRight size={16} className="ml-1" />
              </Button>
            </div>
          </div>
        );
        
      case 'reflection':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Reflection</h2>
            
            <p className="text-gray-700 mb-6">
              Take a moment to reflect on this scenario and what you've learned. 
              How might you apply this insight in your work?
            </p>
            
            <div className="mb-8">
              <label htmlFor="reflection" className="block text-sm font-medium text-gray-700 mb-2">
                Your Reflection (optional)
              </label>
              <textarea
                id="reflection"
                rows={5}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Write your thoughts here..."
                value={reflectionText}
                onChange={(e) => setReflectionText(e.target.value)}
              ></textarea>
            </div>
            
            <div className="mt-8">
              <Button 
                onClick={handleComplete}
              >
                Complete Scenario (+{scenario.xpReward || 50} XP)
              </Button>
              <p className="text-sm text-gray-500 mt-2">
                Your growth areas will be updated based on your choices.
              </p>
            </div>
          </div>
        );
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <button 
            onClick={() => navigate('/scenarios')}
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to Practice Modules
          </button>
        </div>
        
        <Card className="border border-gray-200 p-6 sm:p-8">
          {renderContent()}
        </Card>
      </div>
    </div>
  );
};

export default ScenarioPage;