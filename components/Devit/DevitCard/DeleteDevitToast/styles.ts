import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: rgba(91, 112, 131, 0.4);
`;

export const Div = styled.div`
  padding: 2em;
  padding-top: 1.6em;
  background-color: ${theme.blue};
  width: 80%;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  max-width: 260px;
`;

export const Section = styled.section`
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  height: 38px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .75em;
`;

export const H2 = styled.h2`
  color: ${theme.white};
  font-size: 1.25rem;
  margin-top: 0.25em;
`;

export const P = styled.p`
  color: ${theme.darker_white};
  font-size: .8rem;
  margin-top: .5em;
  margin-bottom: 1.5em;
`;
