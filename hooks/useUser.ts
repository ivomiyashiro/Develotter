import { useState } from 'react';
import { getUser } from 'services/user';


export const useUser = async (uid: string) => {

  const [user, setUser] = useState(null);

  const resp = await getUser(uid);
  setUser(resp.user);

  return {
    user
  };
};
