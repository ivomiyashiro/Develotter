import styled from 'styled-components';
import { breakpoints } from 'styles/breakpoints';
import { theme } from 'styles/theme';

export const Div = styled.div`
  align-items: center;
  border-top: 1px solid ${theme.gray};
  display: flex;
  justify-content: space-between;
  padding: 0.35em 0;
`;

export const Section = styled.section`
  display: flex;
  gap: 0.5em;
`;

export const Input = styled.input`
  display: none;
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  padding: .5em;
`;

export const ButtonWrapper = styled.div`
  display: none;
  height: 32px;
  width: 80px;

  @media (min-width: ${breakpoints.tablet}) {
    display: block;
  }
`;
