import styled from 'styled-components';
import { breakpoints } from 'styles/breakpoints';
import { theme } from 'styles/theme';

export const Div = styled.div`
  padding: 0 2em;
  margin: 2em auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${breakpoints.tablet}) {
    display: block;
    text-align: left;
    width: 375px;
    margin: 2em auto;
    padding: 0;
  }
`;

export const H1 = styled.h1`
  color: ${theme.white};
  font-size: 1.75rem;
  font-weight: 800;
`;

export const P = styled.p`
  margin-top: 0.75em;
  color: ${theme.darker_white};
  font-size: 0.9rem;
  font-weight: 200;
  line-height: 1.4em;
`;

export const Footer = styled.footer`
  width: 135px;
  height: 52px;
  margin-top: 1.75em;
`;
