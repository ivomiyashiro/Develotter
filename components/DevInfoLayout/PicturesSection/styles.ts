import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Section = styled.section`
  position: relative;
`;

export const CoverPictureWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`;

export const ProfilePictureWrapper = styled.div`
  position: absolute;
  bottom: -2.75em;
  border: 4px solid ${theme.light_blue};
  border-radius: 50%;
  margin: 0 1em;
`;

export const ProfilePicture = styled.div`
  width: 133px;
  height: 133px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
`;
