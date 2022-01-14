import { IDevit, IUser } from 'interfaces';

import { UserLayout } from 'components/DevInfoLayout';
import { DevitCard } from 'components/Devit/DevitCard';
import { Div, P } from './styles';

interface IProps {
  user: IUser,
  devits: IDevit[]
}

export const DevInfo = ({ user, devits }: IProps) => {

  return (
    <>
      <UserLayout user={user} >
        {
          devits.length !== 0
            ? devits.map(devit => {
              return <DevitCard key={devit.id} devit={devit} userComments={[]}/>;
            })
            : <Div><P>We could&apos;t find any devits yet.</P></Div>
        }
      </UserLayout>
    </>
  );
};
