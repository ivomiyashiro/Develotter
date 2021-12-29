import { useContext, useEffect, useState } from 'react';
import { getFavs } from 'actions/devit';
import { AppContext } from 'context/AppContext';

export const useDevitInfo = (id: string) => {

  const { devitDispatch, userState } = useContext(AppContext);
  const [isFaved, setFaved] = useState(false);
  const [favLength, setFavLength] = useState(0);
  const [comments, setComments] = useState([]);
  const [revits, setRevits] = useState([]);

  useEffect(() => {
    getFavs(id, devitDispatch)
      .then(resp => {
        if (resp.length === 0) return;
        if (resp[0].uid === userState.id) {
          setFaved(true);
          setFavLength(resp.length);
        };
      })
      .catch(error => console.log(error));
    // getDevitComments(id);
    // getDevitRevits(id);
  }, [userState.id, devitDispatch, id]);

  return { 
    isFaved,
    favLength,
    // comments,
    // revits
  };
}; 