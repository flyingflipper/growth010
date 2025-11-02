import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Zap } from 'lucide-react';
import { useSkillEngine } from '../hooks/useSkillEngine';
import SkillEngineRecommendations from '../components/SkillEngineRecommendations';
import LearningPathways from '../components/LearningPathways';
import SkillEngineInsights from '../components/SkillEngineInsights';

const SkillEnginePage: React.FC = () => {
  const { 
    isLoading, 
    recommendations, 
    pathways, 
    getLearnerProfile 
  } = useSkillEngine();

  const profile = getLearnerProfile();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            to="/dashboard"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to Dashboard
          </Link>
          
          <div className="flex items-center mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mr-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">AI Skill Engine</h1>
              <p className="text-xl text-gray-600 mt-2">
                Personalized learning recommendations powered by AI
              </p>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6 mb-8">
            <div className="flex items-start">
              <Zap className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">How the Skill Engine Works</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-blue-800">
                  <div>
                    <div className="font-medium mb-1">🎯 Analyzes Your Profile</div>
                    <div>Understands your archetype, strengths, and learning style</div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">🧠 Maps Dependencies</div>
                    <div>Identifies skill prerequisites and optimal learning sequences</div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">📈 Tracks Progress</div>
                    <div>Monitors your skill development and confidence levels</div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">🚀 Adapts Recommendations</div>
                    <div>Adjusts learning paths based on your progress and goals</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {/* Insights Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Your Learning Insights</h2>
            <SkillEngineInsights profile={profile} isLoading={isLoading} />
          </section>

          {/* Recommendations Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Smart Recommendations</h2>
            <SkillEngineRecommendations 
              recommendations={recommendations} 
              isLoading={isLoading} 
            />
          </section>

          {/* Learning Pathways Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Personalized Learning Pathways</h2>
            <LearningPathways 
              pathways={pathways} 
              isLoading={isLoading} 
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default SkillEnginePage;