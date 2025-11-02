import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { skillCategories, getSkillsByCategory } from '../data/skills';
import SkillCard from '../components/SkillCard';
import Card from '../components/Card';

const SkillCategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  const category = skillCategories.find(cat => cat.id === categoryId);
  const skills = categoryId ? getSkillsByCategory(categoryId) : [];

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Category not found</h2>
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

  const foundationalSkills = skills.filter(skill => skill.level === 'foundational');
  const bridgeSkills = skills.filter(skill => skill.level === 'bridge');
  const advancedSkills = skills.filter(skill => skill.level === 'advanced');
  
  const getColorForLevel = (level: string) => {
    switch(level) {
      case 'foundational': return 'bg-green-100 text-green-800';
      case 'bridge': return 'bg-blue-100 text-blue-800';
      case 'advanced': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            to="/library/skills"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to Skills Directory
          </Link>
          
          <h1 className="text-3xl font-bold text-gray-900">{category.name}</h1>
          <p className="text-xl text-gray-600 mt-2">{category.description}</p>
        </div>

        <Card className="mb-8">
          <div className="flex flex-wrap gap-4 mb-6">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getColorForLevel('foundational')}`}>
              Foundational ({foundationalSkills.length})
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getColorForLevel('bridge')}`}>
              Bridge ({bridgeSkills.length})
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getColorForLevel('advanced')}`}>
              Advanced ({advancedSkills.length})
            </span>
            <span className="text-sm text-gray-500 ml-auto">
              {skills.length} skills total
            </span>
          </div>
          
          <p className="text-gray-600 mb-4">
            Skills are organized by complexity level. Start with foundational skills, then progress to bridge and advanced skills.
          </p>
        </Card>
        
        <div className="space-y-12">
          {/* All Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>

        {skills.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
            <p className="text-gray-600">No skills found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillCategoryPage;