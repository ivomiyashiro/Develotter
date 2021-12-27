import { ReactNode, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { AppContext } from 'context/AppContext';

import { Spinner } from './Spinner';

import { userRenew } from 'services/auth';
import { theme } from 'styles/theme';

interface IProps {
  children: ReactNode
}

export const PrivateRoute = ({children}: IProps) => {

  const {userDispatch} = useContext(AppContext);
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    const token = localStorage.getItem('token') || '';
    if (!token) router.push('/signin');

    userRenew()
      .then(res => {
        if (!res.ok) {
          localStorage.removeItem('token');
          return router.push('/signin');
        }

        localStorage.setItem('token', res.token);
        userDispatch({
          type: 'SIGN IN',
          payload: res.user
        });
      })
      .catch(error => {
        throw new Error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [router, userDispatch]);

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
