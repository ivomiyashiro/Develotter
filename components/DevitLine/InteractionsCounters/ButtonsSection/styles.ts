import { theme } from 'styles/theme';
import styled from 'styled-components';

export const Div = styled.div`
  padding: 0.5em 0;
  border-bottom: 1px solid ${theme.gray};
`;

export const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  font-size: 0.9rem;
  gap: 1.25em;
  justify-content: space-around;
`;

export const Li = styled.li`
  color: ${theme.darker_white};
`;
