import { useContext } from 'react';
import Link from 'next/link';

import { AppContext } from '../../context/AppContext';

import { AsideLeftMenuItems } from './AsideMenuLeftItems';
import { AsideMenuLeftFooter } from './AsideMenuLeftFooter';
import { CreateDevitForm } from 'components/Forms/CreateDevitForm';
import { Modal } from 'components/Modal';

import Logo from '../Icons/Logo';
import { theme } from 'styles/theme';
import { Aside, Div, Header, A } from './styles';


export const AsideLeftMenu = () => {

  // const {uiState} = useContext(AppContext);
  // const {isCreateDevitFormOpen} = uiState;

  return (
    <>
      <Aside>
        <Div>
          <Header>
            <Link href="/home" passHref>
              <A>
                <Logo
                  width="44px"
                  height="44px"
                  color={theme.white}
                />
              </A>
            </Link>
          </Header>
          <AsideLeftMenuItems />
          <AsideMenuLeftFooter />
        </Div>
        {
          // isCreateDevitFormOpen
          // &&
          <Modal
            isOpen={true}
          >
            <CreateDevitForm />
          </Modal>
        } 
      </Aside>
    </>
  );
};
