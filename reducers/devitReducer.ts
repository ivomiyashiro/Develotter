import { IComment, IDevit, IRevit } from '../interfaces';

export type ActionType = 
  | {type: 'LOAD DEVITS', payload: IDevit[]}
  | {type: 'CREATE DEVIT', payload: IDevit} 
  | {type: 'DELETE DEVIT', payload: string} 
  | {type: 'UNFAV DEVIT', payload: {devitId: string, uid: string}}
  | {type: 'FAV DEVIT', payload: {devitId: string, uid: string}}
  | {type: 'CREATE COMMENT', payload: IDevit}
  | {type: 'FAV COMMENT', payload: {devitId: string, commentId: string, uid: string}}
  | {type: 'UNFAV COMMENT', payload: {devitId: string, commentId: string, uid: string}}
  | {type: 'CREATE REVIT', payload: IRevit}
  | {type: 'DELETE REVIT', payload: {id: string, revitId: string}};

export const devitReducer = (state: IDevit[] = [], action: ActionType) => {
  switch (action.type) {
  case 'LOAD DEVITS':
    return [
      ...action.payload
    ];

  case 'CREATE DEVIT':
    return [
      action.payload,
      ...state
    ];

  case 'DELETE DEVIT':
    return state.filter(devit => {
      if(devit.id !== action.payload){
        return devit;
      }}
    );

  case 'UNFAV DEVIT':
    const devitsFilteredArr: IDevit[] = state.filter(devit => {
      if (devit.id === action.payload.devitId) return devit;
    });
    const newUnFavedArr = devitsFilteredArr[0].favs.filter(fav => {
      if (fav !== action.payload.uid) return fav;
    });
    return state.map(devit => {
      if (devit.id === action.payload.devitId) {
        return {
          ...devit,
          favs: newUnFavedArr
        };
      }
      return devit;
    });
  
  case 'FAV DEVIT':
    return state.map(devit => {
      if (devit.id === action.payload.devitId) {
        return {
          ...devit,
          favs: [
            ...devit.favs,
            action.payload.uid
          ]
        };
      }
      return devit;
    });

  case 'CREATE COMMENT':
    return state.map(devit => {
      if (devit.id === action.payload.id) {
        return action.payload;
      };
      return devit;
    });

  case 'FAV COMMENT':
    return state.map(devit => {
      if (devit.id === action.payload.devitId) {
        const newComment = devit.comments.map(comment => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              favs: [
                action.payload.uid,
                ...comment.favs
              ]
            };
          }
          return comment;
        });
        return {
          ...devit,
          comments: newComment
        };
      }
      return devit;
    });

  case 'UNFAV COMMENT': 
    return state.map(devit => {
      if (devit.id === action.payload.devitId) {
        const newComment = devit.comments.map((comment: IComment) => {
          if (comment.id === action.payload.commentId) {
            const commentFavsArr = comment.favs.filter(fav => {
              if (fav !== action.payload.uid) return fav;
            });
            return {
              ...comment,
              favs: commentFavsArr
            };
          }
          return comment;
        });
        return {
          ...devit,
          comments: newComment
        };
      }
      return devit;
    });

  case 'CREATE REVIT':
    return state.map(devit => {
      if (devit.id === action.payload.devitId) {
        return {
          ...devit,
          revits: [
            ...devit.revits,
            action.payload
          ]
        };
      }
      return devit;
    });

  case 'DELETE REVIT':
    return state.map(devit => {
      if (devit.id === action.payload.id) {
        return {
          ...devit,
          revits: devit.revits.filter(revit => {
            if (revit.id !== action.payload.revitId) {
              return revit;
            }
          })
        };
      }
      return devit;
    });

  default:
    return state;
  }
};
