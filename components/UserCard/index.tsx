import Image from 'next/image';

import { ButtonPrimary } from 'components/Buttons/ButtonPrimary/ButtonPrimary';

import { theme } from 'styles/theme';
import { ButtonContainer, Div, H3, ImageContainer, P, Span, UserContainer } from './styles';

export const UserCard = () => {
  return (
    <>
      <Div>
        <ImageContainer>
          <Image
            src="/assets/images/yo.jpg"
            alt="yo"
            layout="fill"
          />
        </ImageContainer>
        <UserContainer>
          <H3>Profe Oscar</H3>
          <P>@oscaruhp</P>
          {/* <p>{userState.username}</p> */}
        </UserContainer>
        <ButtonContainer>
          <ButtonPrimary
            color={theme.white}
            textColor={theme.blue}
          >
            <Span>Follow</Span>
          </ButtonPrimary>
        </ButtonContainer>
      </Div>
    </>
  );
};
