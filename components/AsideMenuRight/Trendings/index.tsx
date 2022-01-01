
import { TrendingCard } from 'components/TrendingCard';
import { FooterSection } from '../FooterSection';

import { Div, H1, Header } from './styles';

export const Trendings = () => {

  return (
    <>
      <Div>
        <Header>
          <H1>What&apos;s happening</H1>
        </Header>
        <div>
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
        </div>
        <FooterSection />
      </Div>
    </>
  );
};
