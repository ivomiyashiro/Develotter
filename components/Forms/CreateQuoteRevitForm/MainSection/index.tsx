import { useState, DragEvent, ChangeEvent, Dispatch, SetStateAction, useContext } from 'react';

import { AppContext } from 'context/AppContext';
import { IUser } from 'interfaces';

import { RevitCard } from 'components/RevitCard';
import { ProfileImage } from 'components/ProfileImage';
import { ImageSection } from 'components/Forms/CreateDevitForm/ImageSection';
import { MediaButtons } from 'components/Forms/CreateDevitForm/MediaButtons';

import { theme } from 'styles/theme';
import { Div, ProfileImgWrapper, Section, Textarea } from './styles';


interface IProps {
  user: IUser
  handleTextAreaValue: Dispatch<SetStateAction<string>>
  handleImageUrl: any
  isSubmitButtonDisabled: boolean
  textAreaValue: string
  imageUrl: string
  textAreaPlaceholder: string
  id: string
  content: string
  created_at: Date
  img: string
  isLoading: boolean
  handleValidForm: any
}

export const MainSection = ({
  user,
  handleImageUrl,
  isSubmitButtonDisabled,
  textAreaValue,
  imageUrl,
  textAreaPlaceholder,
  id,
  content,
  img,
  created_at,
  isLoading,
  handleValidForm,
  handleTextAreaValue,
}: IProps) => {

  const { userState } = useContext(AppContext);
  const [dragState, setDragState] = useState(false);

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    handleTextAreaValue(e.target.value);
  };

  const handleDrop = (e: DragEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUrl({
        file: e.dataTransfer.files[0],
        fileUrl: URL.createObjectURL(e.dataTransfer.files[0])
      });
    }
    setDragState(false);
  };

  const handleDragEnter = (e: DragEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setDragState(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setDragState(false);
  };

  return (
    <>
      <Div>
        <ProfileImgWrapper>
          <ProfileImage
            profileImage={userState.profile_picture}
            alt={userState.name}
          />
        </ProfileImgWrapper>
        <Section>
          <Textarea
            placeholder={textAreaPlaceholder}
            onChange={handleTextAreaChange}
            onDrop={handleDrop}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            value={textAreaValue}
            style={ 
              dragState 
                ? { border: `2px dashed ${theme.hack}`}
                : { border: '2px solid transparent'}
            }
          />

          {
            !!imageUrl
            &&
            <ImageSection
              handleValidForm={ handleValidForm }
              src={imageUrl}
              alt={'develotter'}
              handleImageUrl={handleImageUrl}
            />
          }

          <RevitCard
            user={user}
            id={id}
            content={content}
            created_at={created_at}
            img={img}
          />
          <MediaButtons
            handleValidForm={ handleValidForm }
            isDisabled={isSubmitButtonDisabled}
            handleImageUrl={handleImageUrl}
            isLoading={isLoading}
          />
        </Section>
      </Div>
    </>
  );
};
