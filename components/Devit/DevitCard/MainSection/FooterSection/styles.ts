import styled from 'styled-components';
import { theme } from 'styles/theme';

const commun = `
  align-items: center;
  color: ${theme.darker_white};
  cursor: pointer;
  display: flex;
  gap: .5em;
`;

export const Footer = styled.footer`
  width: 100%;
`;

export const Ul = styled.ul`
  display: flex;
  gap: 3em;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Span = styled.span`
  font-size: .8rem;
`;

export const ListItemFav = styled.li`
  ${commun};
  
  :hover {
    color: ${theme.fav};
  }
`;

export const ListItemComments = styled.li`
  ${commun};
  
  :hover {
    color: ${theme.comments};
  }
`;

export const ListItemRevits = styled.li`
  ${commun};
  
  :hover {
    color: ${theme.revits};
  }
`;
