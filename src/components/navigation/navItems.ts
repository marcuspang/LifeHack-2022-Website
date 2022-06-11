export interface NavItem {
  name: string;
  route: string;
  variant?: string;
  requireAdmin: boolean;
  requireUser: boolean;
}

export const navItems: NavItem[] = [
  {
    name: 'Leaderboard',
    route: '/leaderboard',
    variant: 'themeBlue',
    requireAdmin: false,
    requireUser: false,
  },
  {
    name: 'Team',
    route: '/team',
    variant: 'themeBlue',
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
