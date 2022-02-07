import { useContext, useState } from 'react';

import { AppContext } from 'context/AppContext';
import { favDevit, unFavDevit } from 'actions/devit';

import { CommentForm } from 'components/Forms/CommentForm';
import { RevitMenuDesktop } from 'components/Devit/DevitCard/RevitMenu/RevitMenuDesktop';
import { CreateQuoteDevitForm } from 'components/Forms/CreateQuoteRevitForm';
import { HoverableButton } from 'components/Buttons/HoverableButton';
import { Modal } from 'components/Modal';

import CommentIcon from 'components/Icons/Comment';
import FavIcon from 'components/Icons/Fav';
import RedevitIcon from 'components/Icons/Redevit';
import FavFill from 'components/Icons/FavFill';
import { ButtonComment, ButtonFav, ButtonRevit } from 'components/Devit/DevitCard/MainSection/FooterSection/styles';
import { theme } from 'styles/theme';
import { Div, Ul, Li, ModalWrapper } from './styles';


export const ButtonsSection = ({
  id,
  user,
  devit,
  isDevitFaved,
  handleDevitFav,
  handleFavsCounter,
  handleQuoteRevitCounter,
  handleRevtisCounter,
}: any) => {

  const {userState, devitDispatch} = useContext(AppContext);
  const [hoverComments, setHoverComments] = useState(false);
  const [hoverRevits, setHoverRevits] = useState(false);
  const [hoverFavs, setHoverFavs] = useState(false);
  const [isCommentsFormOpen, setCommentsFormOpen] = useState(false);
  const [isRevitMenuOpen, setRevitMenuOpen] = useState(false);
  const [isQuoteRevitFormOpen, setQuoteRevitFormOpen] = useState(false);
 
  const handleFavDevit = async() => {
    
    if (isDevitFaved) {
      unFavDevit(id, userState.id, devitDispatch);
      handleDevitFav(false);
      return handleFavsCounter((prev: number) => (prev - 1));
    }

    favDevit(id, devitDispatch);
    handleDevitFav(true);
    handleFavsCounter((prev: number) => (prev + 1));
  };

  const iconCommentsColor = hoverComments ? theme.comments : theme.darker_white;
  const iconRevittedColor = hoverRevits ? theme.revits : theme.darker_white;

  return (
    <>
      <Div>
        <Ul>
          <Li
            onMouseOver={() => setHoverComments(true)}
            onMouseLeave={() => setHoverComments(false)}
          >
            <ButtonComment 
              color={theme.darker_white}
              onClick={() => setCommentsFormOpen(true)}
            >
              <CommentIcon 
                width="22px"
                height="22px"
                color={iconCommentsColor}
              />
            </ButtonComment>
          </Li>
          <Li
            onMouseOver={() => setHoverRevits(true)}
            onMouseLeave={() => setHoverRevits(false)}
          >
            <ButtonRevit 
              color={theme.darker_white}
              onClick={() => setRevitMenuOpen(true)}
            >
              <RedevitIcon 
                width="22px"
                height="22px"
                color={iconRevittedColor}
              />
            </ButtonRevit>
            <ModalWrapper isOpen={isRevitMenuOpen}>
              <RevitMenuDesktop 
                id={id}
                handleOpenModal={setRevitMenuOpen}
                handleQuoteDevitFormOpen={setQuoteRevitFormOpen}
              />
            </ModalWrapper>
          </Li>
          <Li
            onClick={handleFavDevit}
            onMouseOver={() => setHoverFavs(true)}
            onMouseLeave={() => setHoverFavs(false)}
          >
            {
              !isDevitFaved
                ? (
                  <ButtonFav color={theme.fav}>
                    <FavIcon 
                      width="22px"
                      height="22px"
                      color={hoverFavs ? theme.fav : theme.darker_white}
                    />
                  </ButtonFav>
                )
                : (
                  <HoverableButton
                    icon={FavFill}
                    width="22px"
                    height="22px"
                    color={theme.fav}
                  />
                )
            } 
          </Li>
        </Ul>
      </Div>
      <Modal
        isOpen={isCommentsFormOpen}
        handleOpenModal={setCommentsFormOpen}
      >
        <CommentForm 
          id={id}
          user={user}
          created_at={devit.created_at}
          content={devit.content}
          img={devit.img}
          handleOpenModal={setCommentsFormOpen}
        />
      </Modal>
      <Modal
        isOpen={isQuoteRevitFormOpen}
        handleOpenModal={setQuoteRevitFormOpen}
      >
        <CreateQuoteDevitForm 
          id={id}
          content={devit.content}
          created_at={devit.created_at}
          img={devit.img}
          handleOpenModal={setQuoteRevitFormOpen}
        />
      </Modal>
    </>
  );
};
