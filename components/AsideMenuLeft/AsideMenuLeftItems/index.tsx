import { useContext } from 'react';
import { useRouter } from 'next/router';

import { handleOpenCreateDevitForm } from 'actions/ui';
import { AppContext } from 'context/AppContext';

import { MenuItem } from './MenuItem';
import { ButtonPrimary } from 'components/Buttons/ButtonPrimary/ButtonPrimary';
import { DevitButton } from 'components/Buttons/DevitButton';

import HomeFill from 'components/Icons/HomeFill';
import Home from 'components/Icons/Home';
import HashtagIcon from 'components/Icons/HashTag';
import NotificationIcon from 'components/Icons/Notifications';
import MessagesIcon from 'components/Icons/Messages';
import UserIcon from 'components/Icons/User';
import UserFill from 'components/Icons/UserFill';
import SettingsIcon from 'components/Icons/Settings';
import HelpIcon from 'components/Icons/Help';

import { theme } from 'styles/theme';
import { Div, Menu, Section, Ul } from './styles';

export const AsideLeftMenuItems = () => {

  const { userState, uiDispatch } = useContext(AppContext);
  const router = useRouter();
  const path = router.pathname;

  return (
    <>
      <Menu>
        <Ul>
          <MenuItem
            icon={path === '/home' ? Home : HomeFill}
            label="Home"
            href="/home"
            disabled={false}
          />
          <MenuItem
            icon={path === '/[user]' ? UserFill : UserIcon}
            label="Profile"
            href={`/${userState.username}`}
            disabled={false}
          />
          <MenuItem
            icon={HashtagIcon}
            label="Explore"
            href="/explore"
            disabled={true}
          />
          <MenuItem
            icon={NotificationIcon}
            label="Notifications"
            href="/notifications"
            disabled={true}
          />
          <MenuItem
            icon={MessagesIcon}
            label="Messages"
            href="/messages"
            disabled={true}
          />
          <MenuItem
            icon={SettingsIcon}
            label="Settings"
            href="/settings"
            disabled={true}
          />
          <MenuItem
            icon={HelpIcon}
            label="Help center"
            href="/help-center"
            disabled={true}
          />
        </Ul>
        <Section>
          <ButtonPrimary
            textColor={theme.blue}
            color={theme.hack}
            onClick={() => handleOpenCreateDevitForm(uiDispatch)}
          >
            Devit
          </ButtonPrimary>
        </Section>
        <Div>
          <DevitButton />
        </Div>
      </Menu>
    </>
  );
};
