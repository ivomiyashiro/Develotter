import { ChangeEvent, DragEvent, useRef, useState } from 'react';
import Image from 'next/image';

import { HoverableButton } from 'components/Buttons/HoverableButton';

import Photo from 'components/Icons/Photo';
import TimesIcon from 'components/Icons/Times';
import { theme } from 'styles/theme';
import { Container, ImageWrapper, Input, SelectImgButtonSection, SelectImgContainer } from '../styles';

interface IProps {
  handleStep: any
  stepComplete: boolean
  handleFormValues: any
  imageUrl: any
}

interface FormValues {
  profilePicture: {
    file: string | File,
    fileUrl: string
  }
  coverPicture: string
  username: string
  bio: string
}

export const ImageSection = ({
  handleStep,
  handleFormValues,
  imageUrl,
  stepComplete
}: IProps) => {

  const inputRef = useRef<HTMLInputElement>(null);
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
        profilePicture: {
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
            profilePicture: {
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
      profilePicture: {
        file: '',
        fileUrl: ''
      }
    }));
    handleStep(false);
  };

  return (
    <>
      <SelectImgContainer>
        <Container
          style={
            dragState
              ? { border: `2px dashed ${theme.hack}` }
              : { border: `2px solid ${theme.white}` }
          }
        >
          <ImageWrapper
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <Image 
              src={!!imageUrl ? imageUrl : '/assets/images/profile_picture.png'}
              alt="profile-picture"
              layout="fill"
              objectFit="cover"
              priority
            />
          </ImageWrapper>
          <SelectImgButtonSection>
            {
              stepComplete
                ? (
                  <HoverableButton
                    icon={TimesIcon}
                    width="22px"
                    height="22px"
                    color={theme.white}
                    onClick={handleDeleteImage}
                  />
                )

                : (
                  <HoverableButton 
                    icon={Photo}
                    width="22px"
                    height="22px"
                    color={theme.white}
                    onClick={handleOpenInputFile}
                  />
                )
            }
            <Input type="file" ref={inputRef} onChange={handleImageChange} />
          </SelectImgButtonSection>
        </Container>
      </SelectImgContainer>
    </>
  );
};
