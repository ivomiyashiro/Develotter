import { IUser } from 'interfaces';

import CalendarIcon from 'components/Icons/Calendar';
import { theme } from 'styles/theme';
import { Section, UserInfoContainer, H1, P, UserJoinedContainer, FollowsCounter, Counter, H3 } from './styles';
import { ButtonsSection } from './ButtonsSection';

interface IProps {
  user: IUser
}

export const UserInfoSection = ({user}: IProps) => {

  const options: any = { year: 'numeric', month: 'long' };
  const createdAt = new Date(user.created_at).toLocaleDateString('en-US', options);

  return (
    <>
      <Section>
        <ButtonsSection user={user} />
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
            <H3>{0}</H3>
            <P>Following</P>
          </Counter>
          <Counter>
            <H3>{0}</H3>
            <P>Followers</P>
          </Counter>
        </FollowsCounter>
      </Section>
    </>
  );
};
