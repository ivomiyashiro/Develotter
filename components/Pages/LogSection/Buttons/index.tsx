import { ButtonPrimary } from 'components/Buttons/ButtonPrimary/ButtonPrimary';
import MessagesIcon from 'components/Icons/Messages';
import { theme } from 'styles/theme';
import { ButtonChild, ButtonsWrapper, ButtonWrapper, IconWrapper, Span } from './styles';

export const Buttons = () => {
  return (
    <ButtonsWrapper>
      <ButtonWrapper>
        <ButtonPrimary
          color={theme.hack}
          textColor={theme.hack}
          outline={true}
          hover={theme.hack + '1A'}
          type="link"
          href="/signin"
        >
          <ButtonChild>
            <IconWrapper>
              <MessagesIcon
                width='24px'
                height='24px'
                color={theme.hack}
              />
            </IconWrapper>
            <Span> Sign in with email </Span>
          </ButtonChild>
        </ButtonPrimary>
      </ButtonWrapper>
      <ButtonWrapper>
        <ButtonWrapper>
          <ButtonPrimary
            color={theme.hack}
            textColor={theme.hack}
            outline={true}
            hover={theme.hack + '1A'}
            type="link"
            href="/signup"
          >
            <ButtonChild>
              <IconWrapper>
                <MessagesIcon
                  width='24px'
                  height='24px'
                  color={theme.hack}
                />
              </IconWrapper>
              <Span> Sign up with email </Span>
            </ButtonChild>
          </ButtonPrimary>
        </ButtonWrapper>
      </ButtonWrapper>
    </ButtonsWrapper>
  );
};
