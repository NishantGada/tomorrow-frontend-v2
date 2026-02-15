export const Colors = {
  // Brand - Deep, rich, modern
  primary: '#6366F1',        // Indigo - sophisticated, tech-forward
  primaryLight: '#818CF8',   // Lighter shade
  primaryDark: '#4F46E5',    // Deeper shade

  // Priority colors - BOLD and eye-catching
  red: '#EF4444',            // Bright red - urgent energy
  redGlow: 'rgba(239, 68, 68, 0.2)',
  yellow: '#F59E0B',         // Amber - warm, important
  yellowGlow: 'rgba(245, 158, 11, 0.2)',
  green: '#10B981',          // Emerald - fresh, positive
  greenGlow: 'rgba(16, 185, 129, 0.2)',

  // Gradients for that premium feel
  gradients: {
    primary: ['#6366F1', '#8B5CF6'] as const,      // Indigo to purple
    red: ['#EF4444', '#F97316'] as const,          // Red to orange
    yellow: ['#F59E0B', '#EAB308'] as const,       // Amber to yellow
    green: ['#10B981', '#14B8A6'] as const,        // Emerald to teal
    dark: ['#0F172A', '#1E293B'] as const,         // Deep dark gradient
    card: ['#FFFFFF', '#F8FAFC'] as const,         // Subtle card gradient
  },

  // Backgrounds - Modern, deep
  light: {
    background: '#F8FAFC',        // Soft off-white
    backgroundSecondary: '#F1F5F9',
    card: '#FFFFFF',
    cardSecondary: '#F8FAFC',
    border: '#E2E8F0',
    borderLight: '#F1F5F9',
  },

  dark: {
    background: '#0F172A',        // Deep slate
    backgroundSecondary: '#1E293B',
    card: '#1E293B',
    cardSecondary: '#334155',
    border: '#334155',
    borderLight: '#475569',
  },

  // Text - Rich contrast
  text: {
    primary: '#0F172A',
    secondary: '#64748B',
    tertiary: '#94A3B8',
    inverse: '#FFFFFF',
    muted: '#CBD5E1',
  },

  // Semantic
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
  info: '#3B82F6',

  // Overlays & Effects
  overlay: 'rgba(15, 23, 42, 0.6)',
  overlayLight: 'rgba(15, 23, 42, 0.3)',
  shadow: 'rgba(99, 102, 241, 0.3)',
  glow: 'rgba(99, 102, 241, 0.5)',
};