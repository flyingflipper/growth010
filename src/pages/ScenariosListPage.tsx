import React from 'react';
import { scenarios } from '../data/scenarios';
import { useUser } from '../context/UserContext';
import ScenarioCard from '../components/ScenarioCard';

const ScenariosListPage: React.FC = () => {
  const { user } = useUser();
  
  if (!user) return null;
  
  const completedScenarios = user.completedScenarios || [];
  
  // Group scenarios
  const completed = scenarios.filter(s => completedScenarios.includes(s.id));
  const available = scenarios.filter(s => !completedScenarios.includes(s.id));
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Scenarios</h1>
          <p className="text-gray-600">
            Practice real-world workplace situations and build your skills
          </p>
        </div>
        
        {/* Available Scenarios */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Available Scenarios
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {available.map((scenario) => (
              <ScenarioCard
                key={scenario.id}
                scenario={scenario}
              />
            ))}
          </div>
        </div>
        
        {/* Completed Scenarios */}
        {completed.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Completed Scenarios
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completed.map((scenario) => (
                <ScenarioCard
                  key={scenario.id}
                  scenario={scenario}
                  completed
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScenariosListPage;