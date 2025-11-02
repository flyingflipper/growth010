import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BarChart2, BookOpen, Target, Brain, Zap } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { getArchetypeById } from '../data/archetypes';
import { scenarios } from '../data/scenarios';
import { microAssessments } from '../data/assessments';
import { getSkillsByLevel } from '../data/skillTaxonomy';
import { useSkillEngine } from '../hooks/useSkillEngine';
import Button from '../components/Button';
import Card from '../components/Card';
import ProgressBar from '../components/ProgressBar';
import ScenarioCard from '../components/ScenarioCard';
import MicroAssessmentCard from '../components/MicroAssessmentCard';
import HighlightedTopic from '../components/HighlightedTopic';
import ArchetypeComparison from '../components/ArchetypeComparison';
import ProgressMotivation from '../components/ProgressMotivation';
import SkillEngineRecommendations from '../components/SkillEngineRecommendations';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { recommendations, isLoading: skillEngineLoading } = useSkillEngine();
  
  if (!user) {
    navigate('/assessment');
    return null;
  }
  
  const archetype = getArchetypeById(user.archetype || '');
  const recommendedScenarios = scenarios.slice(0, 2);
  const randomAssessment = microAssessments[Math.floor(Math.random() * microAssessments.length)];
  const sortedGrowthAreas = [...user.growthAreas].sort((a, b) => b.score - a.score).slice(0, 3);
  
  // Get foundational vs applied skills
  const foundationalSkills = getSkillsByLevel('foundational');
  const appliedSkills = getSkillsByLevel('applied');
  
  return (
    <div className="min-h-screen bg-gray-50 pt-6 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Welcome to your Growth Dashboard</h1>
          <p className="text-gray-600">Track your progress and find opportunities to develop</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* AI Skill Engine Highlight */}
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mr-4">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-1">AI Skill Engine</h2>
                    <p className="text-gray-600">Get personalized learning recommendations powered by AI</p>
                  </div>
                </div>
                <Button
                  onClick={() => navigate('/skill-engine')}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Explore Engine
                </Button>
              </div>
            </Card>

            {/* Smart Recommendations Preview */}
            {recommendations.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Brain className="w-5 h-5 text-blue-600 mr-2" />
                    <h2 className="text-xl font-semibold text-gray-800">Smart Recommendations</h2>
                  </div>
                  <Button
                    variant="text"
                    size="sm"
                    onClick={() => navigate('/skill-engine')}
                    className="flex items-center"
                  >
                    View All
                    <ArrowRight size={16} className="ml-1" />
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {recommendations.slice(0, 2).map((recommendation) => (
                    <Card key={recommendation.skillId} className="border border-gray-200 hover:border-blue-300 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-gray-900">{recommendation.skillName}</h3>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                          AI Recommended
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        {recommendation.reasoning[0]}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{recommendation.estimatedTime}</span>
                        <Button
                          size="sm"
                          onClick={() => navigate(`/library/skills/${recommendation.skillId}`)}
                        >
                          Learn More
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Archetype Section */}
            {archetype && (
              <div className="space-y-6">
                <Card className="border border-gray-200">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <Target className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h2 className="text-xl font-semibold text-gray-800">Your Archetype: {archetype.name}</h2>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{archetype.description}</p>
                      
                      <div className="mb-4">
                        <h3 className="font-medium text-gray-800 mb-2">Focus Areas for Growth:</h3>
                        <div className="flex flex-wrap gap-4">
                          {archetype.growthAreas.map((area) => (
                            <HighlightedTopic
                              key={area}
                              id={area}
                              title={area.charAt(0).toUpperCase() + area.slice(1).replace('-', ' ')}
                              description={`Learn more about ${area.replace('-', ' ')}`}
                              ariaLabel={`Click to learn more about ${area.replace('-', ' ')}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-1/3 bg-gray-50 rounded-lg p-4">
                      <h3 className="font-medium text-gray-800 mb-3">Your Progress</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Scenarios Completed</span>
                            <span className="font-medium">{user.completedScenarios.length}/10</span>
                          </div>
                          <ProgressBar
                            value={user.completedScenarios.length}
                            max={10}
                            color="blue"
                          />
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Growth Areas Identified</span>
                            <span className="font-medium">{user.growthAreas.length}/8</span>
                          </div>
                          <ProgressBar
                            value={user.growthAreas.length}
                            max={8}
                            color="green"
                          />
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Overall Progress</span>
                            <span className="font-medium">
                              {Math.round(((user.completedScenarios.length / 10) + (user.growthAreas.length / 8)) / 2 * 100)}%
                            </span>
                          </div>
                          <ProgressBar
                            value={Math.round(((user.completedScenarios.length / 10) + (user.growthAreas.length / 8)) / 2 * 100)}
                            max={100}
                            color="blue"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                <ArchetypeComparison currentArchetype={user.archetype || ''} />
              </div>
            )}

            {/* Skill Taxonomy Section */}
            <div>
              <div className="flex items-center mb-4">
                <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-800">Your Learning Path</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border border-green-200 bg-green-50">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 font-bold text-sm">F</span>
                    </div>
                    <h3 className="font-semibold text-gray-800">Foundational Skills</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Core mindsets and behaviors that form the foundation of professional growth
                  </p>
                  <div className="space-y-2">
                    {foundationalSkills.slice(0, 3).map((skill) => (
                      <div key={skill.id} className="text-sm text-gray-700">
                        • {skill.name}
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 w-full border-green-300 text-green-700 hover:bg-green-100"
                    onClick={() => navigate('/library')}
                  >
                    Explore Foundational Skills
                  </Button>
                </Card>

                <Card className="border border-purple-200 bg-purple-50">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-bold text-sm">A</span>
                    </div>
                    <h3 className="font-semibold text-gray-800">Applied Skills</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Advanced techniques for complex workplace situations and leadership challenges
                  </p>
                  <div className="space-y-2">
                    {appliedSkills.slice(0, 3).map((skill) => (
                      <div key={skill.id} className="text-sm text-gray-700">
                        • {skill.name}
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 w-full border-purple-300 text-purple-700 hover:bg-purple-100"
                    onClick={() => navigate('/library')}
                  >
                    Explore Applied Skills
                  </Button>
                </Card>
              </div>
            </div>
            
            {/* Growth Areas */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <BarChart2 className="w-5 h-5 text-blue-600 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-800">Your Growth Areas</h2>
                </div>
                <Button
                  variant="text"
                  size="sm"
                  onClick={() => navigate('/progress')}
                  className="flex items-center"
                >
                  View All
                  <ArrowRight size={16} className="ml-1" />
                </Button>
              </div>
              
              {user.growthAreas.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {sortedGrowthAreas.map((area) => (
                    <Card key={area.id} className="bg-gradient-to-br from-blue-50 to-white border border-blue-100">
                      <h3 className="font-medium text-gray-800 mb-2">{area.name}</h3>
                      <ProgressBar
                        value={area.score}
                        max={10}
                        label={`Score: ${area.score}/10`}
                        color={area.score >= 7 ? 'green' : 'blue'}
                      />
                      {area.improvement && area.improvement > 0 && (
                        <p className="text-green-600 text-sm mt-2 font-medium">
                          +{area.improvement} improvement
                        </p>
                      )}
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="border border-gray-200 bg-gray-50 text-center py-6">
                  <p className="text-gray-600 mb-4">
                    Complete scenarios to identify and track your growth areas
                  </p>
                  <Button
                    variant="primary"
                    onClick={() => navigate('/scenarios')}
                  >
                    Explore Scenarios
                  </Button>
                </Card>
              )}
            </div>
            
            {/* Recommended Scenarios */}
            <div>
              <div className="flex items-center mb-4">
                <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-800">Recommended Practice Modules</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recommendedScenarios.map((scenario) => (
                  <ScenarioCard
                    key={scenario.id}
                    scenario={scenario}
                    completed={user.completedScenarios.includes(scenario.id)}
                  />
                ))}
              </div>
              
              <div className="mt-4 text-center">
                <Button
                  variant="outline"
                  onClick={() => navigate('/scenarios')}
                  className="flex items-center mx-auto"
                >
                  View All Practice Modules
                  <ArrowRight size={16} className="ml-1" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            {/* Progress Motivation */}
            <ProgressMotivation user={user} />
            
            {/* Mindset Pulse */}
            <div>
              <div className="flex items-center mb-4">
                <Target className="w-5 h-5 text-blue-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-800">Mindset Pulse</h2>
              </div>
              
              <MicroAssessmentCard 
                assessment={randomAssessment}
              />
            </div>
            
            {/* Growth Tip */}
            <Card className="border border-blue-200 bg-blue-50">
              <h3 className="font-medium text-gray-800 mb-3">Quick Growth Tip</h3>
              <p className="text-gray-700 mb-4">
                {archetype ? `As a ${archetype.name}, try dedicating 15 minutes each day to practice active listening without interrupting.` : 'Take time for self-reflection at the end of each workday.'}
              </p>
              <p className="text-sm text-gray-600">
                New tips appear each day to help you build better habits.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;