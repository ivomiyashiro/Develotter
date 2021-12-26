import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Spinner } from './Spinner';

import { userRenew } from 'services/auth';
import { theme } from 'styles/theme';

interface IProps {
  children: ReactNode
}

export const PublicRoute = ({children}: IProps) => {

  const router = useRouter();
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    const token = localStorage.getItem('token') || '';
    if (!token) return setLoading(false);
    
    userRenew()
      .then(res => {
        if (res.ok) {
          localStorage.setItem('token', res.token);
          return router.push('/home');
        }
      })
      .catch(error => {
        throw new Error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [router]);

  return (
    <>
      <div>
        {
          isLoading
            ? (
              <div>
                <Spinner size="32px" color={theme.white} />
              </div>
            )
            : children
        }
      </div>

      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          heigth: 100vh;
        }
      `}</style>
    </>
  );
};
