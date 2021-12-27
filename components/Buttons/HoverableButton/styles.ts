import styled from 'styled-components';
import { theme } from 'styles/theme';

interface IProps {
  color: string
}

export const Button = styled.button<IProps>`
  align-items: center;
  background: transparent;
  border-radius: 50%;
  border: none;
  color: ${theme.darker_white};
  display: flex;
  justify-content: center;
  padding: 0.4em;
  transition: .2s ease-in-out;

  :hover {
    background-color: ${props => props.color + '33'};
    color: ${props => props.color};
    transition: .2s ease-in-out;
  }
`;
