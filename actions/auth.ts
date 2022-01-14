import { fetchWithoutToken } from 'helpers/fetchWithoutToken';
import { fileUpload } from 'helpers/fileUpload';
import { Dispatch } from 'react';
import { userSignin, userSignup } from 'services/auth';
import { firstEdit } from 'services/user';

interface ISignin {
  email: string
  password: string
}

interface ISignup {
  name: string
  email: string
  password: string
  birth_date: string
}

export const signup = async (
  data: ISignup,
  handleFormError: any,
  dispatch: Dispatch<any>
) => {
  const response: any = await userSignup(data);

  if (!response.ok) {
    handleFormError({
      isOpen: true,
      msg: response.msg
    });

    return setTimeout(() => {
      handleFormError({
        isOpen: false,
        msg: response.msg
      });
    }, 4000);
  }

  localStorage.setItem('token', response.token);

  dispatch({
    type: 'SIGN IN',
    payload: response.user
  });
};

export const signin = async (
  data: ISignin,
  handleFormError: any,
  dispatch: Dispatch<any>
) => {
  const response: any = await userSignin(data);

  if (!response.ok) {
    handleFormError({
      isOpen: true,
      msg: response.msg
    });

    return setTimeout(() => {
      handleFormError({
        isOpen: false,
        msg: response.msg
      });
    }, 4000);
  }

  localStorage.setItem('token', response.token);

  dispatch({
    type: 'SIGN IN',
    payload: response.user
  });
};

export const logout = (dispatch: Dispatch<any>) => {
  window.localStorage.removeItem('token');
  dispatch({
    type: 'LOG OUT',
  });
};

export const firstEditProfile = async(
  data: any,
  dispatch: Dispatch<any>,
) => {

  const {
    profilePicture,
    coverPicture,
  } = data;

  try {
    let newProfilePicture = '';
    !!profilePicture.file
      ? newProfilePicture = await fileUpload(profilePicture.file)
      : newProfilePicture = 'https://res.cloudinary.com/dzvweeche/image/upload/v1638828344/profileImage_oilntm.png';

    let newCoverPicture = '';
    !!coverPicture.file
      ? newCoverPicture = await fileUpload(coverPicture.file)
      : newCoverPicture = '';
    
    const newData = {
      ...data,
      newProfilePicture,
      newCoverPicture
    };

    const body = await firstEdit(newData);

    dispatch({
      type: 'FIRST EDIT PROFILE',
      payload: body.user
    });
  } catch (error) {
    console.log(error);
  }
};
