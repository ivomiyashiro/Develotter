import styled from 'styled-components';
import { breakpoints } from 'styles/breakpoints';
import { theme } from 'styles/theme';

interface IProps {
  isError: boolean
}

export const Div = styled.div<IProps>`
  background: ${props => props.isError ? '#e1a7a7' : '#CBF5E3'};
  border-radius: 4px;
  border: 2px solid ${props => props.isError ? theme.red : theme.green};
  color: ${props => props.isError ? theme.red : theme.green};
  font-size: 0.9rem;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  padding: .5em;
  position: absolute;
  right: 0;
  text-align: center;
  top: -28px;
  width: 80%;
  max-width: 400px;
  z-index: 10;

  @media (min-width: ${breakpoints.desktop}) {
    width: 400px;
  }
`;

export const Section = styled.section`
  position: relative;
`;

export const P = styled.p`
  margin: 0;
`;
