import { useState, useEffect, FormEvent, useContext } from 'react';

// import { createDevit } from '../../../actions/devits';

import { HeaderSection } from './HeaderSection';
import { MainSection } from './MainSection';

import { Div, Form } from './styles';

export const CreateDevitForm = () => {

  const [isSubmitButtonDisabled, setSubmitButtonDisabled] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState('');
  const [imageUrl, setImageUrl] = useState<any>({
    file: '',
    fileUrl: ''
  });

  useEffect(() => {
    if (textAreaValue.length === 0 && imageUrl.fileUrl !== '') {
      return setSubmitButtonDisabled(false);
    }

    if (textAreaValue.length > 0 && textAreaValue.length < 280) {
      return setSubmitButtonDisabled(false);
    }

    setSubmitButtonDisabled(true);
  },[textAreaValue, imageUrl]);

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <HeaderSection
          isSubmitButtonDisabled={isSubmitButtonDisabled}
          isLoading={isLoading}
          buttonChild="Devit"
        />
        <Div>
          <MainSection
            handleTextAreaValue={setTextAreaValue}
            handleImageUrl={setImageUrl}
            isSubmitButtonDisabled={isSubmitButtonDisabled}
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
