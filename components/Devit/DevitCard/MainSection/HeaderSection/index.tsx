import ReactTimeAgo from 'react-time-ago';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';

import { IUser } from 'interfaces';

import DotsIcon from 'components/Icons/Dots';
import { theme } from 'styles/theme';
import { HoverableButton } from 'components/Buttons/HoverableButton';
import { A, Anchor, Header, P, Section, Paragraph, Time, ActionsMenuWrapper } from './styles';
import Link from 'next/link';
import { Modal } from 'components/Modal';
import { ActionMenuMobile } from '../../ActionsMenu/ActionMenuMobile';
import { ActionMenuDesktop } from '../../ActionsMenu/ActionMenuDesktop';
import { useState } from 'react';
import { DeleteDevitToast } from '../../DeleteDevitToast';

interface IProps {
  id: string
  devitId?: string
  user: any
  created_at: Date
  isComment: boolean
  handleHeaderActionsMenu?: (value: boolean) => void
}

export const HeaderSection = ({
  devitId,
  id,
  user,
  created_at,
  isComment,
  handleHeaderActionsMenu
}: IProps ) => {

  TimeAgo.addLocale(en);
  const [isHeaderActionsMenuOpen, setHeaderActionsMenuOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  return (
    <>
      <Header>
        <Paragraph>
          <Link href={`/${user?.username}`} passHref>
            <A>
              {user?.name}
            </A>
          </Link>
          <P>@{user?.username} ·</P>
          <Anchor href={`/${user?.username}/status/${id}`}>
            <Time> <ReactTimeAgo date={new Date(created_at)} locale="en-US" timeStyle="twitter" /></Time>
          </Anchor>
        </Paragraph>
        <Section>
          {
            !isComment
              ? (
                <HoverableButton
                  icon={DotsIcon}
                  height="20px"
                  width="20px"
                  color={theme.hack}
                  hoverColor={theme.darker_white}
                  onClick={handleHeaderActionsMenu && (() => handleHeaderActionsMenu(true))}
                />
              )
              : (
                <HoverableButton
                  icon={DotsIcon}
                  height="20px"
                  width="20px"
                  color={theme.hack}
                  hoverColor={theme.darker_white}
                  onClick={() => setHeaderActionsMenuOpen(true)}
                />
              )
          }

        </Section>

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
      </Header>
      {
        isDeleteModalOpen
        &&
        <Modal
          handleOpenModal={setDeleteModalOpen}
          isOpen={isDeleteModalOpen}
        >
          <DeleteDevitToast
            commentId={id}
            devitId={devitId}
            handleDeleteModalOpen={setDeleteModalOpen}
            isComment={true}
          />
        </Modal>
      }
    </>
  );
};
