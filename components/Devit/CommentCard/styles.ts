import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Section = styled.section`
  background: ${theme.blue};
  cursor: pointer;
  display: flex;
  gap: .75em;
  transition: background .2s ease-in-out;
  width: 100%;
  padding: 0.35em 0;

  :last-child {
    border-bottom: 1px solid ${theme.gray};
    padding-bottom: .75em;
  }

  :hover {
    background: rgba(17, 34, 64, 0.4);
    transition: background .2s ease-in-out;
  }
`;

export const Div = styled.div`
  width: 100%;
`;

export const ProfileImgSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: .5em;
  width: auto;
  padding: 0 1em;
  padding-right: 0;
`;

export const Line = styled.div`
  background-color: rgb(61, 84, 102);
  height: 100%;
  padding: 0;
  width: 2px;
`;

export const Footer = styled.footer`
  display: inline;
`;

export const Ul = styled.ul`
  color: ${theme.darker_white};
  list-style: none;
  margin: 0;
  padding: 0;
  display: inline;
`;

export const Span = styled.span`
  font-size: .8rem;
`;

export const Li = styled.li`
  align-items: center;
  color: ${theme.darker_white};
  cursor: pointer;
  display: inline-flex;
  gap: .5em;

  :hover {
    ${Span} {
      color: ${theme.fav};
    }
  }
`;

export const Button = styled.button`
  align-items: center;
  background: transparent;
  border-radius: 50%;
  border: none;
  color: ${theme.darker_white};
  display: flex;
  gap: 1em;
  justify-content: center;
  padding: 0em 0.4em;
`;
