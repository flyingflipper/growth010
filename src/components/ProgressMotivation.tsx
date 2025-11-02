import React from 'react';
import { Flame, Trophy, Target, Star, Calendar, TrendingUp } from 'lucide-react';
import { User, Badge } from '../types';
import Card from './Card';

interface ProgressMotivationProps {
  user: User;
}

const ProgressMotivation: React.FC<ProgressMotivationProps> = ({ user }) => {
  const getStreakIcon = (streak: number) => {
    if (streak >= 7) return <Flame className="w-5 h-5 text-orange-500" />;
    if (streak >= 3) return <Flame className="w-5 h-5 text-yellow-500" />;
    return <Flame className="w-5 h-5 text-gray-400" />;
  };

  const getStreakMessage = (streak: number) => {
    if (streak === 0) return "Start your learning streak today!";
    if (streak === 1) return "Great start! Keep it going.";
    if (streak < 7) return `${streak} days strong! You're building momentum.`;
    if (streak < 30) return `${streak} day streak! You're on fire! 🔥`;
    return `${streak} days! You're a learning legend! 🏆`;
  };

  const getNextMilestone = (streak: number) => {
    if (streak < 3) return { target: 3, reward: "Consistency Badge" };
    if (streak < 7) return { target: 7, reward: "Week Warrior Badge" };
    if (streak < 30) return { target: 30, reward: "Monthly Master Badge" };
    return { target: streak + 30, reward: "Legend Status" };
  };

  const getLevelProgress = (xp: number) => {
    const baseXP = 100;
    const level = Math.floor(xp / baseXP) + 1;
    const currentLevelXP = xp % baseXP;
    const nextLevelXP = baseXP;
    return { level, currentLevelXP, nextLevelXP, progress: (currentLevelXP / nextLevelXP) * 100 };
  };

  const levelInfo = getLevelProgress(user.totalXP || 0);
  const nextMilestone = getNextMilestone(user.streaks?.current || 0);

  const recentBadges = user.badges?.slice(-3) || [];

  return (
    <div className="space-y-6">
      {/* Streak Card */}
      <Card className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            {getStreakIcon(user.streaks?.current || 0)}
            <div className="ml-3">
              <h3 className="font-semibold text-gray-900">Learning Streak</h3>
              <p className="text-sm text-gray-600">
                {getStreakMessage(user.streaks?.current || 0)}
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-orange-600">
              {user.streaks?.current || 0}
            </div>
            <div className="text-xs text-gray-500">days</div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-3 border border-orange-100">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">Next milestone:</span>
            <span className="font-medium text-orange-700">
              {nextMilestone.target - (user.streaks?.current || 0)} days to {nextMilestone.reward}
            </span>
          </div>
          <div className="w-full bg-orange-100 rounded-full h-2 mt-2">
            <div 
              className="bg-orange-500 h-2 rounded-full transition-all duration-300"
              style={{ 
                width: `${Math.min(((user.streaks?.current || 0) / nextMilestone.target) * 100, 100)}%` 
              }}
            />
          </div>
        </div>
      </Card>

      {/* Level Progress */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Star className="w-5 h-5 text-blue-600" />
            </div>
            <div className="ml-3">
              <h3 className="font-semibold text-gray-900">Level {levelInfo.level}</h3>
              <p className="text-sm text-gray-600">
                {levelInfo.nextLevelXP - levelInfo.currentLevelXP} XP to next level
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-blue-600">
              {user.totalXP || 0} XP
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-3 border border-blue-100">
          <div className="flex justify-between items-center text-sm mb-2">
            <span className="text-gray-600">Progress to Level {levelInfo.level + 1}</span>
            <span className="font-medium text-blue-700">
              {levelInfo.currentLevelXP}/{levelInfo.nextLevelXP} XP
            </span>
          </div>
          <div className="w-full bg-blue-100 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${levelInfo.progress}%` }}
            />
          </div>
        </div>
      </Card>

      {/* Recent Badges */}
      {recentBadges.length > 0 && (
        <Card>
          <div className="flex items-center mb-4">
            <Trophy className="w-5 h-5 text-yellow-500 mr-2" />
            <h3 className="font-semibold text-gray-900">Recent Achievements</h3>
          </div>
          <div className="space-y-3">
            {recentBadges.map((badge) => (
              <div key={badge.id} className="flex items-center p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="text-2xl mr-3">{badge.icon}</div>
                <div>
                  <h4 className="font-medium text-gray-900">{badge.name}</h4>
                  <p className="text-sm text-gray-600">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Next Steps */}
      <Card className="border border-green-200 bg-green-50">
        <div className="flex items-center mb-4">
          <Target className="w-5 h-5 text-green-600 mr-2" />
          <h3 className="font-semibold text-gray-900">Your Next Steps</h3>
        </div>
        <div className="space-y-3">
          <div className="flex items-start">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
              <span className="text-xs font-bold text-green-600">1</span>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Complete a Practice Module</h4>
              <p className="text-sm text-gray-600">Earn 50 XP and maintain your streak</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
              <span className="text-xs font-bold text-green-600">2</span>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Explore Growth Areas</h4>
              <p className="text-sm text-gray-600">Focus on your personalized development path</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
              <span className="text-xs font-bold text-green-600">3</span>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Apply Learning</h4>
              <p className="text-sm text-gray-600">Use new skills in your next team meeting</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProgressMotivation;