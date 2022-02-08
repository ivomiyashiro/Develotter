import { useContext, useEffect, useState } from 'react';

import { createRevit, deleteRevit } from 'actions/devit';
import { getRevits } from 'services/devit';
import { IRevit } from 'interfaces';
import { AppContext } from 'context/AppContext';

import EditIcon from 'components/Icons/Edit';
import RedevitIcon from 'components/Icons/Redevit';
import { theme } from 'styles/theme';
import { Div, Li, Span, Ul } from './styles';
import TimesIcon from 'components/Icons/Times';

interface IProps {
  id: string,
  handleOpenModal: (value: boolean) => void
  handleQuoteDevitFormOpen: (value: boolean) => void
  handleQuoteRevitCounter?: any
  handleRevitsCounter?: any
}

export const RevitMenuDesktop = ({
  id,
  handleOpenModal,
  handleQuoteDevitFormOpen,
  handleQuoteRevitCounter,
  handleRevitsCounter,
}: IProps) => {

  const { devitDispatch, userInteractionsDispatch, userState } = useContext(AppContext);
  const [isRevitted, setRevitted] = useState(false);
  const [revit_id, setRevit_id] = useState('');

  useEffect(() => {
    getRevits(id)
      .then(resp => {
        if (resp.revits.some((e: IRevit) => {
          setRevit_id(e.id);
          return e.uid === userState.id;
        })) {
          setRevitted(true);
        }
      })
      .catch(error => console.log(error));
  });

  const handleRevitDevit = () => {

    const data = { id, revit_id };

    if (!isRevitted) {
      createRevit(
        id,
        devitDispatch,
      );
      return;
    }

    deleteRevit(
      data,
      devitDispatch,
      userInteractionsDispatch
    );
  };

  const handleRevit = () => {
    if (isRevitted) {
      setRevitted(false);
      return handleRevitsCounter((prev: number) => prev - 1);
    }
    setRevitted(true);
    return handleRevitsCounter((prev: number) => prev + 1);
  };

  return (
    <>
      <Div>
        <Ul>
          <Li onClick={() => {handleOpenModal(false); handleRevitDevit(); handleRevitsCounter && handleRevit();}}>
            <RedevitIcon
              width="18px"
              height="18px"
              color={theme.darker_white}
            />
            <Span>{isRevitted ? 'Undo Revit' : 'Revit'}</Span>
          </Li>
          <Li onClick={() => {handleQuoteDevitFormOpen(true); handleOpenModal(false);}}>
            <EditIcon width="18px" height="18px" color={theme.darker_white} />
            <Span>Quote Devit</Span>
          </Li>
          <Li onClick={() => {handleOpenModal(false);}}>
            <TimesIcon width="18px" height="18px" color={theme.darker_white} />
            <Span>Cancel</Span>
          </Li>
        </Ul>
      </Div>
    </>
  );
};
