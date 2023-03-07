import { createContext, useState } from 'react';

const ModalContext = createContext({
  isModalOpen: false,
  error: false,
  setError: () => {},
  openModal: () => {},
  closeModal: () => {},
});

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setError(false);
  };

  const modalContext = {
    isModalOpen,
    error,
    setError,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={modalContext}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
