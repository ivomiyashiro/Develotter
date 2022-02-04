import { useContext, useEffect, useState } from 'react';

import { favDevit, unFavDevit } from 'actions/devit';
import { IComment, IDevitFavs, IRevit } from 'interfaces';
import { useDevitInfo } from 'hooks/useDevitInfo';
import { AppContext } from 'context/AppContext';
import { getDevitFavs, getComment, getRevits } from 'services/devit';

import { HoverableButton } from 'components/Buttons/HoverableButton';

import RedevitIcon from 'components/Icons/Redevit';
import FavIcon from 'components/Icons/Fav';
import FavFill from 'components/Icons/FavFill';
import CommentIcon from 'components/Icons/Comment';
import { theme } from 'styles/theme';
import { ButtonComment, ButtonFav, ButtonRevit, CommentsCounter, FavsCounter, Footer, ListItemComments, ListItemFav, ListItemRevits, RevitsCounter, Ul } from './styles';

interface IProps {
  id: string
  handleCommentOpen: (value: boolean) => void
  handleRevitMenuOpen: (value: boolean) => void
}

export const FooterSection = ({
  id,
  handleCommentOpen,
  handleRevitMenuOpen
}: IProps) => {

  useDevitInfo(id);
  const {userState, devitDispatch} = useContext(AppContext);
  const [isDevitFaved, setDevitFaved] = useState(false);
  const [isDevitCommented, setDevitCommented] = useState(false);
  const [isDevitRevitted, setDevitRevitted] = useState(false);
  const [favsCouter, setFavsCounter] = useState(0);
  const [commentsCounter, setCommentsCounter] = useState(0);
  const [revitsCounter, setRevitsCounter] = useState(0);
  const [hoverComments, setHoverComments] = useState(false);
  const [hoverRevits, setHoverRevits] = useState(false);
  const [hoverFavs, setHoverFavs] = useState(false);

  useEffect(() => {
    getDevitFavs(id)
      .then(resp => {
        if (!resp.ok) return;        
        if (resp.favs.some((e: IDevitFavs) => e.uid === userState.id)) {
          setDevitFaved(true);
        }
        setFavsCounter(resp.favs.length);
      })
      .catch(error => console.log(error));
  }, [id, userState.id]);

  useEffect(() => {
    getComment(id)
      .then(resp => {
        if (!resp.ok) return;
        if (resp.comments.some((e: IComment) => e.uid === userState.id)) {
          setDevitCommented(true);
        } else {
          setDevitCommented(false);
        }
        setCommentsCounter(resp.comments.length);
      })
      .catch(error => console.log(error));
  });

  useEffect(() => {
    getRevits(id)
      .then(resp => {
        if (!resp.ok) return;
        if (resp.revits.some((e: IRevit) => e.uid === userState.id)) {
          setDevitRevitted(true);
        }else {
          setDevitRevitted(false);
        }
        setRevitsCounter(resp.revits.length);
      })
      .catch(error => console.log(error));
  });

  const handleFavDevit = async() => {
    
    if (isDevitFaved) {
      unFavDevit(id, userState.id, devitDispatch);
      setDevitFaved(false);
      return setFavsCounter(prev => (prev - 1));
    }

    favDevit(id, devitDispatch);
    setDevitFaved(true);
    setFavsCounter(prev => (prev + 1));
  };
  
  const commentsColor = isDevitCommented ? theme.comments : theme.darker_white;
  const iconCommentsColor = hoverComments ? theme.comments : (isDevitCommented ? (theme.comments) : (theme.darker_white));
  const revitsColor = isDevitRevitted ? theme.revits : theme.darker_white;
  const iconRevittedColor = hoverRevits ? theme.revits : (isDevitRevitted ? (theme.revits) : (theme.darker_white));
  
  return (
    <>
      <Footer>
        <Ul>
          <ListItemComments
            onClick={() => handleCommentOpen(true)}
            onMouseOver={() => setHoverComments(true)}
            onMouseLeave={() => setHoverComments(false)}
          >
            <ButtonComment color={commentsColor}>
              <CommentIcon 
                width="16px"
                height="16px"
                color={iconCommentsColor}
              />
            </ButtonComment>
            <CommentsCounter commented={isDevitCommented}>{commentsCounter}</CommentsCounter>
          </ListItemComments>
          <ListItemRevits
            onClick={() => handleRevitMenuOpen(true)}
            onMouseOver={() => setHoverRevits(true)}
            onMouseLeave={() => setHoverRevits(false)}
          >
            <ButtonRevit color={revitsColor}>
              <RedevitIcon 
                width="16px"
                height="16px"
                color={iconRevittedColor}
              />
            </ButtonRevit>
            <RevitsCounter revitted={isDevitRevitted}>{revitsCounter}</RevitsCounter>
          </ListItemRevits>
          <ListItemFav
            onClick={handleFavDevit}
            onMouseOver={() => setHoverFavs(true)}
            onMouseLeave={() => setHoverFavs(false)}
          >
            {
              !isDevitFaved
                ? (
                  <ButtonFav color={theme.fav}>
                    <FavIcon 
                      width="16px"
                      height="16px"
                      color={hoverFavs ? theme.fav : theme.darker_white}
                    />
                  </ButtonFav>
                )
                : (
                  <HoverableButton
                    icon={FavFill}
                    width="16px"
                    height="16px"
                    color={theme.fav}
                  />
                )
            } 
            <FavsCounter faved={isDevitFaved}>{favsCouter}</FavsCounter>
          </ListItemFav>
        </Ul>
      </Footer>
    </>
  );
};
