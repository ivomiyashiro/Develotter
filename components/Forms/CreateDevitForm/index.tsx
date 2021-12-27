import { useValidDevit } from 'hooks/useValidDevit';
import { useState, FormEvent, useContext } from 'react';

import { createDevit } from 'actions/devit';

import { AppContext } from 'context/AppContext';

import { HeaderSection } from './HeaderSection';
import { MainSection } from './MainSection';

import { Div, Form } from './styles';
import { handleCloseCreateDevitForm } from 'actions/ui';

export const CreateDevitForm = () => {

  const { devitDispatch, uiDispatch } = useContext(AppContext);
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
      img: imageUrl.fileUrl
    };

    setLoading(true);
    await createDevit(data, devitDispatch);
    setLoading(false);

    setTextAreaValue('');
    handleCloseCreateDevitForm(uiDispatch);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <HeaderSection
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
            textAreaPlaceholder="What's happening?"
            isLoading={isLoading}
          />
        </Div>
      </Form>
    </>
  );
};
