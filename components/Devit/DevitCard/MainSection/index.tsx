import { useState } from 'react';

import { IUser } from 'interfaces';

import { HeaderSection } from './HeaderSection';
import { BodySection } from './BodySection';
import { FooterSection } from './FooterSection';
import { Modal } from 'components/Modal';
import { ActionMenuMobile } from '../ActionsMenu/ActionMenuMobile';
import { ActionMenuDesktop } from '../ActionsMenu/ActionMenuDesktop';
import { DeleteDevitToast } from '../DeleteDevitToast';
import { CommentForm } from 'components/Forms/CommentForm';
import { RevitMenuDesktop } from '../RevitMenu/RevitMenuDesktop';
import { CreateQuoteDevitForm } from 'components/Forms/CreateQuoteRevitForm';

interface IProps {
  id: string,
  user: IUser,
  img: string
  content: string
  created_at: Date
}

export const MainSection = ({
  id,
  user,
  content,
  created_at,
  img,
}: IProps) => {

  const [isCommentFormOpen, setCommentFormOpen] = useState(false);
  const [isRevitMenuOpen, setRevitMenuOpen] = useState(false);
  const [isQuoteDevitFormOpen, setQuoteDevitFormOpen] = useState(false);
  const [isHeaderActionsMenuOpen, setHeaderActionsMenuOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  return (
    <>
      <>
        <HeaderSection
          id={id}
          user={user}
          created_at={created_at}
          isComment={false}
          handleHeaderActionsMenu={setHeaderActionsMenuOpen}
        />
        <BodySection
          id={id}
          user={user}
          content={content}
          img={img}
        />
        <FooterSection
          id={id}
          handleCommentOpen={setCommentFormOpen}
          handleRevitMenuOpen={setRevitMenuOpen}
        />

        {
          isCommentFormOpen
          &&
          <Modal 
            handleOpenModal={setCommentFormOpen}
            isOpen={isCommentFormOpen}
          >
            <CommentForm
              id={id}
              user={user}
              content={content}
              created_at={created_at}
              img={img}
              handleOpenModal={setCommentFormOpen}
            />
          </Modal>
        }
        {
          isRevitMenuOpen
          &&
          <RevitMenuDesktop
            id={id}
            handleOpenModal={setRevitMenuOpen}
            handleQuoteDevitFormOpen={setQuoteDevitFormOpen}
          />
        }
        {
          isQuoteDevitFormOpen
          &&
          <Modal
            handleOpenModal={setQuoteDevitFormOpen}
            isOpen={isQuoteDevitFormOpen}
          >
            <CreateQuoteDevitForm
              user={user}
              id={id}
              created_at={created_at}
              content={content}
              img={img}
              handleOpenModal={setQuoteDevitFormOpen}
            />
          </Modal>
        }
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
          <ActionMenuDesktop
            devitUser={user}
            handleMenuOpen={setHeaderActionsMenuOpen}
            handleDeleteModalOpen={setDeleteModalOpen}
          />
        }
        {
          isDeleteModalOpen
          &&
          <Modal
            handleOpenModal={setDeleteModalOpen}
            isOpen={isDeleteModalOpen}
          >
            <DeleteDevitToast
              id={id}
              handleDeleteModalOpen={setDeleteModalOpen}
            />
          </Modal>
        }
      </>
    </>
  );
};
