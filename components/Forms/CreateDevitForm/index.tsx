import { useState, FormEvent, useContext } from 'react';

import { useValidDevit } from 'hooks/useValidDevit';
import { createDevit } from 'actions/devit';
import { handleCloseCreateDevitForm } from 'actions/ui';

import { AppContext } from 'context/AppContext';

import { FormHeader } from './HeaderSection';
import { MainSection } from './MainSection';

import { Div, Form } from './styles';

export const CreateDevitForm = () => {

  const { devitDispatch, uiDispatch, userInteractionsDispatch } = useContext(AppContext);
  const [isLoading, setLoading] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState('');
  const [imageUrl, setImageUrl] = useState<any>({
    file: '',
    fileUrl: ''
  });
  const [isValidForm, setValidForm] = useState(false);

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
    handleCloseCreateDevitForm(uiDispatch);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormHeader
          isSubmitButtonDisabled={isValidForm}
          isLoading={isLoading}
          buttonChild="Devit"
        />
        <Div>
          <MainSection
            handleTextAreaValue={setTextAreaValue}
            handleImageUrl={setImageUrl}
            handleValidForm={setValidForm}
            isSubmitButtonDisabled={isValidForm}
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
