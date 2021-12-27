import styled from 'styled-components';
import { breakpoints } from 'styles/breakpoints';

export const Menu = styled.menu`
  margin: 0;
  padding: 0;
  margin-top: 0.5em;
`;

export const Ul = styled.ul`
  display: inline-flex;
  flex-direction: column;
  gap: 0.35em;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Section = styled.section`
  height: 52px;
  margin-top: 1em;
  width: 225px;

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    display: none;
  }
`;

export const Div = styled.div`
  margin-top: 1em;

  @media (min-width: ${breakpoints.desktop}) {
    display: none;
  }
`;
