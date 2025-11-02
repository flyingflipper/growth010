import React, { useState } from 'react';
import { Clock, AlertTriangle, CheckCircle, XCircle, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ConsequenceTimelineProps {
  consequences: {
    immediate: string;
    shortTerm: string;
    longTerm: string;
  };
  severity?: {
    immediate: 'positive' | 'neutral' | 'negative';
    shortTerm: 'positive' | 'neutral' | 'negative';
    longTerm: 'positive' | 'neutral' | 'negative';
  };
  confidence?: {
    immediate: 'high' | 'medium' | 'low';
    shortTerm: 'high' | 'medium' | 'low';
    longTerm: 'high' | 'medium' | 'low';
  };
  alternatives?: {
    immediate?: string;
    shortTerm?: string;
    longTerm?: string;
  };
  mitigation?: {
    immediate?: string;
    shortTerm?: string;
    longTerm?: string;
  };
  userArchetype?: string;
}

const ConsequenceTimeline: React.FC<ConsequenceTimelineProps> = ({
  consequences,
  severity = { immediate: 'neutral', shortTerm: 'neutral', longTerm: 'neutral' },
  confidence = { immediate: 'high', shortTerm: 'medium', longTerm: 'low' },
  alternatives,
  mitigation,
  userArchetype
}) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [revealedSections, setRevealedSections] = useState<Set<string>>(new Set(['immediate']));

  const getSeverityIcon = (sev: 'positive' | 'neutral' | 'negative') => {
    switch (sev) {
      case 'positive': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'negative': return <XCircle className="w-5 h-5 text-red-500" />;
      default: return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    }
  };

  const getSeverityColor = (sev: 'positive' | 'neutral' | 'negative') => {
    switch (sev) {
      case 'positive': return 'border-green-200 bg-green-50';
      case 'negative': return 'border-red-200 bg-red-50';
      default: return 'border-yellow-200 bg-yellow-50';
    }
  };

  const getConfidenceLabel = (conf: 'high' | 'medium' | 'low') => {
    switch (conf) {
      case 'high': return 'Likely outcome';
      case 'medium': return 'Possible outcome';
      case 'low': return 'Potential outcome';
    }
  };

  const getConfidenceColor = (conf: 'high' | 'medium' | 'low') => {
    switch (conf) {
      case 'high': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-orange-600 bg-orange-100';
    }
  };

  const timeframes = [
    {
      id: 'immediate',
      title: 'Immediate Impact',
      subtitle: 'Next few hours',
      icon: <Clock className="w-4 h-4" />,
      consequence: consequences.immediate,
      severity: severity.immediate,
      confidence: confidence.immediate,
      alternative: alternatives?.immediate,
      mitigation: mitigation?.immediate
    },
    {
      id: 'shortTerm',
      title: 'Short-term',
      subtitle: '1-3 months',
      icon: <Clock className="w-4 h-4" />,
      consequence: consequences.shortTerm,
      severity: severity.shortTerm,
      confidence: confidence.shortTerm,
      alternative: alternatives?.shortTerm,
      mitigation: mitigation?.shortTerm
    },
    {
      id: 'longTerm',
      title: 'Long-term',
      subtitle: '6+ months',
      icon: <Clock className="w-4 h-4" />,
      consequence: consequences.longTerm,
      severity: severity.longTerm,
      confidence: confidence.longTerm,
      alternative: alternatives?.longTerm,
      mitigation: mitigation?.longTerm
    }
  ];

  const handleRevealNext = () => {
    const currentSections = Array.from(revealedSections);
    if (currentSections.length === 1) {
      setRevealedSections(new Set([...currentSections, 'shortTerm']));
    } else if (currentSections.length === 2) {
      setRevealedSections(new Set([...currentSections, 'longTerm']));
    }
  };

  const toggleExpanded = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-800 flex items-center">
          <AlertTriangle className="w-5 h-5 mr-2 text-yellow-600" />
          Potential Consequences Timeline
        </h3>
        {userArchetype && (
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
            Tailored for {userArchetype}
          </span>
        )}
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

        <div className="space-y-6">
          {timeframes.map((timeframe, index) => (
            <AnimatePresence key={timeframe.id}>
              {revealedSections.has(timeframe.id) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-6 w-4 h-4 rounded-full border-2 border-white shadow-sm ${
                    timeframe.severity === 'positive' ? 'bg-green-500' :
                    timeframe.severity === 'negative' ? 'bg-red-500' : 'bg-yellow-500'
                  }`}></div>

                  <div className={`ml-16 rounded-lg border-2 p-4 ${getSeverityColor(timeframe.severity)}`}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center">
                        {getSeverityIcon(timeframe.severity)}
                        <div className="ml-3">
                          <h4 className="font-semibold text-gray-900">{timeframe.title}</h4>
                          <p className="text-sm text-gray-600">{timeframe.subtitle}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${getConfidenceColor(timeframe.confidence)}`}>
                          {getConfidenceLabel(timeframe.confidence)}
                        </span>
                        {(timeframe.alternative || timeframe.mitigation) && (
                          <button
                            onClick={() => toggleExpanded(timeframe.id)}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            {expandedSection === timeframe.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                          </button>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-3">{timeframe.consequence}</p>

                    <AnimatePresence>
                      {expandedSection === timeframe.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-3 border-t border-gray-200 pt-3"
                        >
                          {timeframe.alternative && (
                            <div className="bg-white rounded-lg p-3 border border-blue-200">
                              <h5 className="font-medium text-blue-800 mb-2 flex items-center">
                                <Info className="w-4 h-4 mr-2" />
                                Alternative Approach
                              </h5>
                              <p className="text-sm text-blue-700">{timeframe.alternative}</p>
                            </div>
                          )}

                          {timeframe.mitigation && (
                            <div className="bg-white rounded-lg p-3 border border-green-200">
                              <h5 className="font-medium text-green-800 mb-2 flex items-center">
                                <CheckCircle className="w-4 h-4 mr-2" />
                                Recovery Strategy
                              </h5>
                              <p className="text-sm text-green-700">{timeframe.mitigation}</p>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
      </div>

      {revealedSections.size < 3 && (
        <div className="text-center">
          <button
            onClick={handleRevealNext}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {revealedSections.size === 1 ? 'Reveal Short-term Impact' : 'Reveal Long-term Impact'}
          </button>
        </div>
      )}
    </div>
  );
};

export default ConsequenceTimeline;