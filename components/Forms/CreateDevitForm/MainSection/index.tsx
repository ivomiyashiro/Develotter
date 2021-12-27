import { useState, DragEvent, ChangeEvent, Dispatch, SetStateAction, useContext } from 'react';

import { AppContext } from 'context/AppContext';
import { ImageSection } from '../ImageSection';
import { MediaButtons } from '../MediaButtons';
import { ProfileImage } from 'components/ProfileImage';

import { theme } from 'styles/theme';
import { Div, Section, TextArea } from './styles';

interface IProps {
  handleTextAreaValue: Dispatch<SetStateAction<string>>
  handleImageUrl: any
  isSubmitButtonDisabled: boolean
  textAreaValue: string
  imageUrl: string
  textAreaPlaceholder: string
  isLoading: boolean
}

export const MainSection = ({
  handleTextAreaValue,
  handleImageUrl,
  isSubmitButtonDisabled,
  textAreaValue,
  imageUrl,
  textAreaPlaceholder,
  isLoading
}: IProps) => {

  const {userState} = useContext(AppContext);
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
        <ProfileImage
          profileImage={userState.profile_picture}
          alt={userState.name}
        />
        <Section>
          <TextArea
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
                src={imageUrl}
                alt={'develotter'}
                handleImageUrl={handleImageUrl}
              />
          }
          <MediaButtons
            isDisabled={isSubmitButtonDisabled}
            handleImageUrl={handleImageUrl}
            isLoading={isLoading}
          />
        </Section>
      </Div>
    </>
  );
};
