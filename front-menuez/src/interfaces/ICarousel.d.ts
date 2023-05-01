export interface ICarousel {
  photos?: {
    type: string;
    id: number;
    width: number;
    height: number;
    url: string;
    photographer: string;
    photographer_url: string;
    photographer_id: number;
    avg_color: string;
    src: {
      original: string;
      large2x: string;
      large: string;
      medium: string;
      small: string;
      portrait: string;
      landscape: string;
      tiny: string;
    };
    liked: false;
    alt: string;
  }[];
  publicPhotos?: {
    img: string;
    description: string;
    title: string;
  }[];
  title?: string;
  subtitle?: string;
  arrow?: boolean;
  imgHeight?: string;
  id?: string;
}