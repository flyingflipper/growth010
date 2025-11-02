import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Network, Info } from 'lucide-react';
import SkillsNetwork from '../components/SkillsNetwork';

const SkillsNetworkPage: React.FC = () => {
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
          
          <div className="flex items-center mb-4">
            <Network className="w-8 h-8 text-blue-600 mr-3" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Interactive Skills Network</h1>
              <p className="text-xl text-gray-600 mt-2">
                Explore how professional skills connect and build upon each other
              </p>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <div className="flex items-start">
              <Info className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">How to Use This Network</h3>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• <strong>Click on any skill node</strong> to see its details and highlight connections</li>
                  <li>• <strong>Arrows show prerequisites</strong> - skills that should be learned first</li>
                  <li>• <strong>Colors indicate skill levels:</strong> Green (Foundational), Blue (Bridge), Purple (Advanced)</li>
                  <li>• <strong>Use filters</strong> to focus on specific categories or levels</li>
                  <li>• <strong>Search</strong> to quickly find specific skills</li>
                  <li>• <strong>Zoom and pan</strong> to explore different areas of the network</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Network Visualization */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <SkillsNetwork width={1200} height={800} />
        </div>

        {/* Additional Information */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Skill Levels Explained</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
                <div>
                  <div className="font-medium">Foundational</div>
                  <div className="text-gray-600">Core skills everyone should master</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
                <div>
                  <div className="font-medium">Bridge</div>
                  <div className="text-gray-600">Intermediate skills that connect concepts</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-purple-500 mr-3"></div>
                <div>
                  <div className="font-medium">Advanced</div>
                  <div className="text-gray-600">Complex skills for leadership and expertise</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Learning Pathways</h3>
            <p className="text-gray-600 text-sm mb-3">
              Follow the arrows to discover optimal learning sequences. Start with foundational skills and work your way up.
            </p>
            <Link
              to="/library/skills"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Browse All Skills →
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Practice Scenarios</h3>
            <p className="text-gray-600 text-sm mb-3">
              Apply these skills in real-world workplace scenarios to build practical experience.
            </p>
            <Link
              to="/scenarios"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Try Practice Modules →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsNetworkPage;