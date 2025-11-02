import React from 'react';
import { Interactive } from '../types/library';
import { ArrowRight, Clock } from 'lucide-react';

interface InteractiveLearningToolsProps {
  interactives: Interactive[];
}

const InteractiveLearningTools: React.FC<InteractiveLearningToolsProps> = ({ interactives }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'advanced':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {interactives.map((interactive) => (
        <div
          key={interactive.id}
          className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:border-blue-300 transition-colors"
        >
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={interactive.thumbnail}
              alt={interactive.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-medium text-gray-900">{interactive.title}</h3>
              <span
                className={`text-xs font-medium px-2 py-1 rounded-full ${getDifficultyColor(
                  interactive.difficulty
                )}`}
              >
                {interactive.difficulty}
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-4">{interactive.description}</p>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Clock size={16} className="mr-1" />
              {interactive.estimatedTime}
            </div>
            <a
              href={interactive.url}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              Start Learning
              <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InteractiveLearningTools;