import { USER_INIT_STATE } from '../context/AppContext';
import { IUser } from './../interfaces/index';

export type ActionType = 
  | {type: 'SIGN IN', payload: IUser}
  | {type: 'LOG OUT'}
  | {type: 'FIRST EDIT PROFILE', payload: IUser}

export const userReducer = (state = USER_INIT_STATE, action: any) => {
  switch (action.type) {
  case 'SIGN IN':
    return {
      ...state,
      ...action.payload
    };

  case 'LOG OUT':
    return USER_INIT_STATE;

  case 'FIRST EDIT PROFILE':
    return {
      ...action.payload,
    };

  default:
    return state;
  }
};
