import { IUser } from 'interfaces';
import Image from 'next/image';
import { Section, CoverPictureWrapper, ProfilePicture, ProfilePictureWrapper } from './styles';

interface IProps {
  user: IUser
}

export const PicturesSection = ({ user }: IProps) => {
  return (
    <>
      <Section>
        <CoverPictureWrapper>
          <Image
            src={user.cover_picture}
            alt="cover-picture"
            layout="fill"
            objectFit="cover"
          />
        </CoverPictureWrapper>
        <ProfilePictureWrapper>
          <ProfilePicture>
            <Image
              src={user.profile_picture}
              alt={user.name}
              layout="fill"
              objectFit="cover"
            />
          </ProfilePicture>
        </ProfilePictureWrapper>
      </Section>
    </>
  );
};
