import { ButtonPrimary } from 'components/Buttons/ButtonPrimary/ButtonPrimary';
import { Spinner } from 'components/Spinner';

import Logo from 'components/Icons/Logo';
import { theme } from 'styles/theme';
import{ Div, H1, Section } from './styles';

interface IProps {
  formValues: {
    profilePicture: {
      file: string
      fileUrl: string
    }
    coverPicture:  {
      file: string
      fileUrl: string
    }
    username: string
    bio: string
  }
  isLoading: boolean
}

export const FinalStep = ({isLoading}: IProps) => {
  return (
    <>
      <Div>
        <Logo
          height="68px"
          width="68px"
          color={theme.white}
        />
        <H1>Your profile is updated</H1>
        <Section>
          <ButtonPrimary
            textColor={theme.blue}
            color={theme.white}
          >
            {
              isLoading
                ? <Spinner size="18px" color={theme.blue} /> 
                : 'Confirm'
            }
            
          </ButtonPrimary>
        </Section>
      </Div>
    </>
  );
};
