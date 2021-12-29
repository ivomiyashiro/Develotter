import { useContext, useEffect, useState } from 'react';

import { IComment, IDevit } from 'interfaces';

import { AppContext } from 'context/AppContext';
import { DevitCard } from './DevitCard';
import { CommentCard } from './CommentCard';

interface IProps {
  devit: IDevit
}

export const Devit = ({ devit }: IProps) => {

  const { id } = devit;
  const {userState, devitState} = useContext(AppContext);
  const [userComments, setUserComments] = useState<any>([]);

  useEffect(() => {
    const devit = devitState.filter(devit => {
      if (devit.id === id) return devit;
    });
    if (!!devit[0].comments) {
      const comments = devit[0].comments.filter(comment => {
        if (comment.uid === userState.id) return comment;
      });
      setUserComments(comments);
    }
  }, [userState, devitState, id]);

  return (
    <>
      <div>
        <DevitCard devit={devit} userComments={userComments} />
        {
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
        }
      </div>
    </>
  );
};
