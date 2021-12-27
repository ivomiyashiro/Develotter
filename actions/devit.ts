import { Dispatch } from 'react';
import { postDevit } from 'services/devit';

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
