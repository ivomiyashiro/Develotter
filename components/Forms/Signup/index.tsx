import { FormEvent, useContext, useState } from 'react';
import { useRouter } from 'next/router';

import { FORM_ERROR_INIT_STATE, BIRTH_INPUT_INIT_STATE, EMAIL_INPUT_INIT_STATE, NAME_INPUT_INIT_STATE, PASSWORD_INPUT_INIT_STATE } from 'helpers/InitStates';
import { regEx } from 'helpers/regEx';
import { signup } from 'actions/auth';

import { AppContext } from 'context/AppContext';
import { InputControl } from 'components/Inputs/InputControl';
import { SelectDate } from 'components/Inputs/SelectDate';
import { ButtonPrimary } from 'components/Buttons/ButtonPrimary/ButtonPrimary';
import { Spinner } from 'components/Spinner';
import { Toast } from 'components/Toast';

import { theme } from 'styles/theme';
import { ButtonWrapper, Form, InputsWrapper, Subtitle, Title } from './styles';

export const SignupForm = () => {

  const { userDispatch } = useContext(AppContext);
  const [formError, setFormError] = useState(FORM_ERROR_INIT_STATE);
  const [nameInputState, setNameInputState] = useState(NAME_INPUT_INIT_STATE);
  const [emailInputState, setEmailInputState] = useState(EMAIL_INPUT_INIT_STATE);
  const [passwordInputState, setPasswordInputState] = useState(PASSWORD_INPUT_INIT_STATE);
  const [birthInputState, setBirthInputState] = useState(BIRTH_INPUT_INIT_STATE);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = ({
      name: nameInputState.value,
      email: emailInputState.value,
      password: passwordInputState.value,
      birth_date: birthInputState.value
    });

    setLoading(true);
    await signup(data, setFormError, userDispatch);
    router.push('/home');
    setLoading(false);
  };
  
  return (
    <Form onSubmit={handleSubmit}>
      {
        formError.isOpen 
          &&
          <Toast
            message={formError.msg} 
            isError={true} 
          />
      }
      <div>
        <Title>Create your account</Title>
        <InputsWrapper>
          <InputControl
            type="text"
            placeholder="Name"
            counter="50"
            error={nameInputState.error}
            regEx={regEx.name}
            value={nameInputState.value}
            setValue={setNameInputState}
          />
          <InputControl
            type="email"
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
            regEx={regEx.password}
            value={passwordInputState.value}
            setValue={setPasswordInputState}
          />
        </InputsWrapper>
        <Subtitle>Date of Birth</Subtitle>
        <SelectDate 
          error={birthInputState.error}
          value={birthInputState.value}
          setValue={setBirthInputState}
        />
      </div>
      <div>
        <ButtonWrapper>
          <ButtonPrimary
            color={theme.white}
            textColor={theme.blue}
            isDisabled={!(nameInputState.ok && emailInputState.ok && passwordInputState.ok && birthInputState.ok)}
          >
            {
              isLoading
                ? <Spinner color={theme.blue} size={'22px'} />
                : 'Next'
            }
          </ButtonPrimary>
        </ButtonWrapper>
      </div>
    </Form>
  );
};
