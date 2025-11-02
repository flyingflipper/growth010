import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart3, BookOpen, Home, User, Target } from 'lucide-react';
import { useUser } from '../context/UserContext';

const Header: React.FC = () => {
  const location = useLocation();
  const { isOnboarded } = useUser();
  
  // Don't show header on landing page or during onboarding
  if (location.pathname === '/' || !isOnboarded) {
    return null;
  }
  
  const navItems = [
    { 
      path: '/dashboard', 
      label: 'Dashboard', 
      icon: <Home size={20} />,
      description: 'Your personalized growth overview'
    },
    { 
      path: '/scenarios', 
      label: 'Practice Modules', 
      icon: <Target size={20} />,
      description: 'Interactive workplace scenarios'
    },
    { 
      path: '/progress', 
      label: 'My Growth', 
      icon: <BarChart3 size={20} />,
      description: 'Track your development journey'
    },
    { 
      path: '/library', 
      label: 'Library', 
      icon: <BookOpen size={20} />,
      description: 'Learning resources and content'
    },
    { 
      path: '/profile', 
      label: 'Profile', 
      icon: <User size={20} />,
      description: 'Account settings and preferences'
    }
  ];
  
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/dashboard" className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
                GrowthMindset
              </Link>
            </div>
          </div>
          <nav className="flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || 
                (item.path === '/scenarios' && location.pathname.startsWith('/scenarios'));
              return (
                <div key={item.path} className="relative group">
                  <Link
                    to={item.path}
                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'text-blue-600 bg-blue-50 shadow-sm'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <span className="mr-2">{item.icon}</span>
                    <span className="hidden md:block">{item.label}</span>
                  </Link>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                    <div className="text-center">
                      <div className="font-medium">{item.label}</div>
                      <div className="text-gray-300 mt-1">{item.description}</div>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  </div>
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;