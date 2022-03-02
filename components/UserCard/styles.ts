import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Div = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 64px;
  padding: 0.5em 1em;

  :hover {
    background-color: ${theme.white + '1A'};
  }
`;

export const ImageContainer = styled.section`
  border-radius: 50%;
  height: 40px;
  overflow: hidden;
  position: relative;
  width: 40px;
`;

export const UserContainer = styled.section`
  margin-left: 0.75em;
`;

export const ButtonContainer = styled.section`
  height: 32px;
  margin-left: auto;
`;

export const H3 = styled.h3`
  color: ${theme.white};
  font-size: 0.9rem;

  :hover {
    text-decoration: underline;
  }
`;

export const P = styled.p`
  font-size: 0.9rem;
  color: ${theme.darker_white};
`;

export const Span = styled.span`
  font-size: 0.85rem;
  padding: 0 0.75em;
`;
