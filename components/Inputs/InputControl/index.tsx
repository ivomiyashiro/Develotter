import { ChangeEvent, useState } from 'react';
import { Counter, Input, InputWrapper, Label, Small } from './styles';

interface IState {
  value: string; 
  error: string;
  ok: boolean;
}

interface IInput {
  type: string,
  placeholder: string,
  regEx?: RegExp,
  error: string,
  value: string,
  counter?: boolean,
  setValue: (value: IState | ((prev: IState) => IState)) => void
}

export const InputControl = ({
  type,
  placeholder,
  regEx,
  error,
  value,
  counter = false,
  setValue
}: IInput) => {

  const [lengthCounter, setlengthCounter] = useState(0);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>):void => {
    setValue((prev: IState) => ({...prev, 
      value: e.target.value
    }));
  };

  const handleInputError = ():void => {
    setlengthCounter(value.length);
    
    if (regEx === undefined) return;

    if (regEx.test(value)) {
      return setValue((prev: IState) => ({
        ...prev, 
        error: '', 
        ok: true
      }));
    }
    
    if (type === 'password') {
      return setValue((prev: IState) => ({
        ...prev,
        error: 'Password length must be greater than 8 and have at least one capital letter.',
        ok: false
      }));
    }
  
    return setValue((prev: IState) => ({
      ...prev,
      error: `${placeholder} not valid.`,
      ok: false
    }));
  };

  return (
    <>
      <InputWrapper>
        <Input
          type={type}
          name="name" 
          onChange={handleInputChange}
          onBlur={handleInputError}
          onKeyUp={handleInputError}
          value={value}
          autoComplete="off"
          error={error.length > 0 ? true : false}
        />
        <Label 
          htmlFor="name"
          error={error.length > 0 ? true : false}
          active={value.length > 0 ? true : false}
        >
          {placeholder}
        </Label>
        {
          counter && <Counter>{lengthCounter}/50</Counter>
        }
        <Small>{error}</Small>
      </InputWrapper>
    </>
  );
};
