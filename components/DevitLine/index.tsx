import { useRouter } from 'next/router';

import { HoverableButton } from 'components/Buttons/HoverableButton';
import { IComment, IDevit, IUser } from 'interfaces';

import { DevitSection } from './DevitSection';

import ArrowLeft from 'components/Icons/ArrowLeft';
import { theme } from 'styles/theme';
import { Div, Header, H1, DevitLineWrapper } from './styles';
import { InteractionsCounters } from './InteractionsCounters';
import { CommentInput } from './CommentInput';

interface IProps {
  user: IUser,
  devit: IDevit,
  comments: IComment[]
}

export const DevitTimeline = ({user, devit, comments}: IProps) => {

  const router = useRouter();

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
          <CommentInput user={user} />
        </DevitLineWrapper>
      </Div>
    </>
  );
};
