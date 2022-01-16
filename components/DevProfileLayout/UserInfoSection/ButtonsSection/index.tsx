import { useContext, useEffect, useState } from 'react';

import { followDev, unfollowDev } from 'actions/social';

import { IUser } from 'interfaces';

import { AppContext } from 'context/AppContext';
import { ButtonPrimary } from 'components/Buttons/ButtonPrimary/ButtonPrimary';

import { theme } from 'styles/theme';
import { ButtonContainer, ButtonWrapper, Span } from './styles';

interface IProps {
  user: IUser
}

export const ButtonsSection = ({ user }: IProps) => {

  const { userState, socialState, socialDispatch } = useContext(AppContext);
  const [isFollower, setFollower] = useState<null | boolean>(false);
  const [onMouseOver, setMouseOver] = useState(false);

  useEffect(() => {
    if (socialState.followins === undefined) return;

    const followinsFilter = socialState.followins.filter(follower => {
      if (follower !== undefined && follower.dev_following_id === user.id) return follower.dev_following_id; 
    });
    if (followinsFilter?.length !== 0) {
      setFollower(true);
    };
  }, [socialState.followins, user]);

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
