import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Div = styled.div`
  align-items: center;
  background: ${theme.hack};
  border-radius: 50%;
  border: none;
  color: ${theme.blue};
  cursor: pointer;
  display: flex;
  height: 56px;
  justify-content: center;
  width: 56px;
`;
