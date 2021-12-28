import { Dispatch } from 'react';
import { delDevit, getDevitFavs, postDevit, postDevitFav } from 'services/devit';


interface ICreateDevit {
  content: string,
  img: string
}

export const createDevit = async (
  data: ICreateDevit,
  dispatch: Dispatch<any>
) => {
  try {
    const response: any = await postDevit(data);

    if (!response.ok) return;

    dispatch({
      type: 'CREATE DEVIT',
      payload: response.devit
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteDevit = async (
  id: string,
  dispatch: Dispatch<any>
) => {
  try{
    const response: any = await delDevit(id);
    if (!response.ok) return;

    dispatch({
      type: 'DELETE DEVIT',
      payload: id
    });
  } catch(error) {
    console.log(error);
  }
};

export const getFavs = async (
  id: string,
  dispatch: Dispatch<any>
) => {
  try {
    const response: any = await getDevitFavs(id);
    if (!response.ok) return;

    dispatch({
      type: 'LOAD FAVS',
      payload: {
        id,
        favs: response.favs
      }
    });

    return response.favs;
  } catch(error) {
    console.log(error);
  }
};

export const favDevit = async (
  id: string,
  dispatch: Dispatch<any>
) => {
  try {
    const response: any = await postDevitFav(id);
    if (!response.ok) return;

    dispatch({
      type: 'FAV DEVIT',
      payload: {
        devit_id: id,
        fav: response.fav
      }
    });
  }catch(error) {
    console.log(error);
  }
};

export const unFavDevit = async (
  id: string,
  uid: string,
  dispatch: Dispatch<any>
) => {
  try {
    const response: any = await postDevitFav(id);
    if (!response.ok) return;

    dispatch({
      type: 'UNFAV DEVIT',
      payload: {
        devit_id: id,
        uid,
      }
    });
  }catch(error) {
    console.log(error);
  }
};
