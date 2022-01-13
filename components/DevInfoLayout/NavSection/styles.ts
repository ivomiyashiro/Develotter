import styled from 'styled-components';
import { theme } from 'styles/theme';

interface IProps {
  isActive: boolean
}

export const Nav = styled.nav`
  margin-top: 0.5em;
`;

export const Ul = styled.ul`
  align-items: center;
  display: flex;
  height: 53px;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Li = styled.li`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  transition: .2s ease;
  width: 100%;

  :hover {
    background-color: ${theme.white + '1A'};
    transition: .2s ease;
  }
`;

export const A = styled.a<IProps>`
  align-items: center;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border-bottom: ${props => props.isActive ? `4px solid ${theme.hack}` : '4px solid transparent'};
  box-sizing: border-box;
  color: ${props => props.isActive ? `${theme.white}` : `${theme.darker_white}`};
  display: flex;
  font-weight: ${props => props.isActive ? '600' : '400'};
  height: 100%;
`;
