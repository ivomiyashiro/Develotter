import { useContext, useEffect, useState } from 'react';

import { IDevit, IDevitFavs, IRevit, IUser } from 'interfaces';
import { getDevitFavs, getQuoteRevit, getRevits } from 'services/devit';

import { ButtonsSection } from './ButtonsSection';

import { Div, Ul, Li, H3, Span } from './styles';
import { AppContext } from 'context/AppContext';

interface IProps {
  devit: IDevit
  user: IUser
}

export const InteractionsCounters = ({ devit, user }: IProps) => {

  const { id } = devit;
  const {userState} = useContext(AppContext);
  const [favsCounter, setFavsCounter] = useState(0);
  const [revitsCounter, setRevitsCounter] = useState(0);
  const [quoteRevitsCounter, setQuoteRevitsCounter] = useState(0);
  const [isDevitFaved, setDevitFaved] = useState(false);
  const [isDevitQuoteRevitted, setDevitQuoteRevitted] = useState(false);
  const [isDevitRevitted, setDevitRevitted] = useState(false);

  useEffect(() => {
    getDevitFavs(id)
      .then(resp => {
        if (!resp.ok) return;
        if (resp.favs.some((e: IDevitFavs) => e.uid === userState.id)) {
          setDevitFaved(true);
        }
        if (resp.favs.length === undefined) {
          return;
        }
        setFavsCounter(resp.favs.length);
      })
      .catch(error => console.log(error));
  }, [id, userState.id]);

  useEffect(() => {
    getQuoteRevit(id)
      .then(resp => {
        if (!resp.ok) return;
        if (resp.quote_revits.some((e: IRevit) => e.uid === userState.id)) {
          setDevitQuoteRevitted(true);
        } else {
          setDevitQuoteRevitted(false);
        }
        if (resp.quote_revits.length === undefined) {
          return;
        }
        setQuoteRevitsCounter(resp.quote_revits.length);
      })
      .catch(error => console.log(error));
  }, [id, userState.id]);

  useEffect(() => {
    getRevits(id)
      .then(resp => {
        if (!resp.ok) return;
        if (resp.revits.some((e: IRevit) => e.uid === userState.id)) {
          setDevitRevitted(true);
        }else {
          setDevitRevitted(false);
        }

        if (resp.revits.length === undefined) {
          return;
        }
        setRevitsCounter(resp.revits.length);

      })
      .catch(error => console.log(error));
  }, [id, userState.id]);

  return (
    <>
      {
        (revitsCounter !== 0 || quoteRevitsCounter !== 0 || favsCounter !== 0)
        &&
        <Div>
          <Ul>
            {
              revitsCounter !== 0
              &&
              <Li>
                <Span><H3>{revitsCounter}</H3> Revits</Span> 
              </Li>
            }
            {
              quoteRevitsCounter !== 0
              &&
              <Li>
                <Span><H3>{quoteRevitsCounter}</H3> Quote Devit</Span>
              </Li>
            }
            {
              favsCounter !== 0
              &&
              <Li>
                <Span><H3>{favsCounter}</H3> Likes</Span>
              </Li>
            }
          </Ul>
        </Div>
      }
      <ButtonsSection
        id={id}
        user={user}
        devit={devit}
        isDevitFaved={isDevitFaved}
        handleDevitFav={setDevitFaved}
        handleFavsCounter={setFavsCounter}
        handleQuoteRevitCounter={setQuoteRevitsCounter}
        handleRevitsCounter={setRevitsCounter}
      />
    </>
  );
};
