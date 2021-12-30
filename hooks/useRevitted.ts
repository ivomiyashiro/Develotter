import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

export const useRevitted = (devitId: string) => {
  const { devitState, userState } = useContext(AppContext);
  const [revitInfo, setRevitInfo] = useState({
    revit_id: '',
    isRevitted: false,
  });

  useEffect(() => {
    for(let i = 0; i < devitState.length; i++) {
      for (let j = 0; j < devitState[i].revits.length; j++) {
        if (devitState[i].revits[j].uid === userState.id) {
          setRevitInfo({
            revit_id: devitState[i].revits[j].id,
            isRevitted: true
          });
        }
      }
    }
  }, [devitId, devitState, userState]);
  
  return {
    revitInfo,
  };
};
