import { useContext } from 'react';

import { IUser } from 'interfaces';

import { AppContext } from 'context/AppContext';

import DeleteIcon from 'components/Icons/Delete';
import UnFollowIcon from 'components/Icons/Unfollow';
import TimesIcon from 'components/Icons/Times';
import { theme } from 'styles/theme';
import { Div, Ul, Li, Span } from './styles';
import { unfollowDev } from 'actions/social';

interface IProps {
  devitUser: IUser
  handleMenuOpen: (value: boolean | ((prev: boolean) => boolean)) => void
  handleDeleteModalOpen: (value: boolean) => void
}

export const ActionMenuDesktop = ({
  devitUser,
  handleMenuOpen,
  handleDeleteModalOpen
}: IProps) => {

  const { userState, socialDispatch } = useContext(AppContext);

  const handleUnfollow = () => {
    unfollowDev(devitUser.id, socialDispatch);
    handleMenuOpen(false);
  };

  return (
    <>
      <Div>
        <Ul>
          {
            devitUser.id === userState.id
              ? (
                <Li onClick={() => {handleMenuOpen(false); handleDeleteModalOpen(true);}}>
                  <DeleteIcon
                    width="22px"
                    height="22px"
                    color={theme.white}
                  />
                  <Span>Delete</Span>
                </Li>
              )
              : (
                <Li onClick={handleUnfollow}>
                  <UnFollowIcon 
                    width="22px"
                    height="22px"
                    color={theme.white}
                  />
                  <Span>Unfollow @{devitUser.username}</Span>
                </Li>
              )
          }
          <Li onClick={() => handleMenuOpen(false)}>
            <TimesIcon 
              width="22px"
              height="22px"
              color={theme.white}
            />
            <Span>Cancel</Span>
          </Li>
        </Ul>
      </Div>
    </>
  );
};
