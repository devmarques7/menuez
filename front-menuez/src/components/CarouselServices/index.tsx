import React from "react";
import Carousel from "../utils/SimpleCarousel";

const PHOTOS = [
  {
    img: "./events/eletronic.jpg",
    description: "Best Eletronic party event",
    title: "Eletronic Event",
  },
  {
    img: "./events/teather.jpg",
    description: "Best teather event ever",
    title: "Teather show",
  },
  {
    img: "./events/mindset.jpg",
    description: "Growing mind",
    title: "Mindset",
  },
];

const CarouselService = () => {
  return <Carousel publicPhotos={PHOTOS}></Carousel>;
};

export default CarouselService;
