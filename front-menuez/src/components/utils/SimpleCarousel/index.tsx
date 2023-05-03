import StyledCarousel from "./style";
import { useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { ICarousel } from "../../../interfaces/ICarousel";
import SeeMore from "../SeeMore";

const Carousel = ({
  photos,
  publicPhotos,
  title,
  subtitle,
  imgHeight = "650px",
  arrow = true,
  id,
}: ICarousel) => {
  const scrollRef = useRef<null | HTMLDivElement>(null);

  const scrollLeft = () => scrollRef.current?.scrollBy(-70, 0);
  const scrollRight = () => scrollRef.current?.scrollBy(70, 0);

  return (photos && photos.length === 0) ||
    (publicPhotos && publicPhotos.length === 0) ? (
    <h1>Carregando...</h1>
  ) : (
    <StyledCarousel id={id} imgHeight={imgHeight}>
      {arrow && (
        <button onClick={scrollLeft} className="button-left">
          <AiOutlineArrowLeft />
        </button>
      )}
      {title && <h4>{title}</h4>}
      {subtitle && <h5>{subtitle}</h5>}
      <div ref={scrollRef} className="carousel">
        {publicPhotos?.length &&
          publicPhotos?.map((photo, index) => (
            <section className="item" key={index}>
              <a href="https://www.google.com/" target="_blank" id={photo.id}>
                {photo.img_cover_event ? (
                  <img src={photo.img_cover_event} alt="photo from gallery" />
                ) : (
                  <img
                    src="./events/img-notfound.png"
                    alt="photo from gallery"
                  />
                )}
              </a>
              {photo.sold_out && <span className="sold_out">SOLD OUT</span>}
              <SeeMore
                content={{
                  description: photo.description,
                  title: photo.name,
                  link: "https://www.google.com/",
                }}
                size="default"
              />
            </section>
          ))}
        {photos &&
          photos.map((photo, index) => (
            <section className="item" key={index}>
              <a href="https://www.google.com/" target="_blank">
                <img src={photo.src.large} alt="photo from gallery" />
              </a>
              <SeeMore
                content={{
                  description: photo.alt,
                  title: photo.avg_color,
                  link: "https://www.google.com/",
                }}
                size="default"
              />
            </section>
          ))}
      </div>
      {arrow && (
        <button onClick={scrollRight} className="button-right">
          <AiOutlineArrowRight />
        </button>
      )}
    </StyledCarousel>
  );
};

export default Carousel;
