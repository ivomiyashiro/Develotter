import { ReactNode } from 'react';

import { IDevit, IUser } from 'interfaces';
import { Topbar } from './Topbar';
import { PicturesSection } from './PicturesSection';
import { UserInfoSection } from './UserInfoSection';

import { Div, Section } from './styles';
import { NavSection } from './NavSection';

interface IProps {
  children: ReactNode
  user: IUser
  devitsLength: number
}

export const DevProfileLayout = ({user, devitsLength, children}: IProps) => {
  return (
    <>
      <Div>
        <Topbar devitsLength={devitsLength} user={user} />
        <Section>
          <PicturesSection user={user} />
          <UserInfoSection user={user} />
          <NavSection user={user} />
        </Section>
        <section>
          {children}
        </section>
      </Div>
    </>
  );
};
