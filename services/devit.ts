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
