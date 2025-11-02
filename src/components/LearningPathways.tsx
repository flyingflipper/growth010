import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Map, 
  Clock, 
  Target, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp,
  CheckCircle,
  Circle,
  Zap,
  BookOpen,
  Play,
  FileText
} from 'lucide-react';
import { LearningPathway, PathwayStep, RecommendedAction } from '../lib/skillEngine';
import Card from './Card';

interface LearningPathwaysProps {
  pathways: Record<string, LearningPathway>;
  isLoading: boolean;
}

const LearningPathways: React.FC<LearningPathwaysProps> = ({
  pathways,
  isLoading
}) => {
  const [expandedPathway, setExpandedPathway] = useState<string | null>(null);
  const [selectedAlternative, setSelectedAlternative] = useState<Record<string, number>>({});

  const getActionIcon = (type: RecommendedAction['type']) => {
    switch (type) {
      case 'scenario': return <Zap className="w-3 h-3" />;
      case 'reading': return <FileText className="w-3 h-3" />;
      case 'video': return <Play className="w-3 h-3" />;
      case 'practice': return <Target className="w-3 h-3" />;
      default: return <BookOpen className="w-3 h-3" />;
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="h-48 bg-gray-200 rounded-lg"></div>
          </div>
        ))}
      </div>
    );
  }

  const pathwayEntries = Object.entries(pathways);

  if (pathwayEntries.length === 0) {
    return (
      <Card className="text-center py-8">
        <Map className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">No Learning Pathways Yet</h3>
        <p className="text-gray-600">
          Set some goal skills to see personalized learning pathways.
        </p>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <Map className="w-5 h-5 text-blue-600 mr-2" />
        <h2 className="text-xl font-semibold text-gray-900">Your Learning Pathways</h2>
      </div>

      <div className="space-y-6">
        {pathwayEntries.map(([skillId, pathway]) => (
          <Card key={skillId} className="border border-gray-200">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Path to {pathway.goalSkill}
                </h3>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{pathway.totalEstimatedTime}</span>
                  <span className="mx-2">•</span>
                  <span>{pathway.steps.length} steps</span>
                </div>
              </div>
              <button
                onClick={() => setExpandedPathway(expandedPathway === skillId ? null : skillId)}
                className="text-gray-500 hover:text-gray-700"
              >
                {expandedPathway === skillId ? <ChevronUp /> : <ChevronDown />}
              </button>
            </div>

            {/* Alternative Paths */}
            {pathway.alternativePaths && pathway.alternativePaths.length > 0 && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Choose your path:
                </label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedAlternative({ ...selectedAlternative, [skillId]: -1 })}
                    className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                      (selectedAlternative[skillId] ?? -1) === -1
                        ? 'bg-blue-100 text-blue-800 border-blue-300'
                        : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                    }`}
                  >
                    Standard ({pathway.totalEstimatedTime})
                  </button>
                  {pathway.alternativePaths.map((altPath, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedAlternative({ ...selectedAlternative, [skillId]: index })}
                      className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                        selectedAlternative[skillId] === index
                          ? 'bg-blue-100 text-blue-800 border-blue-300'
                          : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                      }`}
                    >
                      {altPath.name} ({altPath.estimatedTime})
                    </button>
                  ))}
                </div>
              </div>
            )}

            {expandedPathway === skillId && (
              <div className="border-t border-gray-200 pt-4">
                {(() => {
                  const selectedIndex = selectedAlternative[skillId] ?? -1;
                  const steps = selectedIndex >= 0 && pathway.alternativePaths
                    ? pathway.alternativePaths[selectedIndex].steps
                    : pathway.steps;

                  return (
                    <div className="space-y-4">
                      {steps.map((step, index) => (
                        <div key={step.skillId} className="flex items-start">
                          <div className="flex-shrink-0 mr-4">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                              {index < steps.length - 1 ? (
                                <Circle className="w-4 h-4 text-blue-600" />
                              ) : (
                                <CheckCircle className="w-4 h-4 text-green-600" />
                              )}
                            </div>
                            {index < steps.length - 1 && (
                              <div className="w-0.5 h-8 bg-gray-200 ml-4 mt-2"></div>
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium text-gray-900">{step.skillName}</h4>
                              <div className="flex items-center text-sm text-gray-500">
                                <Clock className="w-3 h-3 mr-1" />
                                {step.estimatedTime}
                              </div>
                            </div>
                            
                            <p className="text-sm text-gray-600 mb-3">{step.reasoning}</p>

                            {step.prerequisites.length > 0 && (
                              <div className="mb-3">
                                <span className="text-xs font-medium text-gray-500">Prerequisites: </span>
                                <span className="text-xs text-gray-600">
                                  {step.prerequisites.join(', ')}
                                </span>
                              </div>
                            )}

                            {step.actions.length > 0 && (
                              <div className="space-y-2">
                                <span className="text-xs font-medium text-gray-700">Recommended actions:</span>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                  {step.actions.slice(0, 4).map((action, actionIndex) => (
                                    <div
                                      key={actionIndex}
                                      className="flex items-center text-xs text-gray-600 bg-gray-50 rounded px-2 py-1"
                                    >
                                      {getActionIcon(action.type)}
                                      <span className="ml-1 truncate">{action.title}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            <div className="mt-3">
                              <Link
                                to={`/library/skills/${step.skillId}`}
                                className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                              >
                                Learn {step.skillName}
                                <ArrowRight className="w-3 h-3 ml-1" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })()}
              </div>
            )}

            <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
              <Link
                to={`/library/skills/${skillId}`}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                View Goal Skill Details
              </Link>
              <Link
                to="/scenarios"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
              >
                Start Learning
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LearningPathways;