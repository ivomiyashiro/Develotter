import styled from 'styled-components';
import { theme } from '../../../../../styles/theme';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -3em;
`;

export const H1 = styled.h1`
  font-size: 1.5rem;
  color: ${theme.white};
  margin-top: 2em;
  margin-bottom: 1.5em;
  font-weight: 800;
`;

export const Section = styled.section`
  width: 285px;
  height: 52px;
`;
