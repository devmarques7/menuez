import { ModalButton, ModalContent, ModalOverlay, ModalWrapper } from "./style";

interface IModal {
  message: string;
  onClick: () => void;
}

const Modal = ({ message, onClick }: IModal) => {
  return (
    <ModalOverlay>
      <ModalWrapper>
        <ModalContent>{message}</ModalContent>
        <ModalButton onClick={onClick}>Fechar</ModalButton>
        <ModalButton onClick={onClick}>Continuar</ModalButton>
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default Modal;
