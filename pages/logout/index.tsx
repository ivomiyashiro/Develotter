import { useRouter } from 'next/router';
import { useContext } from 'react';
import { NextPage } from 'next';

import { logout } from 'actions/auth';

import Logo from 'components/Icons/Logo';
import { AppContext } from 'context/AppContext';

import { ButtonPrimary } from 'components/Buttons/ButtonPrimary/ButtonPrimary';

import { theme } from 'styles/theme';
import { Div, Wrapper, LogoWrapper, Section, H2, P, ButtonsWrapper, ButtonWrapper } from './styles';

const Logout:NextPage = () => {

  const { userDispatch } = useContext(AppContext);
  const router = useRouter();

  const handleLogOut = () => {
    logout(userDispatch);
    router.push('/');
  };

  return (

    <>
      <Div>
        <Wrapper>
          <LogoWrapper>
            <Logo width="56px" height="56px" color={theme.white} />
          </LogoWrapper>
          <Section>
            <H2>Log out of Develotter?</H2>
            <P>You can always log back in at any time. If you just want to switch accounts, you can do that by adding an existing account.</P>
          </Section>
          <ButtonsWrapper>
            <ButtonWrapper>
              <ButtonPrimary 
                onClick={handleLogOut}
                type="button"
                textColor={theme.blue}
                color={theme.white}
              >
              Log out
              </ButtonPrimary>
            </ButtonWrapper>
            <ButtonWrapper>
              <ButtonPrimary
                type="button"
                onClick={() => {router.back();}}
                outline={true}
                textColor={theme.white}
                color={theme.darker_white}
              >
              Cancel
              </ButtonPrimary>
            </ButtonWrapper>
          </ButtonsWrapper>
        </Wrapper>
      </Div>
    </>
  );
};

export default Logout;
