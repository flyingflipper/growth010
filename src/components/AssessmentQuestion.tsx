import React from 'react';
import { AssessmentQuestion as QuestionType, AssessmentOption } from '../types';
import Card from './Card';

interface AssessmentQuestionProps {
  question: QuestionType;
  currentAnswer: string | null;
  onSelectOption: (optionId: string) => void;
}

const AssessmentQuestion: React.FC<AssessmentQuestionProps> = ({
  question,
  currentAnswer,
  onSelectOption
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <h3 className="text-xl font-medium text-gray-800 mb-4">
        {question.text}
      </h3>
      <div className="space-y-3">
        {question.options.map((option: AssessmentOption) => (
          <Card
            key={option.id}
            className={`transition-all duration-200 ${
              currentAnswer === option.id
                ? 'border-2 border-blue-500 bg-blue-50'
                : 'border border-gray-200 hover:border-blue-300'
            }`}
            onClick={() => onSelectOption(option.id)}
            hover
          >
            <div className="flex items-start gap-3">
              <div
                className={`flex-shrink-0 w-5 h-5 mt-0.5 rounded-full border ${
                  currentAnswer === option.id
                    ? 'border-blue-500 bg-blue-500'
                    : 'border-gray-300'
                }`}
              >
                {currentAnswer === option.id && (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                )}
              </div>
              <span className="text-base text-gray-700">{option.text}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AssessmentQuestion;