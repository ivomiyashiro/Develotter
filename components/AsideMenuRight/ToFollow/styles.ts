import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Div = styled.div`
  background-color: ${theme.light_blue};
  border-radius: 16px;
  margin-top: 1em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.header`
  padding: 12px 16px;
`;

export const H1 = styled.h1`
  font-size: 1.25rem;
  color: ${theme.white};
`;

export const P = styled.p`
  padding: 16px;
  color: ${theme.darker_white}
`;
