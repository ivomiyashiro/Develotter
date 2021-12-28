import { useContext } from 'react';
import { IUser } from 'interfaces';

import { AppContext } from 'context/AppContext';
import { Spinner } from 'components/Spinner';
import { ButtonPrimary } from 'components/Buttons/ButtonPrimary/ButtonPrimary';

import UnFollowIcon from 'components/Icons/Unfollow';
import DeleteIcon from 'components/Icons/Delete';
import { theme } from 'styles/theme';
import { Div, Ul, Li, Section, P } from './styles';

interface IProps {
  devitUser: IUser
  isLoading: boolean
  handleOpenModal: (value: boolean) => void
  handleDeleteModalOpen: (value: boolean) => void
}

export const ActionMenuMobile = ({
  devitUser,
  isLoading,
  handleOpenModal,
  handleDeleteModalOpen
}: IProps) => {

  const {userState} = useContext(AppContext);
  const handleUnfollowUser = () => {};

  return (
    <>
      <Div>
        <Ul>
          {
            devitUser.id === userState.id
              ? (
                <Li 
                  onClick={() => handleDeleteModalOpen(true)} 
                  style={{color: theme.red, fontWeight: 'bold'}}
                >
                  <DeleteIcon 
                    width="20px"
                    height="20px"
                    color={theme.red}
                  />
                  <P style={{ marginBottom: '-0.15em'}}>Delete</P>
                </Li>
              )
              : (
                <Li onClick={() => {
                  handleUnfollowUser();
                }}>
                  <UnFollowIcon
                    width="20px"
                    height="20px"
                    color={theme.white}
                  />
                  <P>Unfollow @{devitUser.name}</P>
                </Li>
              )
          }
          <Li>
            <Section>
              <ButtonPrimary
                onClick={() => handleOpenModal(false)}
                outline={true}
                textColor={theme.white}
                color={theme.darker_white}
              >
                {
                  isLoading
                    ? <Spinner color={theme.white} size="32px" />
                    : 'Cancel'
                }
              </ButtonPrimary>
            </Section>
          </Li>
        </Ul>
      </Div>
    </>
  );
};
