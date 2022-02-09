import { useContext, useEffect, useState } from 'react';

import { IComment } from 'interfaces';

import { favComment, unFavComment } from 'actions/devit';
import { getCommentFavs } from 'services/devit';

import { AppContext } from 'context/AppContext';

import { HeaderSection } from '../DevitCard/MainSection/HeaderSection';
import { BodySection } from '../DevitCard/MainSection/BodySection';
import { ProfileImage } from 'components/ProfileImage';

import FavIcon from 'components/Icons/Fav';
import FavFill from 'components/Icons/FavFill';
import { theme } from 'styles/theme';
import { Section, Div, ProfileImgSection, Line, Ul, Li, Button, Span, Footer } from './styles';

interface IProps {
  comment: IComment
  isLastComment: boolean
  devitId: string
  fromDevitTimeline?: boolean
}

export const CommentCard = ({ comment, isLastComment, devitId, fromDevitTimeline = false }: IProps) => {

  const {
    id,
    content,
    img,
    created_at,
  } = comment;

  const {userState} = useContext(AppContext);
  const [isDevitFaved, setDevitFaved]: any = useState(false);
  const [currentFavs, setCurrentFavs] = useState(0);
  const [isFavOnMouseOver, setFavMouseOver] = useState<boolean>(false);

  useEffect(() => {
    getCommentFavs(devitId, id)
      .then(resp => {
        if (!resp.ok) return;
        if (resp.favs.length !== 0) {
          setDevitFaved(true);
          setCurrentFavs(resp.favs.length);
        }
      })
      .catch(error => console.log(error));
  }, [devitId, id]);

  const handleFavComment = async() => {

    setDevitFaved((prev: boolean) => !prev);
    
    const data = { devit_id: devitId, comment_id: id };

    if (isDevitFaved) {
      unFavComment(data);
      return setCurrentFavs(prev => (prev - 1));
    }

    favComment(data);
    setCurrentFavs(prev => (prev + 1)); 
  };

  return (
    <>
      <Section fromDevitTimeline={fromDevitTimeline}>
        <ProfileImgSection>
          <ProfileImage
            profileImage={userState.profile_picture} 
            alt={userState.name}
          />
          {
            !isLastComment && !fromDevitTimeline
            &&
            <Line></Line>
          }
        </ProfileImgSection>
        <Div>
          <HeaderSection
            id={id}
            user={userState}
            created_at={created_at}
            isComment={true}
          />
          <BodySection
            id={id}
            user={userState}
            content={content}
            img={img}
            isComment={true}
          />
          <Footer>
            <Ul>
              <Li 
                onClick={handleFavComment}
                onMouseOver={() => setFavMouseOver(true)}
                onMouseLeave={() => setFavMouseOver(false)}
              >
                {
                  !isDevitFaved
                    ? (
                      <Button>
                        <FavIcon
                          width="16px"
                          heigth="16px"
                          color={isFavOnMouseOver ? theme.fav : theme.darker_white} 
                        />
                        <Span>{currentFavs}</Span>
                      </Button>
                    )
                    : ( 
                      <Button>
                        <FavFill
                          width="16px"
                          heigth="16px"
                          color={isFavOnMouseOver ? theme.fav : theme.fav} 
                        />
                        <Span>{currentFavs}</Span>
                      </Button>
                    )
                } 
              </Li>
            </Ul>
          </Footer>
        </Div>
      </Section>
    </>
  );
};
