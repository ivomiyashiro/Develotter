import {createGlobalStyle} from 'styled-components';
import { theme } from './theme';

export default createGlobalStyle`

  * {
    font-family: 'Roboto Mono', monospace;
  }

  body {
    background-color: ${theme.blue};
    box-sizing: border-box;
    color: ${theme.white};
    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, p {
    margin: 0;
  }
`;
