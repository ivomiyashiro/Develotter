import { useRouter } from 'next/router';

import { ListIconItem } from './ListIconItem';

import HomeIcon from '../Icons/Home';
import SearchIcon from '../Icons/Search';
import NotificationIcon from '../Icons/Notifications';
import MessagesIcon from '../Icons/Messages';

import { theme } from 'styles/theme';
import { Nav, Ul } from './styles';

export const Navbar = () => {

  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      <Nav>
        <Ul>
          <ListIconItem 
            icon={HomeIcon}
            route="/home"
            fill={currentRoute === '/home' ? theme.white : 'transparent'}
            strokeWidth="0"
          />
          <ListIconItem
            icon={SearchIcon}
            route="/explore"
            fill={theme.white}
            strokeWidth={currentRoute === '/explore' ? 1 : 0}
          />
          <ListIconItem
            icon={NotificationIcon}
            route="/notifications"
            fill={theme.white}
            strokeWidth={currentRoute === '/notifications' ? 1 : 0}
          />
          <ListIconItem
            icon={MessagesIcon}
            route="/messages"
            fill={theme.white}
            strokeWidth={currentRoute === '/messages' ? 1 : 0}
          />
        </Ul>
      </Nav>
    </>
  );
};
