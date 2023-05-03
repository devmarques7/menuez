import React, { useContext } from "react";
import Carousel from "../SimpleCarousel";
import { AppContext } from "../../../contexts/AppContext";

const CarouselService = () => {
  const { events } = useContext(AppContext);

  return <Carousel publicPhotos={events}></Carousel>;
};

export default CarouselService;
