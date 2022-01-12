import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Button = styled.button`
  text-decoration: underline;
  background-color: transparent;
  border: none;
  color: ${theme.white};
  font-size: 1rem;
  width: 100%;
  height: 100%;
  border-radius: 9999px;
  font-weight: 700;
  text-underline-offset: 4px;
  transition: .2s ease;

  :hover {
    transition: .2s ease;
    background-color: ${theme.white + '1A'};
  }
`;
