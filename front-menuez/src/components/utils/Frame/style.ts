import styled from "styled-components";

interface IProps {
  Url: string;
}

export const Component = styled.div<IProps>`
  display: flex;
  align-items: flex-end;

  width: 50%;
  height: 70%;

  padding: 50px;

  background: var(--black);

  background-image: ${({ Url }) => `url("${Url}")`};

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  opacity: 70%;

  :hover {
    transition: 0.5s all ease-in-out;
    opacity: 1;
  }
`;
