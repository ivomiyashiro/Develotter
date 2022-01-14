import { IDevit, IUser } from 'interfaces';

import { DevProfileLayout } from 'components/DevProfileLayout';
import { DevitCard } from 'components/Devit/DevitCard';
import { Div, P } from './styles';

interface IProps {
  user: IUser,
  devits: IDevit[]
}

export const DevProfile = ({ user, devits }: IProps) => {

  return (
    <>
      <DevProfileLayout user={user} devitsLength={devits.length}>
        {
          devits.length !== 0
            ? devits.map(devit => {
              return <DevitCard key={devit.id} devit={devit} userComments={[]}/>;
            })
            : <Div><P>We could&apos;t find any devits yet.</P></Div>
        }
      </DevProfileLayout>
    </>
  );
};
