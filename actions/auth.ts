import { Dispatch } from 'react';
import { userSignin, userSignup } from 'services/auth';

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
