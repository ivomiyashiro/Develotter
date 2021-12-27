
import { useContext, useState } from 'react';
import Image from 'next/image';

import { AppContext } from '../../../context/AppContext';
import { LogoutMenu } from './LogoutMenu';
import { Modal } from '../../Modal';

import DotsIcon from '../../Icons/Dots';
import { theme } from 'styles/theme';
import { Footer, DotsContainer, ImageContainer, UserContainer, H3, P } from './styles';

export const AsideMenuLeftFooter = () => {

  const {userState} = useContext(AppContext);
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Footer onClick={() => setMenuOpen((prev: boolean) => !prev)}>
        <ImageContainer className="image-container">
          <Image 
            src={!!userState.profile_picture ? userState.profile_picture : '/defaultProfileImg.png'}
            alt={userState.name}
            layout="fill"
            objectFit="cover"
          />
        </ImageContainer>
        <UserContainer className="user-container">
          <H3>{userState.name}</H3>
          <P>@{userState.username}</P>
        </UserContainer>
        <DotsContainer className="dots-container">
          <DotsIcon
            width="18px"
            color={theme.white}
            fill="currentColor"
          />
        </DotsContainer>
        {
          isMenuOpen
          &&
          <Modal
            isVisible={false}
            isOpen={isMenuOpen}
          >
            <p></p>
          </Modal>
        }
        {
          isMenuOpen
          &&
          <LogoutMenu username={userState.username} />
        }
      </Footer>
    </>
  );
};
