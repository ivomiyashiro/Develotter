import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { AppContext } from 'context/AppContext';
import { IUser } from 'interfaces';

import { ButtonPrimary } from 'components/Buttons/ButtonPrimary/ButtonPrimary';

import { theme } from 'styles/theme';
import { ButtonContainer, Div, H3, ImageContainer, P, Span, UserContainer } from './styles';
import Link from 'next/link';
import { followDev, unfollowDev } from 'actions/social';

interface IProps {
  user: IUser
}

export const UserCard = ({ user }: IProps) => {
  const {socialState, socialDispatch} = useContext(AppContext);
  const [isFollower, setFollower] = useState(false);
  const [onMouseOver, setMouseOver] = useState(false);

  useEffect(() => {
    socialState.followins.map(followins => {
      if (followins.dev_following_id === user.id) {
        setFollower(true);
      }
    });
  },[socialState.followins, user.id]);

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
      <Div>
        <ImageContainer>
          <Image
            src={user.profile_picture}
            alt={user.name}
            layout="fill"
            objectFit="cover"
          />
        </ImageContainer>
        <UserContainer>
          <Link href={`/${user.username}`} passHref>
            <H3>
              {user.name}
            </H3>
          </Link>
          <P>@{user.username}</P>
        </UserContainer>
        {
          isFollower 
            ? (!onMouseOver 
              ? (
                <ButtonContainer onMouseOver={() => setMouseOver(true)}>
                  <ButtonPrimary
                    color={theme.white}
                    textColor={theme.blue}
                  >
                    <Span>Following</Span>
                  </ButtonPrimary>
                </ButtonContainer>
              )
              : (
                <ButtonContainer 
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
                </ButtonContainer>
              )
            )
            : (
              <ButtonContainer>
                <ButtonPrimary
                  color={theme.white}
                  textColor={theme.blue}
                  hover={theme.white + 'A6'}
                  onClick={handleFollow}
                >
                  <Span>Follow</Span>
                </ButtonPrimary>
              </ButtonContainer>
            )
        }

      </Div>
    </>
  );
};
