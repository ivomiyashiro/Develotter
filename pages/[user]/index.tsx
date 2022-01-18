import { useContext, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { AppContext } from 'context/AppContext';
import { getUserByUsername, getUserDevits } from 'services/user';
import { IDevit, IUser } from 'interfaces';

import { PrivateRoute } from 'components/PrivateRoute';
import { DevelotterLayout } from 'components/DevelotterLayout';
import { AsideLeftMenu } from 'components/AsideMenuLeft';
import { AsideRightMenu } from 'components/AsideMenuRight';
import { DevProfile } from 'components/DevProfile';
import { Modal } from 'components/Modal';
import { CreateDevitForm } from 'components/Forms/CreateDevitForm';

interface IProps {
  user: IUser
  devits: IDevit[]
}

const UserPage = ({ user, devits }: IProps) => {

  const { uiState, userInteractionsDispatch } = useContext(AppContext);

  useEffect(() => {
    userInteractionsDispatch({
      type: 'LOAD USER DEVITS',
      payload: devits
    });
  },[devits, userInteractionsDispatch]);

  return (
    <>
      <Head>
        <title>{user.name} (@{user.username}) / Develotter</title>
      </Head>

      <PrivateRoute>
        <DevelotterLayout>
          <AsideLeftMenu />
          <DevProfile user={user} />
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
    </>
  );
};

export default UserPage;

export const getServerSideProps: GetServerSideProps = async (params) => {

  const devInfo = await getUserByUsername(params.query.user as string);
  const devDevits = await getUserDevits(params.query.user as string);

  return {
    props: {
      user: devInfo.user,
      devits: devDevits.devits
    }
  };
};

