import styled from 'styled-components';
import { breakpoints } from 'styles/breakpoints';
import { theme } from 'styles/theme';

export const Form = styled.form`
  background: ${theme.blue};
  height: 100vh;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 100;

  @media (min-width: ${breakpoints.tablet}) {
    height: auto;
    max-height: 90vh;
    max-width: 600px;
    position: absolute;
    top: 5%;
    border-radius: 16px;
    overflow-y: auto;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
  }
`;

export const Wrapper = styled.div`
  padding: 1em;
  padding-bottom: 0;
`;

export const Div = styled.div`
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 1em;
  width: 100%;
`;

export const ProfileImgWrapper = styled.section`
  height: 100%;
`;

export const Line = styled.div``;

export const Section = styled.section``;

export const Reply = styled.div`
  display: block;
  padding: 0;
  font-size: 0.85rem;
`;

export const P = styled.p`
  color: ${theme.darker_white};
`;

export const Span = styled.span`
  color: ${theme.hack};
`;
