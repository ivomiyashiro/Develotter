import { useContext, useRef } from 'react';
import Image from 'next/image';

import { AppContext } from 'context/AppContext';

import Photo from 'components/Icons/Photo';
import { Div, ImageWrapper, Section, ProfilePicture, ProfilePictureWrapper, Input, ButtonWrapper } from './styles';

export const PicturesSection = () => {

  const {userState} = useContext(AppContext);
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

  return (
    <>
      <Section>
        {
          !!userState.cover_picture
            ? (
              <ImageWrapper>
                <Image 
                  src={userState.cover_picture}
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
                <Input type="file" ref={coverPictureInputRef} />
              </ImageWrapper>
            )
            : <Div></Div>
        }
        <ProfilePictureWrapper>
          <ProfilePicture>
            <Image
              src={userState.profile_picture}
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
            <Input type="file" ref={profilePictureInputRef}/>
          </ProfilePicture>
        </ProfilePictureWrapper>
      </Section>
    </>
  );
};
