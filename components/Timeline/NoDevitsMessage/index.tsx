import { ButtonPrimary } from 'components/Buttons/ButtonPrimary/ButtonPrimary';
import { theme } from 'styles/theme';
import { Div, Footer, H1, P } from './styles';

export const NoDevitsMessage = () => {
  return (
    <Div>
      <H1>Welcome to Develotter!</H1>
      <P>This is the best place to see what’s happening in your world. Find some people and topics to follow now.</P>
      <Footer>
        <ButtonPrimary
          color={theme.hack}
          textColor={theme.blue}
          type="link"
          href="/home"
        >
          Let&apos;s go!
        </ButtonPrimary>
      </Footer>
    </Div>
  );
};
