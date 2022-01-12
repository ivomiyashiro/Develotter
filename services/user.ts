import { fetchWithoutToken } from 'helpers/fetchWithoutToken';
import { fetchWithToken } from 'helpers/fetchWithToken';

interface IFirstEdit {
  newProfilePicture: string
  newCoverPicture: string
  username: string
  bio: string
  uid: string
}

export const getUser = async (id: string) => {
  const resp = await fetchWithoutToken(`user/${id}`);
  return await resp.json();
};

export const getUserByUsername = async (username: string) => {
  const resp = await fetchWithoutToken(`user/username/${username}`);
  return await resp.json();
};

export const firstEdit = async (data: IFirstEdit) => {
  const { newProfilePicture, newCoverPicture, username, bio, uid } = data;
  const resp = await fetchWithToken(`user/${uid}`, {
    profilePicture: newProfilePicture,
    coverPicture: newCoverPicture,
    username,
    bio,
    first_edit: true
  }, 'PUT');
  return await resp.json();
};
