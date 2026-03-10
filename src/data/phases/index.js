import { phase1 } from './phase1.js';
import { phase2 } from './phase2.js';
import { phase3 } from './phase3.js';
import { phase4 } from './phase4.js';

/**
 * All learning phases combined
 * Each phase contains multiple topics with instructions, challenges, and resources
 */
export const phases = [phase1, phase2, phase3, phase4];

/**
 * Get a specific phase by ID
 * @param {number} phaseId - The ID of the phase (1-4)
 * @returns {object} The phase object
 */
export const getPhaseById = (phaseId) => {
  return phases.find(p => p.id === phaseId);
};

/**
 * Get a specific topic by phase ID and topic index
 * @param {number} phaseId - The ID of the phase
 * @param {number} topicIndex - The index of the topic in the phase
 * @returns {object} The topic object
 */
export const getTopicByIndex = (phaseId, topicIndex) => {
  const phase = getPhaseById(phaseId);
  if (!phase) return null;
  return phase.topics[topicIndex];
};

/**
 * Get all topics across all phases
 * @returns {array} Array of all topics from all phases
 */
export const getAllTopics = () => {
  return phases.flatMap(phase => 
    phase.topics.map(topic => ({
      ...topic,
      phaseId: phase.id,
      phaseName: phase.title
    }))
  );
};

/**
 * Get total number of topics
 * @returns {number} Total topic count
 */
export const getTotalTopics = () => {
  return phases.reduce((sum, phase) => sum + phase.topics.length, 0);
};

/**
 * Search topics by name or brief
 * @param {string} query - Search query
 * @returns {array} Array of matching topics
 */
export const searchTopics = (query) => {
  const allTopics = getAllTopics();
  const lowerQuery = query.toLowerCase();
  
  return allTopics.filter(topic => 
    topic.name.toLowerCase().includes(lowerQuery) ||
    topic.brief.toLowerCase().includes(lowerQuery)
  );
};
