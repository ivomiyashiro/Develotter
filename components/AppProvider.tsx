import { ReactNode, useReducer } from 'react';
import { AppContext, USER_INIT_STATE } from '../context/AppContext';
import { userReducer } from '../reducers/userReducer';

type IProps = {
  children: ReactNode
}

export const AppProvider = ({ children }: IProps) => {

  const [userState, userDispatch] = useReducer(userReducer, []);
  // const [devitState, devitDispatch] = useReducer(devitReducer, DEVIT_INIT_STATE);
  // const [uiState, uiDispatch] = useReducer(uiReducer, UI_INIT_STATE);
  
  return (
    <AppContext.Provider value={{
      userState,
      userDispatch,
      // devitState,
      // devitDispatch,
      // uiState,
      // uiDispatch
    }}>
      {children}
    </AppContext.Provider>
  );
};
