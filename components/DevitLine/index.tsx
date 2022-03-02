import { useRouter } from 'next/router';

import { HoverableButton } from 'components/Buttons/HoverableButton';
import { IComment, IDevit, IUser } from 'interfaces';

import { DevitSection } from './DevitSection';
import { CommentInput } from './CommentInput';
import { InteractionsCounters } from './InteractionsCounters';

import ArrowLeft from 'components/Icons/ArrowLeft';
import { theme } from 'styles/theme';
import { Div, Header, H1, DevitLineWrapper, CommentsWrapper } from './styles';
import { CommentCard } from 'components/Devit/CommentCard';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from 'context/AppContext';

interface IProps {
  user: IUser,
  devit: IDevit,
}

export const DevitTimeline = ({ user, devit }: IProps) => {

  const devitId = devit.id;
  const router = useRouter();
  const { devitState } = useContext(AppContext);
  const [commentsArr, setCommentsArr] = useState<IComment[]>([]);
  
  useEffect(() => {
    const commentsArr = devitState.filter(devit => {
      if (devit.id === devitId) {
        return devit;
      }
    })[0];
    setCommentsArr(commentsArr?.comments);
  },[devitState, devitId]);

  return (
    <>
      <Div>
        <Header>
          <HoverableButton
            icon={ArrowLeft}
            width='20px'
            height='20px'
            color={theme.white}
            onClick={() => router.back()}
          />
          <H1>Tweet</H1>
        </Header>
        <DevitLineWrapper>
          <DevitSection user={user} devit={devit} />
          <InteractionsCounters user={user} devit={devit} />
          <CommentInput user={user} devit_id={devit.id}/>
        </DevitLineWrapper>
        <CommentsWrapper>
          {
            commentsArr?.slice(0).reverse().map((comment: IComment) => {
              return (
                <CommentCard 
                  key={comment.id} 
                  comment={comment} 
                  devitId={devit.id} 
                  isLastComment={false} 
                  fromDevitTimeline={true}
                />
              );
            })
          }
        </CommentsWrapper>
      </Div>
    </>
  );
};
