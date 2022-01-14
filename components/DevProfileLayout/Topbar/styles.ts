import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.gray};
  position: sticky;
  top: 0;
  background: ${theme.blue};
  width: 100%;
  z-index: 8;
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  gap: 1.5em;
  height: 53px;
  padding: 0 0.5em;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 34px;
  width: 34px;
  border-radius: 50%;
  padding: 0;
  padding-top: .25em;
  overflow: hidden;
  display: block;
  background: transparent;
  border: none;

  :hover {
    background: ${theme.white + '1A'};
  }
`;

export const H2 = styled.h2`
  color: ${theme.white};
  font-size: 1.15rem;
`;

export const P = styled.p`
  font-size: 0.8rem;
  color: ${theme.darker_white};
`;
