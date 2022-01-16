import { Dispatch } from 'react';
import { follow, unfollow } from 'services/social';


export const followDev = async (
  uid: string,
  dispatch: Dispatch<any>
) => {
  try {
    const body = await follow(uid);
    
    if (!body.ok) return;

    dispatch({
      type: 'FOLLOW',
      payload: body.followed
    });
  } catch (error) {
    console.log(error);
  }
};

export const unfollowDev = async (
  uid: string,
  dispatch: Dispatch<any>
) => {
  try {
    const body = await unfollow(uid);

    if (!body.ok) return;

    dispatch({
      type: 'UNFOLLOW',
      payload: body.followed
    });
  } catch (error) {
    console.log(error);
  }
};
