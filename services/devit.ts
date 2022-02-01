import { fetchWithoutToken } from 'helpers/fetchWithoutToken';
import { fetchWithToken } from 'helpers/fetchWithToken';

interface ICreateDevit {
  content: string
  newFile: string
}

interface ICreateComment {
  id: string
  content: string
  img: string
}

export const postDevit = async (data: ICreateDevit) => {
  const { content, newFile } = data;

  const resp = await fetchWithToken('devit', {
    content,
    img: newFile
  }, 'POST');

  return await resp.json();
};

export const getDevit = async (id: string) => {
  const resp = await fetchWithoutToken(`devit/${id}`);
  return await resp.json();
};

export const getDevits = async () => {
  const resp = await fetchWithToken('feed');
  return await resp.json();
};

export const delDevit = async (id: string) => {
  const resp = await fetchWithToken(`devit/${id}`, {},'DELETE');
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

export const postComment = async (data: ICreateComment) => {
  const { id, content, img } = data;

  const resp = await fetchWithToken(`devit/${id}/comment`, {
    content,
    img,
  }, 'POST');
  return await resp.json();
};

export const getComment = async (id: string) => {
  const resp = await fetchWithToken(`devit/${id}/comment`);
  return await resp.json();
};

export const getUserComments = async (id: string, uid: string) => {
  const resp = await fetchWithoutToken(`devit/${id}/comment`, {
    uid
  }, 'POST');
  return await resp.json();
};

export const postCommentFav = async (devit_id: string, comment_id: string) => {
  const resp = await fetchWithToken(`devit/${devit_id}/comment/${comment_id}/fav`);
  return await resp.json();
};

export const getCommentFavs = async (devit_id: string, comment_id: string) => {
  const resp = await fetchWithToken(`devit/${devit_id}/comment/${comment_id}/favs`);
  return await resp.json();
};

export const getRevits = async (devit_id: string) => {
  const resp = await fetchWithoutToken(`devit/${devit_id}/revit`);
  return await resp.json();
};

export const postRevit = async (devit_id: string) => {
  const resp = await fetchWithToken(`devit/${devit_id}/revit`, {}, 'POST');
  return await resp.json();
};

export const delRevit = async (devit_id: string, revit_id: string) => {
  const resp = await fetchWithToken(`devit/${devit_id}/revit/${revit_id}`, {}, 'DELETE');
  return await resp.json();
};

export const getQuoteRevit = async (devit_id: string) => {
  const resp = await fetchWithToken(`devit/${devit_id}/quote_revit`);
  return await resp.json();
};

export const postQuoteRevit = async (devit_id: string, data: {content: string, img: string}) => {
  const { content, img } = data;
  const resp = await fetchWithToken(`devit/${devit_id}/quote_revit`, {
    content,
    img
  }, 'POST');
  return await resp.json();
};

export const delQuoteRevit = async (devit_id: string, quote_revit_id: string) => {
  const resp = await fetchWithToken(`devit/${devit_id}/revit/${quote_revit_id}`, {}, 'DELETE');
  return await resp.json();
};
