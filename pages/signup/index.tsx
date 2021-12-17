import Link from 'next/link';

import { Modal } from 'components/Modal';
import { SignupForm } from 'components/Forms/Signup';

import TimesIcon from 'components/Icons/Times';
import { theme } from 'styles/theme';
import { Anchor, LogoWrapper, SignupFormHeader, SignupFormWrapper } from './styles';
import Logo from 'components/Icons/Logo';

const Signup = () => {
  return (
    <>
      <Modal
        isOpen={true}
      >
        <SignupFormWrapper>
          <SignupFormHeader>
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
          </SignupFormHeader>
          <SignupForm />
        </SignupFormWrapper>
      </Modal>
    </>
  );
};

export default Signup;
