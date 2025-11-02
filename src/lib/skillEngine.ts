import { skills, skillCategories } from '../data/skills';
import { User } from '../types';

export interface LearnerProfile {
  userId: string;
  archetype: string;
  currentSkillStates: Record<string, SkillState>;
  goalSkills: string[];
  preferredLearningStyle: 'visual' | 'hands-on' | 'reading' | 'mixed';
  learningPace: 'fast' | 'moderate' | 'thorough';
  completedScenarios: string[];
  strengthAreas: string[];
  challengeAreas: string[];
}

export interface SkillState {
  skillId: string;
  level: 'unknown' | 'developing' | 'competent' | 'mastered';
  confidence: number; // 0-100
  lastPracticed?: Date;
  practiceCount: number;
  needsRefresh: boolean;
}

export interface SkillRecommendation {
  skillId: string;
  skillName: string;
  priority: number; // 0-100
  reasoning: string[];
  estimatedTime: string;
  pathway: 'direct' | 'prerequisite' | 'reinforcement';
  nextActions: RecommendedAction[];
}

export interface RecommendedAction {
  type: 'scenario' | 'reading' | 'video' | 'practice';
  id: string;
  title: string;
  estimatedTime: string;
  difficulty: 'foundational' | 'bridge' | 'advanced';
}

export interface LearningPathway {
  goalSkill: string;
  totalEstimatedTime: string;
  steps: PathwayStep[];
  alternativePaths?: AlternativePath[];
}

export interface PathwayStep {
  skillId: string;
  skillName: string;
  order: number;
  reasoning: string;
  estimatedTime: string;
  prerequisites: string[];
  actions: RecommendedAction[];
}

export interface AlternativePath {
  name: string;
  description: string;
  estimatedTime: string;
  steps: PathwayStep[];
}

export class SkillEngine {
  private learnerProfile: LearnerProfile;

  constructor(user: User) {
    this.learnerProfile = this.createLearnerProfile(user);
  }

  private createLearnerProfile(user: User): LearnerProfile {
    const currentSkillStates: Record<string, SkillState> = {};
    
    // Initialize skill states based on completed scenarios and growth areas
    skills.forEach(skill => {
      const relatedScenarios = skill.relatedScenarios.filter(scenarioId => 
        user.completedScenarios.includes(scenarioId)
      );
      
      const growthArea = user.growthAreas.find(area => 
        area.name.toLowerCase().includes(skill.name.toLowerCase()) ||
        skill.name.toLowerCase().includes(area.name.toLowerCase())
      );

      let level: SkillState['level'] = 'unknown';
      let confidence = 0;
      let practiceCount = relatedScenarios.length;

      if (growthArea) {
        if (growthArea.score >= 8) level = 'mastered';
        else if (growthArea.score >= 6) level = 'competent';
        else if (growthArea.score >= 3) level = 'developing';
        confidence = growthArea.score * 10;
      } else if (practiceCount > 0) {
        level = 'developing';
        confidence = Math.min(practiceCount * 20, 60);
      }

      currentSkillStates[skill.id] = {
        skillId: skill.id,
        level,
        confidence,
        practiceCount,
        needsRefresh: this.shouldRefresh(level, growthArea?.lastUpdated),
        lastPracticed: growthArea?.lastUpdated
      };
    });

    return {
      userId: user.id,
      archetype: user.archetype || 'unknown',
      currentSkillStates,
      goalSkills: this.inferGoalSkills(user),
      preferredLearningStyle: this.inferLearningStyle(user),
      learningPace: this.inferLearningPace(user),
      completedScenarios: user.completedScenarios,
      strengthAreas: this.identifyStrengthAreas(user),
      challengeAreas: this.identifyChallengeAreas(user)
    };
  }

  private shouldRefresh(level: SkillState['level'], lastPracticed?: Date): boolean {
    if (!lastPracticed || level === 'unknown') return false;
    
    const daysSinceLastPractice = Math.floor(
      (Date.now() - lastPracticed.getTime()) / (1000 * 60 * 60 * 24)
    );
    
    // Skills need refresh based on level and time
    switch (level) {
      case 'developing': return daysSinceLastPractice > 14;
      case 'competent': return daysSinceLastPractice > 30;
      case 'mastered': return daysSinceLastPractice > 60;
      default: return false;
    }
  }

