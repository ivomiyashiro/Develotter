import Link from 'next/link';

import { Buttons } from './Buttons';

import Logo from 'components/Icons/Logo';
import { theme } from 'styles/theme';
import { Hightlight } from 'styles/commun';
import { Footer, Header, SubTitle, Text, Title } from './styles';

export const HeaderWrapper = () => {
  return (
    <section>
      <Header>
        <Link href="/">
          <a>
            <Logo
              width='52px'
              height='52px'
              color={theme.white}
            />
          </a>
        </Link>
        <Title>Happening now</Title>
      </Header>
      <div>
        <SubTitle>Join Develotter today.</SubTitle>
        <Buttons />
      </div>
      <Footer>
        <Text>
          By signing up, you agree to the <Hightlight> Terms of Service </Hightlight> and <Hightlight> Privacy Policy </Hightlight>, including <Hightlight> Cookie Use</Hightlight>.
        </Text>
      </Footer>
    </section>
  );
};
