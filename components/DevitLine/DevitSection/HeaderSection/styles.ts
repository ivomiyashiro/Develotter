import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Div = styled.div`
  padding-top: 0.5em;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

export const Section = styled.section`
  width: 48px;
  height: 48px;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
`;

export const A = styled.a`
  font-size: 1rem;
  font-weight: bold;
  color: ${theme.white};
`;

export const P = styled.p`
  font-size: 0.9rem;
  color: ${theme.darker_white}
`;
