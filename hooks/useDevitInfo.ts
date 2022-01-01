import { useContext, useEffect } from 'react';
import { getDevitComments, getFavs, getDevitRevits, getQuoteRevits } from 'actions/devit';
import { AppContext } from 'context/AppContext';

export const useDevitInfo = (id: string) => {

  const { devitDispatch, userState } = useContext(AppContext);

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
      });

    getQuoteRevits(id, devitDispatch)
      .then(resp => {
        if (resp.length === 0) return;
      });
  }, [userState.id, devitDispatch, id]);

  return {};
}; 
