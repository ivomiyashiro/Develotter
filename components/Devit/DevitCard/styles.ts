import styled from 'styled-components';
import { theme } from 'styles/theme';

import { IComment } from 'interfaces';

interface IProps {
  userComments: IComment[]
}

export const Div = styled.div<IProps>`
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: .75em;
  width: 100%;
  background: ${theme.blue};
  border-bottom: 1px solid ${props => props.userComments.length === 0  ? theme.gray : 'transparent'};
  transition: background .2s ease-in-out;
  cursor: pointer;

  :hover {
    transition: background .2s ease-in-out;
    background: rgba(17, 34, 64, 0.4)
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  padding: 0.75em 1em;
`;

export const ProfileImageContainer = styled.section`
  padding: 0.75em 1em;
`;

export const Span = styled.span`
  width: 2px;
  background-color: rgb(61, 84, 102);
  height: 100%;
  padding: 0;
`;
