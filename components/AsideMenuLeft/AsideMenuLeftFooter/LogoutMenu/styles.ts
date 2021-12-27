import styled from 'styled-components';
import { boxShadow } from 'styles/commun';
import { theme } from 'styles/theme';

export const Div = styled.div`
  background-color: ${theme.blue};
  border-radius: 16px;
  bottom: 5em;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 1em 0;
  position: absolute;
  right: 0;
  width: 300px;
  z-index: 9;
  box-shadow: ${boxShadow};
`;

export const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Li = styled.li`
  padding: 0.75em;
  transition: .2s ease-in-out;

  :hover {
    background-color: ${theme.darker_white + '26'};
    transition: .2s ease-in-out;
  }
`;

export const A = styled.a`
  color: ${theme.white};
`;
