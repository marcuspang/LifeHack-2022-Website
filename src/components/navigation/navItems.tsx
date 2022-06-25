import { ButtonProps } from '@chakra-ui/react';
import { MdLeaderboard, MdPeople, MdPerson } from 'react-icons/md';
import { BiGame } from 'react-icons/bi';

export interface NavItem {
  name: string;
  route: string;
  variant?: string;
  colorScheme?: string;
  color?: string;
  requireAdmin: boolean;
  requireUser: boolean;
  leftIcon?: ButtonProps['leftIcon'];
  onClick?: () => void;
}

export const navItems: NavItem[] = [
  {
    name: 'Leaderboard',
    route: '/leaderboard',
    variant: 'header',
    leftIcon: <MdLeaderboard />,
    requireAdmin: false,
    requireUser: false,
  },
  {
    name: 'Team',
    route: '/team',
    variant: 'header',
    leftIcon: <MdPeople />,
    requireAdmin: false,
    requireUser: true,
  },
  {
    name: 'Teams',
    route: '/teams',
    variant: 'theme',
    leftIcon: <MdPeople color="gray" />,
    requireAdmin: true,
    requireUser: true,
  },
  {
    name: 'Participants',
    route: '/participants',
    variant: 'theme',
    leftIcon: <MdPerson color="gray" />,
    requireAdmin: true,
    requireUser: true,
  },
  {
    name: 'Activities',
    route: '/activities',
    variant: 'theme',
    leftIcon: <BiGame color="gray" />,
    requireAdmin: true,
    requireUser: true,
  },
];
