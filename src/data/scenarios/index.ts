import { Scenario } from '../../types';

// Import all scenario files
import { difficultFeedbackScenario } from './difficult-feedback';
import { performanceReviewDisagreementScenario } from './performance-review-disagreement';
import { resourceAllocationConflictScenario } from './resource-allocation-conflict';
import { careerGrowth1on1Scenario } from './career-growth-1on1';
import { takingCreditScenario } from './taking-credit';
import { crossFunctionalDisagreementScenario } from './cross-functional-disagreement';
import { researchDataConflictScenario } from './research-data-conflict';
import { clientFeedbackDisagreementScenario } from './client-feedback-disagreement';
import { projectTimelineConflictScenario } from './project-timeline-conflict';

// Export all scenarios as an array
export const scenarios: Scenario[] = [
  difficultFeedbackScenario,
  performanceReviewDisagreementScenario,
  resourceAllocationConflictScenario,
  careerGrowth1on1Scenario,
  takingCreditScenario,
  crossFunctionalDisagreementScenario,
  researchDataConflictScenario,
  clientFeedbackDisagreementScenario,
  projectTimelineConflictScenario
];

// Helper function to get scenario by ID
export const getScenarioById = (id: string): Scenario | undefined => {
  return scenarios.find(scenario => scenario.id === id);
};