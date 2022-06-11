export interface NavItem {
  name: string;
  route: string;
  variant?: string;
  colorScheme?: string;
  requireAdmin: boolean;
  requireUser: boolean;
}

export const navItems: NavItem[] = [
  {
    name: 'Leaderboard',
    route: '/leaderboard',
    colorScheme: 'facebook',
    requireAdmin: false,
    requireUser: false,
  },
  {
    name: 'Team',
    route: '/team',
    colorScheme: 'facebook',
    requireAdmin: false,
    requireUser: true,
  },
  {
    name: 'Teams',
    route: '/teams',
    variant: 'theme',
    requireAdmin: true,
    requireUser: true,
  },
];
