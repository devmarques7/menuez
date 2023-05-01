import styled from "styled-components";

interface IStyledCarousel {
  imgHeight: string;
}

const StyledCarousel = styled.div<IStyledCarousel>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  max-width: 2560px;
  padding: 50px 0px 50px 0px;

  .carousel {
    display: flex;
    overflow-x: scroll;
    padding: 18px;
    width: 85vw;
    scroll-snap-type: x mandatory;
    scroll-padding: 24px;
    scroll-behavior: smooth;
    border-radius: 8px;

    cursor: grab;

    &:active {
      cursor: grabbing;
    }

    ::-webkit-scrollbar {
      height: 8px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--blacklish-grey);
      border-radius: 10px;
    }

    /* Estilo da área da barra de rolagem */
    ::-webkit-scrollbar-track {
      background-color: var(--black);
    }

    .item {
      //flex: 0 0 100%;
      padding: 24px;
      border-radius: 8px;
      scroll-snap-align: start;

      img {
        width: 20vw;
        max-width: 500px;
        min-width: 235px;
        height: ${(props) => props.imgHeight};
        object-fit: cover;
        cursor: pointer;

        border-radius: 20px;
      }

      > div {
        position: relative;
        bottom: 150px;
        left: 10px;
        width: 15vw;
        max-width: 500px;
        min-width: 150px;
        height: 20px;
      }
    }
  }

  h4 {
    font: var(--NATS-100px);
    font-size: 25px;
    color: var(--whitelish-grey);

    position: absolute;
    left: 90px;
    margin-bottom: 10px;

    @media (min-width: 375px) {
      left: 100px;
      font-size: 35px;
      margin-bottom: 15px;
    }

    @media (min-width: 768px) {
      left: 150px;
      font-size: 45px;
      margin-bottom: 20px;
    }

    @media (min-width: 1024px) {
      left: 220px;
      font-size: 70px;
      margin-bottom: 30px;
    }

    @media (min-width: 1440px) {
      left: 350px;
      font-size: 90px;
      margin-bottom: 30px;
    }

    @media (min-width: 2560px) {
      left: 380px;
      font-size: 180px;
      margin-bottom: 30px;
    }
  }

  h5 {
    font: var(--MERGE-ONE-30px);
    font-size: 15px;
    color: var(--whitelish-grey);

    position: absolute;
    left: 90px;
    margin-top: 60px;

    @media (min-width: 375px) {
      left: 100px;
      font-size: 20px;
    }

    @media (min-width: 768px) {
      left: 150px;
      margin-top: 70px;
    }

    @media (min-width: 1024px) {
      left: 220px;
      margin-top: 90px;
      font-size: 30px;
    }

    @media (min-width: 1440px) {
      left: 350px;
      margin-top: 130px;
      font-size: 35px;
    }

    @media (min-width: 2560px) {
      left: 380px;
      margin-top: 250px;
      font-size: 50px;
    }
  }

  button {
    position: absolute;
    z-index: 1;

    background: none;
    border: none;
    color: var(--whitelish-grey);
    font-size: 30px;

    @media (min-width: 1440px) {
      font-size: 45px;
    }

    @media (min-width: 2560px) {
      font-size: 60px;
    }
  }

  .button-left {
    left: 50px;

    @media (min-width: 768px) {
      left: 80px;
    }

    @media (min-width: 1024px) {
      left: 150px;
    }

    @media (min-width: 1440px) {
      left: 250px;
    }
  }

  .button-right {
    right: 50px;

    @media (min-width: 768px) {
      right: 80px;
    }

    @media (min-width: 1024px) {
      right: 150px;
    }

    @media (min-width: 1440px) {
      right: 250px;
    }
  }
`;

export default StyledCarousel;
