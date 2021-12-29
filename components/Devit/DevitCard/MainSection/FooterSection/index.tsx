import { useContext, useEffect, useState } from 'react';

import { AppContext } from 'context/AppContext';
import { IComment, IFav } from 'interfaces';
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

  const {userState, devitDispatch, devitState} = useContext(AppContext);
  const { isFaved, favLength }: any = useDevitInfo(id);
  const [favsCouter, setFavsCounter] = useState(0);
  const [isDevitFaved, setDevitFaved] = useState(false);
  const [commentsCounter, setCommentsCounter] = useState(0);

  useEffect(() => {
    setFavsCounter(favLength);
    setDevitFaved(isFaved);

    const devit = devitState.filter(devit => {
      if (devit.id === id) return devit;
    });
    if (!!devit[0].comments) {
      setCommentsCounter(devit[0].comments.length);
    }

  }, [favLength, isFaved, id, devitState]);

  const handleFavDevit = async() => {
    setDevitFaved((prev: boolean) => !prev);

    if (isDevitFaved) {
      unFavDevit(id, userState.id, devitDispatch);
      return setFavsCounter(prev => (prev - 1));
    }

    favDevit(id, devitDispatch);
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
            {/* <Span>{revits.length}</Span> */}
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
