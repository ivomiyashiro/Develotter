import styled from 'styled-components';

export const ButtonsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 2em;
`;

export const ButtonWrapper = styled.div`
  position: relative;
  height: 44px;
`;

export const ButtonChild = styled.div`
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 16px;
  top: 12px;
`;
