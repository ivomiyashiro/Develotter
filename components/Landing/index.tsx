import { LogSection } from 'components/Pages/LogSection'; 

import { LandingWrapper, LoginWrapper, Video, VideoWrapper } from './styles';

export const LandingComponent = () => {
  return (
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
  );
};
