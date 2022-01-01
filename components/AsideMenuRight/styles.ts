import styled from 'styled-components';
import { breakpoints } from 'styles/breakpoints';
import { theme } from 'styles/theme';

export const Aside = styled.aside`
  display: none;
  flex-direction: column;
  margin-left: 1.75em;
  margin-right: 1em;
  min-height: 100vh;
  position: sticky;
  padding-bottom: 3em;
  top: 0;

  @media (min-width: ${breakpoints.wideTablet}) {
    display: flex;
  }
`;

export const Section = styled.section`
  align-items: center;
  background-color: ${theme.blue};
  border-bottom: 1px solid ${theme.blue};
  display: flex;
  height: 54px;
  position: sticky;
  top: 0;
  z-index: 10;
`;
