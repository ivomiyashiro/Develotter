import styled from 'styled-components';
import { breakpoints } from 'styles/breakpoints';
import { theme } from 'styles/theme';

export const Div = styled.div`
  display: none;
  padding: 1em;
  padding-bottom: 0;
  gap: 0.75em;
  border-bottom: 1px solid ${theme.gray};

  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
  }
`;

export const Form = styled.form`
  width: 100%;
`;

export const Textarea = styled.textarea`
  background: transparent;
  border-radius: 10px;
  border: none;
  color: ${theme.white};
  font-size: 1.35rem;
  min-height: 28px;
  outline: none;
  overflow: hidden;
  padding: .5em 0;
  resize: none;
  width: 100%;

  ::placeholder {
    color: #9897A9;
  }
`;
