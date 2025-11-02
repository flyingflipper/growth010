import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { archetypeAssessment } from '../data/assessments';
import { archetypes } from '../data/archetypes';
import { useUser } from '../context/UserContext';
import Button from '../components/Button';
import AssessmentQuestion from '../components/AssessmentQuestion';
import HighlightedTopic from '../components/HighlightedTopic';

const AssessmentPage: React.FC = () => {
  const navigate = useNavigate();
  const { setUser, updateArchetype } = useUser();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [archetypeResult, setArchetypeResult] = useState<string | null>(null);
  const [progressPercentage, setProgressPercentage] = useState(0);
  
  const questions = archetypeAssessment.questions;
  const currentQuestion = questions[currentQuestionIndex];
  
  useEffect(() => {
    // Calculate progress percentage
    setProgressPercentage(((currentQuestionIndex) / questions.length) * 100);
  }, [currentQuestionIndex, questions.length]);
  
  const handleSelectOption = (optionId: string) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: optionId
    });
  };
  
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResults();
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const calculateResults = () => {
    const archetypeScores: Record<string, number> = {
      visionary: 0,
      executor: 0,
      connector: 0,
      analyst: 0,
      catalyst: 0,
      builder: 0
    };
    
    // Calculate scores for each archetype based on answers
    Object.entries(answers).forEach(([questionId, optionId]) => {
      const question = questions.find(q => q.id === questionId);
      if (question) {
        const selectedOption = question.options.find(o => o.id === optionId);
        if (selectedOption) {
          // Add points to each archetype
          Object.entries(selectedOption.archetypePoints).forEach(([archetype, points]) => {
            archetypeScores[archetype] = (archetypeScores[archetype] || 0) + points;
          });
        }
      }
    });
    
    // Find the highest scoring archetype
    let highestScore = 0;
    let dominantArchetype = '';
    
    Object.entries(archetypeScores).forEach(([archetype, score]) => {
      if (score > highestScore) {
        highestScore = score;
        dominantArchetype = archetype;
      }
    });
    
    setArchetypeResult(dominantArchetype);
    
    // Create user and set archetype
    setUser({
      id: crypto.randomUUID(),
      name: 'User', // Default name
      archetype: dominantArchetype,
      completedScenarios: [],
      growthAreas: []
    });
    
    updateArchetype(dominantArchetype);
    
    // Show results
    setShowResults(true);
  };
  
  const handleFinish = () => {
    navigate('/dashboard');
  };

  const handleGetStarted = () => {
    navigate('/scenarios');
  };
  
  if (showResults && archetypeResult) {
    const resultArchetype = archetypes.find(a => a.id === archetypeResult);
    
    if (!resultArchetype) return <div>Error loading result</div>;
    
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="w-full max-w-4xl bg-white rounded-xl shadow-sm p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Influence Profile</h1>
            <p className="text-gray-600">Based on your responses, your primary work archetype is:</p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100 mb-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-blue-800 mb-3">{resultArchetype.name}</h2>
              <p className="text-lg text-gray-700">{resultArchetype.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 border border-blue-200">
                <h3 className="font-semibold text-blue-700 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Your Superpowers
                </h3>
                <ul className="space-y-2">
                  {resultArchetype.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-blue-200">
                <h3 className="font-semibold text-blue-700 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Growth Opportunities
                </h3>
                <ul className="space-y-2">
                  {resultArchetype.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1">→</span>
                      <span className="text-gray-700">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Your Personalized Growth Path
            </h3>
            <p className="text-gray-600 mb-4">
              Based on your {resultArchetype.name} profile, we've identified these key areas for your professional development:
            </p>
            <div className="flex flex-wrap gap-3">
              {resultArchetype.growthAreas.map((area) => (
                <HighlightedTopic
                  key={area}
                  id={area}
                  title={area.charAt(0).toUpperCase() + area.slice(1).replace('-', ' ')}
                  description={`Learn more about ${area.replace('-', ' ')}`}
                  ariaLabel={`Click to learn more about ${area.replace('-', ' ')}`}
                />
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={handleGetStarted}
              className="flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700"
            >
              Start Your First Practice Module
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleFinish}
              className="flex items-center justify-center"
            >
              Explore Your Dashboard
            </Button>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              Your profile is saved and you can always retake this assessment in your profile settings.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-3xl mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
          <span className="text-sm font-medium text-blue-600">
            {Math.round(progressPercentage)}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
      
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-sm p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Influence Profile Assessment</h1>
          <p className="text-gray-600 mt-2">Discover your natural work style and influence patterns</p>
        </div>
        
        <AssessmentQuestion
          question={currentQuestion}
          currentAnswer={answers[currentQuestion.id] || null}
          onSelectOption={handleSelectOption}
        />
        
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="flex items-center"
          >
            <ChevronLeft size={18} className="mr-1" />
            Previous
          </Button>
          
          <Button
            onClick={handleNext}
            disabled={!answers[currentQuestion.id]}
            className="flex items-center"
          >
            {currentQuestionIndex < questions.length - 1 ? (
              <>
                Next
                <ChevronRight size={18} className="ml-1" />
              </>
            ) : (
              'See Your Profile'
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentPage;