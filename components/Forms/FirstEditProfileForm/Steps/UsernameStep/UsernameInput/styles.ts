import styled from 'styled-components';
import { theme } from 'styles/theme';

interface Error {
  error: boolean
}

export const Div = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 508px;
`;

export const Span = styled.span`
  position: absolute;
  top: .67em;
  left: .5em;
  font-size: 1.25rem;
  color: ${theme.white};
`;

export const Input = styled.input<Error>`
  background: ${theme.light_blue};
  border-radius: 4px;
  border: none;
  color: ${theme.white};
  font-size: 1.15rem;
  height: 56px;
  width: 100%;
  padding-left: 1.4em;
  margin-top: -0.25em;
  outline: ${props => props.error ? `2px solid ${theme.red}` : `2px solid ${theme.darker_white}`};

  :focus {
    outline: ${props => props.error ? `2px solid ${theme.red}` : `2px solid ${theme.hack}`};
  }
`;

export const Small = styled.small`
  color: #F5323E;
  padding: 0.5em 12px;
`;

export const LoaderWrapper = styled.div`
  position: absolute;
  right: 1em;
  top: 1em;
`;
