import { useState, FormEvent, useContext } from 'react';

import { AppContext } from '../../../context/AppContext';
import { useValidDevit } from 'hooks/useValidDevit';
import { createQuoteRevit } from 'actions/devit';

import { FormHeader } from '../CreateDevitForm/HeaderSection';
import { MainSection } from './MainSection';
import { Div } from './styles';
import { Form } from '../CommentForm/styles';

interface IProp {
  id: string
  content: string
  created_at: Date
  img: string
  handleOpenModal: (value: boolean) => void
}

export const CreateQuoteDevitForm = ({ 
  id,
  content,
  created_at,
  img,
  handleOpenModal,
}: IProp) => {

  const { devitDispatch } = useContext(AppContext);
  const [isLoading, setLoading] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState('');
  const [imageUrl, setImageUrl] = useState<any>({
    file: '',
    fileUrl: ''
  });
  const {isDevitValid} = useValidDevit(textAreaValue, imageUrl.file);

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {id, content: textAreaValue, img: imageUrl.file};

    setLoading(true);

    await createQuoteRevit(data, devitDispatch);

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
          buttonChild="Devit"
        />
        <Div>
          <MainSection
            handleTextAreaValue={setTextAreaValue}
            handleImageUrl={setImageUrl}
            isSubmitButtonDisabled={isDevitValid}
            textAreaValue={textAreaValue}
            imageUrl={imageUrl.fileUrl}
            textAreaPlaceholder="Add a comment"
            isLoading={isLoading}
            id={id}
            content={content}
            created_at={created_at}
            img={img}
          />
        </Div>
      </Form>
    </>
  );
};