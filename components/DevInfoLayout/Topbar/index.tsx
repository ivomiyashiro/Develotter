import { useRouter } from 'next/router';

import { IUser } from 'interfaces';

import ArrowLeft from 'components/Icons/ArrowLeft';
import { theme } from 'styles/theme';
import { Header, Section, Button, H2, P } from './styles';

interface IProps {
  devitsLength: number
  user: IUser
}

export const Topbar = ({devitsLength, user}: IProps) => {

  const router = useRouter();

  return (
    <>
      <Header>
        <Section>
          <Button onClick={() => router.push('/home')}>
            <ArrowLeft 
              width="20px"
              height="20px"
              color={theme.white}
            />
          </Button>
          <section>
            <H2>{user.name}</H2>
            <P>{devitsLength} Devits</P>
          </section>
        </Section>
      </Header>
    </>
  );
};

