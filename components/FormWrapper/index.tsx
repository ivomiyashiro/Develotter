import { ReactNode } from 'react';
import Link from 'next/link';

import TimesIcon from 'components/Icons/Times';
import Logo from 'components/Icons/Logo';
import { theme } from 'styles/theme';
import { Wrapper, Header, Anchor, LogoWrapper } from './styles';

interface IProps {
  children: ReactNode
}

export const FormWrapper = ({children}: IProps) => {
  return (
    <Wrapper>
      <Header>
        <Link href="/" passHref>
          <Anchor>
            <TimesIcon
              heitgh="24px"
              width="24px"
              color={theme.white}
            />
          </Anchor>
        </Link>
        <Link href="/" passHref>
          <LogoWrapper>
            <Logo
              height="48px"
              width="48px"
              color={theme.white}
            />
          </LogoWrapper>
        </Link>
      </Header>
      {children}
    </Wrapper>
  );
};
