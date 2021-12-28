import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Header = styled.header`
  align-items: center;
  display: flex;
  height: 20px;
  justify-content: space-between;
  width: 100%;
`;

export const Section = styled.section`
  align-items: center;
  display: flex;
  gap: .5em;
  max-width: 225px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const H2 = styled.h2`
  color: ${theme.white};
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
`;

export const P = styled.p`
  color: ${theme.gray};
  font-size: .85rem;
  margin: 0;
`;
