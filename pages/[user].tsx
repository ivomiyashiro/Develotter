import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { getUserByUsername, getUserDevits } from 'services/user';
import { IDevit, IUser } from 'interfaces';

import { PrivateRoute } from 'components/PrivateRoute';
import { DevelotterLayout } from 'components/DevelotterLayout';
import { AsideLeftMenu } from 'components/AsideMenuLeft';
import { AsideRightMenu } from 'components/AsideMenuRight';
import { DevProfile } from 'components/DevProfile';

interface IProps {
  user: IUser
  devits: IDevit[]
}

const UserPage = ({ user, devits }: IProps) => {
  return (
    <>
      <Head>
        <title>{user.name} (@{user.username}) / Develotter</title>
      </Head>

      <PrivateRoute>
        <DevelotterLayout>
          <AsideLeftMenu />
          <DevProfile user={user} devits={devits}/>
          <AsideRightMenu />
        </DevelotterLayout>
      </PrivateRoute>
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

