import styled from 'styled-components';
import { breakpoints } from 'styles/breakpoints';
import { theme } from 'styles/theme';

export const Footer = styled.footer`
  align-items: center;
  border-radius: 9999px;
  cursor: pointer;
  display: flex;
  height: 52px;
  margin-bottom: 1.5em;
  margin-top: auto;
  padding: 0.5em 1em;
  position: relative;

  :hover {
    background-color: ${theme.white + '26'};
  }

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    padding: 0.35em;
    min-width: 52px;
    justify-content: center;
  }
`;

export const ImageContainer = styled.div`
  border-radius: 50%;
  height: 40px;
  overflow: hidden;
  position: relative;
  width: 40px;
`;

export const UserContainer = styled.div`
  margin-left: 0.75em;

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    display: none;
  }
`;

export const DotsContainer = styled.div`
  margin-left: auto;

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    display: none;
  }
`;

export const H3 = styled.h3`
  font-size: 1rem;
  margin: 0;
`;

export const P = styled.p`
  margin: 0;
  color: ${theme.darker_white};
  font-size: 0.9rem;
`;
