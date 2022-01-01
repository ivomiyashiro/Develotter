import { useContext, useEffect, useState } from 'react';

import { AppContext } from 'context/AppContext';
import { HoverableButton } from 'components/Buttons/HoverableButton';
import { useDevitInfo } from 'hooks/useDevitInfo';

import RedevitIcon from 'components/Icons/Redevit';
import FavIcon from 'components/Icons/Fav';
import FavFill from 'components/Icons/FavFill';
import CommentIcon from 'components/Icons/Comment';
import { theme } from 'styles/theme';
import { Footer, ListItemComments, ListItemFav, ListItemRevits, Span, Ul } from './styles';
import { favDevit, unFavDevit } from 'actions/devit';

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
  const {userState, devitDispatch, devitState} = useContext(AppContext);
  const [favsCouter, setFavsCounter] = useState(0);
  const [isDevitFaved, setDevitFaved] = useState(false);
  const [commentsCounter, setCommentsCounter] = useState(0);
  const [revitsCounter, setRevitsCounter] = useState(0);

  useEffect(() => {
    const devit = devitState.filter(devit => {
      if (devit.id === id) return devit;
    });
    
    if (!!devit[0].comments && !!devit[0].favs && !!devit[0].revits && !!devit[0].quote_revits) {
      devit[0].favs.filter(fav => {
        if (fav.devit_id === id) setDevitFaved(true);
      });
      setCommentsCounter(devit[0].comments.length);
      setRevitsCounter(devit[0].revits.length + devit[0].quote_revits.length);
      setFavsCounter(devit[0].favs.length);
    }

  }, [id, devitState]);

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

  return (
    <>
      <Footer>
        <Ul>
          <ListItemComments
            onClick={() => handleCommentOpen(true)}
          >
            <HoverableButton
              icon={CommentIcon}
              width="16px"
              height="16px"
              color={theme.comments}
            />
            <Span>{commentsCounter}</Span>
          </ListItemComments>
          <ListItemRevits
            onClick={() => handleRevitMenuOpen(true)}
          >
            <HoverableButton
              icon={RedevitIcon}
              width="16px"
              height="16px"
              color={theme.revits}
            />
            <Span>{revitsCounter}</Span>
          </ListItemRevits>
          <ListItemFav
            onClick={handleFavDevit}
          >
            {
              !isDevitFaved
                ? (
                  <HoverableButton
                    icon={FavIcon}
                    width="16px"
                    height="16px"
                    color={theme.fav}
                  />
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
            <Span>{favsCouter}</Span>
          </ListItemFav>
        </Ul>
      </Footer>
    </>
  );
};
