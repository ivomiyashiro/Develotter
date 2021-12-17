import styled from 'styled-components';
import { breakpoints } from 'styles/breakpoints';
import { theme } from 'styles/theme';

export const SignupFormWrapper = styled.div`
  background: ${theme.blue};
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  margin: 0 auto;
  position: relative;
  border-radius: 16px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 550px;
    max-height: 680px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const SignupFormHeader = styled.header`
  align-self: center;
`;

export const LogoWrapper = styled.div`
  margin-top: 0.45em;
  cursor: pointer;
`;

export const Anchor = styled.div`
  align-items: center;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  left: 1em;
  padding: .4em;
  position: absolute;
  top: 1em;
  cursor: pointer;

  :hover {
    background-color: ${theme.white + '33'};
  }
`;
