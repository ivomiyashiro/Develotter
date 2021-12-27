import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Div = styled.div`
  display: grid;
  grid-template-columns: 48px 1fr;
  width: 100%;
  gap: 1em;
`;

export const Section = styled.section`
  width: 100%;
`;

export const TextArea = styled.textarea`
  background: transparent;
  border: none;
  color: ${theme.white};
  font-size: 1.35rem;
  min-height: 168px;
  outline: none;
  padding: .5em 0;
  resize: none;
  width: 100%;
  max-width: 500px;
  border-radius: 10px;

  ::placeholder {
    color: #9897A9;
  }
`;
