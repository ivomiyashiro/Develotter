import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Div = styled.div`
  border: 1px solid ${theme.gray};
  border-radius: 16px;
  margin-bottom: 1em;
  overflow: hidden;
`;

export const Header = styled.header`
  padding: .75em;
`;

export const H3 = styled.h3`
  color: ${theme.white};
  font-size: 1rem;
  margin: 0;
`;

export const P = styled.p`
  color: ${theme.darker_white};
  font-size: .9rem; 
  margin: 0;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  margin-bottom: -0.75em;
`;

export const HeaderUserInfo = styled.section`
  display: flex;
  align-items: center;
  gap: .5em;
`;

export const ProfileImgContainer = styled.section`
  position: relative;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  overflow: hidden;
  border: none;
  margin: 0;
`;

export const HeaderContentSection = styled.section`
  color: ${theme.white};
  font-size: .9rem;
  margin-top: .5em;
`;
