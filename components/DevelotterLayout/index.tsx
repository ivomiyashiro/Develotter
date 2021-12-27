import { ReactNode } from 'react';

import { Div } from './styles';

interface IProps {
  children: ReactNode
}

export const DevelotterLayout = ({children}: IProps) => {
  return (
    <>
      <Div>
        {children}
      </Div>
    </>
  );
};
