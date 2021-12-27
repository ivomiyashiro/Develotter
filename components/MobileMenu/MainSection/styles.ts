import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Wrapper = styled.div`
  padding: 1em;
`;

export const Div = styled.div``;

export const ImageContainer = styled.section`
  border-radius: 50%;
  height: 40px;
  margin-top: 0em;
  overflow: hidden;
  position: relative;
  width: 40px;
`;

export const Section = styled.section`
  margin-top: 1.25em;
`;

export const H3 = styled.h3`
  color: ${theme.white};
  font-size: 1rem;
`;

export const P = styled.p`
  color: ${theme.darker_white};
  margin-top: 0.25em;
  font-size: 0.85rem;
`;

export const FollowsContainer = styled.section`
  display: flex;
  gap: 1em;
`;

export const FollowsCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

export const Span = styled.span`
  color: ${theme.darker_white};
  font-size: 0.85rem;
`;

export const IconListContainer = styled.div`
  margin-top: 1.5em;
`;

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.75em;
`;
