import { useContext } from 'react';

import { handleOpenCreateDevitForm } from 'actions/ui';
import { AppContext } from 'context/AppContext';

import { MenuItem } from './MenuItem';
import { ButtonPrimary } from 'components/Buttons/ButtonPrimary/ButtonPrimary';
import { DevitButton } from 'components/Buttons/DevitButton';

import HomeIcon from 'components/Icons/Home';
import HashtagIcon from 'components/Icons/HashTag';
import NotificationIcon from 'components/Icons/Notifications';
import MessagesIcon from 'components/Icons/Messages';
import UserIcon from 'components/Icons/User';
import SettingsIcon from 'components/Icons/Settings';
import HelpIcon from 'components/Icons/Help';

import { theme } from 'styles/theme';
import { Div, Menu, Section, Ul } from './styles';

export const AsideLeftMenuItems = () => {

  const { userState, uiDispatch } = useContext(AppContext);

  return (
    <>
      <Menu>
        <Ul>
          <MenuItem
            icon={HomeIcon}
            label="Home"
            href="/home"
          />
          <MenuItem
            icon={HashtagIcon}
            label="Explore"
            href="/explore"
          />
          <MenuItem
            icon={NotificationIcon}
            label="Notifications"
            href="/notifications"
          />
          <MenuItem
            icon={MessagesIcon}
            label="Messages"
            href="/messages"
          />
          <MenuItem
            icon={UserIcon}
            label="Profile"
            href={`/${userState.username}`}
          />
          <MenuItem
            icon={SettingsIcon}
            label="Settings"
            href="/settings"
          />
          <MenuItem
            icon={HelpIcon}
            label="Help center"
            href="/help-center"
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
