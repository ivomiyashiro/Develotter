import styled from 'styled-components';
import { boxShadow } from 'styles/commun';
import { theme } from 'styles/theme';

export const Form = styled.form`
  align-items: center;
  background: ${theme.white + '1A'};
  border-radius: 9999px;
  display: flex;
  height: 44px;
  position: relative;
  width: 100%;
`;

export const Button = styled.button`
  background: transparent;
  margin-left: 1.5em;
  padding: 0;
  margin-top: 0.25em;
  border: none;
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  color: ${theme.white};
  font-size: .9rem;
  height: 100%;
  margin-left: 1em;
  outline: none;
  width: 100%;

  ::placeholder {
    color: ${theme.darker_white};
  }

  ::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration { 
    margin-right: 1.5em;
    font-size: 1rem;
  }
`;

export const Div = styled.div`
  background: ${theme.blue};
  border-radius: 8px;
  box-shadow: ${boxShadow};
  max-height: 300px;
  overflow-y: auto;
  padding: 0.5em 0;
  position: absolute;
  top: 4em;
  width: 100%;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const P = styled.p`
  color: ${theme.white};
`;
