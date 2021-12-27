import styled from 'styled-components';
import { breakpoints } from 'styles/breakpoints';
import { theme } from 'styles/theme';

export const Form = styled.form`
  background: ${theme.blue};
  height: 100vh;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 100;

  @media (min-width: ${breakpoints.tablet}) {
    min-width: 600px;
    height: auto;
    max-height: 90vh;
    max-width: 600px;
    position: absolute;
    top: 5%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    border-radius: 16px;
    overflow-y: auto;
  }
`;

export const Div = styled.div`
  margin-top: 1em;
  padding: 0 1em;
`;
