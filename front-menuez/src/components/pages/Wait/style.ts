import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #fff;
  color: #000;
  font-size: 24px;
`;

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const MenssageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  .menssage.inline {
    font: var(--ROBOTO-24px);
    color: var(--black);
  }

  .menssage.onTime {
    font: var(--ROBOTO-16px);
    color: var(--black);
  }
`;

export const Loader = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 2px solid #000;
  border-top: 2px solid transparent;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Button = styled.button`
  background-color: #fff;
  color: #000;
  border: 2px solid #000;
  border-radius: 4px;
  font-size: 16px;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
