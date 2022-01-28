import { ChangeEvent, useContext, useRef } from 'react';
import Image from 'next/image';

import { AppContext } from 'context/AppContext';

import Photo from 'components/Icons/Photo';
import { Div, ImageWrapper, Section, ProfilePicture, ProfilePictureWrapper, Input, ButtonWrapper } from './styles';

interface FormValues {
  profilePicture: {
    file: string | File,
    fileUrl: string
  }
  coverPicture: {
    file: string | File,
    fileUrl: string
  }
}

export const PicturesSection = ({
  coverPicture,
  handleCoverPicture,
  profilePicture,
  handleProfilePicture,
}: any) => {

  const { userState } = useContext(AppContext);
  const coverPictureInputRef = useRef<HTMLInputElement>(null);
  const profilePictureInputRef = useRef<HTMLInputElement>(null);

  const handleCoverPictureInputOpen = () => {
    if (coverPictureInputRef.current !== null) {
      coverPictureInputRef.current.click();
    }
  };

  const handleProfilePictureInputOpen = () => {
    if (profilePictureInputRef.current !== null) {
      profilePictureInputRef.current.click();
    }
  };

  const handleCoverPictureInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleCoverPicture((prev: FormValues) => {
        if (e.target.files) {
          return {
            ...prev,
            file: e.target.files[0],
            fileUrl: URL.createObjectURL(e.target.files[0]),
            changed: true,
          };
        }
      });
    }
  };

  const handleProfilePictureInputchangle = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleProfilePicture((prev: FormValues) => {
        if (e.target.files) {
          return {
            ...prev,
            file: e.target.files[0],
            fileUrl: URL.createObjectURL(e.target.files[0]),
            changed: true,
          };
        }
      });
    }
  };

  return (
    <>
      <Section>
        {
          !!userState.cover_picture
            ? (
              <ImageWrapper>
                <Image 
                  src={coverPicture.fileUrl}
                  blurDataURL={userState.cover_picture}
                  alt="cover-picture" 
                  layout='fill'
                  objectFit='cover'
                  placeholder="blur"
                />
                <ButtonWrapper onClick={handleCoverPictureInputOpen}>
                  <Photo
                    height={'22px'}
                    width={'22px'}
                  />
                </ButtonWrapper>
                <Input 
                  type="file" 
                  ref={coverPictureInputRef} 
                  onChange={handleCoverPictureInputChange}
                />
              </ImageWrapper>
            )
            : <Div></Div>
        }
        <ProfilePictureWrapper>
          <ProfilePicture>
            <Image
              src={profilePicture.fileUrl}
              alt={userState.name}
              layout="fill"
              objectFit="cover"
              blurDataURL={userState.profile_picture}
              placeholder="blur"
            />
            <ButtonWrapper onClick={handleProfilePictureInputOpen}>
              <Photo 
                height={'22px'}
                width={'22px'}
              />
            </ButtonWrapper>
            <Input 
              type="file" 
              ref={profilePictureInputRef}
              onChange={handleProfilePictureInputchangle}
            />
          </ProfilePicture>
        </ProfilePictureWrapper>
      </Section>
    </>
  );
};
