import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, 
  Users, 
  Heart, 
  Brain, 
  TrendingUp, 
  Settings,
  Lightbulb,
  Monitor,
  Globe,
  Building,
  ArrowRight 
} from 'lucide-react';
import { SkillCategory } from '../data/skills';

interface SkillCategoryCardProps {
  category: SkillCategory;
}

const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ category }) => {
  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      MessageCircle: <MessageCircle className="w-6 h-6" />,
      Users: <Users className="w-6 h-6" />,
      Heart: <Heart className="w-6 h-6" />,
      Brain: <Brain className="w-6 h-6" />,
      TrendingUp: <TrendingUp className="w-6 h-6" />,
      Settings: <Settings className="w-6 h-6" />,
      Lightbulb: <Lightbulb className="w-6 h-6" />,
      Monitor: <Monitor className="w-6 h-6" />,
      Globe: <Globe className="w-6 h-6" />,
      Building: <Building className="w-6 h-6" />
    };
    return icons[iconName] || <Brain className="w-6 h-6" />;
  };

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; border: string; text: string; icon: string }> = {
      blue: { 
        bg: 'bg-blue-50', 
        border: 'border-blue-200', 
        text: 'text-blue-900', 
        icon: 'text-blue-600' 
      },
      purple: { 
        bg: 'bg-purple-50', 
        border: 'border-purple-200', 
        text: 'text-purple-900', 
        icon: 'text-purple-600' 
      },
      green: { 
        bg: 'bg-green-50', 
        border: 'border-green-200', 
        text: 'text-green-900', 
        icon: 'text-green-600' 
      },
      indigo: { 
        bg: 'bg-indigo-50', 
        border: 'border-indigo-200', 
        text: 'text-indigo-900', 
        icon: 'text-indigo-600' 
      },
      orange: { 
        bg: 'bg-orange-50', 
        border: 'border-orange-200', 
        text: 'text-orange-900', 
        icon: 'text-orange-600' 
      },
      teal: { 
        bg: 'bg-teal-50', 
        border: 'border-teal-200', 
        text: 'text-teal-900', 
        icon: 'text-teal-600' 
      },
      red: { 
        bg: 'bg-red-50', 
        border: 'border-red-200', 
        text: 'text-red-900', 
        icon: 'text-red-600' 
      },
      emerald: { 
        bg: 'bg-emerald-50', 
        border: 'border-emerald-200', 
        text: 'text-emerald-900', 
        icon: 'text-emerald-600' 
      },
      pink: { 
        bg: 'bg-pink-50', 
        border: 'border-pink-200', 
        text: 'text-pink-900', 
        icon: 'text-pink-600' 
      },
      slate: { 
        bg: 'bg-slate-50', 
        border: 'border-slate-200', 
        text: 'text-slate-900', 
        icon: 'text-slate-600' 
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  const colors = getColorClasses(category.color);

  return (
    <Link 
      to={`/library/skills/category/${category.id}`}
      className={`block ${colors.bg} rounded-xl border ${colors.border} hover:shadow-md transition-all duration-200 overflow-hidden`}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-lg bg-white border ${colors.border}`}>
            <div className={colors.icon}>
              {getIcon(category.icon)}
            </div>
          </div>
          <span className={`text-sm font-medium ${colors.text} bg-white px-2 py-1 rounded-full border ${colors.border}`}>
            {category.skillCount} skills
          </span>
        </div>
        
        <h3 className={`text-lg font-semibold ${colors.text} mb-2`}>
          {category.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4">
          {category.description}
        </p>
        
        <div className={`flex items-center ${colors.icon} text-sm font-medium`}>
          Explore skills
          <ArrowRight size={14} className="ml-1" />
        </div>
      </div>
    </Link>
  );
};

export default SkillCategoryCard;