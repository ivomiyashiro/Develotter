import { useContext, useEffect, useState } from 'react';

import { IComment, IDevit } from 'interfaces';

import { AppContext } from 'context/AppContext';
import { DevitCard } from './DevitCard';

interface IProps {
  devit: IDevit
}

export const Devit = ({ devit }: IProps) => {

  const { id } = devit;
  const {userState} = useContext(AppContext);
  const [userComments, setUserComments] = useState<any>([]);

  return (
    <>
      <div>
        <DevitCard devit={devit} userComments={userComments} />
        {/* {
          userComments.length !== 0
          &&
          userComments.map((comment: IComment, i:number) => {
            return (
              <CommentCard
                key={comment.id}
                devitId={id}
                comment={comment} 
                isLastComment={userComments.length === (i + 1)} 
              />
            );
          })
        } */}
      </div>
    </>
  );
};
