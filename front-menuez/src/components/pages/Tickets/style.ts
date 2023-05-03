import styled from "styled-components";

interface IContainerProps {
  standard: number;
  plus: number;
  vip: number;
}

export const StyledContainer = styled.main<IContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);

  .container.tickets {
    display: flex;
    justify-content: center;
    gap: 40px;

    .standard {
      ${({ standard }) =>
        standard > 0
          ? `       
          :hover {
            transition: 0.5s all ease-in-out;
            transform: scale(1.2);
            background-color: var(--blacklish-grey);
          }   background: transparent;`
          : `opacity: 20%`};
    }
  }

  .plus {
    ${({ plus }) =>
      plus > 0
        ? `    background: transparent; 
      
      :hover {
        transition: 0.5s all ease-in-out;
        transform: scale(1.2);
        background-color: #090979;
      }
      `
        : `opacity: 20%;`};
  }

  .vip {
    color: #f9d437;

    ${({ vip }) =>
      vip > 0
        ? `  
      
      :hover {
        transition: 0.5s all ease-in-out;
        transform: scale(1.2);
        background-color: #f9d437;
      }

      background: transparent;`
        : `opacity: 20%;`};
  }
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  width: 15vw;
  height: 300px;
  border: 0.5px solid var(--white);
  border-radius: 10px;

  .title {
    font: var(--ROBOTO-24px);
    color: var(--white);
  }

  .description {
    text-align: center;
    font: var(--ROBOTO-12px);
    color: var(--white);
  }

  .img {
    width: 5vw;
  }

  .sold_out {
    text-align: center;

    font: 400 20px/42px "Nats", sans-serif;

    font-size: 25px;
    color: var(--whitelish-grey);

    background-color: red;
  }
`;
