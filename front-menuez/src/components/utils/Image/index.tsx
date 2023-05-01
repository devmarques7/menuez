interface IFigure {
  className: string;
  src: string;
  alt: string;
}

const Image = ({ src, className, alt }: IFigure) => {
  return <img src={src} className={className} alt={alt} />;
};

export default Image;