  private inferGoalSkills(user: User): string[] {
    // Based on archetype, suggest goal skills
    const archetypeGoals: Record<string, string[]> = {
      'visionary': ['strategic-communication', 'vision-communication', 'strategic-influence'],
      'executor': ['execution-rigor', 'project-team-leadership', 'delegation-alignment'],
      'connector': ['psychological-safety-promotion', 'relationship-management-repair', 'cross-functional-facilitation'],
      'analyst': ['data-driven-decision-making', 'insight-communication', 'mental-model-development'],
      'catalyst': ['influence-without-authority', 'strategic-influence', 'leadership-courage'],
      'builder': ['initiative-ownership', 'agile-practices-rituals', 'innovation-process-culture']
    };

    return archetypeGoals[user.archetype || ''] || ['strategic-communication', 'influence-without-authority'];
  }

  private inferLearningStyle(user: User): 'visual' | 'hands-on' | 'reading' | 'mixed' {
    // Simple heuristic based on scenario completion patterns
    if (user.completedScenarios.length > 5) return 'hands-on';
    return 'mixed';
  }

  private inferLearningPace(user: User): 'fast' | 'moderate' | 'thorough' {
    const scenariosPerWeek = user.completedScenarios.length / 4; // Assuming 4 weeks
    if (scenariosPerWeek > 3) return 'fast';
    if (scenariosPerWeek > 1) return 'moderate';
    return 'thorough';
  }

  private identifyStrengthAreas(user: User): string[] {
    return user.growthAreas
      .filter(area => area.score >= 7)
      .map(area => area.id)
      .slice(0, 3);
  }

  private identifyChallengeAreas(user: User): string[] {
    return user.growthAreas
      .filter(area => area.score < 5)
      .map(area => area.id)
      .slice(0, 3);
  }

  public getNextRecommendations(limit: number = 5): SkillRecommendation[] {
    const recommendations: SkillRecommendation[] = [];

    // 1. Skills that need refreshing
    const refreshSkills = this.getRefreshRecommendations();
    recommendations.push(...refreshSkills);

    // 2. Prerequisite skills for goal skills
    const prerequisiteSkills = this.getPrerequisiteRecommendations();
    recommendations.push(...prerequisiteSkills);

    // 3. Next logical skills based on current progress
    const progressionSkills = this.getProgressionRecommendations();
    recommendations.push(...progressionSkills);

    // 4. Archetype-specific recommendations
    const archetypeSkills = this.getArchetypeRecommendations();
    recommendations.push(...archetypeSkills);

    // Sort by priority and return top recommendations
    return recommendations
      .sort((a, b) => b.priority - a.priority)
      .slice(0, limit);
  }

  private getRefreshRecommendations(): SkillRecommendation[] {
    const refreshNeeded = Object.values(this.learnerProfile.currentSkillStates)
      .filter(state => state.needsRefresh && state.level !== 'unknown');

    return refreshNeeded.map(state => {
      const skill = skills.find(s => s.id === state.skillId);
      if (!skill) return null;

      return {
        skillId: skill.id,
        skillName: skill.name,
        priority: 90, // High priority for refresh
        reasoning: [
          `You haven't practiced ${skill.name} recently`,
          'Refreshing this skill will maintain your competency',
          'Quick review will boost your confidence'
        ],
        estimatedTime: '30-45 mins',
        pathway: 'reinforcement',
        nextActions: this.generateActionsForSkill(skill, 'refresh')
      };
    }).filter(Boolean) as SkillRecommendation[];
  }

  private getPrerequisiteRecommendations(): SkillRecommendation[] {
    const recommendations: SkillRecommendation[] = [];

    this.learnerProfile.goalSkills.forEach(goalSkillId => {
      const goalSkill = skills.find(s => s.id === goalSkillId);
      if (!goalSkill || !goalSkill.prerequisites) return;

      goalSkill.prerequisites.forEach(prereqName => {
        const prereqSkill = skills.find(s => s.name === prereqName);
        if (!prereqSkill) return;

        const currentState = this.learnerProfile.currentSkillStates[prereqSkill.id];
        if (currentState.level === 'unknown' || currentState.level === 'developing') {
          recommendations.push({
            skillId: prereqSkill.id,
            skillName: prereqSkill.name,
            priority: 85,
            reasoning: [
              `Required for your goal: ${goalSkill.name}`,
              'Building this foundation will accelerate your progress',
              `Aligns with your ${this.learnerProfile.archetype} archetype`
            ],
            estimatedTime: prereqSkill.estimatedTime,
            pathway: 'prerequisite',
            nextActions: this.generateActionsForSkill(prereqSkill, 'learn')
          });
        }
      });
    });

    return recommendations;
  }

