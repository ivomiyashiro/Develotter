import styled from 'styled-components';
import { breakpoints } from 'styles/breakpoints';

export const LandingWrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  height: 100vh;

  @media screen and (min-width: ${breakpoints.desktop}) {
    display: grid;
    grid-template-columns: 55% 1fr;
  }
`;

export const VideoWrapper = styled.div`
  display: none;

  @media screen and (min-width: ${breakpoints.desktop}) {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    position: relative;
    width: 100%;
  }
`;

export const Video = styled.video`
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em 2.25em;
  max-width: 500px;

  @media screen and (min-width: ${breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2.25em;
  }
`;
