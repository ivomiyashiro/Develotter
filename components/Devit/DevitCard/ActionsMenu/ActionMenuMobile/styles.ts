import styled from 'styled-components';
import { breakpoints } from 'styles/breakpoints';
import { theme } from 'styles/theme';

export const Div = styled.div`
  width: 100%;
  background-color: ${theme.blue};
  border-radius: 32px 32px 0px 0;
  position: absolute;
  bottom: 0;

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

export const Ul = styled.ul`
  gap: 1em;
  display: flex;
  flex-direction: column;
  height: 100%;
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 1em 0;
  padding-bottom: 0.35em;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  color: ${theme.white};
  gap: .75em;
  padding: 0.5em 1.25em;
`;

export const Section = styled.section`
  width: 100%;
  height: 40px; 
`;

export const P = styled.p`
  margin: 0;
`;
