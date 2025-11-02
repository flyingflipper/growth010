import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Clock, 
  BookOpen, 
  Play, 
  FileText, 
  Target,
  CheckCircle,
  ArrowRight,
  Users,
  Brain,
  ChevronRight,
  Zap,
  Star,
  MessageCircle,
  Send,
  X,
  ChevronDown,
  ChevronUp,
  Award
} from 'lucide-react';
import { getSkillById, getRelatedSkills, skillCategories } from '../data/skills';
import { feedbackDeliveryContent } from '../data/skillContent/feedback-delivery';
import SkillContentRenderer from '../components/SkillContentRenderer';
import PracticeScenario from '../components/PracticeScenario';
import Card from '../components/Card';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';

const SkillDetailPage: React.FC = () => {
  const { skillId } = useParams<{ skillId: string }>();
  const [showFullContent, setShowFullContent] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{role: 'user' | 'assistant', content: string}[]>([]);
  const [selectedTimeframe, setSelectedTimeframe] = useState<'light' | 'medium' | 'deep'>('medium');
  const [expandedSection, setExpandedSection] = useState<string | null>('overview');
  
  const skill = skillId ? getSkillById(skillId) : null;
  const relatedSkills = skillId ? getRelatedSkills(skillId) : [];
  const category = skill ? skillCategories.find(cat => cat.id === skill.category) : null;

  // Check if we have detailed content for this skill
  const hasDetailedContent = skillId === 'feedback-delivery';
  const skillContent = hasDetailedContent ? feedbackDeliveryContent : null;

  useEffect(() => {
    // Reset content view when skill changes
    setShowFullContent(false);
    setExpandedSection('overview');
  }, [skillId]);

  if (!skill) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Skill not found</h2>
            <Link
              to="/library/skills"
              className="text-blue-600 hover:text-blue-800"
            >
              Return to Skills Directory
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const getLevelBadge = (level: string) => {
    const levelClasses = {
      'foundational': 'bg-green-100 text-green-800 border border-green-200',
      'bridge': 'bg-blue-100 text-blue-800 border border-blue-200',
      'advanced': 'bg-purple-100 text-purple-800 border border-purple-200'
    };
    
    return (
      <span className={`text-sm font-medium px-3 py-1 rounded-full ${levelClasses[level as keyof typeof levelClasses]}`}>
        {level.charAt(0).toUpperCase() + level.slice(1)}
      </span>
    );
  };

  const getTimeEstimate = (timeframe: 'light' | 'medium' | 'deep') => {
    const baseTime = skill.estimatedTime;
    switch (timeframe) {
      case 'light': return baseTime.replace(/(\d+)-(\d+)/, (_, min, max) => 
        `${Math.floor(parseInt(min) * 0.6)}-${Math.floor(parseInt(max) * 0.6)}`);
      case 'deep': return baseTime.replace(/(\d+)-(\d+)/, (_, min, max) => 
        `${Math.floor(parseInt(min) * 1.5)}-${Math.floor(parseInt(max) * 1.5)}`);
      default: return baseTime;
    }
  };

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return;
    
    // Add user message to chat history
    setChatHistory([...chatHistory, {role: 'user', content: chatMessage}]);
    
    // Simulate AI response
    setTimeout(() => {
      let response = '';
      
      if (chatMessage.toLowerCase().includes('difficult') || chatMessage.toLowerCase().includes('challenge')) {
        response = "Delivering difficult feedback is challenging. Try using the SBI model (Situation-Behavior-Impact) and focus on specific behaviors rather than personality traits. Would you like me to provide an example of how to structure difficult feedback?";
      } else if (chatMessage.toLowerCase().includes('example') || chatMessage.toLowerCase().includes('template')) {
        response = "Here's a template for effective feedback: \"When I observed [specific situation], I noticed [specific behavior], and the impact was [outcome or feeling]. What are your thoughts?\" This structure keeps feedback objective and actionable.";
      } else if (chatMessage.toLowerCase().includes('manager') || chatMessage.toLowerCase().includes('boss')) {
        response = "When giving feedback to your manager, timing and framing are crucial. Request a private moment, focus on specific situations, and frame feedback in terms of how certain changes could help you be more effective in your role. Would you like specific phrases to use?";
      } else {
        response = "That's a great question about feedback delivery. This skill is about providing observations in a way that's constructive and actionable. The most effective feedback is specific, timely, and focused on behaviors rather than personality. Would you like to know more about a specific aspect of feedback delivery?";
      }
      
      setChatHistory(prev => [...prev, {role: 'assistant', content: response}]);
    }, 1000);
    
    // Clear input
    setChatMessage('');
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            to={category ? `/library/skills/category/${category.id}` : '/library/skills'}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to {category ? category.name : 'Skills Directory'}
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl shadow-lg mb-8 overflow-hidden">
          <div className="px-8 py-10 text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center mb-3">
                  {category && (
                    <span className="text-blue-100 text-sm bg-white/10 px-3 py-1 rounded-full">
                      {category.name}
                    </span>
                  )}
                  <span className="ml-2">{getLevelBadge(skill.level)}</span>
                </div>
                <h1 className="text-3xl font-bold mb-3">{skill.name}</h1>
                <p className="text-blue-100 max-w-2xl mb-4">{skill.description}</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-blue-100">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    <span>
                      <select 
                        value={selectedTimeframe}
                        onChange={(e) => setSelectedTimeframe(e.target.value as any)}
                        className="bg-transparent border-none text-blue-100 focus:ring-0 cursor-pointer"
                      >
                        <option value="light" className="text-gray-900">Light: {getTimeEstimate('light')}</option>
                        <option value="medium" className="text-gray-900">Standard: {getTimeEstimate('medium')}</option>
                        <option value="deep" className="text-gray-900">Deep: {getTimeEstimate('deep')}</option>
                      </select>
                    </span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen size={16} className="mr-2" />
                    <span>{skill.relatedScenarios.length} scenarios</span>
                  </div>
                  <div className="flex items-center">
                    <Star size={16} className="mr-2" />
                    <span>High-impact skill</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 md:mt-0 flex gap-3">
                <button
                  onClick={() => setShowChatbot(true)}
                  className="inline-flex items-center bg-white/20 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/30 transition-colors"
                >
                  <MessageCircle size={18} className="mr-2" />
                  Ask AI Coach
                </button>
                <Link
                  to="/scenarios"
                  className="inline-flex items-center bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  <Zap size={18} className="mr-2" />
                  Practice Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8 overflow-hidden">
          <div className="flex overflow-x-auto">
            <button
              onClick={() => toggleSection('overview')}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                expandedSection === 'overview' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => toggleSection('practice')}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                expandedSection === 'practice' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Practice Scenarios
            </button>
            <button
              onClick={() => toggleSection('techniques')}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                expandedSection === 'techniques' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Key Techniques
            </button>
            <button
              onClick={() => toggleSection('resources')}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                expandedSection === 'resources' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Learning Resources
            </button>
            <button
              onClick={() => toggleSection('maturity')}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                expandedSection === 'maturity' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Skill Maturity
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* AI Skill Engine Insights */}
            {skillId === 'feedback-delivery' && expandedSection === 'overview' && (
              <Card className="border border-blue-200 bg-blue-50">
                <div className="flex items-start">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    <Brain className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">AI Skill Engine Insights</h3>
                    <p className="text-blue-800 mb-4">
                      Feedback Delivery is a high-impact skill that forms the foundation for effective workplace relationships. 
                      Based on your profile, this skill would significantly enhance your influence and team effectiveness.
                    </p>
                    <Link
                      to="/skill-engine"
                      className="text-blue-700 hover:text-blue-900 text-sm font-medium flex items-center"
                    >
                      View Full Skill Analysis
                      <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </Card>
            )}

            {/* Detailed Content or Standard Content */}
            {hasDetailedContent && skillContent && expandedSection === 'overview' ? (
              <>
                {showFullContent ? (
                  <SkillContentRenderer content={skillContent} />
                ) : (
                  <Card className="text-center py-12 border border-gray-200 bg-gradient-to-b from-white to-gray-50">
                    <BookOpen className="w-16 h-16 text-blue-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Comprehensive Skill Guide Available
                    </h3>
                    <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                      This skill has a detailed learning guide with examples, practice scenarios, 
                      and expert recommendations to help you master it effectively.
                    </p>
                    <button
                      onClick={() => setShowFullContent(true)}
                      className="mx-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center"
                    >
                      <BookOpen className="w-5 h-5 mr-2" />
                      View Complete Skill Guide
                    </button>
                  </Card>
                )}
              </>
            ) : null}

            {/* Skill Definition (Overview Tab) */}
            {expandedSection === 'overview' && !showFullContent && (
              <Card className="border border-gray-200 bg-white">
                <div className="flex items-start mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    <Target className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Skill Definition</h3>
                    <p className="text-gray-600 text-sm">What this skill is and why it matters</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-700">
                    {skill.description}
                  </p>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Why This Skill Matters</h4>
                    <p className="text-blue-800">
                      {skillId === 'feedback-delivery' 
                        ? "Effective feedback fuels growth, shapes performance, builds culture, and strengthens relationships. Poor or avoided feedback leads to confusion, stagnation, and tension."
                        : "Mastering this skill will significantly enhance your professional effectiveness and career growth opportunities."}
                    </p>
                  </div>
                  
                  {skill.prerequisites && skill.prerequisites.length > 0 && (
                    <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                      <h4 className="font-medium text-amber-900 mb-2">Foundation Skills</h4>
                      <p className="text-amber-800 text-sm mb-3">
                        We recommend mastering these skills first:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {skill.prerequisites.map((prereq) => (
                          <span 
                            key={prereq}
                            className="bg-white text-amber-800 text-sm px-3 py-1 rounded-full border border-amber-200"
                          >
                            {prereq}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            )}

            {/* Key Techniques Tab */}
            {expandedSection === 'techniques' && (
              <Card className="border border-gray-200 bg-white">
                <div className="flex items-start mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    <Target className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Key Techniques</h3>
                    <p className="text-gray-600 text-sm">Master these approaches for effective skill application</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skill.keyTechniques.map((technique, index) => (
                    <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-blue-700 font-bold text-sm">{index + 1}</span>
                      </div>
                      <span className="text-gray-700">{technique}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-4">Practical Applications</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {skill.practicalApplications.map((application, index) => (
                      <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <Target className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{application}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            )}

            {/* Practice Scenarios Tab */}
            {expandedSection === 'practice' && (
              <Card className="border border-gray-200 bg-white">
                <div className="flex items-start mb-6">
                  <div className="p-3 bg-green-100 rounded-lg mr-4">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Practice Scenarios</h3>
                    <p className="text-gray-600 text-sm">Apply this skill in realistic workplace situations</p>
                  </div>
                </div>
                
                {skillId === 'feedback-delivery' && skillContent?.microScenarios ? (
                  <div className="space-y-6">
                    {skillContent.microScenarios.map((scenario) => (
                      <PracticeScenario
                        key={scenario.id}
                        id={scenario.id}
                        title={scenario.title}
                        scenario={scenario.scenario}
                        options={scenario.options}
                      />
                    ))}
                    
                    <Link
                      to="/scenarios"
                      className="inline-flex items-center justify-center w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Zap size={18} className="mr-2" />
                      Practice in Full Scenarios
                    </Link>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-600 mb-4">
                      Practice scenarios help you apply this skill in realistic situations.
                    </p>
                    <Link
                      to="/scenarios"
                      className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Zap size={18} className="mr-2" />
                      Explore Practice Scenarios
                    </Link>
                  </div>
                )}
              </Card>
            )}

            {/* Learning Resources Tab */}
            {expandedSection === 'resources' && (
              <Card className="border border-gray-200 bg-white">
                <div className="flex items-start mb-6">
                  <div className="p-3 bg-purple-100 rounded-lg mr-4">
                    <BookOpen className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Learning Resources</h3>
                    <p className="text-gray-600 text-sm">Curated materials to help you develop this skill</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {/* Articles */}
                  {skill.resources.articles && skill.resources.articles.length > 0 && (
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                        <FileText className="w-4 h-4 mr-2 text-blue-500" />
                        Articles
                      </h4>
                      <div className="space-y-3">
                        {skill.resources.articles.map((article, index) => (
                          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-blue-200 transition-colors">
                            <div>
                              <h5 className="font-medium text-gray-900">{article.title}</h5>
                              <p className="text-sm text-gray-600">{article.readingTime}</p>
                            </div>
                            <div className="bg-white p-2 rounded-full shadow-sm">
                              <ArrowRight className="w-4 h-4 text-blue-500" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Videos */}
                  {skill.resources.videos && skill.resources.videos.length > 0 && (
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                        <Play className="w-4 h-4 mr-2 text-red-500" />
                        Videos
                      </h4>
                      <div className="space-y-3">
                        {skill.resources.videos.map((video, index) => (
                          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-red-200 transition-colors">
                            <div>
                              <h5 className="font-medium text-gray-900">{video.title}</h5>
                              <p className="text-sm text-gray-600">{video.duration}</p>
                            </div>
                            <div className="bg-white p-2 rounded-full shadow-sm">
                              <Play className="w-4 h-4 text-red-500" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Exercises */}
                  {skill.resources.exercises && skill.resources.exercises.length > 0 && (
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                        <Target className="w-4 h-4 mr-2 text-green-500" />
                        Practice Exercises
                      </h4>
                      <div className="space-y-3">
                        {skill.resources.exercises.map((exercise, index) => (
                          <div key={index} className="p-4 bg-green-50 border border-green-100 rounded-lg hover:border-green-200 transition-colors">
                            <h5 className="font-medium text-gray-900 mb-2">{exercise.title}</h5>
                            <p className="text-gray-700 text-sm mb-2">{exercise.description}</p>
                            <div className="flex items-center text-green-600 text-xs">
                              <Clock className="w-3 h-3 mr-1" />
                              {exercise.timeRequired}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            )}

            {/* Skill Maturity Tab */}
            {expandedSection === 'maturity' && (
              <Card className="border border-gray-200 bg-white">
                <div className="flex items-start mb-6">
                  <div className="p-3 bg-indigo-100 rounded-lg mr-4">
                    <Award className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Skill Maturity Levels</h3>
                    <p className="text-gray-600 text-sm">Track your progress from novice to expert</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {/* Level 1 */}
                  <div className="flex items-start p-4 rounded-lg border bg-gray-50 border-gray-200">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-gray-700 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Avoidant</h4>
                      <p className="text-gray-700 mb-2">Avoids giving feedback or only shares vague praise. Often uncomfortable with constructive conversations in professional settings.</p>
                      <p className="text-gray-600 italic">Next step: Learn to name specific behaviors and start small—practice low-risk feedback moments.</p>
                    </div>
                  </div>
                  
                  {/* Level 2 */}
                  <div className="flex items-start p-4 rounded-lg border bg-blue-50 border-blue-200">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-blue-200 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-blue-700 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Trying</h4>
                      <p className="text-gray-700 mb-2">Attempts feedback but struggles with tone, timing, or clarity. Delivery may feel too blunt, too soft, or emotionally charged.</p>
                      <p className="text-blue-700 italic">→ Focus on structure (like the SBI model) and emotional regulation during feedback moments.</p>
                    </div>
                  </div>
                  
                  {/* Level 3 */}
                  <div className="flex items-start p-4 rounded-lg border bg-green-50 border-green-200">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-green-200 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-green-700 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Practicing</h4>
                      <p className="text-gray-700 mb-2">Delivers feedback that is timely, balanced, and behavior-focused. Learns to match tone to the situation and adjusts based on trust level.</p>
                      <p className="text-green-700 italic">• Build consistency and tailor your approach to different personalities and dynamics.</p>
                    </div>
                  </div>
                  
                  {/* Level 4 */}
                  <div className="flex items-start p-4 rounded-lg border bg-purple-50 border-purple-200">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-purple-200 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-purple-700 font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Fluent</h4>
                      <p className="text-gray-700 mb-2">Comfortably gives feedback across situations, adapting for audience and context. Uses language that balances clarity with care.</p>
                      <p className="text-purple-700 italic">✓ Help peers grow their feedback skills and model healthy feedback norms for the team.</p>
                    </div>
                  </div>
                  
                  {/* Level 5 */}
                  <div className="flex items-start p-4 rounded-lg border bg-indigo-50 border-indigo-200">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-indigo-200 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-indigo-700 font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Shaping</h4>
                      <p className="text-gray-700 mb-2">Coaches others on feedback delivery and builds team norms that support psychological safety. Leads by example and champions feedback culture.</p>
                      <p className="text-indigo-700 italic">★ Institutionalize feedback practices across teams and ensure upward, downward, and lateral feedback flows consistently.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-4">Your Current Level</h4>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-blue-900">Developing</span>
                      <span className="text-sm text-blue-700">Level 2</span>
                    </div>
                    <ProgressBar
                      value={35}
                      max={100}
                      color="blue"
                    />
                    <p className="text-sm text-blue-800 mt-3">
                      You're making progress! Continue practicing in scenarios to advance to the next level.
                    </p>
                  </div>
                </div>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="border border-gray-200 bg-white">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  to="/scenarios"
                  className="flex items-center justify-center w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Zap size={18} className="mr-2" />
                  Practice in Scenarios
                </Link>
                <button className="flex items-center justify-center w-full bg-white text-gray-700 py-3 px-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <BookOpen size={18} className="mr-2" />
                  Add to Learning Plan
                </button>
                <button 
                  onClick={() => setShowChatbot(true)}
                  className="flex items-center justify-center w-full bg-white text-gray-700 py-3 px-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <MessageCircle size={18} className="mr-2" />
                  Ask AI Coach
                </button>
              </div>
            </Card>

            {/* Skill Progress */}
            <Card className="border border-gray-200 bg-white">
              <h3 className="font-semibold text-gray-900 mb-4">Your Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Skill Level</span>
                    <span className="font-medium text-blue-600">Developing</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '35%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Practice Sessions</span>
                    <span className="font-medium">2/5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div className="pt-2">
                  <Link
                    to="/scenarios"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                  >
                    Continue Learning
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </Card>

            {/* Related Scenarios */}
            {skill.relatedScenarios.length > 0 && (
              <Card className="border border-gray-200 bg-white">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-indigo-100 rounded-lg mr-3">
                    <Users className="w-4 h-4 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Related Scenarios</h3>
                </div>
                <div className="space-y-3">
                  {skill.relatedScenarios.map((scenarioId) => (
                    <Link
                      key={scenarioId}
                      to={`/scenarios/${scenarioId}`}
                      className="block p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-900 text-sm">
                          {scenarioId.split('-').map(word => 
                            word.charAt(0).toUpperCase() + word.slice(1)
                          ).join(' ')}
                        </h4>
                        <ChevronRight size={16} className="text-indigo-500" />
                      </div>
                    </Link>
                  ))}
                </div>
              </Card>
            )}

            {/* Related Skills */}
            {relatedSkills.length > 0 && (
              <Card className="border border-gray-200 bg-white">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-green-100 rounded-lg mr-3">
                    <BookOpen className="w-4 h-4 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Related Skills</h3>
                </div>
                <div className="space-y-3">
                  {relatedSkills.map((relatedSkill) => (
                    <Link
                      key={relatedSkill.id}
                      to={`/library/skills/${relatedSkill.id}`}
                      className="block p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm">{relatedSkill.name}</h4>
                          <p className="text-gray-600 text-xs mt-1">{relatedSkill.estimatedTime}</p>
                        </div>
                        <ChevronRight size={16} className="text-green-500" />
                      </div>
                    </Link>
                  ))}
                </div>
              </Card>
            )}

            {/* AI Skill Engine Recommendation */}
            <Card className="border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg mr-3">
                  <Brain className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">AI Skill Engine</h3>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Get personalized learning recommendations and pathways for mastering this skill.
              </p>
              <Link
                to="/skill-engine"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                View Personalized Pathway
                <ArrowRight size={14} className="ml-1" />
              </Link>
            </Card>
          </div>
        </div>
      </div>

      {/* AI Chatbot */}
      {showChatbot && (
        <div className="fixed bottom-6 right-6 w-96 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50">
          <div className="flex items-center justify-between bg-blue-600 text-white p-4">
            <div className="flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              <h3 className="font-medium">AI Skill Coach</h3>
            </div>
            <button 
              onClick={() => setShowChatbot(false)}
              className="text-white hover:text-blue-100"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="h-80 overflow-y-auto p-4 bg-gray-50">
            {chatHistory.length === 0 ? (
              <div className="text-center py-8">
                <Brain className="w-12 h-12 text-blue-200 mx-auto mb-3" />
                <p className="text-gray-500 mb-2">Ask me anything about {skill.name}.</p>
                <div className="space-y-2 mt-4">
                  <button 
                    onClick={() => {
                      setChatMessage("How do I give difficult feedback?");
                      handleSendMessage();
                    }}
                    className="block w-full text-left p-2 bg-white rounded-lg border border-gray-200 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    How do I give difficult feedback?
                  </button>
                  <button 
                    onClick={() => {
                      setChatMessage("Can you give me an example of good feedback?");
                      handleSendMessage();
                    }}
                    className="block w-full text-left p-2 bg-white rounded-lg border border-gray-200 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Can you give me an example of good feedback?
                  </button>
                  <button 
                    onClick={() => {
                      setChatMessage("How do I give feedback to my manager?");
                      handleSendMessage();
                    }}
                    className="block w-full text-left p-2 bg-white rounded-lg border border-gray-200 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    How do I give feedback to my manager?
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {chatHistory.map((message, index) => (
                  <div 
                    key={index} 
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-xs p-3 rounded-lg ${
                        message.role === 'user' 
                          ? 'bg-blue-600 text-white rounded-br-none' 
                          : 'bg-white border border-gray-200 rounded-bl-none'
                      }`}
                    >
                      <p className={message.role === 'user' ? 'text-white' : 'text-gray-700'}>
                        {message.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Ask about this skill..."
                className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillDetailPage;