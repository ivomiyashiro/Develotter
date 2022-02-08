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
import { useEffect, useState } from 'react';

interface IProps {
  user: IUser,
  devit: IDevit,
  comments: IComment[]
}

export const DevitTimeline = ({ user, devit, comments }: IProps) => {

  const router = useRouter();

  const [commentsState, setCommentsState] = useState<IComment[]>([]);

  useEffect(() => {
    setCommentsState(comments);
  },[comments]);

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
          <CommentInput handleCommentsState={setCommentsState} user={user} devit_id={devit.id}/>
        </DevitLineWrapper>
        <CommentsWrapper>
          {
            commentsState.slice(0).reverse().map((comment: IComment) => {
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