  private getProgressionRecommendations(): SkillRecommendation[] {
    const recommendations: SkillRecommendation[] = [];
    const competentSkills = Object.values(this.learnerProfile.currentSkillStates)
      .filter(state => state.level === 'competent');

    competentSkills.forEach(state => {
      const skill = skills.find(s => s.id === state.skillId);
      if (!skill) return;

      // Find skills that have this as a prerequisite
      const nextSkills = skills.filter(s => 
        s.prerequisites?.includes(skill.name) && 
        this.learnerProfile.currentSkillStates[s.id].level === 'unknown'
      );

      nextSkills.forEach(nextSkill => {
        recommendations.push({
          skillId: nextSkill.id,
          skillName: nextSkill.name,
          priority: 75,
          reasoning: [
            `Natural progression from ${skill.name}`,
            'You have the foundation to succeed',
            'Builds on your existing strengths'
          ],
          estimatedTime: nextSkill.estimatedTime,
          pathway: 'direct',
          nextActions: this.generateActionsForSkill(nextSkill, 'learn')
        });
      });
    });

    return recommendations;
  }

  private getArchetypeRecommendations(): SkillRecommendation[] {
    const archetypeSkillMappings: Record<string, string[]> = {
      'visionary': ['strategic-communication', 'vision-communication', 'strategic-influence'],
      'executor': ['execution-rigor', 'project-team-leadership', 'agile-practices-rituals'],
      'connector': ['empathy-in-action', 'psychological-safety-promotion', 'cross-functional-facilitation'],
      'analyst': ['critical-thinking', 'data-driven-decision-making', 'systems-thinking'],
      'catalyst': ['influence-without-authority', 'collaborative-leadership', 'leadership-courage'],
      'builder': ['initiative-ownership', 'creative-thinking-idea-generation', 'innovation-process-culture']
    };

    const archetypeSkills = archetypeSkillMappings[this.learnerProfile.archetype] || [];
    const recommendations: SkillRecommendation[] = [];

    archetypeSkills.forEach(skillId => {
      const skill = skills.find(s => s.id === skillId);
      if (!skill) return;

      const currentState = this.learnerProfile.currentSkillStates[skillId];
      if (currentState.level !== 'mastered') {
        recommendations.push({
          skillId: skill.id,
          skillName: skill.name,
          priority: 70,
          reasoning: [
            `Perfect fit for your ${this.learnerProfile.archetype} archetype`,
            'Leverages your natural strengths',
            'High impact for your career growth'
          ],
          estimatedTime: skill.estimatedTime,
          pathway: 'direct',
          nextActions: this.generateActionsForSkill(skill, 'learn')
        });
      }
    });

    return recommendations;
  }

  private generateActionsForSkill(skill: any, intent: 'learn' | 'refresh'): RecommendedAction[] {
    const actions: RecommendedAction[] = [];

    // Add scenario practice if available
    if (skill.relatedScenarios && skill.relatedScenarios.length > 0) {
      actions.push({
        type: 'scenario',
        id: skill.relatedScenarios[0],
        title: `Practice ${skill.name} in realistic scenarios`,
        estimatedTime: '15-20 mins',
        difficulty: skill.level
      });
    }

    // Add reading materials
    if (skill.resources?.articles && skill.resources.articles.length > 0) {
      actions.push({
        type: 'reading',
        id: skill.resources.articles[0].url,
        title: skill.resources.articles[0].title,
        estimatedTime: skill.resources.articles[0].readingTime,
        difficulty: skill.level
      });
    }

    // Add video content
    if (skill.resources?.videos && skill.resources.videos.length > 0) {
      actions.push({
        type: 'video',
        id: skill.resources.videos[0].url,
        title: skill.resources.videos[0].title,
        estimatedTime: skill.resources.videos[0].duration,
        difficulty: skill.level
      });
    }

    // Add practice exercises
    if (skill.resources?.exercises && skill.resources.exercises.length > 0) {
      actions.push({
        type: 'practice',
        id: skill.id + '-exercise',
        title: skill.resources.exercises[0].title,
        estimatedTime: skill.resources.exercises[0].timeRequired,
        difficulty: skill.level
      });
    }

    return actions;
  }

  public generateLearningPathway(goalSkillId: string): LearningPathway | null {
    const goalSkill = skills.find(s => s.id === goalSkillId);
    if (!goalSkill) return null;

    const pathway = this.buildPathwayToSkill(goalSkill);
    const alternativePaths = this.generateAlternativePaths(goalSkill);

    return {
      goalSkill: goalSkill.name,
      totalEstimatedTime: this.calculateTotalTime(pathway),
      steps: pathway,
      alternativePaths
    };
  }

