import { useContext } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { AppContext } from 'context/AppContext';
import { getComment, getDevit } from 'services/devit';
import { getUserByUsername } from 'services/user';
import { IComment, IDevit, IUser } from 'interfaces';

import { PrivateRoute } from 'components/PrivateRoute';
import { DevelotterLayout } from 'components/DevelotterLayout';
import { AsideLeftMenu } from 'components/AsideMenuLeft';
import { AsideRightMenu } from 'components/AsideMenuRight';
import { Modal } from 'components/Modal';
import { CreateDevitForm } from 'components/Forms/CreateDevitForm';
import { DevitTimeline } from 'components/DevitLine';

interface IProps {
  user: IUser
  devit: IDevit
  comments: IComment[]
}

const DevitPage = ({ user, devit, comments }: IProps) => {

  const { uiState } = useContext(AppContext);
  
  return (
    <>
      <Head>
        <title>{user.name} on Develotter: </title>
      </Head>

      <PrivateRoute>
        <DevelotterLayout>
          <AsideLeftMenu />
          <DevitTimeline user={user} devit={devit} comments={comments} />
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
