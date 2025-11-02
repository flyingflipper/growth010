// Map display slugs to canonical slugs
export const subtopicSlugMappings: Record<string, string> = {
  'self-awareness': 'self-awareness-meta-cognition',
  'meta-cognition': 'self-awareness-meta-cognition',
  'assertiveness': 'assertiveness-communication',
  'communication': 'assertiveness-communication',
  'emotional-intelligence': 'emotional-intelligence',
  'ei': 'emotional-intelligence',
  'decision-making': 'decision-making',
  'decisive-action': 'decision-making'
};

// Map canonical slugs to display slugs
export const reverseSubtopicSlugMappings: Record<string, string> = {
  'self-awareness-meta-cognition': 'self-awareness',
  'assertiveness-communication': 'assertiveness',
  'emotional-intelligence': 'emotional-intelligence',
  'decision-making': 'decision-making'
};

export function getCanonicalSlug(displaySlug: string): string {
  // Normalize the input slug by replacing spaces with hyphens
  const normalizedSlug = displaySlug.toLowerCase().replace(/\s+/g, '-');
  return subtopicSlugMappings[normalizedSlug] || normalizedSlug;
}

export function getDisplaySlug(canonicalSlug: string): string {
  return reverseSubtopicSlugMappings[canonicalSlug] || canonicalSlug;
}