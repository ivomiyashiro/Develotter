import { NextPage } from 'next';
import Head from 'next/head';

import { AsideLeftMenu } from 'components/AsideMenuLeft';
import { DevelotterLayout } from 'components/DevelotterLayout';
import { PrivateRoute } from 'components/PrivateRoute';
import { Timeline } from 'components/Timeline';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home / Develotter</title>
      </Head>

      <PrivateRoute>
        <DevelotterLayout>
          <AsideLeftMenu />
          <Timeline />
        </DevelotterLayout>
      </PrivateRoute>
    </>
  );
};

export default Home;
