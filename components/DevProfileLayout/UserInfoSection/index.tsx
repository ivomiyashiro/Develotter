import { useEffect, useState } from 'react';
import { getFollowers } from 'services/social';

import { IUser } from 'interfaces';

import { ButtonsSection } from './ButtonsSection';

import CalendarIcon from 'components/Icons/Calendar';
import { theme } from 'styles/theme';
import { Section, UserInfoContainer, H1, P, UserJoinedContainer, FollowsCounter, Counter, H3 } from './styles';

interface IProps {
  user: IUser
}

export const UserInfoSection = ({user}: IProps) => {

  const options: any = { year: 'numeric', month: 'long' };
  const createdAt = new Date(user.created_at).toLocaleDateString('en-US', options);
  const [followingsLength, setFollowingsLength] = useState(0);
  const [followersLength, setFollowersLength] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    getFollowers(user.id)
      .then(resp => {
        if (!resp.ok) return;
        setFollowingsLength(resp.followins.length);
        setFollowersLength(resp.followers.length);
        setFollowers(resp.followers);
      })
      .catch(error => console.log(error));
  }, [user.id, followers]);

  return (
    <>
      <Section>
        <ButtonsSection user={user} followers={followers} />
        <UserInfoContainer>
          <H1>{user.name}</H1>
          <P>@{user.username}</P>
        </UserInfoContainer>
        <UserJoinedContainer>
          <CalendarIcon
            color={theme.darker_white}
            width="18px"
            height="18px"
          />
          <P>Joined {createdAt}</P>
        </UserJoinedContainer>
        <FollowsCounter>
          <Counter>
            <H3>{followingsLength}</H3>
            <P>Following</P>
          </Counter>
          <Counter>
            <H3>{followersLength}</H3>
            <P>Followers</P>
          </Counter>
        </FollowsCounter>
      </Section>
    </>
  );
};
