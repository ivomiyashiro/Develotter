import { ReactNode, useState } from 'react';

import { IUser } from 'interfaces';
import { Topbar } from './Topbar';
import { PicturesSection } from './PicturesSection';
import { UserInfoSection } from './UserInfoSection';
import { Modal } from 'components/Modal';
import { EditProfileForm } from './EditProfileForm';
import { NavSection } from './NavSection';

import { Div, Section } from './styles';

interface IProps {
  children: ReactNode
  user: IUser
  devitsLength: number
}

export const DevProfileLayout = ({user, devitsLength, children}: IProps) => {

  const [isEditProfileFormOpen, setEditProfileFormOpen] = useState(false); 

  return (
    <>
      <Div>
        <Topbar devitsLength={devitsLength} user={user} />
        <Section>          
          <PicturesSection user={user} />
          <UserInfoSection user={user} setEditProfileFormOpen={setEditProfileFormOpen}/>
          <NavSection user={user} />
        </Section>
        <section>
          {children}
        </section>
        {
          isEditProfileFormOpen
          &&
          <Modal isOpen={isEditProfileFormOpen} handleOpenModal={setEditProfileFormOpen} >
            <EditProfileForm setEditProfileFormOpen={setEditProfileFormOpen} />
          </Modal>
        }
      </Div>
    </>
  );
};
