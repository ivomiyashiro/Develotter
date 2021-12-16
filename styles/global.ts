import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components';
import { theme } from './theme';

export default createGlobalStyle`
  body {
    background-color: ${theme.blue};
    box-sizing: border-box;
    color: ${theme.white};
    font-family: 'Roboto Mono', monospace;
    margin: 0;
    padding: 0;
  }

  button {
    font-family: 'Roboto Mono', monospace;
    cursor: pointer;
    padding: 0;
  }

  a {
    text-decoration: none;
  }
`;

export const Hightlight = styled.span`
  color: ${theme.hack};
`;
