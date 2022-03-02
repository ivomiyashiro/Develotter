import { useEffect, useState } from 'react';

import { IUser } from 'interfaces';
import { getRandomUsers } from 'services/user';

import { UserCard } from 'components/UserCard';
import { FooterSection } from '../FooterSection';

import { Div, H1, Header } from './styles';

export const ToFollow = () => {

  const [toFollowArr, setToFollowArr] = useState([]);

  useEffect(() => {
    getRandomUsers()
      .then(resp => {
        if (!resp.ok) return;
        setToFollowArr(resp.users);
      })
      .catch(error => console.log(error));
  },[]);

  return (
    <>
      <Div>
        <Header>
          <H1>Who to follow</H1>
        </Header>
        <section>
          {
            toFollowArr.map((user: IUser) => {
              return <UserCard key={user.id} user={user} />;
            })
          }
        </section>
        <FooterSection />
      </Div>
    </>
  );
};
