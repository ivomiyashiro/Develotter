import { USER_INIT_STATE } from '../context/AppContext';
import { IUser } from './../interfaces/index';

export type ActionType = 
  | {type: 'SIGN IN', payload: IUser}
  | {type: 'SIGN OUT'}

export const userReducer = (state = USER_INIT_STATE, action: any) => {
  switch (action.type) {
  case 'SIGN IN':
    return {
      ...state,
      ...action.payload
    };

  case 'SIGN OUT':
    return USER_INIT_STATE;

  default:
    return state;
  }
};
