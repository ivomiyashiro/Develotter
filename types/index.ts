import { IComment, IDevit, IFav, IQuoteRevit, IRevit } from 'interfaces';

export type ActionType = 
  | {type: 'LOAD DEVITS', payload: IDevit[]}
  | {type: 'CREATE DEVIT', payload: IDevit} 
  | {type: 'DELETE DEVIT', payload: string}
  | {type: 'LOAD FAVS', payload: {id: string, favs: IFav[]}} 
  | {type: 'UNFAV DEVIT', payload: {devit_id: string, uid: string}}
  | {type: 'FAV DEVIT', payload: {devit_id: string, fav: IFav}}
  | {type: 'LOAD COMMENTS', payload: {devit_id: string, comments: IComment[]}}
  | {type: 'CREATE COMMENT', payload: {devit_id: string, comment: IComment}}
  | {type: 'LOAD REVITS', payload: {id: string, revits: IRevit[]}}
  | {type: 'CREATE REVIT', payload: {id: string, revit: IRevit}}
  | {type: 'DELETE REVIT', payload: {id: string, revit_id: string}}
  | {type: 'LOAD QUOTE REVITS', payload: {id: string, quote_revits: IQuoteRevit[]}}
  | {type: 'CREATE QUOTE REVIT', payload: {id: string, quote_revit: IQuoteRevit}}
  | {type: 'DELETE QUOTE REVIT', payload: {id: string, quote_revit_id: string};}
