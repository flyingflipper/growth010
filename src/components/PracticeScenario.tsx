import React, { useState } from 'react';
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

interface Option {
  id: string;
  text: string;
  isRecommended: boolean;
  explanation?: string;
}

interface PracticeScenarioProps {
  id: number;
  title: string;
  scenario: string;
  options: Option[];
}

const PracticeScenario: React.FC<PracticeScenarioProps> = ({
  id,
  title,
  scenario,
  options
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleSelectOption = (optionId: string) => {
    setSelectedOption(optionId);
    setShowExplanation(true);
  };

  const selectedOptionData = options.find(option => option.id === selectedOption);
  const isCorrect = selectedOptionData?.isRecommended || false;

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
      <div className="bg-gray-50 p-4 border-b border-gray-200">
        <h4 className="font-semibold text-gray-900">Scenario {id}: {title}</h4>
      </div>
      <div className="p-4">
        <p className="text-gray-700 mb-4">{scenario}</p>
        <div className="space-y-3">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSelectOption(option.id)}
              className={`w-full flex items-center p-4 rounded-lg border transition-colors ${
                selectedOption === option.id
                  ? option.isRecommended
                    ? 'border-green-300 bg-green-50'
                    : 'border-red-300 bg-red-50'
                  : 'border-gray-200 bg-gray-50 hover:border-blue-300 hover:bg-blue-50'
              }`}
              disabled={selectedOption !== null}
            >
              <div className="mr-3 flex-shrink-0">
                {selectedOption === option.id ? (
                  option.isRecommended ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                )}
              </div>
              <div className="text-left">
                <span className="font-medium mr-2 text-gray-900">
                  {option.id.toUpperCase()}:
                </span>
                <span className="text-gray-700">
                  {option.text}
                </span>
              </div>
            </button>
          ))}
        </div>

        {showExplanation && selectedOptionData && (
          <div className={`mt-4 p-4 rounded-lg ${
            isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
          }`}>
            <div className="flex items-start">
              {isCorrect ? (
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
              ) : (
                <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-0.5" />
              )}
              <div>
                <h5 className={`font-medium ${isCorrect ? 'text-green-800' : 'text-red-800'} mb-1`}>
                  {isCorrect ? 'Correct Choice' : 'Not Recommended'}
                </h5>
                <p className={isCorrect ? 'text-green-700' : 'text-red-700'}>
                  {selectedOptionData.explanation || (isCorrect 
                    ? 'This is the recommended approach for effective feedback delivery.' 
                    : 'This approach doesn\'t align with effective feedback principles.')}
                </p>
              </div>
            </div>
          </div>
        )}

        {selectedOption && (
          <div className="mt-4 text-center">
            <button
              onClick={() => {
                setSelectedOption(null);
                setShowExplanation(false);
              }}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticeScenario;