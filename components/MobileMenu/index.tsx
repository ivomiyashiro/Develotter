import Link from 'next/link';

import { HoverableButton } from '../Buttons/HoverableButton';

import TimesIcon from '../Icons/Times';
import { theme } from 'styles/theme';
import { MainSection } from './MainSection';
import { A, Aside, Footer, H2, Header } from './styles';

interface IProps {
  isVisible: boolean
  handleSidebarOpen: (value: boolean) => void
}

export const MobileAsideMenu = ({
  isVisible,
  handleSidebarOpen
}: IProps) => {
  return (
    <>
      <Aside
        style={{
          width: `${isVisible ? '75%' : '0px'} `
        }}
      >
        <Header>
          <H2>Account info</H2>
          <HoverableButton
            icon={TimesIcon}
            width="20px"
            height="20px"
            color={theme.darker_white}
            onClick={() => handleSidebarOpen(false)}
          />
        </Header>
        <MainSection />
        <Footer>
          <Link href="/logout" passHref>
            <A>
              Log out
            </A>
          </Link>
        </Footer>
      </Aside>
    </>
  );
};
