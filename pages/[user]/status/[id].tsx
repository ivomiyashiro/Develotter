import { useContext, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { AppContext } from 'context/AppContext';
import { getComment, getDevit } from 'services/devit';
import { IDevit, IUser } from 'interfaces';

import { PrivateRoute } from 'components/PrivateRoute';
import { DevelotterLayout } from 'components/DevelotterLayout';
import { AsideLeftMenu } from 'components/AsideMenuLeft';
import { AsideRightMenu } from 'components/AsideMenuRight';
import { Modal } from 'components/Modal';
import { CreateDevitForm } from 'components/Forms/CreateDevitForm';
import { getUserByUsername } from 'services/user';

interface IProps {
  user: IUser
  devits: IDevit[]
}

const DevitPage = ({ user, devits }: IProps) => {

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
        <title>{user.name} on Develotter: </title>
      </Head>

      <PrivateRoute>
        <DevelotterLayout>
          <AsideLeftMenu />
          <DevitInfo user={user} />
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

export default DevitPage;

export const getServerSideProps: GetServerSideProps = async (params) => {

  const devInfo = await getUserByUsername(params.query.user as string);
  const devitInfo = await getDevit(params.query.id as string);
  const devitComments = await getComment(params.query.id as string);

  return {
    props: {
      user: devInfo.user,
      devit: devitInfo.devit,
      comments: devitComments.comments
    }
  };
};
