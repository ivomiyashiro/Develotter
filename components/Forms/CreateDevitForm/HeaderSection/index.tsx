import { useContext } from 'react';

import { handleCloseCreateDevitForm } from 'actions/ui';

import { AppContext } from 'context/AppContext';
import { Spinner } from 'components/Spinner';
import { ButtonPrimary } from 'components/Buttons/ButtonPrimary/ButtonPrimary';
import { HoverableButton } from 'components/Buttons/HoverableButton';

import TimesIcon from 'components/Icons/Times';
import { theme } from 'styles/theme';
import { Div, Header } from './styles';

interface IProps {
  handleOpenModal?: (value: boolean) => void,
  isSubmitButtonDisabled: boolean,
  isLoading: boolean
  buttonChild: string
}

export const FormHeader = ({
  handleOpenModal,
  isSubmitButtonDisabled,
  isLoading,
  buttonChild
}: IProps) => {

  const { uiDispatch } = useContext(AppContext);

  return (
    <>
      <Header>
        <HoverableButton
          icon={TimesIcon}
          width="22px"
          height="22px"
          color={theme.darker_white}
          onClick={
            handleOpenModal !== undefined 
              ? () => handleOpenModal(false)
              : () => handleCloseCreateDevitForm(uiDispatch)
          }
        />
        <Div>
          <ButtonPrimary 
            isDisabled={isSubmitButtonDisabled}
            textColor={theme.blue}
            color={theme.hack}
          >
            {
              isLoading
                ? <Spinner color={theme.blue} size={'16px'} />
                : buttonChild
            }
          </ButtonPrimary>
        </Div>
      </Header>
    </>
  );
};
