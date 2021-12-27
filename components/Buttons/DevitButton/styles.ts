import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Button = styled.button`
  height: 56px;
  width: 56px;
  border-radius: 50%;
  background: ${theme.hack};
  border: none;
  color: ${theme.blue};
  display: flex;
  align-items: center;
  justify-content: center;
`;
