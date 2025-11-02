import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Target, Users, ArrowRight } from 'lucide-react';
import { skillCategories, skills } from '../data/skills';
import { topics } from '../data/topics';
import TopicCard from '../components/TopicCard';
import SkillCategoryCard from '../components/SkillCategoryCard';

const LibraryPage: React.FC = () => {
  const foundationalSkills = skills.filter(skill => skill.level === 'foundational').length;
  const appliedSkills = skills.filter(skill => skill.level === 'applied').length;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Learning Library</h1>
          <p className="text-xl text-gray-600 mt-2">
            Comprehensive resources for professional development and skill building
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-gray-900">{topics.length}</h3>
                <p className="text-gray-600">Learning Topics</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-gray-900">{skills.length}</h3>
                <p className="text-gray-600">Professional Skills</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-gray-900">{skillCategories.length}</h3>
                <p className="text-gray-600">Skill Categories</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Directory Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Skills Directory</h2>
              <p className="text-gray-600 mt-1">
                Master {skills.length} professional skills across {skillCategories.length} categories
              </p>
            </div>
            <Link
              to="/library/skills"
              className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              View All Skills
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          {/* Skills Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-bold">F</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Foundational Skills</h3>
                  <p className="text-green-700 text-sm">{foundationalSkills} skills available</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Core mindsets and behaviors that form the foundation of professional growth. 
                Perfect for building essential workplace capabilities.
              </p>
              <Link
                to="/library/skills?level=foundational"
                className="inline-flex items-center text-green-700 hover:text-green-800 font-medium text-sm"
              >
                Explore Foundational Skills
                <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-600 font-bold">A</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Applied Skills</h3>
                  <p className="text-purple-700 text-sm">{appliedSkills} skills available</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Advanced techniques for complex workplace situations and leadership challenges. 
                Build on foundational skills for greater impact.
              </p>
              <Link
                to="/library/skills?level=applied"
                className="inline-flex items-center text-purple-700 hover:text-purple-800 font-medium text-sm"
              >
                Explore Applied Skills
                <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>

          {/* Skill Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.slice(0, 6).map((category) => (
              <SkillCategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>

        {/* Learning Topics Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Learning Topics</h2>
              <p className="text-gray-600 mt-1">
                Comprehensive guides and structured learning paths
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default LibraryPage;