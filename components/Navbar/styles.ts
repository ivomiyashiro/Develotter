import styled from 'styled-components';
import { breakpoints } from 'styles/breakpoints';
import { theme } from 'styles/theme';

export const Nav = styled.nav`
  align-items: center;
  background: ${theme.blue};
  box-shadow:
  0px 0px 1.7px rgba(0, 0, 0, 0.098),
  0px 0px 4.1px rgba(0, 0, 0, 0.141),
  0px 0px 7.8px rgba(0, 0, 0, 0.175),
  0px 0px 13.8px rgba(0, 0, 0, 0.209),
  0px 0px 25.9px rgba(0, 0, 0, 0.252),
  0px 0px 62px rgba(0, 0, 0, 0.35);
  bottom: 0;
  display: flex;
  height: 52px;
  position: fixed;
  width: 100%;

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;
