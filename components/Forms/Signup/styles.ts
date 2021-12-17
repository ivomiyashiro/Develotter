import styled from 'styled-components';
import { breakpoints } from 'styles/breakpoints';
import { theme } from 'styles/theme';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    padding: 2em;
    padding-top: 0;
`;

export const Title = styled.h1`
  color: ${theme.white};
  font-size: 1.4rem;
  margin-top: 0.75em;
`;

export const InputsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5em;
  margin-top: 1em;
`;

export const Subtitle = styled.h2`
  color: ${theme.white};
  font-size: 1rem;
  margin-top: 4em;

  @media screen and (min-width: ${breakpoints.tablet}) {
    margin-top: 3.25em;
  }
`;

export const ButtonWrapper = styled.div`
  height: 45px;
`;
