import { ReactNode, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { AppContext } from 'context/AppContext';

import { Spinner } from './Spinner';

import { userRenew } from 'services/auth';
import { theme } from 'styles/theme';
import { getFollowers } from 'services/social';

interface IProps {
  children: ReactNode
}

export const PrivateRoute = ({children}: IProps) => {

  const {userDispatch, userState, socialDispatch} = useContext(AppContext);
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    const token = localStorage.getItem('token') || '';
    if (!token) router.push('/signin');

    userRenew()
      .then(resp => {
        if (!resp.ok) {
          localStorage.removeItem('token');
          return router.push('/signin');
        }

        localStorage.setItem('token', resp.token);
        userDispatch({
          type: 'SIGN IN',
          payload: resp.user
        });
      })
      .catch(error => {
        throw new Error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [router, userDispatch]);

  useEffect(() => {
    getFollowers(userState.id)
      .then(resp => {
        if (!resp.ok) return;

        socialDispatch({
          type: 'GET FOLLOWERS AND FOLLOWINS',
          payload: {
            followins: resp.followins,
            followers: resp.followers
          }
        });
      });
  }, [userState.id, socialDispatch]);

  return (
    <>
      {
        isLoading
          ? (
            <div>
              <Spinner size="28px" color={theme.white} />
            </div>
          )
          : children
      }

      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100vh;
        }
      `}</style>
    </>
  );
};
