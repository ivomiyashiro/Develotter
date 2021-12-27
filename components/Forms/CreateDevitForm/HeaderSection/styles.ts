import styled from 'styled-components';
import { breakpoints } from 'styles/breakpoints';
import { theme } from 'styles/theme';

export const Header = styled.header`
  align-items: center;
  border-bottom: 1px solid ${theme.gray};
  display: flex;
  height: 53px;
  justify-content: space-between;
  padding-right: 1em;
  padding-left: 0;
`;

export const Div = styled.div`
  width: auto;
  height: 32px;

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;
