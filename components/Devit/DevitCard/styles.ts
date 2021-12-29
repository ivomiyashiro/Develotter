import styled from 'styled-components';
import { theme } from 'styles/theme';

import { IComment } from 'interfaces';

interface IProps {
  userComments: IComment[]
}

export const Div = styled.div<IProps>`
  background: ${theme.blue};
  border-bottom: 1px solid ${props => props.userComments.length === 0  ? theme.gray : 'transparent'};
  cursor: pointer;
  display: grid;
  gap: .75em;
  grid-template-columns: 48px 1fr;
  position: relative;
  transition: background .2s ease-in-out;
  width: 100%;

  :hover {
    background: rgba(17, 34, 64, 0.4);
    transition: background .2s ease-in-out;
  }
`;

export const Section = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0.75em 1em;
`;

export const ProfileImageContainer = styled.section`
  padding: 0.75em 1em;
`;

export const Line = styled.div`
  background-color: rgb(61, 84, 102);
  height: 45%;
  padding: 0;
  width: 2px;
  margin-left: 1.44em;
  margin-top: 0.45em;
`;
