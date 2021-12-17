import { ButtonPrimary } from 'components/Buttons/PrimaryButton/ButtonPrimary';
import MessagesIcon from 'components/Icons/Messages';
import { theme } from 'styles/theme';
import { ButtonChild, ButtonsWrapper, ButtonWrapper, IconWrapper } from './styles';

export const Buttons = () => {
  return (
    <ButtonsWrapper>
      <ButtonWrapper>
        <ButtonPrimary
          color={theme.hack}
          textColor={theme.hack}
          style="outline"
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
            <span> Sign in with email </span>
          </ButtonChild>
        </ButtonPrimary>
      </ButtonWrapper>
      <ButtonWrapper>
        <ButtonWrapper>
          <ButtonPrimary
            color={theme.hack}
            textColor={theme.hack}
            style="outline"
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
              <span> Sign up with email </span>
            </ButtonChild>
          </ButtonPrimary>
        </ButtonWrapper>
      </ButtonWrapper>
    </ButtonsWrapper>
  );
};
