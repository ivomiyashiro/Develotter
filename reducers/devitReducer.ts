import { IDevit } from '../interfaces';
import { ActionType } from 'types';

export const devitReducer = (state: IDevit[] = [], action: ActionType) => {
  switch (action.type) {
  case 'LOAD DEVITS':
    return [
      ...action.payload,
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

  case 'LOAD FAVS':
    return state.map(devit => {
      if (devit.id === action.payload.id) {
        return {
          ...devit,
          favs: action.payload.favs
        };
      }
      return devit;
    });

  case 'UNFAV DEVIT':
    return state.map(devit => {
      if (devit.id === action.payload.devit_id) {
        const filteredFavs = devit.favs.filter(fav => {
          if (fav.uid !== action.payload.uid) {
            return fav;
          }
        });
        return {
          ...devit,
          favs: filteredFavs
        };
      }
      return devit;
    });
  
  case 'FAV DEVIT':
    return state.map(devit => {
      if (devit.id === action.payload.devit_id) {
        return {
          ...devit,
          favs: [
            ...devit.favs,
            action.payload.fav
          ]
        };
      }
      return devit;
    });

  case 'LOAD COMMENTS':
    return state.map(devit => {
      if (devit.id === action.payload.devit_id) {
        return {
          ...devit,
          comments: [
            ...action.payload.comments
          ]
        };
      };
      return devit;
    });

  case 'CREATE COMMENT':
    return state.map(devit => {
      if (devit.id === action.payload.devit_id) {
        return {
          ...devit,
          comments: [
            ...devit.comments,
            action.payload.comment
          ]
        };
      };
      return devit;
    });
  
  case 'DELETE COMMENT':
    return state.map(devit => {
      if (devit.id === action.payload.devit_id) {
        return {
          ...devit,
          comments: devit.comments.filter(comment => {
            if (comment.id !== action.payload.commentId) {
              return comment;
            }
          })
        };
      }
      return devit;
    });

  case 'LOAD REVITS':
    return state.map(devit => {
      if (devit.id === action.payload.id) {
        return {
          ...devit,
          revits: action.payload.revits
        };
      }
      return devit;
    });

  case 'CREATE REVIT':
    return state.map(devit => {
      if (devit.id === action.payload.id) {
        return {
          ...devit,
          revits: [
            ...devit.revits,
            action.payload.revit
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
            if (revit.id !== action.payload.revit_id) {
              return revit;
            }
          })
        };
      }
      return devit;
    });

  case 'LOAD QUOTE REVITS':
    return state.map(devit => {
      if (devit.id === action.payload.id) {
        return {
          ...devit,
          quote_revits: action.payload.quote_revits
        };
      }
      return devit;
    });

    
  case 'CREATE QUOTE REVIT':
    return state.map(devit => {
      if (devit.id === action.payload.id) {
        return {
          ...devit,
          quote_revits: [
            ...devit.quote_revits,
            action.payload.quote_revit
          ]
        };
      }
      return devit;
    });

  case 'DELETE QUOTE REVIT':
    return state.map(devit => {
      if (devit.id === action.payload.id) {
        return {
          ...devit,
          quote_revits: devit.quote_revits.filter(quote_revit => {
            if (quote_revit.id !== action.payload.quote_revit_id) {
              return quote_revit;
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
