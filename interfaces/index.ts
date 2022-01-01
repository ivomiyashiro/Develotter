export interface IAppStore {
  userState: IUser,
  devitState: IDevit
}

export interface IUser {
  id: string
  name: string
  username: string
  email: string
  bio: string
  profile_picture: string
  cover_picture: string
  birth_date: Date
  created_at: Date
}

export interface IDevit {
  id: string
  uid: string
  content: string
  img: string
  favs: IFav[]
  comments: IComment[]
  revits: IRevit[]
  quote_revits: IQuoteRevit[]
  created_at: Date
  updatedAt : Date
}

export interface IDevitFavs {
  uid: string,
}

export interface IComment {
  id: string
  uid: string
  devit_id: string
  content: string
  img: string
  created_at: Date
}

export interface IRevit {
  id: string
  devitId: string
  uid: string
}

export interface IQuoteRevit {
  id: string
  devitId: string
  uid: string
  content: string
  img: string
}

export interface IFav {
  id: string,
  uid: string,
  devit_id: string
}
