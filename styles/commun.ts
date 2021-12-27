import styled from 'styled-components';
import { theme } from './theme';

export const Hightlight = styled.span`
  color: ${theme.hack};
`;

export const boxShadow = `
  0px 0px 0.4px ${theme.white + '33'},
  0px 0px 1px ${theme.white + '33'},
  0px 0px 1.9px ${theme.white + '33'},
  0px 0px 3.4px ${theme.white + '33'},
  0px 0px 6.3px ${theme.white + '33'},
  0px 0px 15px ${theme.white + '33'};
`;
