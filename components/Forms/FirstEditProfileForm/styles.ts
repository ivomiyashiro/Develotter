import styled from 'styled-components';
import { theme } from 'styles/theme';
import { breakpoints } from 'styles/breakpoints';

export const Form = styled.form`
  display: grid;
  grid-template-rows: 53px 1fr;
  width: 100%;
  height: 100vh;
  background-color: ${theme.blue};
  border-radius: 1rem;
  position: absolute;
  margin: auto;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;

  @media (min-width: ${breakpoints.tablet}) {
    width: 600px;
    height: 650px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em;
`;
