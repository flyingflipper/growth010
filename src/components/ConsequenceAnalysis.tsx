import React, { useState } from 'react';
import { Users, Building, TrendingUp, AlertCircle, Lightbulb, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from './Card';

interface StakeholderImpact {
  stakeholder: string;
  impact: string;
  severity: 'positive' | 'neutral' | 'negative';
}

interface ConsequenceAnalysisProps {
  stakeholderImpacts: StakeholderImpact[];
  industryContext?: string;
  realWorldExample?: {
    title: string;
    description: string;
    outcome: string;
  };
  reflectionPrompts: string[];
  skillRecommendations: {
    skill: string;
    reason: string;
    link: string;
  }[];
}

const ConsequenceAnalysis: React.FC<ConsequenceAnalysisProps> = ({
  stakeholderImpacts,
  industryContext,
  realWorldExample,
  reflectionPrompts,
  skillRecommendations
}) => {
  const [activeTab, setActiveTab] = useState<'stakeholders' | 'example' | 'reflection' | 'skills'>('stakeholders');

  const getSeverityColor = (severity: 'positive' | 'neutral' | 'negative') => {
    switch (severity) {
      case 'positive': return 'text-green-600 bg-green-50 border-green-200';
      case 'negative': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    }
  };

  const tabs = [
    { id: 'stakeholders', label: 'Stakeholder Impact', icon: <Users className="w-4 h-4" /> },
    { id: 'example', label: 'Real Example', icon: <Building className="w-4 h-4" /> },
    { id: 'reflection', label: 'Reflection', icon: <AlertCircle className="w-4 h-4" /> },
    { id: 'skills', label: 'Skill Building', icon: <Target className="w-4 h-4" /> }
  ];

  return (
    <Card className="bg-gray-50 border border-gray-200">
      <div className="flex items-center mb-6">
        <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
        <h3 className="font-semibold text-gray-800">Deeper Impact Analysis</h3>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-6 bg-white rounded-lg p-1 border border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            {tab.icon}
            <span className="ml-2 hidden sm:block">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === 'stakeholders' && (
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900 mb-4">How This Affects Key People</h4>
            {stakeholderImpacts.map((impact, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border ${getSeverityColor(impact.severity)}`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h5 className="font-medium text-gray-900">{impact.stakeholder}</h5>
                    <p className="text-sm text-gray-700 mt-1">{impact.impact}</p>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${
                    impact.severity === 'positive' ? 'bg-green-500' :
                    impact.severity === 'negative' ? 'bg-red-500' : 'bg-yellow-500'
                  }`}></div>
                </div>
              </div>
            ))}
            {industryContext && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                <h5 className="font-medium text-blue-800 mb-2">Industry Context</h5>
                <p className="text-sm text-blue-700">{industryContext}</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'example' && realWorldExample && (
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900 mb-4">Similar Situation</h4>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h5 className="font-medium text-gray-900 mb-2">{realWorldExample.title}</h5>
              <p className="text-gray-700 mb-3">{realWorldExample.description}</p>
              <div className="bg-gray-50 rounded-lg p-3">
                <h6 className="font-medium text-gray-800 mb-1">Outcome:</h6>
                <p className="text-sm text-gray-700">{realWorldExample.outcome}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reflection' && (
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900 mb-4">Think Deeper</h4>
            {reflectionPrompts.map((prompt, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold text-blue-600">{index + 1}</span>
                  </div>
                  <p className="text-gray-700">{prompt}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900 mb-4">Recommended Learning</h4>
            {skillRecommendations.map((rec, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h5 className="font-medium text-gray-900 mb-1">{rec.skill}</h5>
                    <p className="text-sm text-gray-600 mb-3">{rec.reason}</p>
                  </div>
                  <Lightbulb className="w-5 h-5 text-yellow-500 ml-3" />
                </div>
                <a
                  href={rec.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </Card>
  );
};

export default ConsequenceAnalysis;