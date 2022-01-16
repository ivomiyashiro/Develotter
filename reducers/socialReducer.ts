import { SOCIAL_INIT_STATE } from '../context/AppContext';

type ActionType = 
  | {type: 'GET FOLLOWERS AND FOLLOWINS', payload: {followins: {dev_followings_id: string}[], followers: {dev_followings_id: string}[]}}
  | {type: 'FOLLOW', payload: string}
  | {type: 'UNFOLLOW', payload: string}

export const socialReducer = (state = SOCIAL_INIT_STATE, action: ActionType) => {
  switch (action.type) {
  case 'GET FOLLOWERS AND FOLLOWINS':
    return {
      followins: action.payload.followins,
      followers: action.payload.followers
    };
  
  case 'FOLLOW':
    return {
      ...state,
      followins: [
        ...state.followins,
        action.payload
      ]
    };
  
  case 'UNFOLLOW':
    const newFollowersArr = state.followers.filter((follower: any) => {
      if (follower.dev_following_id !== action.payload) return;
    });
    return {
      ...state,
      followins: newFollowersArr
    };
  
  default:
    return state;
  }
};
