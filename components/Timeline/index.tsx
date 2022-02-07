import { useContext, useEffect, useState } from 'react';

import { AppContext } from 'context/AppContext';
import { getDevits } from 'services/devit';

import { TopBar } from './Topbar';
import { NoDevitsMessage } from './NoDevitsMessage';
import { Spinner } from 'components/Spinner';
import { Devit } from 'components/Devit';
import { CreateDevitTimeline } from 'components/Forms/CreateDevitTimeline';

import { Div, Section, SpinnerWrapper } from './styles';

export const Timeline = () => {

  const { devitDispatch, devitState} = useContext(AppContext);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getDevits()
      .then(resp => {
        if (!resp.ok) return;
        devitDispatch({
          type: 'LOAD DEVITS',
          payload: resp.feed
        });
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, [devitDispatch]);

  return (
    <>
      <Div>
        <TopBar />
        <Section>
          <CreateDevitTimeline />
          { 
            isLoading
              ? (
                <SpinnerWrapper>
                  <Spinner size="24px" color="white" />
                </SpinnerWrapper>
              )
              : devitState.length !== 0
                ? (
                  devitState.map(devit => {
                    return <Devit key={devit.id} devit={devit}/>;
                  })
                )
                : <NoDevitsMessage />
          }
        </Section>
      </Div>
    </>
  );
};
