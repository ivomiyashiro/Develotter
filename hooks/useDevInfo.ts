import { useEffect, useState } from 'react';
import { getUserByUsername } from 'services/user';

export const useDevInfo = (username: string) => {
  const [devInfo, setDevInfo] = useState(null);

  useEffect(() => {
    getUserByUsername(username)
      .then(resp => console.log(resp))
      .catch(error => console.log(error));
  },[username]);

  return [
    devInfo
  ];
};
