import { DevitButton } from 'components/Buttons/DevitButton';
import { Navbar } from 'components/Navbar';
import { ReactNode } from 'react';

import { ButtonWrapper, Div } from './styles';

interface IProps {
  children: ReactNode
}

export const DevelotterLayout = ({children}: IProps) => {
  return (
    <>
      <Div>
        {children}
        <ButtonWrapper>
          <DevitButton />
        </ButtonWrapper>
        <Navbar />
      </Div>
    </>
  );
};
