import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  height: 53px;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${theme.blue + 'CC'};
  backdrop-filter: blur(5px)
`;

export const Div = styled.div`
  display: flex;
  gap: 1.75em;
`;

export const ButtonWrapper = styled.div`
  width: 65px;
  height: 32px;
`;

export const Title = styled.h1`
  font-size: 20px;
`;
