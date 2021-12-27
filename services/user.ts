import { fetchWithoutToken } from 'helpers/fetchWithoutToken';

export const getUser = async (id: string) => {
  const resp = await fetchWithoutToken(`user/${id}`);
  return await resp.json();
};
