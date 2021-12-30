import { Dispatch } from 'react';
import { delDevit, delRevit, getComment, getDevitFavs, getRevits, postComment, postCommentFav, postDevit, postDevitFav, postRevit } from 'services/devit';


interface ICreateDevit {
  content: string,
  img: string
}

interface ICreateComment {
  id: string
  uid: string
  content: string
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

export const createComment = async (
  data: ICreateComment,
  dispatch: Dispatch<any>
) => {
  const {id, content, img} = data;

  try {
    const response: any = await postComment({id, content, img});
    if (!response.ok) return;

    dispatch({
      type: 'CREATE COMMENT',
      payload: {
        devit_id: id,
        comment: response.comment
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const getDevitComments = async (
  id: string,
  dispatch: Dispatch<any>
) => {
  try {
    const response: any = await getComment(id);
    if (!response.ok) return;

    dispatch({
      type: 'LOAD COMMENTS',
      payload: {
        devit_id: id,
        comments: response.comments
      }
    });

    return response.comments;
  } catch (error) {
    console.log(error);
  }
};

export const favComment = async (
  data: {devit_id: string, comment_id: string},
) => {

  const { devit_id, comment_id } = data;

  try {
    const response: any = await postCommentFav(devit_id, comment_id);
    if (!response.ok) return;
  } catch (error) {
    console.log(error);
  }
};

export const unFavComment = async (
  data: {devit_id: string, comment_id: string},
) => {

  const { devit_id, comment_id } = data;

  try {
    const response: any = await postCommentFav(devit_id, comment_id);
    if (!response.ok) return;
  }catch(error) {
    console.log(error);
  }
};

export const getDevitRevits = async (
  id: string,
  dispatch: Dispatch<any>
) => {
  try {
    const response: any = await getRevits(id);
    if (!response.ok) return;

    dispatch({
      type: 'LOAD REVITS',
      payload: {
        id,
        revits: response.revits
      }
    });

    return response.revits;
  } catch (error) {
    console.log(error);
  }
};

export const createRevit = async (
  id: string,
  dispatch: Dispatch<any>
) => {
  try {
    const response: any = await postRevit(id, {content: '', img: ''});
    if (!response.ok) return;

    dispatch({
      type: 'CREATE REVIT',
      payload: {
        id,
        revit: response.revit
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteRevit = async (
  data: {id: string, revit_id: string},
  dispatch: Dispatch<any>
) => {
  try {
    const { id, revit_id } = data;

    const response: any = await delRevit(id, revit_id);
    if (!response.ok) return;

    dispatch({
      type: 'DELETE REVIT',
      payload: {
        id,
        revit_id,
      }
    });
  } catch (error) {
    console.log(error);
  }
};
