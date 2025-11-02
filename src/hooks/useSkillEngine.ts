import { useState, useEffect, useMemo } from 'react';
import { SkillEngine, SkillRecommendation, LearningPathway } from '../lib/skillEngine';
import { useUser } from '../context/UserContext';

export function useSkillEngine() {
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const [recommendations, setRecommendations] = useState<SkillRecommendation[]>([]);
  const [pathways, setPathways] = useState<Record<string, LearningPathway>>({});

  const skillEngine = useMemo(() => {
    if (!user) return null;
    return new SkillEngine(user);
  }, [user]);

  useEffect(() => {
    if (!skillEngine) {
      setIsLoading(false);
      return;
    }

    const loadRecommendations = async () => {
      setIsLoading(true);
      try {
        // Get next recommendations
        const nextRecommendations = skillEngine.getNextRecommendations(6);
        setRecommendations(nextRecommendations);

        // Generate pathways for goal skills
        const profile = skillEngine.getLearnerProfile();
        const newPathways: Record<string, LearningPathway> = {};
        
        profile.goalSkills.forEach(goalSkillId => {
          const pathway = skillEngine.generateLearningPathway(goalSkillId);
          if (pathway) {
            newPathways[goalSkillId] = pathway;
          }
        });
        
        setPathways(newPathways);
      } catch (error) {
        console.error('Error loading skill engine data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadRecommendations();
  }, [skillEngine]);

  const updateSkillProgress = (skillId: string, level: any, confidence: number) => {
    if (skillEngine) {
      skillEngine.updateSkillProgress(skillId, level, confidence);
      // Refresh recommendations after update
      const newRecommendations = skillEngine.getNextRecommendations(6);
      setRecommendations(newRecommendations);
    }
  };

  const generatePathway = (goalSkillId: string): LearningPathway | null => {
    if (!skillEngine) return null;
    return skillEngine.generateLearningPathway(goalSkillId);
  };

  const getLearnerProfile = () => {
    return skillEngine?.getLearnerProfile() || null;
  };

  return {
    isLoading,
    recommendations,
    pathways,
    updateSkillProgress,
    generatePathway,
    getLearnerProfile,
    skillEngine
  };
}