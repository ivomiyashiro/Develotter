import { useContext } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { AppContext } from 'context/AppContext';

import { AsideLeftMenu } from 'components/AsideMenuLeft';
import { DevelotterLayout } from 'components/DevelotterLayout';
import { PrivateRoute } from 'components/PrivateRoute';
import { Timeline } from 'components/Timeline';
import { AsideRightMenu } from 'components/AsideMenuRight';
import { FirstEditProfileForm } from 'components/Forms/FirstEditProfileForm';
import { Modal } from 'components/Modal';
import { CreateDevitForm } from 'components/Forms/CreateDevitForm';

const Home: NextPage = () => {
  
  const { userState, uiState } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>Home / Develotter</title>
      </Head>

      <PrivateRoute>
        <DevelotterLayout>
          <AsideLeftMenu />
          <Timeline />
          <AsideRightMenu />
        </DevelotterLayout>
      </PrivateRoute>

      {
        uiState.isCreateDevitFormOpen
          &&
          <Modal
            isOpen={uiState.isCreateDevitFormOpen}
          >
            <CreateDevitForm />
          </Modal>
      } 

      {
        !userState.first_edit
        &&
        <Modal
          isOpen={!userState.first_edit}
        >
          <FirstEditProfileForm />
        </Modal>
      }

    </>
  );
};

export default Home;
