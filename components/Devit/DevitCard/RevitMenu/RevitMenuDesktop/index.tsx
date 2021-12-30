import { useContext } from 'react';

import { createRevit, deleteRevit } from 'actions/devit';
import { useRevitted } from 'hooks/useRevitted';

import { AppContext } from 'context/AppContext';

import EditIcon from 'components/Icons/Edit';
import RedevitIcon from 'components/Icons/Redevit';
import { theme } from 'styles/theme';
import { Div, Li, Span, Ul } from './styles';

interface IProps {
  id: string,
  handleOpenModal: (value: boolean) => void
  handleQuoteDevitFormOpen: (value: boolean) => void
}

export const RevitMenuDesktop = ({
  id,
  handleOpenModal,
  handleQuoteDevitFormOpen
}: IProps) => {

  const { devitDispatch } = useContext(AppContext);
  const { revitInfo } = useRevitted(id);
  const { revit_id, isRevitted } = revitInfo;

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
    );
  };

  return (
    <>
      <Div>
        <Ul>
          <Li onClick={() => {handleOpenModal(false); handleRevitDevit();}}>
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
        </Ul>
      </Div>
    </>
  );
};
