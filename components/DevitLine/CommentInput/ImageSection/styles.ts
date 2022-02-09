import styled from 'styled-components';

export const Div = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 16px;
  margin-bottom: 1em;
`;

export const Button = styled.button`
  position: absolute;
  top: 4px;
  left: 4px;
  min-width: 32px;
  min-height: 32px;
  background: rgba(0, 0, 0, 0.65);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
`;

export const Img = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
`;
