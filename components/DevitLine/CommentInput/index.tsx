import { ChangeEvent, TextareaHTMLAttributes, useContext, useRef, useState } from 'react';
import Image from 'next/image';

import { AppContext } from 'context/AppContext';
import { IUser } from 'interfaces';

import { ButtonPrimary } from 'components/Buttons/ButtonPrimary/ButtonPrimary';

import PictureIcon from 'components/Icons/Picture';
import { theme } from 'styles/theme';
import { Div, Section, P, Span, ImageWrapper, Textarea, ButtonWrapper, Header, Footer, MainButtonWrapper, Input } from './styles';
import { HoverableButton } from 'components/Buttons/HoverableButton';

interface IProps {
  user: IUser
}

export const CommentInput = ({ user }: IProps) => {

  const { userState } = useContext(AppContext);

  const textareaRef = useRef<any>(null);
  const inputRef = useRef<any>(null);

  const [textAreaFocus, setTextAreaFocus] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState('');
  const [isValidForm, setValidForm] = useState(false);

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

  return (
    <>
      <Div>
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
            <Input type="file" ref={inputRef} />
            <MainButtonWrapper>
              <ButtonPrimary
                color={theme.hack}
                textColor={theme.blue}
                isDisabled={!isValidForm}
              >
              Reply
              </ButtonPrimary>
            </MainButtonWrapper>
          </Footer>
        }
      </Div>
    </>
  );
};
