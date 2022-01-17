import { fetchWithoutToken } from 'helpers/fetchWithoutToken';
import { fetchWithToken } from 'helpers/fetchWithToken';

export const getFollowers = async (uid: string) => {
  const resp = await fetchWithoutToken(`user/${uid}/followers`);
  return await resp.json();
};

export const follow = async (uid: string) => {
  const resp = await fetchWithToken(`user/${uid}/followers`, {}, 'POST');
  return await resp.json();
};

export const unfollow = async (uid: string) => {
  const resp = await fetchWithToken(`user/${uid}/followers`, {}, 'DELETE');
  return await resp.json();
};
