import { ChangeEvent, useRef } from 'react';

import { Spinner } from 'components/Spinner';
import { ButtonPrimary } from 'components/Buttons/ButtonPrimary/ButtonPrimary';

import GifIcon from 'components/Icons/Gif';
import PictureIcon from 'components/Icons/Picture';
import { theme } from 'styles/theme';
import { Button, ButtonWrapper, Div, Input, Section } from './styles';

type fileState = {
  file: File
  fileUrl: string
}

interface IProps {
  isDisabled: boolean,
  handleImageUrl: (value: fileState | ((prev: fileState) => fileState)) => void
  isLoading: boolean
}

export const MediaButtons = ({ isDisabled, handleImageUrl, isLoading }: IProps) => {

  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleSelectPicture = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleImageUrl({
        file: e.target.files[0],
        fileUrl: URL.createObjectURL(e.target.files[0])
      });
    }
  };

  return (
    <>
      <Div>
        <Section>
          <Input type="file" ref={inputFileRef} onChange={handleImageChange}/>
          <Button type="button" onClick={handleSelectPicture}>
            <PictureIcon width="22px" height="22px" fill="currentColor" color={theme.hack}/>
          </Button>
        </Section>
        <ButtonWrapper className="submit-button-container">
          <ButtonPrimary
            isDisabled={isDisabled}
            textColor={theme.blue}
            color={theme.hack}
          >
            {
              isLoading
                ? <Spinner size="18px" color={theme.white} />
                : 'Devit'
            }
          </ButtonPrimary>
        </ButtonWrapper>
      </Div>
    </>
  );
}; 
