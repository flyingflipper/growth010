import React, { useState } from 'react';
import { Check } from 'lucide-react';
import Card from './Card';
import Button from './Button';
import { MicroAssessment } from '../types';
import { useUser } from '../context/UserContext';

interface MicroAssessmentCardProps {
  assessment: MicroAssessment;
  onComplete?: () => void;
}

const MicroAssessmentCard: React.FC<MicroAssessmentCardProps> = ({
  assessment,
  onComplete
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { updateGrowthArea } = useUser();
  
  const handleSubmit = () => {
    if (selectedOption) {
      const option = assessment.options.find(opt => opt.id === selectedOption);
      if (option) {
        // Map the assessment to a growth area (simple example)
        const growthAreaId = assessment.id.includes('feedback') 
          ? 'communication' 
          : assessment.id.includes('risk') 
            ? 'risk-taking' 
            : 'self-improvement';
        
        updateGrowthArea(growthAreaId, option.value * 2); // Scale to 1-10
        setIsSubmitted(true);
        onComplete?.();
      }
    }
  };
  
  if (isSubmitted) {
    return (
      <Card className="text-center py-8">
        <div className="mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
          <Check className="text-green-600" size={24} />
        </div>
        <h3 className="text-lg font-medium text-gray-800 mb-2">
          Thanks for your response!
        </h3>
        <p className="text-gray-600">
          Your feedback helps us personalize your growth journey.
        </p>
      </Card>
    );
  }
  
  return (
    <Card>
      <h3 className="text-lg font-medium text-gray-800 mb-4">
        {assessment.question}
      </h3>
      
      <div className="space-y-2 mb-6">
        {assessment.options.map(option => (
          <div
            key={option.id}
            className={`p-3 rounded-lg border cursor-pointer transition-all ${
              selectedOption === option.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
            onClick={() => setSelectedOption(option.id)}
          >
            <span className="text-gray-700">{option.text}</span>
          </div>
        ))}
      </div>
      
      <Button
        onClick={handleSubmit}
        disabled={!selectedOption}
        fullWidth
      >
        Submit
      </Button>
    </Card>
  );
};

export default MicroAssessmentCard;