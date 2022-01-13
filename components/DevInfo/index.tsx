import { useContext } from 'react';

import { IUser } from 'interfaces';

import { UserLayout } from 'components/DevInfoLayout';

interface IProps {
  user: IUser
}

export const DevInfo = ({ user }: IProps) => {

  // const { userState } = useContext(AppContext);

  return (
    <>
      <UserLayout user={user} >
        {/* {
          userState.devits.length !== 0
            ? userState.devits.map(devit => {
              return <DevitCard key={devit.id} devit={devit} userComments={[]}/>;
            })
            : <div><p>We could&apos;t find any devits yet.</p></div>
        } */}
      </UserLayout>

      {/* <style jsx>{`
        div {
          display: flex;
          flex-aling: center;
          justify-content: center;
          margin-top: 5em;
        }

        p {
          color: ${colors.text};
        }
      `}</style> */}
    </>
  );
};
