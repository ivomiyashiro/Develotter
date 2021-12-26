import { fetchWithoutToken } from 'helpers/fetchWithoutToken';
import { fetchWithToken } from 'helpers/fetchWithToken';

interface INewUser {
  name: string
  email: string
  password: string
  birth_date: string
}

interface IUserSignin {
  email: string
  password: string
}

export const userSignup = async (data: INewUser) => {
  const { name, email, password, birth_date } = data;
  const resp = await fetchWithoutToken('auth', {
    name,
    email,
    password,
    birth_date,
  }, 'POST');

  return await resp.json();
};

export const userSignin = async (data: IUserSignin) => {
  const { email, password } = data;
  const resp = await fetchWithoutToken('auth/signin', {
    email,
    password
  }, 'POST');

  return await resp.json();
};

export const userRenew = async () => {
  const resp = await fetchWithToken('auth/renew');

  return await resp.json();
};
