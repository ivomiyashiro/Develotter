import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Form = styled.form`
  padding: 0.9em 0;
`;

export const Header = styled.header`
  margin-left: 3.65em;
`;

export const Footer = styled.footer`
  margin-left: 3.65em;
  margin-top: 0.75em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Section = styled.section`
  display: flex;
  align-items: flex-start;
  position: relative;
  padding: 0.5em 0;
`;

export const P = styled.p`
  font-size: 0.9rem;
  color: ${theme.darker_white};
`;

export const Span = styled.span`
  font-size: 0.9rem;
  color: ${theme.hack};
`;

export const Textarea = styled.textarea`
  background-color: transparent;
  border: none;
  color: ${theme.white};
  font-size: 1.15rem;
  height: 25px;
  margin-top: 0.5em;
  overflow: hidden;
  resize: none;
  width: 100%;
  
  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${theme.darker_white};
  }
`;

export const ImageWrapper = styled.div`
  border-radius: 50%;
  min-height: 44px;
  overflow: hidden;
  position: relative;
  min-width: 44px;
  margin-right: 0.75em;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  width: 80px;
  height: 30px;
  margin-top: 0.5em;
`;

export const MainButtonWrapper = styled.div`
  width: 80px;
  height: 30px;
`;

export const Input = styled.input`
  display: none;
`;

export const Wrapper = styled.div`
  padding-left: 3.65em;
`;
