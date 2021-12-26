import { FormEvent, useContext, useState } from 'react';

import { EMAIL_INPUT_INIT_STATE, FORM_ERROR_INIT_STATE, PASSWORD_INPUT_INIT_STATE } from 'helpers/InitStates';
import { regEx } from 'helpers/regEx';
import { signin } from 'actions/auth';

import { AppContext } from 'context/AppContext';
import { Spinner } from '../../Spinner';
import { ButtonPrimary } from 'components/Buttons/PrimaryButton/ButtonPrimary';
import { InputControl } from 'components/Inputs/InputControl';
import { Toast } from 'components/Toast';

import { theme } from 'styles/theme';
import { ButtonWrapper, Div, Form, H3, Section } from './styles';

export const SigninForm = () => {

  const { userDispatch } = useContext(AppContext);
  const [formError, setFormError] = useState(FORM_ERROR_INIT_STATE);
  const [emailInputState, setEmailInputState] = useState(EMAIL_INPUT_INIT_STATE);
  const [passwordInputState, setPasswordInputState] = useState(PASSWORD_INPUT_INIT_STATE);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = { 
      email: emailInputState.value,
      password: passwordInputState.value
    };

    setLoading(true);
    await signin(data, setFormError, userDispatch);
    setLoading(false);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {
          formError.isOpen 
          &&
          <Toast
            message={formError.msg} 
            isError={true} 
          />
        }
        <Div>
          <H3>To get started enter your email and password</H3>
          <Section>
            <InputControl
              type="text"
              placeholder="Email"
              error={emailInputState.error}
              regEx={regEx.email}
              value={emailInputState.value}
              setValue={setEmailInputState}
            />
            <InputControl
              type="password"
              placeholder="Password"
              error={passwordInputState.error}
              value={passwordInputState.value}
              setValue={setPasswordInputState}
            />
          </Section>
        </Div>
        <Div>
          <ButtonWrapper>
            <ButtonPrimary
              color={theme.white}
              textColor={theme.blue}
              isDisabled={!emailInputState.ok && !passwordInputState.ok}
            >
              {
                isLoading
                  ? <Spinner color={theme.blue} size={'22px'} />
                  : 'Next'
              }
            </ButtonPrimary>
          </ButtonWrapper>
        </Div>
      </Form>
    </>
  );
};
