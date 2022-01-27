import { ButtonPrimary } from 'components/Buttons/ButtonPrimary/ButtonPrimary';
import { HoverableButton } from 'components/Buttons/HoverableButton';
import TimesIcon from 'components/Icons/Times';
import { theme } from 'styles/theme';
import { Section, Div, Title, ButtonWrapper } from './styles';

interface IProps {
  setEditProfileFormOpen: any
}

export const TopBar = ({setEditProfileFormOpen}: IProps) => {
  return (
    <>
      <Section>
        <Div>
          <HoverableButton
            icon={TimesIcon}
            width='20px'
            height='20px'
            color={theme.white}
            onClick={() => setEditProfileFormOpen((prev: boolean) => !prev)}
          />
          <Title>
            Edit profile
          </Title>
        </Div>
        <ButtonWrapper>
          <ButtonPrimary
            color={theme.white}
            textColor={theme.blue}
            hover={theme.white + 'B3'}
          >
            Save
          </ButtonPrimary>
        </ButtonWrapper>
      </Section>
    </>
  );
};
