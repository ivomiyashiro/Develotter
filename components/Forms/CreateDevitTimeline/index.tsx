import { ChangeEvent, DragEvent, FormEvent, useContext, useRef, useState } from 'react';

import { AppContext } from '../../../context/AppContext';
import { ProfileImage } from 'components/ProfileImage';
import { ImageSection } from '../CreateDevitForm/ImageSection';
import { MediaButtons } from '../CreateDevitForm/MediaButtons';

import { theme } from 'styles/theme';
import { Div, Form, Textarea } from './styles';
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
  const [isValidForm, setValidForm] = useState(false);

  const textareaRef = useRef<any>(null);

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

  const handleTextarea = () => {
    if (textareaRef.current !== null) {
      console.log('hoal');
      textareaRef.current.style.height = '1px';
      textareaRef.current.style.height = (textareaRef.current.scrollHeight)+'px';
    }

    if (textAreaValue.length !== 0) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
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
    setValidForm(true);
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
            !!imageUrl.fileUrl
            &&
            <ImageSection
              handleValidForm={setValidForm}
              src={imageUrl.fileUrl}
              alt={'develotter'}
              handleImageUrl={setImageUrl}
            />
          }
          <MediaButtons
            handleValidForm={setValidForm}
            isDisabled={isValidForm}
            handleImageUrl={setImageUrl}
            isLoading={isLoading}
          />
        </Form>
      </Div>
    </>
  );
};
