import { useContext, useEffect, useState } from 'react';
import { getDevitComments, getFavs } from 'actions/devit';
import { AppContext } from 'context/AppContext';
import { getDevitRevits } from 'actions/devit';

export const useDevitInfo = (id: string) => {

  const { devitDispatch, userState } = useContext(AppContext);
  const [revitsLength, setRevitsLength] = useState(0);

  useEffect(() => {
    getFavs(id, devitDispatch)
      .then(resp => {
        if (resp.length === 0) return;
      })
      .catch(error => console.log(error));

    getDevitComments(id, devitDispatch)
      .then(resp => {
        if (resp.length === 0) return;
      })
      .catch(error => console.log(error));

    getDevitRevits(id, devitDispatch)
      .then(resp => {
        if (resp.length === 0) return;
        setRevitsLength(resp.length);
      });
  }, [userState.id, devitDispatch, id]);

  return { 
    revitsLength
  };
}; 
