import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { getUser } from 'services/user';
import { IUser } from 'interfaces';

import { PrivateRoute } from 'components/PrivateRoute';
import { DevelotterLayout } from 'components/DevelotterLayout';
import { AsideLeftMenu } from 'components/AsideMenuLeft';
import { AsideRightMenu } from 'components/AsideMenuRight';
import { DevInfo } from 'components/DevInfo';

interface IProps {
  user: IUser
}

const UserPage = ({ user }: IProps) => {

  return (
    <>
      <Head>
        <title>{user.name} (@{user.username}) / Develotter</title>
      </Head>

      <PrivateRoute>
        <DevelotterLayout>
          <AsideLeftMenu />
          <DevInfo user={user} />
          <AsideRightMenu />
        </DevelotterLayout>
      </PrivateRoute>
    </>
  );
};

export default UserPage;

export const getServerSideProps: GetServerSideProps = async (params) => {

  const devInfo = await getUser(params.query.user as string);

  return {
    props: {
      user: devInfo.user
    }
  };
};

