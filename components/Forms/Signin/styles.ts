import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 0 2em;
`;

export const Div = styled.div``;

export const H3 = styled.h3`
  color: ${theme.white};
  font-size: 1.4rem;
  margin-top: 0.75em;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5em;
  margin-top: 2em;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 45px;
  margin-bottom: 2em;
`;
