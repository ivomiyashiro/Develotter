import styled from 'styled-components';
import { theme } from 'styles/theme';

interface IProps {
  disabled: boolean
}

export const Li = styled.li`
  color: ${theme.white};
  display: flex;
  align-items: center;
  gap: .5em;
`;

export const H4 = styled.h4<IProps>`
  font-weight: 400;
  margin: 0;
  color: ${props => props.disabled ? theme.darker_white : theme.white};
`;


export const A = styled.a`
  color: ${theme.white};
  display: flex;
  align-items: center;
  gap: .5em;
`;
