import { ChangeEvent, DragEvent, FormEvent, useContext, useEffect, useState } from 'react';

import { AppContext } from '../../../context/AppContext';
import { ProfileImage } from 'components/ProfileImage';
import { ImageSection } from '../CreateDevitForm/ImageSection';
import { MediaButtons } from '../CreateDevitForm/MediaButtons';

import { theme } from 'styles/theme';
import { Div, Form, Textarea } from './styles';
import { useValidDevit } from 'hooks/useValidDevit';
import { createDevit } from 'actions/devit';

export const CreateDevitTimeline = () => {

  const {userState, devitDispatch, userInteractionsDispatch} = useContext(AppContext);
  const [dragState, setDragState] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState('');
  const [imageUrl, setImageUrl] = useState<any>({
    file: '',
    fileUrl: ''
  });
  const { isDevitValid } = useValidDevit(textAreaValue, imageUrl.fileUrl);

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      content: textAreaValue,
      img: imageUrl.file
    };

    setLoading(true);
    await createDevit(data, devitDispatch, userInteractionsDispatch);
    setLoading(false);

    setTextAreaValue('');
    setImageUrl({file: '', fileUrl: ''});
  };

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
  };

  const handleDrop = (e: DragEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setImageUrl({
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
        <Form onSubmit={handleSubmit}>
          <Textarea
            placeholder="What&apos;s happening"
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
            !!imageUrl.fileUrl
            &&
            <ImageSection
              src={imageUrl.fileUrl}
              alt={'develotter'}
              handleImageUrl={setImageUrl}
            />
          }
          <MediaButtons
            isDisabled={isDevitValid}
            handleImageUrl={setImageUrl}
            isLoading={isLoading}
          />
        </Form>
      </Div>
    </>
  );
};
