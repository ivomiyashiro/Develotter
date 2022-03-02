import { fetchWithoutToken } from 'helpers/fetchWithoutToken';
import { fetchWithToken } from 'helpers/fetchWithToken';

interface IFirstEdit {
  newProfilePicture: string
  newCoverPicture: string
  username: string
  bio: string
  id: string
}

export const getUser = async (id: string) => {
  const resp = await fetchWithoutToken(`user/${id}`);
  return await resp.json();
};

export const getUserByUsername = async (id: string) => {
  const resp = await fetchWithoutToken(`user/username/${id}`);
  return await resp.json();
};

export const firstEdit = async (data: IFirstEdit) => {
  const { newProfilePicture, newCoverPicture, id } = data;
  const resp = await fetchWithToken(`user/${id}`, {
    ...data,
    profile_picture: newProfilePicture,
    cover_picture: newCoverPicture,
    first_edit: true
  }, 'PUT');
  return await resp.json();
};

export const getUserDevits = async (id: string) => {
  const resp = await fetchWithoutToken(`user/${id}/devits`);
  return await resp.json();
};

export const getUserRevits = async (id: string) => {
  const resp = await fetchWithoutToken(`user/${id}/revits`);
  return await resp.json();
};

export const getUserQuoteRevits = async (id: string) => {
  const resp = await fetchWithoutToken(`user/${id}/quote_revits`);
  return await resp.json();
};

export const getUserFavs = async (id: string) => {
  const resp = await fetchWithoutToken(`user/${id}/favs`);
  return await resp.json();
};

export const updateUserProfile = async (data: any) => {
  const resp = await fetchWithoutToken(`user/${data.id}`, data, 'PUT');
  return await resp.json();
};

export const getRandomUsers = async() => {
  const resp = await fetchWithoutToken('user');
  return await resp.json();
};
