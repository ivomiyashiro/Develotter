import styled from 'styled-components';
import { theme } from 'styles/theme';

interface IProps {
  isActive?: boolean
  error: boolean
}

export const Div = styled.div`
  color: ${theme.darker_white};
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Input = styled.input<IProps>`
  background: ${theme.blue};
  border-radius: 4px;
  border: none;
  color: ${theme.white};
  font-size: 1rem;
  height: 56px;
  margin-top: .5em;
  padding-top: 1.5em;
  padding-left: .75em;
  outline: ${props => props.error ? `1px solid ${theme.red}` : `1px solid ${theme.darker_white}`};

  :focus {
    outline: ${props => props.error ? `2px solid ${theme.red}` : `2px solid ${theme.hack}`};
  }

  :focus + label {
    top: 1.5em;
    font-size: 0.8rem;
    transition: top .2s ease;
  }
`;

export const Label = styled.label<IProps>`
  color: ${prosp => prosp.error ? `${theme.red}` : `${theme.white}`};
  font-size: ${props => props.isActive ? '0.8rem' : '1.15rem'};
  left: 13px;
  position: absolute;
  top: ${props => props.isActive ? '16px' : '24px'};
  transition: top .2s ease;
`;

export const Small = styled.small`
  margin-top: .75em;  
  color: #F5323E;
  position: absolute;
  top: 85px;
  padding: 0 12px;
`;
