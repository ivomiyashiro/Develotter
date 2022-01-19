import styled from 'styled-components';
import { theme } from 'styles/theme';

interface Span {
  commented?: boolean
  faved?: boolean
  revitted?: boolean
}

const commun = `
  align-items: center;
  color: ${theme.darker_white};
  cursor: pointer;
  display: flex;
  gap: .5em;
`;

const buttonCommun = `
  align-items: center;
  background: transparent;
  border-radius: 50%;
  border: none;
  color: ${theme.darker_white};
  display: flex;
  justify-content: center;
  padding: 0.4em;
  transition: .2s ease-in-out;
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

export const ButtonComment = styled.button`
  ${buttonCommun}

  :hover {
    background-color: ${theme.comments + '33'};
    color: ${theme.comments};
    transition: .2s ease-in-out;
  }
`;

export const ButtonRevit = styled.button`
  ${buttonCommun}

  :hover {
    background-color: ${theme.revits + '33'};
    color: ${theme.revits};
    transition: .2s ease-in-out;
  }
`;

export const ButtonFav = styled.button`
  ${buttonCommun}

  :hover {
    background-color: ${theme.fav + '33'};
    color: ${theme.fav};
    transition: .2s ease-in-out;
  }
`;

export const CommentsCounter = styled.span<Span>`
  font-size: .8rem;
  color: ${props => props.commented ? theme.comments : theme.darker_white};
`;

export const RevitsCounter = styled.span<Span>`
  font-size: .8rem;
  color: ${props => props.revitted ? theme.revits : theme.darker_white};
`;

export const FavsCounter = styled.span<Span>`
  font-size: .8rem;
  color: ${props => props.faved ? theme.fav : theme.darker_white};
`;

export const ListItemFav = styled.li`
  ${commun};
  
  :hover ${FavsCounter} {
    color: ${theme.fav};
  }
`;

export const ListItemComments = styled.li`
  ${commun};
  
  :hover ${CommentsCounter} {
    color: ${theme.comments};
  }
`;

export const ListItemRevits = styled.li`
  ${commun};
  
  :hover ${RevitsCounter}{
    color: ${theme.revits};
  }
`;
