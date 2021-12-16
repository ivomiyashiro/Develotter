import styled from 'styled-components';
import { breakpoints } from 'styles/breakpoints';
import { theme } from 'styles/theme';

export const Header = styled.header`
  padding: 2.25em 0;
`;

export const Title = styled.h1`
  color: ${theme.white};
  font-size: 3.5rem;
  line-height: 1.1em;
  margin-top: .75em;

  @media screen and (min-width: ${breakpoints.desktop}) {
    font-size: 4.75rem;
    line-height: 1.05em;
  }
`;

export const SubTitle = styled.h2`
  color: ${theme.white};
  font-size: 1.5rem;
`;

export const Footer = styled.footer`
  margin-top: 2em;
`;

export const Text = styled.p`
  font-size: 0.8rem;
  color: ${theme.darker_white}
`;
