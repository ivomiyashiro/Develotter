import { useContext } from 'react';
import { useRouter } from 'next/router';

import { IDevit, IUser } from 'interfaces';
import { AppContext } from 'context/AppContext';

import { DevProfileLayout } from 'components/DevProfileLayout';
import { DevitCard } from 'components/Devit/DevitCard';

import { Div, P } from './styles';

interface IProps {
  user: IUser,
}

export const DevProfile = ({ user }: IProps) => {

  const { userState, userInteractions } = useContext(AppContext);
  const router = useRouter();
  const path = router.pathname;
  const u = router.query.user === userState.username ? userState : user;

  return (
    <>
      <DevProfileLayout user={u} devitsLength={userInteractions.devits.length}>
        {
          path === '/[user]'
          &&
          (
            userInteractions.devits.length !== 0
              ? userInteractions.devits.map((devit: IDevit) => {
                return <DevitCard key={devit.id} devit={devit} userComments={[]}/>;
              })
              : <Div><P>We could&apos;t find any devits yet.</P></Div>
          )
        }
        {
          path === '/[user]/revits'
          &&
          (
            userInteractions.revits.length !== 0
              ? userInteractions.revits.map((revit: IDevit) => {
                return <DevitCard key={revit.id} devit={revit} userComments={[]}/>;
              })
              : <Div><P>We could&apos;t find any revits yet.</P></Div>
          )
        }
        {
          path === '/[user]/favs'
          &&
          (
            userInteractions.favs.length !== 0
              ? userInteractions.favs.map((revit: IDevit) => {
                return <DevitCard key={revit.id} devit={revit} userComments={[]}/>;
              })
              : <Div><P>We could&apos;t find any favs yet.</P></Div>
          )
        }
      </DevProfileLayout>
    </>
  );
};
