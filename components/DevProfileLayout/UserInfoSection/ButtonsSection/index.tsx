import { useContext, useEffect, useState } from 'react';

import { followDev, unfollowDev } from 'actions/social';

import { IUser } from 'interfaces';

import { AppContext } from 'context/AppContext';
import { ButtonPrimary } from 'components/Buttons/ButtonPrimary/ButtonPrimary';

import { theme } from 'styles/theme';
import { ButtonContainer, ButtonWrapper, Span } from './styles';

interface IProps {
  user: IUser
  followers: any
}

export const ButtonsSection = ({ user, followers }: IProps) => {

  const { userState, socialDispatch } = useContext(AppContext);
  const [isFollower, setFollower] = useState<null | boolean>(false);
  const [onMouseOver, setMouseOver] = useState(false);

  useEffect(() => {
    setFollower(false);
    followers.map((follower: any) => {
      if (follower.dev_follower_id === userState.id) {
        setFollower(true);
      }
    });
  }, [followers, userState.id]);

  const handleFollow = () => {
    followDev(user.id, socialDispatch);
    setFollower(true);
  };

  const handleUnfollow = () => {
    unfollowDev(user.id, socialDispatch);
    setFollower(false);
  };

  return (
    <>
      {
        userState.id === user.id
          ? (
            <ButtonContainer>
              <ButtonPrimary
                outline={true}
                color={theme.darker_white}
                textColor={theme.white}
                hover={theme.white + '26'}
              >
                <Span>Edit profile</Span>
              </ButtonPrimary>
            </ButtonContainer>
          )
          : isFollower
            ? (!onMouseOver 
              ? (
                <ButtonWrapper onMouseOver={() => setMouseOver(true)}>
                  <ButtonPrimary
                    color={theme.white}
                    textColor={theme.blue}
                  >
                    <Span>Following</Span>
                  </ButtonPrimary>
                </ButtonWrapper>
              )
              : (
                <ButtonWrapper 
                  onMouseLeave={() => setMouseOver(false)}
                  onClick={handleUnfollow}
                >
                  <ButtonPrimary
                    hover={theme.red + '1A'}
                    color={'rgba(103, 7 ,15)'}
                    textColor={theme.red}
                    outline={true}
                  >
                    <Span>Unfollow</Span>
                  </ButtonPrimary>
                </ButtonWrapper>
              )
            )
            : (
              <ButtonWrapper>
                <ButtonPrimary
                  color={theme.white}
                  textColor={theme.blue}
                  hover={theme.white + 'A6'}
                  onClick={handleFollow}
                >
                  <Span>Follow</Span>
                </ButtonPrimary>
              </ButtonWrapper>
            )
      }
    </>
  );
};
