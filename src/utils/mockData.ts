export const mockTasks = [
  {
    id: '1',
    title: 'Finish presentation deck',
    description: 'Complete slides for Q1 review meeting',
    category: 'RED' as const,
    status: 'ACTIVE' as const,
    completed: false,
  },
  {
    id: '2',
    title: 'Review pull requests',
    description: 'Check and approve pending code reviews',
    category: 'YELLOW' as const,
    status: 'ACTIVE' as const,
    completed: false,
  },
  {
    id: '3',
    title: 'Read design article',
    description: 'Check out latest trends in mobile UI',
    category: 'GREEN' as const,
    status: 'ACTIVE' as const,
    completed: false,
  },
  {
    id: '4',
    title: 'Call with client',
    description: 'Discuss project requirements',
    category: 'RED' as const,
    status: 'ACTIVE' as const,
    completed: false,
  },
];

export const mockUser = {
  name: 'Nishant',
  currentStreak: 15,
  totalTasksCompleted: 127,
};

export const mockSummary = "Tomorrow looks focused! Tackle your presentation first thing when energy is high. You've got this! 💪";