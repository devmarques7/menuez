import styled from "styled-components";

export const StyledContainer = styled.section`
  display: flex;
  position: absolute;
  z-index: 1;

  top: 0;
  right: 0;

  width: 100vw;
  height: 100vh;

  background-color: #fff;

  .nav {
    display: flex;
    justify-content: space-between;
    position: absolute;
    z-index: 1;

    top: 0;
    right: 0;

    width: 99vw;
    height: 40px;

    padding: 10px 20px 10px 30px;

    .icon {
      font-size: 40px;
      cursor: pointer;
    }

    .close {
      :hover {
        transition: 0.2s all ease-in-out;
        transform: scale(1.05);

        color: var(--red);
      }
    }
  }

  .empty.cart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;

    top: 15%;

    width: 99vw;
    height: 70%;
    .empty-icon {
      font-size: 15vw;
      margin-bottom: 20px;
    }

    .description {
      font: var(--ROBOTO-32px_48px);
      color: var(--black);
    }
  }

  .container.receipt {
    display: flex;
    justify-content: space-around;
    position: absolute;

    top: 15%;

    width: 99vw;
    height: 90%;

    .info.receipt {
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      width: 25vw;
      height: 45%;

      gap: 15px;

      .section.title {
        font: var(--ROBOTO-24px);
        color: var(--black);

        margin-bottom: 20px;
      }

      .over {
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        border-radius: 20px;

        padding: 20px;

        gap: 10px;
      }

      .sub {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid black;
        border-radius: 20px;

        padding: 20px;
      }

      .title {
        font: var(--ROBOTO-24px);
        color: var(--black);
      }

      .description {
        font: var(--ROBOTO-14px);
        color: var(--red);
      }

      .payment {
        text-align: center;
        padding: 20px;
        border-radius: 20px;
        border: 1px solid black;
        :hover {
          transition: 0.2s all ease-in-out;
          transform: scale(1.05);

          background-color: var(--red);

          .title {
            color: var(--white);
          }
        }
      }
    }

    .section.tickets {
      display: flex;
      flex-direction: column;

      .section.title {
        font: var(--ROBOTO-24px);
        color: var(--black);

        margin-bottom: 30px;
      }

      .cart.receipt {
        width: 50vw;
        height: 435px;

        padding: 10px;

        overflow-y: scroll;

        .receipt {
          display: flex;
          justify-content: space-between;

          border: 1px solid black;
          border-radius: 20px;

          height: 120px;

          margin-bottom: 15px;

          .selector {
            width: 20px;
            height: 100%;
            background-color: var(--red);

            border-radius: 20px 0 0 20px;
          }

          .column {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            width: 95%;

            padding: 20px;
            .info {
              display: flex;
              justify-content: space-between;

              .title {
                font: var(--ROBOTO-24px);
                color: var(--black);
              }

              .type {
                font: var(--ROBOTO-24px);
                color: var(--black);
              }
            }

            .id {
              font: var(--ROBOTO-14px);
              color: var(--red);
            }
          }
        }
      }
    }
  }
`;
