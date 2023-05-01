import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
import StyledCarousel3D from "./style";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { ICarousel } from "../../../interfaces/ICarousel";

const Carousel3D = ({
  photos,
  publicPhotos,
  title,
  subtitle,
  arrow = true,
}: ICarousel) => {
  return (photos && photos.length === 0) ||
    (publicPhotos && publicPhotos.length === 0) ? (
    <h1>Carregando...</h1>
  ) : (
    <StyledCarousel3D>
      <div className="container">
        {title && <h4>{title}</h4>}
        {subtitle && <h5>{subtitle}</h5>}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {publicPhotos &&
            publicPhotos.map((photo, index) => (
              <SwiperSlide key={index}>
                <a href="https://www.google.com/" target="_blank">
                  <img src={photo.img} alt="slide_image" />
                </a>
              </SwiperSlide>
            ))}
          {photos &&
            photos.map((photo, index) => (
              <SwiperSlide key={index}>
                <a href="https://www.google.com/" target="_blank">
                  <img src={photo.src.large} alt="slide_image" />
                </a>
              </SwiperSlide>
            ))}
          {arrow && (
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <AiOutlineArrowLeft color="grey" />
              </div>
              <div className="swiper-button-next slider-arrow">
                <AiOutlineArrowRight color="grey" />
              </div>
              <div className="swiper-pagination"></div>
            </div>
          )}
        </Swiper>
      </div>
    </StyledCarousel3D>
  );
};

export default Carousel3D;
