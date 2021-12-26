import { createContext, Dispatch } from 'react';
import { IDevit, IUser } from './../interfaces';

interface IContext {
  userState: IUser[] | []
  userDispatch: Dispatch<any>
  // devitState: IDevit[]
  // devitDispatch: Dispatch<any>
  // uiState: {
  //   isCreateDevitFormOpen: boolean,
  // }
  // uiDispatch: Dispatch<any>
}

export const USER_INIT_STATE: IUser[] = [{
  id: '',
  username: '',
  name: '',
  email: '',
  bio: '',
  profilePicture: '/defaultProfileImg.png',
  coverPicture: '',
  birthDate: new Date(),
  followers: [],
  followins: [],
  devits: [],
  revits: [],
  favs: [],
  created_at: new Date(),
}];

// export const DEVIT_INIT_STATE: IDevit[] = [];

// export const UI_INIT_STATE = {
//   isCreateDevitFormOpen: false,
// };

export const AppContext = createContext<IContext>({ 
  userState: [],
  userDispatch: () => null,
  // devitState: DEVIT_INIT_STATE,
  // devitDispatch: () => null,
  // uiState: UI_INIT_STATE,
  // uiDispatch: () => null,
});
