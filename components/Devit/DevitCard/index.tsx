import { ProfileImage } from 'components/ProfileImage';
import { IDevit } from 'interfaces';
import { useEffect, useState } from 'react';
import { getUser } from 'services/user';
import { MainSection } from '../MainSection';
import { Div, ProfileImageContainer, Section, Span } from './styles';

interface IProps {
  devit: IDevit
  userComments: any
}

export const DevitCard = ({ devit, userComments }: IProps) => {

  const {
    id,
    uid,
    content,
    img,
    created_at,
  } = devit;

  const [user, setUser] = useState<any>();

  useEffect(() => {
    getUser(uid)
      .then(resp => {
        if (!resp.ok) return;
        setUser(resp.user);
      })
      .catch(error => console.log(error));
  }, [uid]);

  return (
    <Div userComments={userComments}>
      <ProfileImageContainer>
        <ProfileImage
          profileImage={user && user.profile_picture}
          alt={user && user.name}
        />
        {
          userComments.length !== 0
            &&
            <Span></Span>
        }
      </ProfileImageContainer>
      <Section>
        <MainSection
          id={id}
          user={user !== undefined && user}
          content={content}
          created_at={created_at}
          img={img}
        />
      </Section>
    </Div>
  );
};
