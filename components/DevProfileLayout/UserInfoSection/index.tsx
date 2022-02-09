import { useEffect, useState } from 'react';
import { getFollowers } from 'services/social';

import { IUser } from 'interfaces';

import { ButtonsSection } from './ButtonsSection';

import CalendarIcon from 'components/Icons/Calendar';
import LocationIcon from 'components/Icons/Location';
import SiteIcon from 'components/Icons/Site';
import { theme } from 'styles/theme';
import { Section, UserInfoContainer, H1, P, UserJoinedContainer, FollowsCounter, Counter, H3, Bio, Span, Info, InfoWrapper, Website } from './styles';

interface IProps {
  user: IUser
  setEditProfileFormOpen: (value: boolean) => void 
}

export const UserInfoSection = ({user, setEditProfileFormOpen}: IProps) => {

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
        <ButtonsSection user={user} followers={followers} setEditProfileFormOpen={setEditProfileFormOpen}/>
        <UserInfoContainer>
          <H1>{user.name}</H1>
          <P>@{user.username}</P>
        </UserInfoContainer>
        <UserJoinedContainer>
          <Bio>
            <Span>{!!user.bio && user.bio}</Span>
          </Bio>

          <InfoWrapper>
            {
              user.location !== ''
              &&
              <Info>
                <LocationIcon
                  color={theme.darker_white}
                  width="18px"
                  height="18px"
                />
                <P>{user.location}</P>
              </Info>
            }
            {
              user.website !== ''
              &&
              <Info>
                <SiteIcon
                  color={theme.darker_white}
                  width="18px"
                  height="18px"
                />
                <Website href={user.website}>{user.website}</Website>
              </Info>
            }
            <Info>
              <CalendarIcon
                color={theme.darker_white}
                width="18px"
                height="18px"
              />
              <P>Joined {createdAt}</P>
            </Info>
          </InfoWrapper>
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
