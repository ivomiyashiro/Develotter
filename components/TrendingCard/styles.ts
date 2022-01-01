import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Article = styled.article`
  cursor: pointer;
  display: flex;
  gap: 0.5em;
  transition: 0.2s ease;
  width: 100%;

  :hover {
    background-color: ${theme.white + '1A'};
    transition: 0.2s ease;
  }
`;

export const Section = styled.section`
  padding: 1em 0;
  padding-left: 12px;
`;

export const P = styled.p`
  color: ${theme.darker_white};
  font-size: 0.7rem;
`;

export const H3 = styled.h3`
  color: ${theme.white};
  font-size: .9rem; 
  margin: 0.25em 0;
`;

export const ImageContainer = styled.section`
  border-radius: 12px;
  flex-shrink: 0;
  height: 68px;
  overflow: hidden;
  position: relative;
  margin-top: 1em;
  margin-right: 12px;
  width: 68px;
`;
