import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  margin: 0 auto;
`;

export const Label = styled.label`
  font: var(--ROBOTO-24px);
  color: var(--black);
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 15px;
`;

export const Button = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: var(--red);
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;
export const DivColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;

  .error-wrapper {
    font: var(--ROBOTO-10px);
    color: red;
  }
`;
