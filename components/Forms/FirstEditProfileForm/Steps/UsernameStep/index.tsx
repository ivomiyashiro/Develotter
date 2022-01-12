import { useState } from 'react';

import { Header } from '../../Header';
import { UsernameInput } from './UsernameInput';

import { theme } from 'styles/theme';
import { Div, Section, Footer } from './styles';
import { ButtonPrimary } from 'components/Buttons/ButtonPrimary/ButtonPrimary';

export const UsernameStep = ({
  handleStep,
  handleFormValues,
  username,
}: any) => {

  const [inputError, setInputError] = useState('');

  return (
    <>
      <Div>
        <Header 
          title={'Write your username.'}
          content={'Choose a username for your followers to identify you.'}
        />
        <Section>
          <UsernameInput 
            value={username}
            handleInputValue={handleFormValues}
            inputError={inputError}
            handleInputErrorValue={setInputError}
          />
        </Section>
        <Footer>
          <ButtonPrimary
            textColor={theme.blue}
            color={theme.white}
            isDisabled={!!inputError}
            type="button"
            onClick={() => handleStep((prev: number) => (prev + 1))}
          >
            <b>Next</b>
          </ButtonPrimary>
        </Footer>
      </Div>
    </>
  );
};
