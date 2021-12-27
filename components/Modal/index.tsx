import { MouseEvent, ReactNode, useContext, useRef } from 'react';

import { handleCloseCreateDevitForm } from 'actions/ui';

import { AppContext } from 'context/AppContext';

import { ModalWrapper } from './styles';

interface IProps {
  children: ReactNode
  isOpen: boolean
  isVisible?: boolean
  handleOpenModal?: (value: boolean) => void
}

export const Modal = ({
  children,
  isOpen,
  isVisible = true,
  handleOpenModal,
}: IProps) => {

  const modalRef = useRef(null);
  const { uiDispatch } = useContext(AppContext);

  const handleModalOpen = (e: MouseEvent<HTMLDivElement>) => {
    if ((modalRef.current === e.target) && handleOpenModal) {
      return handleOpenModal(false);
    } 
    
    if ((modalRef.current === e.target) && !handleOpenModal) {
      return handleCloseCreateDevitForm(uiDispatch);
    }
  };

  return (
    <ModalWrapper
      ref={modalRef} 
      isOpen={isOpen}
      isVisible={isVisible}
      onClick={handleModalOpen}
    >
      {children}
    </ModalWrapper>
  );
};
