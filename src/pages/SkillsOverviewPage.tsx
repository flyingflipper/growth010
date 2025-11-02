import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Search, Filter, BookOpen, Clock, Users, Network } from 'lucide-react';
import { skillCategories, skills, searchSkills, getSkillsByLevel } from '../data/skills';
import SkillCategoryCard from '../components/SkillCategoryCard';
import SkillCard from '../components/SkillCard';

const SkillsOverviewPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<'all' | 'foundational' | 'bridge' | 'advanced'>(
    (searchParams.get('level') as any) || 'all'
  );
  const [showSearch, setShowSearch] = useState(false);

  const filteredSkills = React.useMemo(() => {
    let result = searchQuery ? searchSkills(searchQuery) : skills;
    
    if (selectedLevel !== 'all') {
      result = result.filter(skill => skill.level === selectedLevel);
    }
    
    return result;
  }, [searchQuery, selectedLevel]);

  const foundationalCount = getSkillsByLevel('foundational').length;
  const bridgeCount = getSkillsByLevel('bridge').length;
  const advancedCount = getSkillsByLevel('advanced').length;

  const handleLevelFilter = (level: 'all' | 'foundational' | 'bridge' | 'advanced') => {
    setSelectedLevel(level);
    if (level === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ level });
    }
    setShowSearch(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            to="/library"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to Library
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Skills Directory</h1>
              <p className="text-xl text-gray-600 mt-2">
                Master the skills that drive professional success
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <Link
                to="/library/skills/network"
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Network size={16} className="mr-2" />
                View Skills Network
              </Link>
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <Search size={16} className="mr-2" />
                Search Skills
              </button>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        {showSearch && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                  Search Skills
                </label>
                <input
                  type="text"
                  id="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Search by name, description, or technique..."
                />
              </div>
              
              <div>
                <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-2">
                  Skill Level
                </label>
                <select
                  id="level"
                  value={selectedLevel}
                  onChange={(e) => handleLevelFilter(e.target.value as any)}
                  className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="all">All Levels</option>
                  <option value="foundational">Foundational</option>
                  <option value="bridge">Bridge</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Clickable Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <button
            onClick={() => handleLevelFilter('all')}
            className={`bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-left hover:border-blue-300 transition-colors ${
              selectedLevel === 'all' ? 'ring-2 ring-blue-500 border-blue-500' : ''
            }`}
          >
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-gray-900">{skills.length}</h3>
                <p className="text-gray-600">Total Skills</p>
              </div>
            </div>
          </button>
          
          <button
            onClick={() => handleLevelFilter('foundational')}
            className={`bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-left hover:border-green-300 transition-colors ${
              selectedLevel === 'foundational' ? 'ring-2 ring-green-500 border-green-500' : ''
            }`}
          >
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-gray-900">{foundationalCount}</h3>
                <p className="text-gray-600">Foundational</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => handleLevelFilter('bridge')}
            className={`bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-left hover:border-blue-300 transition-colors ${
              selectedLevel === 'bridge' ? 'ring-2 ring-blue-500 border-blue-500' : ''
            }`}
          >
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-gray-900">{bridgeCount}</h3>
                <p className="text-gray-600">Bridge</p>
              </div>
            </div>
          </button>
          
          <button
            onClick={() => handleLevelFilter('advanced')}
            className={`bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-left hover:border-purple-300 transition-colors ${
              selectedLevel === 'advanced' ? 'ring-2 ring-purple-500 border-purple-500' : ''
            }`}
          >
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-gray-900">{advancedCount}</h3>
                <p className="text-gray-600">Advanced</p>
              </div>
            </div>
          </button>
        </div>

        {/* Search Results or Categories */}
        {searchQuery || selectedLevel !== 'all' ? (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                {searchQuery ? `Search Results (${filteredSkills.length})` : `${selectedLevel} Skills (${filteredSkills.length})`}
              </h2>
              {(searchQuery || selectedLevel !== 'all') && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    handleLevelFilter('all');
                  }}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Clear filters
                </button>
              )}
            </div>
            
            {filteredSkills.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill) => (
                  <SkillCard key={skill.id} skill={skill} showCategory />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                <p className="text-gray-600">No skills found matching your criteria.</p>
              </div>
            )}
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Skill Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category) => (
                <SkillCategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsOverviewPage;