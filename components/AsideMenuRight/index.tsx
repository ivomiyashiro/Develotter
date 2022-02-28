import { Trendings } from './Trendings';

import { Searchbar } from 'components/Searchbar';
import { ToFollow } from './ToFollow';

import { Aside, Section } from './styles';


export const AsideRightMenu = () => {
  return (
    <>
      <Aside>
        <Section>
          <Searchbar />
        </Section>
        <ToFollow />
      </Aside>
    </>
  );
};
