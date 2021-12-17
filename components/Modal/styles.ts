import styled from 'styled-components';
import { breakpoints } from 'styles/breakpoints';
import { theme } from 'styles/theme';

interface IModal {
  isOpen: boolean
  isVisible: boolean
}

export const ModalWrapper = styled.div<IModal>`
  position: fixed;
  height: 100vh;
  width: ${(props: IModal) => props.isOpen ? '100%' : '0px'};
  overflow: hidden;
  z-index: 9;
  top: 0;
  left: 0;
  background-color: ${theme.white + '26'};

  @media (min-width: ${breakpoints.tablet}) {
    background-color: ${(props: IModal) => !props.isVisible ? 'transparent' : theme.white + '26'}
  }
`;
