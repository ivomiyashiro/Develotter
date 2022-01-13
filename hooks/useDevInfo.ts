import { useEffect, useState } from 'react';
import { getUser } from 'services/user';

export const useDevInfo = (username: string) => {
  const [devInfo, setDevInfo] = useState(null);

  useEffect(() => {
    getUser(username)
      .then(resp => console.log(resp))
      .catch(error => console.log(error));
  },[username]);

  return [
    devInfo
  ];
};
