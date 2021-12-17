import { ChangeEvent } from 'react';
import { SelectWrapper, Input, Small } from './styles';

interface IState {
  value: string; 
  error: string;
  ok: boolean;
}

interface IProps {
  error: string,
  value: string,
  setValue: (value: IState| ((prev: IState) => IState)) => void
}

export const SelectDate = ({
  error,
  value,
  setValue
}: IProps) => {

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>):void => {
    setValue((prev: IState) => ({...prev, value: e.target.value}));
  };

  const handleInputError = ():void => {
    const dateValue = new Date(value).getFullYear(); 

    if (isNaN(dateValue)) {
      return setValue((prev: IState) => 
        ({...prev, error: 'This is not a valid date.', ok: false}));
    }
    
    const currentYearsOld = new Date().getFullYear() - dateValue;

    if (currentYearsOld < 15) {
      return setValue((prev: IState) => 
        ({...prev, error: 'Your age must be greater than 16 years old.', ok: false}));
    }

    setValue((prev: IState) => ({...prev, error: '', ok: true}));
  };

  return (
    <SelectWrapper>
      <Input 
        type="date"
        onChange={handleInputChange}
        onBlur={handleInputError}
        error={error.length > 0 ? true : false}
      />
      <Small>{error}</Small>
    </SelectWrapper>
  );
};
