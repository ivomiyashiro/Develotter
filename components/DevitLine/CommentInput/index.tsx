import { ChangeEvent, DragEvent, FormEvent, useContext, useRef, useState } from 'react';
import Image from 'next/image';

import { AppContext } from 'context/AppContext';
import { IUser } from 'interfaces';

import { ButtonPrimary } from 'components/Buttons/ButtonPrimary/ButtonPrimary';
import { HoverableButton } from 'components/Buttons/HoverableButton';
import { ImageSection } from './ImageSection';

import PictureIcon from 'components/Icons/Picture';
import { theme } from 'styles/theme';
import { Form, Section, P, Span, ImageWrapper, Textarea, ButtonWrapper, Header, Footer, MainButtonWrapper, Input, Wrapper } from './styles';
import { createComment } from 'actions/devit';
import { Spinner } from 'components/Spinner';

interface IProps {
  user: IUser
  devit_id: string
}

export const CommentInput = ({ user, devit_id }: IProps) => {

  const { userState, devitDispatch } = useContext(AppContext);

  const textareaRef = useRef<any>(null);
  const inputRef = useRef<any>(null);

  const [textAreaFocus, setTextAreaFocus] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState('');
  const [isValidForm, setValidForm] = useState(false);
  const [imageUrl, setImageUrl] = useState<any>({
    file: '',
    fileUrl: ''
  });
  const [dragState, setDragState] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleTextarea = () => {
    if (textareaRef.current !== null) {
      textareaRef.current.style.height = '1px';
      textareaRef.current.style.height = (textareaRef.current.scrollHeight)+'px';
    }

    if (textAreaValue.length !== 0) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  };

  const handleTextareaValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
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
    setValidForm(true);
    setTextAreaFocus(true);
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

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageUrl({
        file: e.target.files[0],
        fileUrl: URL.createObjectURL(e.target.files[0])
      });
      setValidForm(true);
    }
  };

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      id: devit_id,
      uid: userState.id,
      content: textAreaValue,
      img: imageUrl.file
    };
    setLoading(true);
    await createComment(data, devitDispatch);
    setLoading(false);
    setTextAreaValue('');
    setImageUrl({
      file: '',
      fileUrl: ''
    });
    setValidForm(false);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {
          textAreaFocus
          &&
          <Header>
            <P>Replying to <Span>@{user.username}</Span></P>
          </Header>
        }
        <Section>
          <ImageWrapper>
            <Image
              src={userState.profile_picture}
              alt={userState.username}
              layout="fill"
              blurDataURL={userState.profile_picture}
              placeholder="blur"
              objectFit="cover"
            />
          </ImageWrapper>
          <Textarea  
            placeholder="Devit your reply" 
            ref={textareaRef}
            value={textAreaValue}
            onKeyUp={handleTextarea}
            onFocus={() => setTextAreaFocus(true)}
            onChange={handleTextareaValue}
            onDrop={handleDrop}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            style={ 
              dragState 
                ? { border: `2px dashed ${theme.hack}`}
                : { border: '2px solid transparent'}
            }
          ></Textarea>
          {
            !textAreaFocus
            &&
            <ButtonWrapper>
              <ButtonPrimary
                color={theme.hack}
                textColor={theme.blue}
                isDisabled={!isValidForm}
              >
              Reply
              </ButtonPrimary>
            </ButtonWrapper>
          }
        </Section>
        {
          !!imageUrl.fileUrl
              &&
              <Wrapper>
                <ImageSection
                  src={imageUrl.fileUrl}
                  alt={'develotter'}
                  handleImageUrl={setImageUrl}
                  handleValidForm={setValidForm}
                />
              </Wrapper>
        }
        {
          textAreaFocus
          &&
          <Footer>
            <HoverableButton
              icon={PictureIcon}
              width="22px"
              height="22px"
              color={theme.hack}
              onClick={() => inputRef.current.click()}
            />
            <Input type="file" ref={inputRef} onChange={handleImageChange}/>
            <MainButtonWrapper>
              <ButtonPrimary
                color={theme.hack}
                textColor={theme.blue}
                isDisabled={!isValidForm}
              >
                {
                  isLoading
                    ? <Spinner size="20px" color={theme.blue} />
                    : <p> Reply </p>
                }
              </ButtonPrimary>
            </MainButtonWrapper>
          </Footer>
        }
      </Form>
    </>
  );
};
