import styled from 'styled-components';
import { breakpoints } from 'styles/breakpoints';
import { theme } from 'styles/theme';

export const Aside = styled.aside`
  height: 100vh;
  overflow: hidden;
  background-color: ${theme.blue};
  display: flex;
  flex-direction: column;
  transition: .2s ease;
  position: fixed;
  left: 0;
  top: 0;

  @media (min-width: ${breakpoints.desktop}) {
    display: none;
  }
`;

export const Header = styled.header`
  align-items: center;
  color: ${theme.white};
  display: flex;
  height: 54px;
  justify-content: space-between;
  padding: 0 1em;
  border-bottom: 1px solid ${theme.gray};
`;

export const H2 = styled.h2`
  font-size: 1.05rem;
`;

export const Footer = styled.footer`
  padding: 1em;
  margin-top: auto;
  border-top: 1px solid ${theme.gray};
`;

export const A = styled.a`
  color: ${theme.white};
`;
