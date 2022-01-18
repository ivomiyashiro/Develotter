import { useContext, useState } from 'react';

import { deleteDevit } from 'actions/devit';

import { AppContext } from 'context/AppContext';

import { Spinner } from 'components/Spinner';
import { ButtonPrimary } from 'components/Buttons/ButtonPrimary/ButtonPrimary';
import { theme } from 'styles/theme';
import { Div, Wrapper, Section, H2, P, ButtonsContainer, ButtonWrapper } from './styles';

interface IProps {
  id: string
  handleDeleteModalOpen: (value: boolean) => void
}

export const DeleteDevitToast = ({
  id,
  handleDeleteModalOpen,
}: IProps) => {

  const { devitDispatch, userInteractionsDispatch } = useContext(AppContext);
  const [isLoading, setLoading] = useState(false);

  const handleDeleteDevit = async () => {
    setLoading(true);
    await deleteDevit(id, devitDispatch, userInteractionsDispatch);
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
          <ButtonsContainer>
            <ButtonWrapper>
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
            <ButtonWrapper>
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
