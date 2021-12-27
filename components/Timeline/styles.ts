import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Div = styled.div`
  border-right: 1px solid ${theme.gray};
  border-left: 1px solid ${theme.gray};
`;

export const Section = styled.section``;

export const SpinnerWrapper = styled.div`
  width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
