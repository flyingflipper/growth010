import React from 'react';
import { useUser } from '../context/UserContext';
import Card from '../components/Card';
import GrowthAreaCard from '../components/GrowthAreaCard';
import ProgressBar from '../components/ProgressBar';

const ProgressPage: React.FC = () => {
  const { user } = useUser();
  
  if (!user) return null;
  
  // Sort growth areas by score (highest first)
  const sortedGrowthAreas = [...user.growthAreas].sort((a, b) => b.score - a.score);
  
  // Calculate overall progress
  const scenarioProgress = (user.completedScenarios.length / 10) * 100;
  const growthAreasProgress = Math.min((user.growthAreas.length / 8) * 100, 100);
  const overallProgress = (scenarioProgress + growthAreasProgress) / 2;
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Your Growth Journey</h1>
          <p className="text-gray-600">
            Track your progress and see how far you've come
          </p>
        </div>
        
        {/* Progress Overview */}
        <Card className="mb-8 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Progress Overview
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Scenarios Completed</h3>
              <ProgressBar
                value={user.completedScenarios.length}
                max={10}
                showValue
                color="blue"
                size="lg"
              />
              <p className="text-sm text-gray-500 mt-2">
                {10 - user.completedScenarios.length} scenarios remaining
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Growth Areas Identified</h3>
              <ProgressBar
                value={user.growthAreas.length}
                max={8}
                showValue
                color="green"
                size="lg"
              />
              <p className="text-sm text-gray-500 mt-2">
                {8 - user.growthAreas.length} areas to discover
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Overall Progress</h3>
              <ProgressBar
                value={Math.round(overallProgress)}
                max={100}
                label={`${Math.round(overallProgress)}%`}
                color="blue"
                size="lg"
              />
              <p className="text-sm text-gray-500 mt-2">
                You're making steady progress!
              </p>
            </div>
          </div>
        </Card>
        
        {/* Growth Areas */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Your Growth Areas
          </h2>
          
          {sortedGrowthAreas.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedGrowthAreas.map((area) => (
                <GrowthAreaCard key={area.id} area={area} />
              ))}
            </div>
          ) : (
            <Card className="text-center py-8 border border-gray-200">
              <p className="text-gray-600 mb-2">
                You haven't identified any growth areas yet.
              </p>
              <p className="text-gray-600">
                Complete scenarios to discover your growth areas.
              </p>
            </Card>
          )}
        </div>
        
        {/* Development Recommendations */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Recommended Next Steps
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border border-gray-200">
              <h3 className="font-medium text-gray-800 mb-3">Complete More Scenarios</h3>
              <p className="text-gray-600 mb-4">
                Continue to build your skills through practice in various workplace situations.
              </p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Strategic decision-making scenarios</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Conflict resolution practice</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Communication challenges</span>
                </li>
              </ul>
            </Card>
            
            <Card className="border border-gray-200">
              <h3 className="font-medium text-gray-800 mb-3">Real-World Applications</h3>
              <p className="text-gray-600 mb-4">
                Try applying these techniques in your daily work:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Practice active listening in your next three meetings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Try a different approach to giving feedback</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Reflect on a recent challenge and how you could have approached it differently</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;