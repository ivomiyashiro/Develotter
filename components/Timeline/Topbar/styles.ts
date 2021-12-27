import styled from 'styled-components';
import { breakpoints } from 'styles/breakpoints';
import { theme } from 'styles/theme';

export const Header = styled.header`
  align-items: center;
  background: ${theme.blue};
  border-bottom: 1px solid ${theme.gray};
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 8;
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  gap: 1em;
  height: 53px;
  padding: 0 1em;
`;

export const H2 = styled.h2`
  color: ${theme.white};
  margin: 0;
`;

export const Button = styled.button`
  position: relative;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  padding: 0;
  overflow: hidden;
  display: block;

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;
