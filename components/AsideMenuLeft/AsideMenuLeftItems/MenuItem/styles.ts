import styled from 'styled-components';
import { breakpoints } from 'styles/breakpoints';
import { theme } from 'styles/theme';

export const Li = styled.li`
  display: flex;
  align-items: center;
  border-radius: 9999px;
  height: 54px;
  min-width: 54px;
  transition: .2s ease;

  :hover {
    background-color: ${theme.white + '1A'};
    transition: .2s ease;
  }

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    justify-content: center;
  }
`;

export const A = styled.a`
  align-items: center;
  color: ${theme.white};
  cursor: pointer;
  display: flex;
  font-size: 1.4rem;
  padding: 0 12px;
  transition: .2s ease;
`;

export const H4 = styled.h4`
  font-size: 1.15rem;
  margin-left: 20px;
  margin-right: 16px;

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    display: none;
  }
`;
