import { USER_INTERACTIONS_INIT_STATE } from 'context/AppContext';
import { IDevit, IRevit, IFav, IQuoteRevit } from 'interfaces';

type ActionType = 
  | {type: 'LOAD USER DEVITS', payload: IDevit[]}
  | {type: 'CREATE DEVIT', payload: IDevit}
  | {type: 'DELETE DEVIT', payload: string}
  | {type: 'LOAD USER REVITS', payload: IRevit[]}
  | {type: 'LOAD USER FAVS', payload: IFav[]}
  | {type: 'LOAD USER QUOTE REVITS', payload: IQuoteRevit[]}

export const userInteractionsReducer = (state = USER_INTERACTIONS_INIT_STATE, action: ActionType) => {
  switch (action.type) {
  case 'LOAD USER DEVITS':
    return {
      ...state,
      devits: action.payload
    };
  
  case 'CREATE DEVIT':
    return {
      ...state,
      devits: [
        action.payload,
        ...state.devits
      ]
    };
  
  case 'DELETE DEVIT':
    return {
      ...state,
      devits: state.devits.filter((devit: IDevit) => {
        if(devit.id !== action.payload){
          return devit;
        }
      })
    };
  
  case 'LOAD USER REVITS':
    return {
      ...state,
      revits: action.payload
    };
  
  case 'DELETE REVIT':
    return {
      ...state,
      revits: state.revits.map(devit => {
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
      })
    };
  
  case 'LOAD USER FAVS': 
    return {
      ...state,
      favs: action.payload
    };
  
  case 'LOAD USER QUOTE REVITS':
    return {
      ...state,
      quote_revits: action.payload
    };

  default:
    return state;
  }
};
