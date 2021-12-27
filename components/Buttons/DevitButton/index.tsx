import { useContext } from 'react';
import { handleOpenCreateDevitForm } from 'actions/ui';

import { AppContext } from 'context/AppContext';

import DevitIcon from 'components/Icons/Devit';
import { theme } from 'styles/theme';
import { Div } from './styles';

export const DevitButton = () => {

  const { uiDispatch } = useContext(AppContext);

  return (
    <>      
      <Div onClick={() => handleOpenCreateDevitForm(uiDispatch)}>
        <DevitIcon 
          height="24px"
          width="24px"
          color={theme.blue}
          fill={theme.blue}
        />
      </Div>
    </>
  );
};
