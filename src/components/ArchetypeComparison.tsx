import React, { useState } from 'react';
import { Info, Users, Zap, Building, Eye, Brain, Target } from 'lucide-react';
import { getArchetypeById } from '../data/archetypes';
import Card from './Card';

interface ArchetypeComparisonProps {
  currentArchetype: string;
  showComparison?: boolean;
}

const ArchetypeComparison: React.FC<ArchetypeComparisonProps> = ({ 
  currentArchetype, 
  showComparison = false 
}) => {
  const [isExpanded, setIsExpanded] = useState(showComparison);
  
  const currentArch = getArchetypeById(currentArchetype);
  const builderArch = getArchetypeById('builder');
  const executorArch = getArchetypeById('executor');
  const catalystArch = getArchetypeById('catalyst');
  
  if (!currentArch) return null;

  const getArchetypeIcon = (id: string) => {
    switch (id) {
      case 'builder': return <Building className="w-5 h-5" />;
      case 'executor': return <Target className="w-5 h-5" />;
      case 'catalyst': return <Zap className="w-5 h-5" />;
      case 'visionary': return <Eye className="w-5 h-5" />;
      case 'connector': return <Users className="w-5 h-5" />;
      case 'analyst': return <Brain className="w-5 h-5" />;
      default: return <Target className="w-5 h-5" />;
    }
  };

  const getArchetypeColor = (id: string) => {
    switch (id) {
      case 'builder': return 'text-green-600 bg-green-50 border-green-200';
      case 'executor': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'catalyst': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'visionary': return 'text-purple-600 bg-purple-50 border-purple-200';
      case 'connector': return 'text-pink-600 bg-pink-50 border-pink-200';
      case 'analyst': return 'text-indigo-600 bg-indigo-50 border-indigo-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getColumnHighlight = (archetype: string) => {
    if (archetype === currentArchetype) {
      switch (archetype) {
        case 'builder': return 'bg-green-100 border-l-4 border-green-500';
        case 'executor': return 'bg-blue-100 border-l-4 border-blue-500';
        case 'catalyst': return 'bg-orange-100 border-l-4 border-orange-500';
        case 'visionary': return 'bg-purple-100 border-l-4 border-purple-500';
        case 'connector': return 'bg-pink-100 border-l-4 border-pink-500';
        case 'analyst': return 'bg-indigo-100 border-l-4 border-indigo-500';
        default: return 'bg-gray-100 border-l-4 border-gray-500';
      }
    }
    return '';
  };

  const comparisonData = [
    {
      aspect: 'Primary Focus',
      builder: 'Creating tangible results',
      executor: 'Systematic completion',
      catalyst: 'Driving momentum'
    },
    {
      aspect: 'Approach to Change',
      builder: 'Build iteratively',
      executor: 'Plan then execute',
      catalyst: 'Push for immediate action'
    },
    {
      aspect: 'Team Interaction',
      builder: 'Hands-on collaboration',
      executor: 'Clear role definition',
      catalyst: 'Energize and motivate'
    },
    {
      aspect: 'Decision Making',
      builder: 'Prototype and test',
      executor: 'Analyze then decide',
      catalyst: 'Quick decisions to maintain momentum'
    },
    {
      aspect: 'Strength in Crisis',
      builder: 'Create solutions',
      executor: 'Maintain stability',
      catalyst: 'Rally the team'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center">
          <Info className="w-5 h-5 mr-2 text-blue-600" />
          Understanding Your Archetype
        </h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          {isExpanded ? 'Hide Comparison' : 'Compare with Similar Types'}
        </button>
      </div>

      <Card className={`border-2 ${getArchetypeColor(currentArchetype)}`}>
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-lg ${getArchetypeColor(currentArchetype)}`}>
            {getArchetypeIcon(currentArchetype)}
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 mb-2">{currentArch.name}</h4>
            <p className="text-gray-700 text-sm">{currentArch.description}</p>
          </div>
        </div>
      </Card>

      {isExpanded && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Builder */}
            {builderArch && (
              <Card className={`border ${getArchetypeColor('builder')} ${currentArchetype === 'builder' ? 'ring-2 ring-green-300' : ''}`}>
                <div className="text-center">
                  <div className={`inline-flex p-3 rounded-lg ${getArchetypeColor('builder')} mb-3`}>
                    {getArchetypeIcon('builder')}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{builderArch.name}</h4>
                  <p className="text-sm text-gray-600">{builderArch.description}</p>
                </div>
              </Card>
            )}

            {/* Executor */}
            {executorArch && (
              <Card className={`border ${getArchetypeColor('executor')} ${currentArchetype === 'executor' ? 'ring-2 ring-blue-300' : ''}`}>
                <div className="text-center">
                  <div className={`inline-flex p-3 rounded-lg ${getArchetypeColor('executor')} mb-3`}>
                    {getArchetypeIcon('executor')}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{executorArch.name}</h4>
                  <p className="text-sm text-gray-600">{executorArch.description}</p>
                </div>
              </Card>
            )}

            {/* Catalyst */}
            {catalystArch && (
              <Card className={`border ${getArchetypeColor('catalyst')} ${currentArchetype === 'catalyst' ? 'ring-2 ring-orange-300' : ''}`}>
                <div className="text-center">
                  <div className={`inline-flex p-3 rounded-lg ${getArchetypeColor('catalyst')} mb-3`}>
                    {getArchetypeIcon('catalyst')}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{catalystArch.name}</h4>
                  <p className="text-sm text-gray-600">{catalystArch.description}</p>
                </div>
              </Card>
            )}
          </div>

          <Card className="bg-gray-50">
            <h4 className="font-semibold text-gray-900 mb-4">Key Differences at a Glance</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-2 font-medium text-gray-700">Aspect</th>
                    <th className={`text-left py-3 px-3 font-medium text-green-700 ${getColumnHighlight('builder')}`}>
                      Builder
                    </th>
                    <th className={`text-left py-3 px-3 font-medium text-blue-700 ${getColumnHighlight('executor')}`}>
                      Executor
                    </th>
                    <th className={`text-left py-3 px-3 font-medium text-orange-700 ${getColumnHighlight('catalyst')}`}>
                      Catalyst
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-2 font-medium text-gray-800">{row.aspect}</td>
                      <td className={`py-3 px-3 ${getColumnHighlight('builder')} ${
                        currentArchetype === 'builder' ? 'font-semibold text-green-800' : 'text-gray-600'
                      }`}>
                        {row.builder}
                      </td>
                      <td className={`py-3 px-3 ${getColumnHighlight('executor')} ${
                        currentArchetype === 'executor' ? 'font-semibold text-blue-800' : 'text-gray-600'
                      }`}>
                        {row.executor}
                      </td>
                      <td className={`py-3 px-3 ${getColumnHighlight('catalyst')} ${
                        currentArchetype === 'catalyst' ? 'font-semibold text-orange-800' : 'text-gray-600'
                      }`}>
                        {row.catalyst}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {currentArchetype && (
              <div className="mt-4 text-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Your archetype is highlighted
                </span>
              </div>
            )}
          </Card>
        </div>
      )}
    </div>
  );
};

export default ArchetypeComparison;