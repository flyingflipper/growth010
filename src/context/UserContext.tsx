import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, GrowthArea } from '../types';

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  updateArchetype: (archetype: string) => void;
  addCompletedScenario: (scenarioId: string) => void;
  updateGrowthArea: (areaId: string, score: number) => void;
  awardBadge: (badgeId: string, name: string, description: string, icon: string, category: 'scenarios' | 'growth' | 'consistency' | 'mastery') => void;
  addXP: (amount: number) => void;
  updateStreak: () => void;
  isOnboarded: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const updateArchetype = (archetype: string) => {
    if (user) {
      setUser({ ...user, archetype });
    }
  };

  const addCompletedScenario = (scenarioId: string) => {
    if (user) {
      if (!user.completedScenarios.includes(scenarioId)) {
        const updatedUser = {
          ...user,
          completedScenarios: [...user.completedScenarios, scenarioId]
        };
        
        // Award XP for completing scenario
        updatedUser.totalXP = (updatedUser.totalXP || 0) + 50;
        
        // Check for badges
        if (updatedUser.completedScenarios.length === 1) {
          awardBadge('first-scenario', 'First Steps', 'Completed your first practice module', '🎯', 'scenarios');
        } else if (updatedUser.completedScenarios.length === 5) {
          awardBadge('scenario-explorer', 'Scenario Explorer', 'Completed 5 practice modules', '🚀', 'scenarios');
        }
        
        setUser(updatedUser);
      }
    }
  };

  const updateGrowthArea = (areaId: string, score: number) => {
    if (user) {
      const existingAreaIndex = user.growthAreas.findIndex(area => area.id === areaId);
      
      if (existingAreaIndex !== -1) {
        const updatedAreas = [...user.growthAreas];
        const oldScore = updatedAreas[existingAreaIndex].score;
        updatedAreas[existingAreaIndex] = {
          ...updatedAreas[existingAreaIndex],
          score,
          improvement: score - oldScore,
          lastUpdated: new Date(),
          xpEarned: (updatedAreas[existingAreaIndex].xpEarned || 0) + Math.max(0, score - oldScore) * 5
        };
        
        setUser({
          ...user,
          growthAreas: updatedAreas,
          totalXP: (user.totalXP || 0) + Math.max(0, score - oldScore) * 5
        });
      } else {
        const newArea: GrowthArea = {
          id: areaId,
          name: areaId.charAt(0).toUpperCase() + areaId.slice(1).replace('-', ' '),
          score,
          lastUpdated: new Date(),
          level: 'foundational',
          xpEarned: score * 5
        };
        
        setUser({
          ...user,
          growthAreas: [...user.growthAreas, newArea],
          totalXP: (user.totalXP || 0) + score * 5
        });
      }
    }
  };

  const awardBadge = (badgeId: string, name: string, description: string, icon: string, category: 'scenarios' | 'growth' | 'consistency' | 'mastery') => {
    if (user && !user.badges?.some(badge => badge.id === badgeId)) {
      const newBadge = {
        id: badgeId,
        name,
        description,
        icon,
        earnedAt: new Date(),
        category
      };
      
      setUser({
        ...user,
        badges: [...(user.badges || []), newBadge],
        totalXP: (user.totalXP || 0) + 25 // Bonus XP for earning badge
      });
    }
  };

  const addXP = (amount: number) => {
    if (user) {
      setUser({
        ...user,
        totalXP: (user.totalXP || 0) + amount
      });
    }
  };

  const updateStreak = () => {
    if (user) {
      const today = new Date();
      const lastActivity = user.streaks?.lastActivity ? new Date(user.streaks.lastActivity) : null;
      const isConsecutiveDay = lastActivity && 
        (today.getTime() - lastActivity.getTime()) <= 24 * 60 * 60 * 1000 && 
        today.toDateString() !== lastActivity.toDateString();
      
      const newStreak = isConsecutiveDay ? (user.streaks?.current || 0) + 1 : 1;
      const longestStreak = Math.max(newStreak, user.streaks?.longest || 0);
      
      // Award streak badges
      if (newStreak === 3) {
        awardBadge('streak-3', 'Consistency', 'Maintained a 3-day learning streak', '🔥', 'consistency');
      } else if (newStreak === 7) {
        awardBadge('streak-7', 'Week Warrior', 'Maintained a 7-day learning streak', '⚡', 'consistency');
      } else if (newStreak === 30) {
        awardBadge('streak-30', 'Monthly Master', 'Maintained a 30-day learning streak', '🏆', 'consistency');
      }
      
      setUser({
        ...user,
        streaks: {
          current: newStreak,
          longest: longestStreak,
          lastActivity: today
        }
      });
    }
  };

  const isOnboarded = user !== null && user.archetype !== undefined;

  return (
    <UserContext.Provider value={{ 
      user, 
      setUser, 
      updateArchetype, 
      addCompletedScenario, 
      updateGrowthArea,
      awardBadge,
      addXP,
      updateStreak,
      isOnboarded
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};