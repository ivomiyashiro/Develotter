import { theme } from 'styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: 1em;
  border-bottom: 1px solid ${theme.gray};
`;

export const Section = styled.div`
  margin-top: 0.75em;
`;

export const P = styled.p`
  font-size: 1.4rem;
`;

export const Time = styled.time`
  font-size: 0.9rem;
  color: ${theme.darker_white};
`;
