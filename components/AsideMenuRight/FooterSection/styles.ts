import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Footer = styled.footer``;

export const P = styled.p`
  color: ${theme.hack};
  padding: 1em;
  cursor: pointer;
  transition: 0.2s ease;

  :hover {
    background-color: ${theme.white + '1A'};
    transition: 0.2s ease;
  }
`;
