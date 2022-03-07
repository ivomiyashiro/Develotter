import type { NextPage } from 'next';
import Head from 'next/head';

import { PublicRoute } from 'components/PublicRoute';
import { LandingComponent } from 'components/Landing';

const Landing: NextPage = () => {
  return (
    <>
      <Head>
        <title>Develotter. It’s what’s happening / Develotter</title>
      </Head>

      <PublicRoute>
        <LandingComponent />
      </PublicRoute>
    </>
  );
};

export default Landing;
