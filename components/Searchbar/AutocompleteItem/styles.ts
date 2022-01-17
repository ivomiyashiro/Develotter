import styled from 'styled-components';
import { breakpoints } from 'styles/breakpoints';
import { theme } from 'styles/theme';

const commun = `
  color: ${theme.darker_white};
  font-size: 0.9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 225px;
`;

export const Li = styled.li`
  padding: 0.5em 1em;

  :hover {
    background-color: ${theme.white + '0D'}
  }
`;

export const A = styled.a`
  display: flex;
  gap: .75em;
  color: ${theme.white};
`;

export const Section = styled.section`
  border-radius: 50%;
  height: 56px;
  object-fit: cover;
  overflow: hidden;
  position: relative;
  min-width: 56px;
`;

export const H3 = styled.h3`
  font-size: 0.95rem;
`;

export const P = styled.p`
  ${commun};
`;

export const Span = styled.p`
  ${commun};
`;

export const Div = styled.div`
  @media (min-width: ${breakpoints.tablet}) {
    display: block;
  }
`;
