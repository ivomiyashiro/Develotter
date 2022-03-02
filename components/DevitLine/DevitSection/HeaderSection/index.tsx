import { useState } from 'react';
import Image from 'next/image';
import { IUser } from 'interfaces';

import { Modal } from 'components/Modal';
import { ActionMenuMobile } from 'components/Devit/DevitCard/ActionsMenu/ActionMenuMobile';
import { DeleteDevitToast } from 'components/Devit/DevitCard/DeleteDevitToast';
import { ActionMenuDesktop } from 'components/Devit/DevitCard/ActionsMenu/ActionMenuDesktop';
import { HoverableButton } from 'components/Buttons/HoverableButton';

import DotsIcon from 'components/Icons/Dots';
import { theme } from 'styles/theme';
import { Div, Header, Wrapper, Section, A, P, ActionsMenuWrapper } from './styles';

interface IProps {
  user: IUser
  devitId: string
}

export const HeaderSection = ({user, devitId}: IProps) => {

  const [isHeaderActionsMenuOpen, setHeaderActionsMenuOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  return (
    <>
      <Div>
        <Header>
          <Wrapper>
            <Section>
              <Image
                src={user.profile_picture} 
                layout="fill"
                alt={user.name}
                objectFit="cover"
                placeholder="blur"
                blurDataURL={user.cover_picture}
              />
            </Section>
            <div>
              <A href={`/${user.username}`}>
                {user.name}
              </A>
              <P>@{user.username}</P>
            </div>
          </Wrapper>
          <HoverableButton 
            width="20px"
            height="20px"
            color={theme.darker_white}
            icon={DotsIcon}
            onClick={() => setHeaderActionsMenuOpen(true)}
          />
        </Header>

        {
          isHeaderActionsMenuOpen
          &&
          <Modal
            handleOpenModal={setHeaderActionsMenuOpen}
            isOpen={isHeaderActionsMenuOpen}
            isVisible={false}
          >
            <ActionMenuMobile
              devitUser={user}
              handleOpenModal={setHeaderActionsMenuOpen}
              handleDeleteModalOpen={setDeleteModalOpen}
            />
          </Modal>
        }
        {
          isHeaderActionsMenuOpen
          &&
          <ActionsMenuWrapper>
            <ActionMenuDesktop
              devitUser={user}
              handleMenuOpen={setHeaderActionsMenuOpen}
              handleDeleteModalOpen={setDeleteModalOpen}
            />
          </ActionsMenuWrapper>
        }
      </Div>
      {
        isDeleteModalOpen
        &&
        <Modal
          handleOpenModal={setDeleteModalOpen}
          isOpen={isDeleteModalOpen}
        >
          <DeleteDevitToast
            devitId={devitId}
            handleDeleteModalOpen={setDeleteModalOpen}
          />
        </Modal>
      }
    </>
  );
};
