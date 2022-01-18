import { Dispatch } from 'react';
import { getUserFavs, getUserRevits, getUserQuoteRevits, getUserDevits } from 'services/user';

export const userDevits = async (
  id: string,
  dispatch: Dispatch<any>
) => {
  try {
    const body = await getUserDevits(id);
    if (!body.ok) return;

    dispatch({
      type: 'LOAD USER DEVITS',
      payload: body.devits
    });
  } catch (error) {
    console.log(error);
  }
};

export const userFavs = async (
  id: string,
  dispatch: Dispatch<any>
) => {
  try {
    const body = await getUserFavs(id);
    if (!body.ok) return;

    dispatch({
      type: 'LOAD USER FAVS',
      payload: body.favs
    });
  } catch (error) {
    console.log(error);
  }
};

export const userRevits = async (
  id: string,
  dispatch: Dispatch<any>
) => {
  try {
    const body = await getUserRevits(id);
    if (!body.ok) return;

    dispatch({
      type: 'LOAD USER REVITS',
      payload: body.revits
    });
  } catch (error) {
    console.log(error);
  }
};

export const userQuoteRevits = async (
  id: string,
  dispatch: Dispatch<any>
) => {
  try {
    const body = await getUserQuoteRevits(id);
    if (!body.ok) return;

    dispatch({
      type: 'LOAD USER QUOTE REVITS',
      payload: body.quote_revits
    });
  } catch (error) {
    console.log(error);
  }
};
