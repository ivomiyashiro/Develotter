import { FormEvent, useState } from 'react';

import { BIRTH_INPUT_INIT_STATE, EMAIL_INPUT_INIT_STATE, NAME_INPUT_INIT_STATE, PASSWORD_INPUT_INIT_STATE } from 'helpers/InitStates';
import { InputControl } from 'components/Inputs/InputControl';
import { SelectDate } from 'components/Inputs/SelectDate';
import { ButtonPrimary } from 'components/Buttons/PrimaryButton/ButtonPrimary';
import { Spinner } from 'components/Spinner';

import { regEx } from 'helpers/regEx';
import { theme } from 'styles/theme';
import { ButtonWrapper, Form, InputsWrapper, Subtitle, Title } from './styles';

export const SignupForm = () => {

  const [nameInputState, setNameInputState] = useState(NAME_INPUT_INIT_STATE);
  const [emailInputState, setEmailInputState] = useState(EMAIL_INPUT_INIT_STATE);
  const [passwordInputState, setPasswordInputState] = useState(PASSWORD_INPUT_INIT_STATE);
  const [birthInputState, setBirthInputState] = useState(BIRTH_INPUT_INIT_STATE);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Title>Create your account</Title>
        <InputsWrapper>
          <InputControl
            type="text"
            placeholder="Name"
            counter={true}
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
