import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Section = styled.section`
  padding: 0.75em 1em;
`;

export const UserInfoContainer = styled.div`
  margin-top: 1em;
`;

export const H1 = styled.h1`
  color: ${theme.white};
  font-size: 1.15rem;
  font-weight: 800;
`;

export const P = styled.p`
  color: ${theme.darker_white};
  font-size: 0.9rem;
`;

export const UserJoinedContainer = styled.div`
  color: ${theme.darker_white};
  margin-top: 1em;
`;

export const FollowsCounter = styled.div`
  display: flex;
  gap: 1em;
  margin-top: 1em;
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

export const H3 = styled.h3`
  color: ${theme.white};
  font-size: 0.9rem;
`;

export const Bio = styled.div`
  margin-bottom: 1em;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em 1.15em;
`;

export const Span = styled.p`
  color: ${theme.white};
  font-size: 0.9rem;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

export const Website = styled.a`
  color: ${theme.hack};
  font-size: 0.9rem;
`;
