import { ButtonPrimary } from 'components/Buttons/ButtonPrimary/ButtonPrimary';
import { NextButton } from '../NextButton';

import { theme } from 'styles/theme';
import { FooterComponent } from './styles';

interface IProps {
  stepCompleted: boolean
  handleStep: (value: number | ((prev: number) => number)) => void
}

export const Footer = ({stepCompleted, handleStep}: IProps) => {
  return (
    <>
      <FooterComponent>
        {
          stepCompleted
            ? (
              <ButtonPrimary
                textColor={theme.blue}
                color={theme.white}
                onClick={() => handleStep((prev: number) => (prev + 1))}
                type="button"
              >
                <b>Next</b>
              </ButtonPrimary>
            )
            : <NextButton handleStep={handleStep} />
        }
      </FooterComponent>
    </>
  );
};
