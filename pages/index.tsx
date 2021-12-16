import type { NextPage } from 'next';

import { FooterWrapper } from 'components/Pages/FooterWrapper';
import { HeaderWrapper } from 'components/Pages/HeaderWrapper';

import { LandingWrapper, LoginWrapper, Video, VideoWrapper } from './styles';


const Landing: NextPage = () => {
  return (
    <LandingWrapper>
      <VideoWrapper>
        <Video autoPlay muted loop >
          <source src="/assets/videos/main.mp4" type="video/mp4" />
        </Video>
      </VideoWrapper>
      <LoginWrapper>
        <HeaderWrapper />
        <FooterWrapper />
      </LoginWrapper>
    </LandingWrapper>
  );
};

export default Landing;
