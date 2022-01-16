import { ReactNode, useReducer } from 'react';
import { devitReducer } from 'reducers/devitReducer';
import { uiReducer } from 'reducers/uiReducer';
import { socialReducer } from 'reducers/socialReducer';
import { userReducer } from '../reducers/userReducer';
import { AppContext, DEVIT_INIT_STATE, SOCIAL_INIT_STATE, UI_INIT_STATE, USER_INIT_STATE } from '../context/AppContext';

type IProps = {
  children: ReactNode
}

export const AppProvider = ({ children }: IProps) => {

  const [userState, userDispatch] = useReducer(userReducer, USER_INIT_STATE);
  const [devitState, devitDispatch] = useReducer(devitReducer, DEVIT_INIT_STATE);
  const [uiState, uiDispatch] = useReducer(uiReducer, UI_INIT_STATE);
  const [socialState, socialDispatch] = useReducer(socialReducer, SOCIAL_INIT_STATE);
  
  return (
    <AppContext.Provider value={{
      userState,
      userDispatch,
      socialState,
      socialDispatch,
      devitState,
      devitDispatch,
      uiState,
      uiDispatch
    }}>
      {children}
    </AppContext.Provider>
  );
};
