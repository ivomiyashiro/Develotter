import { useContext } from 'react';

import { deleteDevit } from 'actions/devit';

import { AppContext } from 'context/AppContext';

import { Spinner } from 'components/Spinner';
import { ButtonPrimary } from 'components/Buttons/ButtonPrimary/ButtonPrimary';
import { theme } from 'styles/theme';
import { Div, Wrapper, Section, H2, P, ButtonsContainer, ButtonWrapper } from './styles';

interface IProps {
  id: string
  isLoading: boolean
  setLoading: (value: boolean) => void
  handleDeleteModalOpen: (value: boolean) => void
}

export const DeleteDevitToast = ({
  id,
  isLoading,
  setLoading,
  handleDeleteModalOpen,
}: IProps) => {

  const { devitDispatch } = useContext(AppContext);

  const handleDeleteDevit = async () => {
    setLoading(true);
    await deleteDevit(id, devitDispatch);
    setLoading(false);
  };

  return (
    <>
      <Wrapper>
        <Div>
          <Section>
            <H2>Delete Tweet?</H2>
            <P>This can’t be undone and it will be removed from your profile, the timeline of any accounts that follow you, and from Twitter search results.</P>
          </Section>
          <ButtonsContainer className="buttons-container">
            <ButtonWrapper className="button-container">
              <ButtonPrimary
                onClick={handleDeleteDevit}
                type="button"
                textColor={theme.white}
                color={theme.red}
              >
                {
                  isLoading
                    ? <Spinner size="18px" color="white" />
                    : 'Delete'
                }
              </ButtonPrimary>
            </ButtonWrapper>
            <ButtonWrapper className="button-container">
              <ButtonPrimary
                type="button"
                onClick={() => handleDeleteModalOpen(false)}
                outline={true}
                textColor={theme.white}
                color={theme.darker_white}
              >
                Cancel
              </ButtonPrimary>
            </ButtonWrapper>
          </ButtonsContainer>
        </Div>
      </Wrapper>
    </>
  );
};
