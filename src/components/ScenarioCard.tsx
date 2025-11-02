import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Card from './Card';
import { Scenario } from '../types';

interface ScenarioCardProps {
  scenario: Scenario;
  completed?: boolean;
}

const ScenarioCard: React.FC<ScenarioCardProps> = ({ scenario, completed = false }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/scenarios/${scenario.id}`);
  };
  
  return (
    <Card 
      className="h-full flex flex-col border border-gray-200" 
      onClick={handleClick}
      hover
    >
      <div className="flex-1">
        {completed && (
          <div className="mb-2">
            <span className="text-xs font-medium bg-green-100 text-green-700 px-2.5 py-0.5 rounded-full">
              Completed
            </span>
          </div>
        )}
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{scenario.title}</h3>
        <p className="text-gray-600 mb-4">{scenario.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {scenario.growthAreas.map((area) => (
            <span 
              key={area}
              className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
            >
              {area.charAt(0).toUpperCase() + area.slice(1).replace('-', ' ')}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex justify-end items-center mt-2 text-blue-600 font-medium">
        <span className="text-sm">Start scenario</span>
        <ArrowRight size={16} className="ml-1" />
      </div>
    </Card>
  );
};

export default ScenarioCard;