import type { NextPage } from 'next';
import Head from 'next/head';

import { LogSection } from 'components/Pages/LogSection'; 
import { PublicRoute } from 'components/PublicRoute';

import { LandingWrapper, LoginWrapper, Video, VideoWrapper } from './styles';

const Landing: NextPage = () => {
  return (
    <>
      <Head>
        <title>Develotter. It’s what’s happening / Develotter</title>
      </Head>

      <PublicRoute>
        <LandingWrapper>
          <VideoWrapper>
            <Video autoPlay muted loop >
              <source src="/assets/videos/main.mp4" type="video/mp4" />
            </Video>
          </VideoWrapper>
          <LoginWrapper>
            <LogSection />
          </LoginWrapper>
        </LandingWrapper>
      </PublicRoute>
    </>
  );
};

export default Landing;
