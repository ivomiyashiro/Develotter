import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Div = styled.div`
  align-items: center;
  background: rgba(91, 112, 131, 0.4);
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;

export const Wrapper = styled.div`
  background-color: ${theme.blue};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  max-width: 256px;
  padding-top: 1.6em;
  padding: 2em;
  width: 80%;
`;

export const LogoWrapper = styled.section`
  text-align: center;
`;

export const Section = styled.section`
  width: 100%;
`;

export const H2 = styled.h2`
  color: ${theme.white};
  font-size: 1.1rem;
  margin-top: 0.25em;
`;

export const P = styled.p`
  color: ${theme.darker_white};
  font-size: .8rem;
  margin-bottom: 1.5em;
  margin-top: .5em;
  line-height: 1.5em;
`;

export const ButtonsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: .75em;
  margin-top: 0.5em;
`;

export const ButtonWrapper = styled.section`
  height: 42px;
`;
