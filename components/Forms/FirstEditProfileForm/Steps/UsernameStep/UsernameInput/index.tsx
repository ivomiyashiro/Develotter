import { useContext, useState } from 'react';

import { getUserByUsername } from 'services/user';
import { AppContext } from 'context/AppContext';

import { Spinner } from 'components/Spinner';

import { Div, Span, Input, Small, LoaderWrapper } from './styles';

interface IProps {
  value: string
  handleInputValue: any
  inputError: string
  handleInputErrorValue: (value: string | ((value: string) => string)) => void
}

export const UsernameInput = ({
  value,
  handleInputValue,
  inputError,
  handleInputErrorValue
}: IProps) => {

  const { userState } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: any) => {
    handleInputValue((prev: any) => ({
      ...prev,
      username: e.target.value
    }));
    handleInputError();
  };

  const handleInputError = async() => {
    if (value?.length < 4) {
      return handleInputErrorValue('Your username must be longer than 4 characters.');
    }
    setLoading(true);
    const body = await getUserByUsername(value);
    setLoading(false);
    if (body.user?.username === userState.username) {
      return handleInputErrorValue('Username is already taken.');
    }

    return handleInputErrorValue('');
  };

  return (
    <>
      <Div>
        <Span>@</Span>
        <Input 
          name="username"
          type="text"
          onChange={handleInputChange}
          onKeyUp={handleInputChange}
          value={value}
          error={!!inputError ? true : false}
        />
        {
          !!inputError
          &&
          <Small>{inputError}</Small>
        }
        {
          loading
          &&
          <LoaderWrapper>
            <Spinner
              size="18px"
              color="white"
            />
          </LoaderWrapper>
        }
      </Div>
    </>
  );
};
