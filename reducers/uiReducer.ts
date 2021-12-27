import { UI_INIT_STATE } from '../context/AppContext';

type ActionType = 
  | {type: 'OPEN CREATE DEVIT FORM'}
  | {type: 'CLOSE CREATE DEVIT FORM'}

export const uiReducer = (state = UI_INIT_STATE, action: ActionType) => {
  switch (action.type) {
  case 'OPEN CREATE DEVIT FORM':
    return {
      ...state,
      isCreateDevitFormOpen: true
    };
  
  case 'CLOSE CREATE DEVIT FORM':
    return {
      ...state,
      isCreateDevitFormOpen: false
    };
  
  default:
    return state;
  }
};
