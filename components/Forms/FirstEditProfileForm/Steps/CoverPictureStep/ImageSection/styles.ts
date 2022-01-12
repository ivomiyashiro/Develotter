import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Div = styled.div`
  position: relative;
`;

export const CoverPictureContainer = styled.section`
  height: 130px;
  width: 100%;
  background-color: ${theme.light_blue};
  margin-top: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CoverPicture = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  opacity: 0.6;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
`;

export const Input = styled.input`
  display: none;
`;

export const ProfilePictureSection = styled.section`
  position: absolute;
  top: 8em;
  padding: 0 0.75em;
`;

export const Container = styled.div`
  padding: 0.1em;
  border: 2px solid ${theme.white};
  width: 130px;
  height: 130px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfilePictureContainer = styled.div`
  position: relative;
  width: 126px;
  height: 124px;
  border-radius: 50%;
  overflow: hidden;
`;

export const H1 = styled.h1`
  color: ${theme.white};
  font-size: 1.3rem;
`;

export const P = styled.p`
  color: ${theme.darker_white};
  font-weight: 200;
  font-size: 0.8rem;
`;
