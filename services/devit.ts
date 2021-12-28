import { fetchWithoutToken } from 'helpers/fetchWithoutToken';
import { fetchWithToken } from 'helpers/fetchWithToken';

interface ICreateDevit {
  content: string,
  img: string
}

export const postDevit = async (data: ICreateDevit) => {
  const { content, img } = data;

  const resp = await fetchWithToken('devit', {
    content,
    img
  }, 'POST');

  return await resp.json();
};

export const getDevits = async () => {
  const resp = await fetchWithToken('devit');
  return await resp.json();
};

export const postDevitFav = async (id: string) => {
  const resp = await fetchWithToken(`devit/${id}/fav`, 'POST');
  return await resp.json();
};

export const getDevitFavs = async (id: string) => {
  const resp = await fetchWithoutToken(`devit/${id}/favs`);
  return await resp.json();
};
