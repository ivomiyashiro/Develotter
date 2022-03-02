import { useContext, useEffect, useState } from 'react';

import { IComment, IUser } from 'interfaces';

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
import { useDevInfo } from 'hooks/useDevInfo';
import { useUser } from 'hooks/useUser';
import { getUser } from 'services/user';
import { userSignup } from 'services/auth';

interface IProps {
  comment: IComment
  isLastComment: boolean
  devitId: string
  fromDevitTimeline?: boolean
}

export const CommentCard = ({ comment, isLastComment, devitId, fromDevitTimeline = false }: IProps) => {

  const {
    id,
    uid,
    content,
    img,
    created_at,
  } = comment;

  const [user, setUser] = useState<IUser | null>(null);
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

  useEffect(() => {
    getUser(uid)
      .then(resp => {
        if (!resp.ok) return;
        setUser(resp.user);
      })
      .catch(error => console.log(error));
  }, [uid]);

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
            profileImage={user && user.profile_picture} 
            alt={userSignup.name}
          />
          {
            !isLastComment && !fromDevitTimeline
            &&
            <Line></Line>
          }
        </ProfileImgSection>
        <Div>
          <HeaderSection
            devitId={devitId}
            id={id}
            user={user}
            created_at={created_at}
            isComment={true}
          />
          <BodySection
            id={id}
            user={user}
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
