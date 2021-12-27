import { Dispatch } from 'react';


export const handleOpenCreateDevitForm = (dispatch: Dispatch<any>) => {
  dispatch({
    type: 'OPEN CREATE DEVIT FORM',
  });
};

export const handleCloseCreateDevitForm = (dispatch: Dispatch<any>) => {
  dispatch({
    type: 'CLOSE CREATE DEVIT FORM',
  });
};
