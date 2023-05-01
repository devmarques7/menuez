import SeeMore from "../SeeMore";
import { Component } from "./style";

interface IFrame {
  src: string;
  content: {
    title: string;
    description: string;
    link: string;
  };
  icons: string;
}

const Frame = ({ src, content, icons }: IFrame): JSX.Element => {
  return (
    <Component Url={src}>
      <SeeMore content={content} size={"default"} icons={icons} />
    </Component>
  );
};

export default Frame;
