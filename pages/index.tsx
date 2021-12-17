import type { NextPage } from 'next';
import Head from 'next/head';

import { LogSection } from 'components/Pages/LogSection'; 

import { LandingWrapper, LoginWrapper, Video, VideoWrapper } from './styles';

const Landing: NextPage = () => {
  return (
    <>
      <Head>
        <title>Develotter. It’s what’s happening / Develotter</title>
      </Head>

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

    </>
  );
};

export default Landing;
