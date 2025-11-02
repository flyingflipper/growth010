import React from 'react';
import { 
  Brain, 
  TrendingUp, 
  Target, 
  Clock, 
  Award,
  BarChart3,
  Users,
  Zap
} from 'lucide-react';
import { LearnerProfile } from '../lib/skillEngine';
import Card from './Card';
import ProgressBar from './ProgressBar';

interface SkillEngineInsightsProps {
  profile: LearnerProfile | null;
  isLoading: boolean;
}

const SkillEngineInsights: React.FC<SkillEngineInsightsProps> = ({
  profile,
  isLoading
}) => {
  if (isLoading || !profile) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="h-24 bg-gray-200 rounded-lg"></div>
          </div>
        ))}
      </div>
    );
  }

  const skillStates = Object.values(profile.currentSkillStates);
  const masteredSkills = skillStates.filter(s => s.level === 'mastered').length;
  const competentSkills = skillStates.filter(s => s.level === 'competent').length;
  const developingSkills = skillStates.filter(s => s.level === 'developing').length;
  const unknownSkills = skillStates.filter(s => s.level === 'unknown').length;

  const totalKnownSkills = masteredSkills + competentSkills + developingSkills;
  const skillProgress = totalKnownSkills / skillStates.length * 100;

  const averageConfidence = skillStates
    .filter(s => s.level !== 'unknown')
    .reduce((sum, s) => sum + s.confidence, 0) / Math.max(totalKnownSkills, 1);

  const skillsNeedingRefresh = skillStates.filter(s => s.needsRefresh).length;

  const getArchetypeIcon = (archetype: string) => {
    switch (archetype) {
      case 'visionary': return '👁️';
      case 'executor': return '🎯';
      case 'connector': return '🤝';
      case 'analyst': return '🧠';
      case 'catalyst': return '⚡';
      case 'builder': return '🔨';
      default: return '🎯';
    }
  };

  const getLearningStyleIcon = (style: string) => {
    switch (style) {
      case 'visual': return '👁️';
      case 'hands-on': return '🤲';
      case 'reading': return '📚';
      case 'mixed': return '🎯';
      default: return '🎯';
    }
  };

  const getPaceIcon = (pace: string) => {
    switch (pace) {
      case 'fast': return '⚡';
      case 'moderate': return '🚶';
      case 'thorough': return '🐢';
      default: return '🚶';
    }
  };

  return (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">{Math.round(skillProgress)}%</h3>
              <p className="text-gray-600">Skills Explored</p>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">{masteredSkills}</h3>
              <p className="text-gray-600">Skills Mastered</p>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200">
          <div className="flex items-center">
            <div className="p-3 bg-orange-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">{Math.round(averageConfidence)}%</h3>
              <p className="text-gray-600">Avg Confidence</p>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-r from-purple-50 to-violet-50 border-purple-200">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">{profile.goalSkills.length}</h3>
              <p className="text-gray-600">Goal Skills</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Skill Distribution */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Brain className="w-5 h-5 mr-2 text-blue-600" />
          Skill Level Distribution
        </h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium text-green-700">Mastered</span>
              <span>{masteredSkills} skills</span>
            </div>
            <ProgressBar
              value={masteredSkills}
              max={skillStates.length}
              color="green"
            />
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium text-blue-700">Competent</span>
              <span>{competentSkills} skills</span>
            </div>
            <ProgressBar
              value={competentSkills}
              max={skillStates.length}
              color="blue"
            />
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium text-orange-700">Developing</span>
              <span>{developingSkills} skills</span>
            </div>
            <ProgressBar
              value={developingSkills}
              max={skillStates.length}
              color="orange"
            />
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium text-gray-700">Unknown</span>
              <span>{unknownSkills} skills</span>
            </div>
            <ProgressBar
              value={unknownSkills}
              max={skillStates.length}
              color="gray"
            />
          </div>
        </div>
      </Card>

      {/* Learning Profile */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Users className="w-5 h-5 mr-2 text-blue-600" />
          Your Learning Profile
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl mb-2">{getArchetypeIcon(profile.archetype)}</div>
            <h4 className="font-medium text-gray-900 capitalize">{profile.archetype}</h4>
            <p className="text-sm text-gray-600">Work Archetype</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl mb-2">{getLearningStyleIcon(profile.preferredLearningStyle)}</div>
            <h4 className="font-medium text-gray-900 capitalize">{profile.preferredLearningStyle}</h4>
            <p className="text-sm text-gray-600">Learning Style</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl mb-2">{getPaceIcon(profile.learningPace)}</div>
            <h4 className="font-medium text-gray-900 capitalize">{profile.learningPace}</h4>
            <p className="text-sm text-gray-600">Learning Pace</p>
          </div>
        </div>
      </Card>

      {/* Alerts and Recommendations */}
      {skillsNeedingRefresh > 0 && (
        <Card className="bg-yellow-50 border-yellow-200">
          <div className="flex items-center">
            <Clock className="w-5 h-5 text-yellow-600 mr-3" />
            <div>
              <h3 className="font-medium text-yellow-800">Skills Need Refreshing</h3>
              <p className="text-yellow-700 text-sm">
                {skillsNeedingRefresh} skills haven't been practiced recently and may need a refresh.
              </p>
            </div>
          </div>
        </Card>
      )}

      {profile.strengthAreas.length > 0 && (
        <Card className="bg-green-50 border-green-200">
          <div className="flex items-center">
            <Zap className="w-5 h-5 text-green-600 mr-3" />
            <div>
              <h3 className="font-medium text-green-800">Your Strength Areas</h3>
              <p className="text-green-700 text-sm">
                You're excelling in: {profile.strengthAreas.join(', ')}
              </p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default SkillEngineInsights;