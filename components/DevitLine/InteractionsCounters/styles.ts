import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Div = styled.div`
  padding: 1em 0;
  border-bottom: 1px solid ${theme.gray};
`;

export const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  font-size: 0.9rem;
  gap: 1.25em;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  color: ${theme.darker_white};
  gap: 0.25em;

  :hover {
    text-decoration: underline;
    text-decoration-color: ${theme.white};
    cursor: pointer;
  }
`;

export const H3 = styled.h3`
  color: ${theme.white};
  font-size: 0.9rem;
`;

export const Span = styled.span`
  display: flex;
  gap: 0.25em;
`;
