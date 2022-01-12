import { ChangeEvent } from 'react';

import { Div, Input, Label, Small } from './styles';

interface IProps {
  value: string
  handleInputValue: any
  inputError: string
  handleInputErrorValue: (value: string | ((value: string) => string)) => void
}

export const BioInputControl = ({
  value,
  handleInputValue,
  inputError,
  handleInputErrorValue,
}: IProps) => {

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleInputValue((prev: any) => ({
      ...prev,
      bio: e.target.value
    }));
    handleInputError();
  };

  const handleInputError = async() => {
    if (value.length > 160) {
      return handleInputErrorValue('Bio length must be lower than 160 characters.');
    }

    return handleInputErrorValue('');
  };

  return (
    <>
      <Div>
        <Input 
          name="username"
          type="text"
          onChange={handleInputChange}
          value={value}
          error={!!inputError ? true : false}
        />
        <Label 
          htmlFor="name"
          isActive={!!value ? true : false}
          error={!!inputError ? true : false}
        >
          Bio
        </Label>
        {
          !!inputError
          &&
          <Small>{inputError}</Small>
        }
      </Div>
    </>
  );
};
