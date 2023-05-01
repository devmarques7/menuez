import styled from "styled-components";

const StyledCarousel3D = styled.div`
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  @media (min-width: 1440px) {
    html {
      zoom: 1.5;
    }
  }

  @media (min-width: 2560px) {
    html {
      zoom: 1.7;
    }
  }

  @media (min-width: 3860px) {
    html {
      zoom: 2.5;
    }
  }

  ::-webkit-scrollbar {
    width: 1.3rem;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background: #797979;
    transition: all 0.5s ease-in-out;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #222224;
  }

  ::-webkit-scrollbar-track {
    background: #f9f9f9;
  }

  body {
    font-size: 1.6rem;
    background: var(--bg);
  }

  .container {
    max-width: 124rem;
    padding: 4rem 1rem;
    margin: 0 auto;
  }

  .heading {
    padding: 1rem 0;
    font-size: 3.5rem;
    text-align: center;
  }

  .swiper_container {
    height: 52rem;
    padding: 2rem 0;
    position: relative;
  }

  .swiper-slide {
    width: 37rem;
    height: 42rem;
    position: relative;
  }

  @media (max-width: 500px) {
    .swiper_container {
      height: 47rem;
    }
    .swiper-slide {
      width: 28rem !important;
      height: 36rem !important;
    }
    .swiper-slide img {
      width: 28rem !important;
      height: 36rem !important;
    }
  }

  .swiper-slide img {
    width: 37rem;
    height: 42rem;
    border-radius: 2rem;
    object-fit: cover;
  }

  .swiper-slide-shadow-left,
  .swiper-slide-shadow-right {
    display: none;
  }

  .slider-controler {
    position: relative;
    bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slider-controler .swiper-button-next {
    left: 58% !important;
    transform: translateX(-58%) !important;
  }

  .slider-arrow {
    margin-top: 5px;
  }

  @media (max-width: 990px) {
    .slider-controler .swiper-button-next {
      left: 70% !important;
      transform: translateX(-70%) !important;
    }
  }

  @media (max-width: 450px) {
    .slider-controler .swiper-button-next {
      left: 80% !important;
      transform: translateX(-80%) !important;
    }
  }

  @media (max-width: 990px) {
    .slider-controler .swiper-button-prev {
      left: 30% !important;
      transform: translateX(-30%) !important;
    }
  }

  @media (max-width: 450px) {
    .slider-controler .swiper-button-prev {
      left: 20% !important;
      transform: translateX(-20%) !important;
    }
  }

  .slider-controler .slider-arrow {
    width: 3.5rem;
    height: 3.5rem;
    left: 42%;
    transform: translateX(-42%);
    filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
  }

  .slider-controler .slider-arrow::after {
    content: "";
  }

  .swiper-pagination {
    position: relative;
    width: 15rem !important;
    bottom: 1rem;
  }

  .swiper-pagination .swiper-pagination-bullet {
    background: white;
    filter: drop-shadow(0px 8px 24px white);
  }

  .swiper-pagination .swiper-pagination-bullet-active {
    background: grey;
  }

  h4 {
    font: var(--NATS-100px);
    font-size: 30px;
    color: var(--whitelish-grey);
    margin-top: 200px;
    position: absolute;
    left: 90px;
    z-index: 10;

    @media (min-width: 375px) {
      left: 100px;
      font-size: 35px;
    }

    @media (min-width: 768px) {
      left: 150px;
      font-size: 45px;
    }

    @media (min-width: 1024px) {
      left: 220px;
      font-size: 70px;
    }

    @media (min-width: 1440px) {
      left: 350px;
      font-size: 90px;
    }

    @media (min-width: 2560px) {
      left: 380px;
      font-size: 180px;
    }

    @media (min-width: 3860px) {
      left: 380px;
      font-size: 200px;
    }
  }

  h5 {
    font: var(--MERGE-ONE-30px);
    font-size: 15px;
    color: var(--whitelish-grey);

    position: absolute;
    left: 90px;
    margin-top: 320px;
    z-index: 10;

    @media (min-width: 375px) {
      left: 100px;
      font-size: 20px;
    }

    @media (min-width: 768px) {
      left: 150px;
      margin-top: 340px;
    }

    @media (min-width: 1024px) {
      left: 220px;
      margin-top: 350px;
      font-size: 30px;
    }

    @media (min-width: 1440px) {
      left: 350px;
      margin-top: 370px;
      font-size: 35px;
    }

    @media (min-width: 2560px) {
      left: 380px;
      margin-top: 400px;
      font-size: 50px;
    }

    @media (min-width: 3860px) {
      left: 380px;
      margin-top: 480px;
      font-size: 60px;
    }
  }
`;

export default StyledCarousel3D;
