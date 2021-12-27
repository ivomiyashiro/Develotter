import { useContext } from 'react';
import Image from 'next/image';

import { AppContext } from 'context/AppContext';

import { MenuItem } from '../MenuItem';

import UserIcon from 'components/Icons/User';
import SettingsIcon from 'components/Icons/Settings';
import HelpIcon from 'components/Icons/Help';
import { Div, FollowsContainer, FollowsCounter, H3, IconListContainer, ImageContainer, P, Section, Span, Ul, Wrapper } from './styles';

export const MainSection = () => {

  const { userState } = useContext(AppContext);

  return (
    <Wrapper>
      <Div>
        <ImageContainer>
          <Image src={userState.profile_picture} alt="yo" layout="fill" objectFit="contain" />
        </ImageContainer>
        <Section>
          <H3>{userState.name}</H3>
          <P>@{userState.username}</P>
        </Section>
        <FollowsContainer>
          <FollowsCounter>
            {/* <h3>{!!userState.followins && userState.followins.length}</h3> */}
            <Span>Following</Span>
          </FollowsCounter>
          <FollowsCounter >
            {/* <h3>{!!userState.followers && userState.followers.length}</h3> */}
            <Span>Followers</Span>
          </FollowsCounter>
        </FollowsContainer>
      </Div>
      <IconListContainer>
        <Ul>
          <MenuItem
            icon={UserIcon}
            label="Profile"
          />
          <MenuItem
            icon={SettingsIcon}
            label="Settings and privacy"
          />
          <MenuItem
            icon={HelpIcon}
            label="Help center"
          />
        </Ul>
      </IconListContainer>
    </Wrapper>
  );
};