  private buildPathwayToSkill(goalSkill: any): PathwayStep[] {
    const pathway: PathwayStep[] = [];
    const visited = new Set<string>();

    const buildPath = (skill: any, order: number): PathwayStep[] => {
      if (visited.has(skill.id)) return [];
      visited.add(skill.id);

      const steps: PathwayStep[] = [];
      
      // Add prerequisites first
      if (skill.prerequisites) {
        skill.prerequisites.forEach(prereqName => {
          const prereqSkill = skills.find(s => s.name === prereqName);
          if (prereqSkill) {
            const currentState = this.learnerProfile.currentSkillStates[prereqSkill.id];
            if (currentState.level === 'unknown' || currentState.level === 'developing') {
              steps.push(...buildPath(prereqSkill, order));
              order += steps.length;
            }
          }
        });
      }

      // Add the current skill
      const currentState = this.learnerProfile.currentSkillStates[skill.id];
      if (currentState.level !== 'mastered') {
        steps.push({
          skillId: skill.id,
          skillName: skill.name,
          order: order + 1,
          reasoning: this.getStepReasoning(skill, currentState),
          estimatedTime: skill.estimatedTime,
          prerequisites: skill.prerequisites || [],
          actions: this.generateActionsForSkill(skill, 'learn')
        });
      }

      return steps;
    };

    return buildPath(goalSkill, 0);
  }

  private getStepReasoning(skill: any, currentState: SkillState): string {
    if (currentState.level === 'unknown') {
      return `Foundation skill needed for your growth path`;
    }
    if (currentState.level === 'developing') {
      return `Build on your existing knowledge to reach competency`;
    }
    return `Advance to mastery level for maximum impact`;
  }

  private generateAlternativePaths(goalSkill: any): AlternativePath[] {
    const paths: AlternativePath[] = [];

    // Fast track path (skip some prerequisites if user has related experience)
    if (this.learnerProfile.learningPace === 'fast') {
      paths.push({
        name: 'Fast Track',
        description: 'Accelerated path leveraging your existing experience',
        estimatedTime: '2-3 weeks',
        steps: this.buildFastTrackPath(goalSkill)
      });
    }

    // Deep mastery path (include additional complementary skills)
    if (this.learnerProfile.learningPace === 'thorough') {
      paths.push({
        name: 'Deep Mastery',
        description: 'Comprehensive path with additional complementary skills',
        estimatedTime: '6-8 weeks',
        steps: this.buildDeepMasteryPath(goalSkill)
      });
    }

    return paths;
  }

  private buildFastTrackPath(goalSkill: any): PathwayStep[] {
    // Simplified version focusing on core skills only
    const coreSteps = this.buildPathwayToSkill(goalSkill);
    return coreSteps.filter(step => {
      const skill = skills.find(s => s.id === step.skillId);
      return skill?.level === 'foundational' || skill?.id === goalSkill.id;
    });
  }

  private buildDeepMasteryPath(goalSkill: any): PathwayStep[] {
    const standardPath = this.buildPathwayToSkill(goalSkill);
    
    // Add complementary skills from the same category
    const category = skillCategories.find(cat => 
      skills.filter(s => s.category === cat.id).some(s => s.id === goalSkill.id)
    );

    if (category) {
      const complementarySkills = skills.filter(s => 
        s.category === category.id && 
        s.id !== goalSkill.id &&
        s.level === 'advanced'
      );

      complementarySkills.forEach(skill => {
        standardPath.push({
          skillId: skill.id,
          skillName: skill.name,
          order: standardPath.length + 1,
          reasoning: 'Complementary advanced skill for comprehensive mastery',
          estimatedTime: skill.estimatedTime,
          prerequisites: skill.prerequisites || [],
          actions: this.generateActionsForSkill(skill, 'learn')
        });
      });
    }

    return standardPath;
  }

  private calculateTotalTime(pathway: PathwayStep[]): string {
    // Simple estimation based on individual skill times
    const totalWeeks = pathway.length * 1.5; // Rough estimate
    if (totalWeeks < 4) return `${Math.ceil(totalWeeks)} weeks`;
    if (totalWeeks < 12) return `${Math.ceil(totalWeeks / 4)} months`;
    return `${Math.ceil(totalWeeks / 12)} months`;
  }

  public updateSkillProgress(skillId: string, newLevel: SkillState['level'], confidence: number) {
    if (this.learnerProfile.currentSkillStates[skillId]) {
      this.learnerProfile.currentSkillStates[skillId] = {
        ...this.learnerProfile.currentSkillStates[skillId],
        level: newLevel,
        confidence,
        lastPracticed: new Date(),
        practiceCount: this.learnerProfile.currentSkillStates[skillId].practiceCount + 1,
        needsRefresh: false
      };
    }
  }

  public getLearnerProfile(): LearnerProfile {
    return this.learnerProfile;
  }
}