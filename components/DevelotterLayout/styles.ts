import styled from 'styled-components';
import { breakpoints } from 'styles/breakpoints';

export const Div = styled.div`
  display: block;
  justify-content: center;
  margin: 0 auto;

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.wideTablet}) {
    display: grid;
    grid-template-columns: 88px minmax(auto, 600px);
  }

  @media (min-width: ${breakpoints.wideTablet}) and (max-width: ${breakpoints.desktop}) {
    display: grid;
    max-width: 1240px;
    grid-template-columns: 88px 600px minmax(290px, 375px);
  }

  @media (min-width: ${breakpoints.desktop}) {
    display: grid;
    max-width: 1240px;
    grid-template-columns: 260px 600px minmax(290px, 375px);
  }
`;
