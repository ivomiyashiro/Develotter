import styled from 'styled-components';
import { breakpoints } from 'styles/breakpoints';
import { theme } from 'styles/theme';

export const Header = styled.header`
  align-items: center;
  display: flex;
  height: 20px;
  justify-content: space-between;
  width: 100%;
`;

export const Paragraph = styled.span`
  display: flex;
  align-items: flex-end;
  gap: .5em;
  max-width: 225px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    max-width: 450px;
  }
`;

export const Section = styled.section`
  align-items: center;
  display: flex;
  gap: .5em;
`;

export const A = styled.a`
  color: ${theme.white};
  font-size: 1rem;
  font-weight: 600;
  margin: 0;

  :hover {
    text-decoration: underline;
  }
`;

export const P = styled.p`
  color: ${theme.gray};
  font-size: .85rem;
  margin: 0;
`;

export const Anchor = styled.a`
  color: ${theme.white};
  font-size: 1rem;
  font-weight: 600;
  margin: 0;

  :hover {
    text-decoration: underline;
    text-decoration-color: ${theme.gray};
  }
`;

export const Time = styled.time`
  color: ${theme.gray};
  font-size: .85rem;
  margin: 0;
`;
