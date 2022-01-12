import styled from 'styled-components';
import { theme } from 'styles/theme';

export const ProfilePictureStepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2em;
`;

export const SelectImgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4em;
  position: relative;
  padding: 1em;
`;

export const Container = styled.div`
   padding: 0.1em;
  border: 2px solid ${theme.white};
  border-radius: 50%;
  width: 184px;
  height: 184px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageWrapper = styled.section`
  position: relative;
  width: 178px;
  height: 178px;
  border-radius: 50%;
  overflow: hidden;
  opacity: 0.6;
`;

export const SelectImgButtonSection = styled.section`
  position: absolute;
`;

export const Input = styled.input`
  display: none;
`;
