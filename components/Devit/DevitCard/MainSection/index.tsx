import { useContext, useState } from 'react';

import { IComment, IFav, IUser } from 'interfaces';
import { AppContext } from 'context/AppContext';

import { HeaderSection } from './HeaderSection';
import { BodySection } from './BodySection';
import { FooterSection } from './FooterSection';
import { Modal } from 'components/Modal';
import { ActionMenuMobile } from '../ActionsMenu/ActionMenuMobile';
import { ActionMenuDesktop } from '../ActionsMenu/ActionMenuDesktop';
import { DeleteDevitToast } from '../DeleteDevitToast';
import { CommentForm } from 'components/Forms/CommentForm';

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

  // const {userState} = useContext(AppContext);
  const [isCommentFormOpen, setCommentFormOpen] = useState(false);
  // const [isRevitMenuOpen, setRevitMenuOpen] = useState(false);
  // const [isQuoteDevitFormOpen, setQuoteDevitFormOpen] = useState(false);
  const [isHeaderActionsMenuOpen, setHeaderActionsMenuOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  return (
    <>
      <>
        <HeaderSection
          user={user}
          created_at={created_at}
          isComment={false}
          handleHeaderActionsMenu={setHeaderActionsMenuOpen}
        />
        <BodySection
          content={content}
          img={img}
        />
        <FooterSection
          id={id}
          handleCommentOpen={setCommentFormOpen}
          // handleRevitMenuOpen={setRevitMenuOpen}
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
