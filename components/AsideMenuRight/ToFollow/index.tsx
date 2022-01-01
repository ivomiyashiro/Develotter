
import { UserCard } from 'components/UserCard';
import { FooterSection } from '../FooterSection';

import { Div, H1, Header } from './styles';

export const ToFollow = () => {
  return (
    <>
      <Div>
        <Header>
          <H1>Who to follow</H1>
        </Header>
        <section>
          <UserCard />
          <UserCard />
        </section>
        <FooterSection />
      </Div>
    </>
  );
};
