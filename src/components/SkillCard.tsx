import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';
import { Skill } from '../data/skills';

interface SkillCardProps {
  skill: Skill;
  showCategory?: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, showCategory = false }) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'foundational':
        return 'bg-green-100 text-green-800';
      case 'bridge':
        return 'bg-blue-100 text-blue-800';
      case 'advanced':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'communication-feedback': 'text-blue-600',
      'relational-social': 'text-green-600',
      'influence-leadership': 'text-purple-600',
      'analytical-strategy': 'text-indigo-600',
      'execution-process': 'text-teal-600',
      'self-mastery': 'text-orange-600',
      'innovation-creative': 'text-red-600',
      'digital-tech': 'text-emerald-600',
      'cultural-inclusion': 'text-pink-600',
      'organizational-career': 'text-slate-600'
    };
    return colors[category] || 'text-gray-600';
  };

  const getCategoryDisplayName = (category: string) => {
    const names: Record<string, string> = {
      'communication-feedback': 'Communication & Feedback',
      'relational-social': 'Relational & Social Intelligence',
      'influence-leadership': 'Influence & Leadership',
      'analytical-strategy': 'Analytical Thinking & Strategy',
      'execution-process': 'Execution & Process Agility',
      'self-mastery': 'Self-Mastery & Personal Development',
      'innovation-creative': 'Innovation & Creative Thinking',
      'digital-tech': 'Digital Dexterity & Tech Fluency',
      'cultural-inclusion': 'Cultural Fluency & Inclusion',
      'organizational-career': 'Organizational Navigation & Career Capital'
    };
    return names[category] || category;
  };

  return (
    <Link 
      to={`/library/skills/${skill.id}`}
      className="block bg-white rounded-xl shadow-sm border border-gray-200 hover:border-blue-300 transition-colors overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{skill.name}</h3>
            {showCategory && (
              <p className={`text-sm font-medium mb-2 ${getCategoryColor(skill.category)}`}>
                {getCategoryDisplayName(skill.category)}
              </p>
            )}
          </div>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${getLevelColor(skill.level)}`}>
            {skill.level}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{skill.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            {skill.estimatedTime}
          </div>
          <div className="flex items-center">
            <BookOpen size={14} className="mr-1" />
            {skill.relatedScenarios.length} scenarios
          </div>
        </div>
        
        <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
          Learn more
          <ArrowRight size={14} className="ml-1" />
        </div>
      </div>
    </Link>
  );
};

export default SkillCard;