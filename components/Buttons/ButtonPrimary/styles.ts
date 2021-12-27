import styled from 'styled-components';

interface IButton {
  outline: boolean
  color: string
  textColor: string
  hover: boolean
}

export const Button = styled.button<IButton>`
  align-items: center;
  border-radius: 9999px;
  display: flex;
  font-size: 1rem;
  height: 100%;
  justify-content: center;
  width: 100%;
  font-weight: 800;
  background: ${(props: IButton) => !props.outline ? props.color : 'transparent'};
  border: 1px solid ${(props: IButton) => !props.outline ? 'transparent' : props.color};
  color: ${(props: IButton) => props.textColor};

  :disabled {
    opacity: 0.6;
  }
`;

export const Anchor = styled.div<IButton>`
  align-items: center;
  border-radius: 9999px;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  height: 100%;
  justify-content: center; 
  width: 100%;
  font-weight: 800;
  background: ${(props: IButton) => 
    !props.outline ? props.color : 'transparent'};
  border: 1px solid ${(props: IButton) => 
    !props.outline ? 'transparent' : props.color};
  color: ${(props: IButton) => props.textColor};
  transition: background .2s ease-in-out;
  
  ${props => props.hover && `
    :hover {
      background: ${(props: IButton) => props.color + '33'};
      transition: background .2s ease-in-out;
    }
  `}

`;
