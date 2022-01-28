export interface IState {
  value: string; 
  error: string;
  ok: boolean;
}

export interface IProps {
  coverPicture: {
    file: string,
    fileUrl: string,
  }
  handleCoverPicture: any,
  profilePicture: {
    file: string,
    fileUrl: string,
  }
  handleProfilePicture: any,
  name: {
    value: string,
    error: string,
    ok: boolean
  },
  handleName: (value: IState | ((prev: IState) => IState)) => void,
  bio: {
    value: string,
    error: string,
    ok: boolean
  },
  handleBio: (value: IState | ((prev: IState) => IState)) => void,
  location: {
    value: string,
    error: string,
    ok: boolean
  },
  handleLocation: (value: IState | ((prev: IState) => IState)) => void,
  website: {
    value: string,
    error: string,
    ok: boolean
  },
  handleWebsite: (value: IState | ((prev: IState) => IState)) => void,
}
