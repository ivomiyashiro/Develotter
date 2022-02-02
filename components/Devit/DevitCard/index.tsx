import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { IDevit, IUser } from 'interfaces';
import { getUser } from 'services/user';

import { ProfileImage } from 'components/ProfileImage';
import { MainSection } from './MainSection';

import { Div, Line, ProfileImageContainer, Section } from './styles';

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

  const [user, setUser] = useState<IUser>({
    id: '',
    username: '',
    name: '',
    email: '',
    bio: '',
    location: '',
    website: '',
    profile_picture: '',
    cover_picture: '',
    birth_date: new Date(),
    created_at: new Date(),
    first_edit: false
  });

  const router = useRouter();

  useEffect(() => {
    getUser(uid)
      .then(resp => {
        if (!resp.ok) return;
        setUser(resp.user);
      })
      .catch(error => console.log(error));
  }, [uid]);

  const handleDevitRoute = () => {
    router.push(`/${user.username}/status/${id}`);
  };

  return (
    <Div userComments={userComments} onClick={handleDevitRoute}>
      <ProfileImageContainer>
        <ProfileImage
          profileImage={user && user.profile_picture}
          alt={user && user.name}
        />
        {
          userComments.length !== 0
          &&
          <Line></Line>
        }
      </ProfileImageContainer>
      <Section>
        <MainSection
          id={id}
          user={user}
          content={content}
          created_at={created_at}
          img={img}
        />
      </Section>
    </Div>
  );
};
