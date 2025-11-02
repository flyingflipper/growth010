import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Brain, 
  ChevronRight, 
  Eye, 
  LineChart, 
  LogIn,
  MessageCircle, 
  Target, 
  Users, 
  Volume2,
  Settings
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import Button from '../components/Button';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const [email, setEmail] = useState('');
  const [showDevPanel, setShowDevPanel] = useState(false);
  
  // Show returning user section if user exists
  const isReturningUser = user !== null;

  // Development helper function
  const quickStartWithArchetype = (archetype: string) => {
    setUser({
      id: crypto.randomUUID(),
      name: 'Test User',
      archetype: archetype,
      completedScenarios: [],
      growthAreas: [],
      streaks: {
        current: 0,
        longest: 0,
        lastActivity: new Date()
      },
      badges: [],
      level: 1,
      totalXP: 0
    });
    navigate('/dashboard');
  };
  
  return (
    <div className="min-h-screen">
      {/* Development Panel - Only show in development */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={() => setShowDevPanel(!showDevPanel)}
            className="bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
            title="Development Tools"
          >
            <Settings size={16} />
          </button>
          
          {showDevPanel && (
            <div className="absolute top-12 right-0 bg-white border border-gray-200 rounded-lg shadow-xl p-4 w-64">
              <h3 className="font-semibold text-gray-900 mb-3">Quick Test Access</h3>
              <p className="text-sm text-gray-600 mb-4">Skip assessment and go directly to dashboard:</p>
              <div className="space-y-2">
                <Button
                  size="sm"
                  variant="outline"
                  fullWidth
                  onClick={() => quickStartWithArchetype('builder')}
                >
                  🔨 Test as Builder
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  fullWidth
                  onClick={() => quickStartWithArchetype('executor')}
                >
                  🎯 Test as Executor
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  fullWidth
                  onClick={() => quickStartWithArchetype('catalyst')}
                >
                  ⚡ Test as Catalyst
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  fullWidth
                  onClick={() => quickStartWithArchetype('visionary')}
                >
                  👁️ Test as Visionary
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  fullWidth
                  onClick={() => quickStartWithArchetype('connector')}
                >
                  🤝 Test as Connector
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  fullWidth
                  onClick={() => quickStartWithArchetype('analyst')}
                >
                  🧠 Test as Analyst
                </Button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          {/* Returning User Banner */}
          {isReturningUser && (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8 border border-white/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <LogIn className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Welcome back!</h3>
                    <p className="text-blue-100 text-sm">Continue your growth journey</p>
                  </div>
                </div>
                <Button
                  onClick={() => navigate('/dashboard')}
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  Go to Dashboard
                </Button>
              </div>
            </div>
          )}

          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Stop Getting Overlooked. Start Getting Buy-In.
            </h1>
            <p className="text-xl text-blue-50 mb-8 max-w-2xl">
              Your impact deserves recognition — but influence, visibility, and stakeholder buy-in don't come from hard work alone.
              Learn how to influence without authority, negotiate like a leader, and manage up with fast, scenario-based micro-lessons built for ambitious professionals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group bg-white text-blue-600 hover:bg-blue-50"
                onClick={() => navigate('/assessment')}
              >
                🎯 Take Your 2-Minute Influence Quiz
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              {isReturningUser && (
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  onClick={() => navigate('/scenarios')}
                >
                  Continue Learning
                </Button>
              )}
            </div>
            
            <p className="mt-4 text-blue-100 text-sm">
              No fluff. Just tailored skills for real workplace impact.
            </p>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Are you stuck in the "doing great work, but invisible" trap?
            </h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-red-500" />
                </div>
                <p className="text-lg text-gray-700 mt-2">
                  Your manager knows your wins. Your VP doesn't.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
                  <Volume2 className="w-6 h-6 text-red-500" />
                </div>
                <p className="text-lg text-gray-700 mt-2">
                  You have good ideas, but others speak louder.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
                  <Target className="w-6 h-6 text-red-500" />
                </div>
                <p className="text-lg text-gray-700 mt-2">
                  Trainings feel generic, not made for your challenges.
                </p>
              </div>
            </div>
            <p className="text-xl font-semibold text-gray-900">
              Stop guessing how to influence at work.
              <br />
              Learn what works in the rooms where decisions happen.
            </p>
          </div>
        </div>
      </div>

      {/* Promise Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Finally, workplace skills that feel real, fast, and personal.
            </h2>
            <p className="text-xl text-gray-600">
              Forget theory-heavy courses.
              <br />
              Learn through interactive, scenario-based micro-lessons tailored to your role, blockers, and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Take your Influence Profile Assessment
              </h3>
              <p className="text-gray-600">2 minutes to understand your style</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Get your custom learning sprint
              </h3>
              <p className="text-gray-600">Scenarios, scripts, and playbooks</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <LineChart className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Apply it immediately
              </h3>
              <p className="text-gray-600">Get noticed in your next meeting</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Tease */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              See it in action.
            </h2>
            <p className="text-xl text-gray-600">
              Practice real-world influence situations, make choices, and get instant feedback.
              <br />
              Start with our free sample module.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
            <div className="aspect-w-16 aspect-h-9 bg-gray-100">
              <div className="p-8 flex items-center justify-center">
                <p className="text-gray-500 text-lg">Interactive scenario preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <MessageCircle className="w-12 h-12 text-blue-500" />
            </div>
            <blockquote className="text-2xl font-medium text-gray-900 mb-8">
              "This isn't another boring webinar. I learned more in 5 minutes than an entire training day."
            </blockquote>
            <p className="text-gray-600">
              — Senior PM, Tech Company
            </p>
          </div>
        </div>
      </div>

      {/* Primary CTA */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to sharpen your influence in 2 minutes?
          </h2>
          <p className="text-xl text-blue-50 mb-8">
            Join the first 100 professionals testing our private beta.
            <br />
            Get a free personalized growth sprint and start influencing smarter — today.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50"
            onClick={() => navigate('/assessment')}
          >
            🎯 Take Your Quiz Now
          </Button>
        </div>
      </div>

      {/* Secondary CTA */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Want early access to the full Growth Sprint experience?
          </h2>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            <Button className="flex items-center">
              Join Waitlist
              <ChevronRight className="ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;