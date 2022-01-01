import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Div = styled.div`
  display: flex;
  width: 100%;
  gap: 1em;
`;

export const Section = styled.section`
  width: 100%;
  padding-right: 1em;
`;

export const Textarea = styled.textarea`
  background: transparent;
  border: none;
  color: ${theme.white};
  font-size: 1.35rem;
  min-height: 52px;
  outline: none;
  padding: .5em 0;
  resize: none;
  width: 100%;
  border-radius: 10px;
  margin: 0;

  ::placeholder {
    color: #9897A9;
  }
`;

export const ProfileImgWrapper = styled.section`
  padding-left: 1em;
`;
