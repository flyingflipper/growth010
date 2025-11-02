import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Clock, 
  Target, 
  ArrowRight, 
  RefreshCw, 
  TrendingUp,
  BookOpen,
  Play,
  FileText,
  Zap
} from 'lucide-react';
import { SkillRecommendation, RecommendedAction } from '../lib/skillEngine';
import Card from './Card';

interface SkillEngineRecommendationsProps {
  recommendations: SkillRecommendation[];
  isLoading: boolean;
}

const SkillEngineRecommendations: React.FC<SkillEngineRecommendationsProps> = ({
  recommendations,
  isLoading
}) => {
  const getPathwayIcon = (pathway: string) => {
    switch (pathway) {
      case 'reinforcement': return <RefreshCw className="w-4 h-4" />;
      case 'prerequisite': return <Target className="w-4 h-4" />;
      case 'direct': return <TrendingUp className="w-4 h-4" />;
      default: return <Brain className="w-4 h-4" />;
    }
  };

  const getPathwayColor = (pathway: string) => {
    switch (pathway) {
      case 'reinforcement': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'prerequisite': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'direct': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getActionIcon = (type: RecommendedAction['type']) => {
    switch (type) {
      case 'scenario': return <Zap className="w-4 h-4" />;
      case 'reading': return <FileText className="w-4 h-4" />;
      case 'video': return <Play className="w-4 h-4" />;
      case 'practice': return <Target className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="h-32 bg-gray-200 rounded-lg"></div>
          </div>
        ))}
      </div>
    );
  }

  if (recommendations.length === 0) {
    return (
      <Card className="text-center py-8">
        <Brain className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">No Recommendations Yet</h3>
        <p className="text-gray-600">
          Complete more scenarios to get personalized skill recommendations.
        </p>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Brain className="w-5 h-5 text-blue-600 mr-2" />
          <h2 className="text-xl font-semibold text-gray-900">AI-Powered Recommendations</h2>
        </div>
        <span className="text-sm text-gray-500">
          Updated based on your progress
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recommendations.map((recommendation) => (
          <Card key={recommendation.skillId} className="border border-gray-200 hover:border-blue-300 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getPathwayColor(recommendation.pathway)}`}>
                    {getPathwayIcon(recommendation.pathway)}
                    <span className="ml-1 capitalize">{recommendation.pathway}</span>
                  </div>
                  <div className="ml-2 text-xs text-gray-500">
                    Priority: {recommendation.priority}/100
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {recommendation.skillName}
                </h3>
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                {recommendation.estimatedTime}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Why this skill?</h4>
              <ul className="space-y-1">
                {recommendation.reasoning.map((reason, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    {reason}
                  </li>
                ))}
              </ul>
            </div>

            {recommendation.nextActions.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Recommended Actions</h4>
                <div className="space-y-2">
                  {recommendation.nextActions.slice(0, 2).map((action, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      {getActionIcon(action.type)}
                      <span className="ml-2">{action.title}</span>
                      <span className="ml-auto text-xs text-gray-500">{action.estimatedTime}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center justify-between">
              <Link
                to={`/library/skills/${recommendation.skillId}`}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              
              {recommendation.nextActions.some(action => action.type === 'scenario') && (
                <Link
                  to="/scenarios"
                  className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
                >
                  Practice Now
                </Link>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SkillEngineRecommendations;