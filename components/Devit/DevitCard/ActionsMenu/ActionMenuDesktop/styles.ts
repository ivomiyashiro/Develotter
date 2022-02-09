import styled from 'styled-components';
import { breakpoints } from 'styles/breakpoints';
import { theme } from 'styles/theme';

export const Div = styled.div`
  background-color: ${theme.blue};
  border-radius: 4px;
  box-shadow:
    0px 0px 3.6px ${theme.white + '1A'},
    0px 0px 10px ${theme.white + '1A'},
    0px 0px 24.1px ${theme.white + '1A'},
    0px 0px 30px ${theme.white + '1A'}
  ;
  display: none;
  position: absolute;
  right: 1em;
  top: 1em;
  z-index: 9;

  @media (min-width: ${breakpoints.tablet}) {
    display: block;
  }
`;

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 1em 0.75em;

  :hover {
    background-color: ${theme.white + '1A'};
  }
`;

export const Span = styled.p`
  color: ${theme.white};
  font-size: 0.95rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 200px;
`;
