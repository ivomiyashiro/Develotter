import { ChangeEvent, DragEvent, useContext, useRef, useState } from 'react';
import Image from 'next/image';

import { AppContext } from 'context/AppContext';
import { HoverableButton } from 'components/Buttons/HoverableButton';

import Photo from 'components/Icons/Photo';
import TimesIcon from 'components/Icons/Times';
import { theme } from 'styles/theme';
import { ButtonWrapper, Container, CoverPicture, CoverPictureContainer, Div, H1, Input, P, ProfilePictureContainer, ProfilePictureSection } from './styles';

interface FormValues {
  profilePicture: {
    file: string | File,
    fileUrl: string
  }
  coverPicture: {
    file: string | File,
    fileUrl: string
  }
  username: string
  bio: string
}

interface IProps {
  handleStep: any
  stepComplete: boolean
  handleFormValues: any
  profilePicture: string
  coverPicture: string
}

export const ImageSection = ({
  handleStep,
  handleFormValues,
  profilePicture,
  stepComplete,
  coverPicture
}: IProps) => {

  
  const inputRef = useRef<HTMLInputElement>(null);
  const {userState} = useContext(AppContext);
  const [dragState, setDragState] = useState(false);

  const handleOpenInputFile = () => {
    if (inputRef.current !== null) {
      inputRef.current.click();
    }
  };

  const handleDragEnter = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragState(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragState(false);
  };

  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFormValues((prev: FormValues) => ({
        ...prev,
        coverPicture: {
          file: e.dataTransfer.files[0],
          fileUrl: URL.createObjectURL(e.dataTransfer.files[0])
        }
      }));
    }
    handleStep(true);
    setDragState(false);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFormValues((prev: FormValues) => {
        if (e.target.files) {
          return {
            ...prev,
            coverPicture: {
              file: e.target.files[0],
              fileUrl: URL.createObjectURL(e.target.files[0])
            }
          };
        }
      });
    }
    handleStep(true);
    setDragState(false);
  };

  const handleDeleteImage = () => {
    handleFormValues((prev: FormValues) => ({
      ...prev,
      coverPicture: {
        file: '',
        fileUrl: ''
      }
    }));
    handleStep(false);
  };

  return (
    <>
      <Div>
        <CoverPictureContainer 
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          style={
            dragState
              ? { border: `2px dashed ${theme.hack}` }
              : { border: '2px solid transparent' }
          }
        >
          {
            !!coverPicture
            &&
            <CoverPicture>
              <Image 
                src={coverPicture} 
                alt="cover-picture" 
                layout="fill" 
                objectFit="cover"
              />
            </CoverPicture>
          }
          {
            stepComplete
              ? (
                <ButtonWrapper>
                  <HoverableButton
                    icon={TimesIcon}
                    color={theme.white}
                    width="20px"
                    height="20px"
                    onClick={handleDeleteImage}
                  />
                </ButtonWrapper>
              )
              : (
                <ButtonWrapper>
                  <HoverableButton
                    icon={Photo}
                    color={theme.white}
                    width="20px"
                    height="20px"
                    onClick={handleOpenInputFile}
                  />
                </ButtonWrapper>
              )
          }
          <Input type="file" ref={inputRef} onChange={handleImageChange} />
        </CoverPictureContainer>
        <ProfilePictureSection>
          <Container>
            <ProfilePictureContainer>
              <Image
                src={profilePicture ? profilePicture : '/assets/images/profile_picture.png'}
                alt="profile-picture"
                layout="fill"
                objectFit="cover"
              />
            </ProfilePictureContainer>
          </Container>
          <H1>{userState.name}</H1>
          <P>@{userState.username}</P>
        </ProfilePictureSection>
      </Div>
    </>
  );
};
