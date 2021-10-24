import { Stack } from '@chakra-ui/react';

import { ActiveLink } from '@/components/elements/Sidebar/ActiveLink';

import {
  RiHome3Line,
  RiMoneyDollarCircleLine,
  RiSettingsLine,
  RiBarChart2Line,
} from 'react-icons/ri';
import { CgGames } from 'react-icons/cg';
import { BiMessageRounded } from 'react-icons/bi';

export function SidebarNav() {
  return (
    <Stack spacing={9} align="flex-start">
      <ActiveLink icon={RiHome3Line} title="Home" path="/" />

      <ActiveLink
        icon={RiBarChart2Line}
        title="Points Table"
        path="/classification"
      />

      <ActiveLink icon={CgGames} title="Games" path="/games" />

      <ActiveLink
        icon={RiMoneyDollarCircleLine}
        title="Credit"
        path="/credit"
      />

      <ActiveLink icon={BiMessageRounded} title="Messages" path="/messages" />

      <ActiveLink icon={RiSettingsLine} title="Settings" path="/settings" />
    </Stack>
  );
}
