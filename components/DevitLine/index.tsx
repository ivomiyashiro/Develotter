import { useRouter } from 'next/router';

import { HoverableButton } from 'components/Buttons/HoverableButton';
import { IComment, IDevit, IUser } from 'interfaces';

import { DevitSection } from './DevitSection';

import ArrowLeft from 'components/Icons/ArrowLeft';
import { theme } from 'styles/theme';
import { Header, H1, DevitLineWrapper } from './styles';

interface IProps {
  user: IUser,
  devit: IDevit,
  comments: IComment[]
}

export const DevitLine = ({user, devit, comments}: IProps) => {

  const router = useRouter();

  return (
    <>
      <DevitLineWrapper>
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
        <DevitSection user={user} devit={devit} />
      </DevitLineWrapper>
    </>
  );
};
