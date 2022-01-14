import { useContext, useEffect, useState } from 'react';

// import { useFetchDevits } from '../hooks/useFetchDevits';

import { AppContext } from 'context/AppContext';

// import { Devit } from './Devit';
// import { CreateDevitHome } from './Forms/CreateDevitHome';
import { TopBar } from './Topbar';
import { NoDevitsMessage } from './NoDevitsMessage';
import { Spinner } from 'components/Spinner';
import { CreateDevitForm } from 'components/Forms/CreateDevitForm';
import { Modal } from 'components/Modal';

import { Div, Section, SpinnerWrapper } from './styles';
import { CreateDevitTimeline } from 'components/Forms/CreateDevitTimeline';
import { getDevits } from 'services/devit';
import { Devit } from 'components/Devit';

export const Timeline = () => {

  const {uiState, devitDispatch, devitState} = useContext(AppContext);
  const {isCreateDevitFormOpen} = uiState;
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getDevits()
      .then(resp => {
        if (!resp.ok) return;
        devitDispatch({
          type: 'LOAD DEVITS',
          payload: resp.devits
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
