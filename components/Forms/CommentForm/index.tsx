import { FormEvent, useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../context/AppContext';

// import { createComment } from '../../../actions/comments';
import { useValidDevit } from 'hooks/useValidDevit';

import { FormHeader } from '../CreateDevitForm/HeaderSection';
import { MainSection } from '../CreateDevitForm/MainSection';
import { BodySection } from 'components/Devit/DevitCard/MainSection/BodySection';
import { HeaderSection } from 'components/Devit/DevitCard/MainSection/HeaderSection';
import { ProfileImage } from 'components/ProfileImage';

import { IUser } from '../../../interfaces';
import { Div, Line, Form, P, ProfileImgWrapper, Reply, Section, Span, Wrapper } from './styles';

interface IProps {
  id: string
  user: IUser
  created_at: Date
  content: string
  img: string
  handleOpenModal: (value: boolean) => void,
}

export const CommentForm = ({
  id,
  user,
  created_at,
  content,
  img,
  handleOpenModal
}: IProps) => {

  const { userState, devitDispatch } = useContext(AppContext);
  const [isLoading, setLoading] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState('');
  const [imageUrl, setImageUrl] = useState<any>({
    file: '',
    fileUrl: ''
  });
  const { isDevitValid }: any = useValidDevit(textAreaValue, imageUrl.fileUrl);
  

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      id,
      uid: userState.id,
      content: textAreaValue,
      img: imageUrl.file
    };
    setLoading(true);
    await createComment(data, devitDispatch);
    setLoading(false);
    handleOpenModal(false);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormHeader 
          handleOpenModal={handleOpenModal}
          isSubmitButtonDisabled={isDevitValid}
          isLoading={isLoading}
          buttonChild="Reply"
        />
        <Wrapper>
          <Div>
            <ProfileImgWrapper>
              <ProfileImage
                profileImage={user.profile_picture} 
                alt={user.name}
              />
              <Line></Line>
            </ProfileImgWrapper>
            <Section>
              <HeaderSection
                user={user}
                created_at={created_at}
                isComment={true}
              />
              <BodySection 
                content={content}
                img={img}
              />
              <Reply>
                <P>Reply to <Span>@{user.username}</Span></P>
              </Reply>
            </Section>
          </Div>
          <MainSection 
            handleTextAreaValue={setTextAreaValue}
            handleImageUrl={setImageUrl}
            isSubmitButtonDisabled={isDevitValid}
            textAreaValue={textAreaValue}
            imageUrl={imageUrl.fileUrl}
            textAreaPlaceholder="Devit your reply"
            isLoading={isLoading}
          />
        </Wrapper>
      </Form>
    </>
  );
};
