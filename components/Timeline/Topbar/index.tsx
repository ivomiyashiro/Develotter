import { useContext, useState } from 'react';
import Image from 'next/image';

import { AppContext } from 'context/AppContext';

import { MobileAsideMenu } from 'components/MobileMenu';
import { Modal } from 'components/Modal';

import StarsIcon from 'components/Icons/Stars';
import { theme } from 'styles/theme';
import { Button, H2, Header, Section } from './styles';

export const TopBar = () => {

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const {userState} = useContext(AppContext);

  return (
    <>
      <Header>
        <Section>
          <Button onClick={() => setSidebarOpen(true)}>
            <Image
              src={userState.profile_picture}
              alt={userState.name}
              layout="fill"
              objectFit="cover"
            />
          </Button>
          <H2>Home</H2>
        </Section>
        <Section>
          <StarsIcon 
            height="24px"
            width="24px"
            color={theme.white}
          />
        </Section>
        <Modal
          handleOpenModal={setSidebarOpen}
          isOpen={isSidebarOpen}
        >
          <MobileAsideMenu
            handleSidebarOpen={setSidebarOpen}
            isVisible={isSidebarOpen}
          />  
        </Modal>
      </Header>
    </>
  );
};
