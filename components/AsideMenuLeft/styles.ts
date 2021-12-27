import styled from 'styled-components';
import { breakpoints } from 'styles/breakpoints';
import { theme } from 'styles/theme';

export const Aside = styled.aside`
  display: none;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  position: sticky;
  left: 0;
  top: 0;
  z-index: 9;

  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    align-items: center;
    margin-left: 0.4em;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 62px;
  margin-left: -0.25em;
`;

export const A = styled.a`
  display: flex;
  align-items: center;
  border-radius: 50%;
  padding: 0.5em;
  transition: .2s ease;

  :hover {
    background-color: ${theme.hack + '33'};
    transition: .2s ease;
  }
`;
