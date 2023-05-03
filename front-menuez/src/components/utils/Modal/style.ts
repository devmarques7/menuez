import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 10000;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
`;

export const ModalContent = styled.div`
  margin-bottom: 20px;
`;

export const ModalButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #008080;
  color: white;
  border: none;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    background-color: #006666;
  }
`;
