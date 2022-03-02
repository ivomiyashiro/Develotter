import styled from 'styled-components';
import { theme } from 'styles/theme';

export const ImageWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 193px;
  justify-content: center;
  position: relative;
  width: 100%;
  background-color: ${theme.light_blue};
`;

export const Div = styled.div`
  width: 100%;
  height: 193px;
  background-color: ${theme.light_blue};
`;

export const Section = styled.section`
  position: relative;
`;

export const ProfilePictureWrapper = styled.div`
  border-radius: 50%;
  border: 4px solid ${theme.blue};
  bottom: -4.75em;
  margin: 0 1em;
  position: absolute;
  background-color: ${theme.blue};
`;

export const ProfilePicture = styled.div`
  align-items: center;
  border-radius: 50%;
  display: flex;
  height: 112px;
  justify-content: center;
  opacity: 0.9;
  overflow: hidden;
  position: relative;
  width: 112px;
  background-color: ${theme.blue};
`;

export const Input = styled.input`
  display: none;
`;

export const ButtonWrapper = styled.div`
  align-items: center;
  background-color: #00000080;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: center;
  position: absolute;
  transition: 0.2s ease-in-out;
  width: 40px;

  :hover {
    background-color: #00000066;
    transition: 0.2s ease-in-out;
  }
`;
