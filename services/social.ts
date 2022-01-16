import { fetchWithToken } from 'helpers/fetchWithToken';

export const getFollowers = async (uid: string) => {
  const resp = await fetchWithToken(`user/${uid}/social`);
  return await resp.json();
};

export const follow = async (uid: string) => {
  const resp = await fetchWithToken(`user/${uid}/social`, {}, 'POST');
  return await resp.json();
};

export const unfollow = async (uid: string) => {
  const resp = await fetchWithToken(`user/${uid}/social`, {}, 'DELETE');
  return await resp.json();
};
