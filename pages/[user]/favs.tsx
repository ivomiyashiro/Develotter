import { useContext, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { IUser } from 'interfaces';
import { AppContext } from 'context/AppContext';
import { getUserByUsername, getUserFavs } from 'services/user';

import { PrivateRoute } from 'components/PrivateRoute';
import { DevelotterLayout } from 'components/DevelotterLayout';
import { AsideLeftMenu } from 'components/AsideMenuLeft';
import { AsideRightMenu } from 'components/AsideMenuRight';
import { DevProfile } from 'components/DevProfile';
import { Modal } from 'components/Modal';
import { CreateDevitForm } from 'components/Forms/CreateDevitForm';

interface IProps {
  user: IUser
  favs: any
}

const UserPage = ({ user, favs }: IProps) => {

  const { uiState, userInteractionsDispatch } = useContext(AppContext);

  useEffect(() => {
    userInteractionsDispatch({
      type: 'LOAD USER FAVS',
      payload: favs
    });
  },[favs, userInteractionsDispatch]);

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
  const devFavs = await getUserFavs(devInfo.user.id);

  return {
    props: {
      user: devInfo.user,
      favs: devFavs.favs
    }
  };
};
