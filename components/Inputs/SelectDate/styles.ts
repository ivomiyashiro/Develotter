import styled from 'styled-components';
import { theme } from 'styles/theme';

interface IError {
  error: boolean
  hasChanged: boolean
}

export const SelectWrapper = styled.div`
  display: flex;
  gap: .5em;
  justify-content: space-between;
  margin-top: 1em;
  position: relative;
`;

export const Input = styled.input<IError>`
  background: ${theme.blue};
  border-radius: 4px;
  border: none;
  color: ${theme.white};
  font-size: 1rem;
  height: 56px;
  outline: ${(props: IError) => 
    props.error 
      ? '2px solid ' + theme.red 
      : '1px solid ' + theme.darker_white};
  padding: 0 .5em;
  width: 100%;

  :focus {
    outline: 2px solid ${theme.hack};
  }

  ::-webkit-datetime-edit-text,
  ::-webkit-datetime-edit-month-field,
  ::-webkit-datetime-edit-day-field,
  ::-webkit-datetime-edit-year-field {
    color: ${theme.darker_white};
  }

  ::-webkit-inner-spin-button,
  ::-webkit-calendar-picker-indicator {
      display: none;
      -webkit-appearance: none;
  }

  ${(props: IError) => props.hasChanged
    &&
    `
    ::-webkit-datetime-edit-text,
    ::-webkit-datetime-edit-month-field,
    ::-webkit-datetime-edit-day-field,
    ::-webkit-datetime-edit-year-field {
      color: #f8f9fa;
    }
    `
}
`;

export const Small = styled.small`
    color: ${theme.red};
    margin-top: .75em;  
    position: absolute;
    top: 53px;
    padding: 0 12px;
`;
