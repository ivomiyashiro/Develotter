import { useState, DragEvent, ChangeEvent, Dispatch, SetStateAction, useContext, useRef } from 'react';

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
  handleValidForm: any
}

export const MainSection = ({
  handleTextAreaValue,
  handleValidForm,
  handleImageUrl,
  isSubmitButtonDisabled,
  textAreaValue,
  imageUrl,
  textAreaPlaceholder,
  isLoading
}: IProps) => {

  const textareaRef = useRef<any>(null);

  const {userState} = useContext(AppContext);
  const [dragState, setDragState] = useState(false);

  const handleTextarea = () => {
    if (textareaRef.current !== null) {
      textareaRef.current.style.height = '1px';
      textareaRef.current.style.height = (textareaRef.current.scrollHeight)+'px';
    }

    if (textAreaValue.length !== 0) {
      handleValidForm(true);
    } else {
      handleValidForm(false);
    }
  };

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
    handleValidForm(true);
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
            onKeyUp={handleTextarea}
            onChange={handleTextAreaChange}
            onDrop={handleDrop}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            value={textAreaValue}
            ref={textareaRef}
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
                handleValidForm={handleValidForm}
              />
          }
          <MediaButtons
            isDisabled={isSubmitButtonDisabled}
            handleImageUrl={handleImageUrl}
            isLoading={isLoading}
            handleValidForm={handleValidForm}
          />
        </Section>
      </Div>
    </>
  );
};
