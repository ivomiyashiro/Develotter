import { useRouter } from 'next/router';
import { useContext } from 'react';
import Image from 'next/image';

import { AppContext } from 'context/AppContext';

import { MenuItem } from '../MenuItem';

import UserFill from 'components/Icons/UserFill';
import HomeFill from 'components/Icons/HomeFill';
import HomeIcon from 'components/Icons/Home';
import UserIcon from 'components/Icons/User';
import SettingsIcon from 'components/Icons/Settings';
import HelpIcon from 'components/Icons/Help';
import { Div, FollowsContainer, FollowsCounter, H3, IconListContainer, ImageContainer, P, Section, Span, Ul, Wrapper } from './styles';

export const MainSection = () => {

  const { userState, socialState } = useContext(AppContext);
  const router = useRouter();
  const path = router.pathname;

  return (
    <Wrapper>
      <Div>
        <ImageContainer>
          <Image src={userState.profile_picture} alt="yo" layout="fill" objectFit="cover" />
        </ImageContainer>
        <Section>
          <H3>{userState.name}</H3>
          <P>@{userState.username}</P>
        </Section>
        <FollowsContainer>
          <FollowsCounter>
            <H3>{socialState.followins.length}</H3>
            <Span>Following</Span>
          </FollowsCounter>
          <FollowsCounter >
            <H3>{socialState.followers.length}</H3>
            <Span>Followers</Span>
          </FollowsCounter>
        </FollowsContainer>
      </Div>
      <IconListContainer>
        <Ul>
          <MenuItem
            icon={UserIcon}
            label="Profile"
            href={`/${userState.username}`}
            disabled={false}
          />
          <MenuItem
            icon={SettingsIcon}
            label="Settings and privacy"
            disabled={true}
          />
          <MenuItem
            icon={HelpIcon}
            label="Help center"
            disabled={true}
          />
        </Ul>
      </IconListContainer>
    </Wrapper>
  );
};
