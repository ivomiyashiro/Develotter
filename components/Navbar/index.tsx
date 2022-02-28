import { useRouter } from 'next/router';

import { ListIconItem } from './ListIconItem';

import HomeIcon from '../Icons/Home';
import HomeFill from '../Icons/HomeFill';
import SearchIcon from '../Icons/Search';
import NotificationIcon from '../Icons/Notifications';
import MessagesIcon from '../Icons/Messages';

import { theme } from 'styles/theme';
import { Nav, Ul } from './styles';

export const Navbar = () => {

  const router = useRouter();
  const path = router.pathname;
  console.log(path);
  return (
    <>
      <Nav>
        <Ul>
          <ListIconItem 
            icon={path === '/home' ? HomeIcon : HomeFill}
            route="/home"
            strokeWidth="0"
            disabled={false}
          />
          <ListIconItem
            icon={SearchIcon}
            route="/explore"
            fill={theme.white}
            disabled={true}
          />
          <ListIconItem
            icon={NotificationIcon}
            route="/notifications"
            fill={theme.white}
            disabled={true}
          />
          <ListIconItem
            icon={MessagesIcon}
            route="/messages"
            fill={theme.white}
            disabled={true}
          />
        </Ul>
      </Nav>
    </>
  );
};
