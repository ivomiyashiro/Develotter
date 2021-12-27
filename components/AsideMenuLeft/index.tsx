import Link from 'next/link';

import { AsideLeftMenuItems } from './AsideMenuLeftItems';
import { AsideMenuLeftFooter } from './AsideMenuLeftFooter';

import Logo from '../Icons/Logo';
import { theme } from 'styles/theme';
import { Aside, Div, Header, A } from './styles';


export const AsideLeftMenu = () => {


  return (
    <>
      <Aside>
        <Div>
          <Header>
            <Link href="/home" passHref>
              <A>
                <Logo
                  width="44px"
                  height="44px"
                  color={theme.white}
                />
              </A>
            </Link>
          </Header>
          <AsideLeftMenuItems />
          <AsideMenuLeftFooter />
        </Div>
      </Aside>
    </>
  );
};
