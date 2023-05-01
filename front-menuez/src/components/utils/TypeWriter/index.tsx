import { TypeAnimation } from "react-type-animation";

interface ITypeWriter {
  type?: "word" | "phrase";
  phrase: string;
  divisor?: string;
  className?: string;
}

const TypeWriter = ({
  type = "word",
  phrase,
  divisor = " ",
  className,
}: ITypeWriter) => {
  const phraseArray = phrase.split(divisor);
  let sequence: (
    | string
    | number
    | ((element: HTMLElement | null) => void | Promise<void>)
  )[] = [];
  let timer = 800;
  let sequenceString = "";
  switch (type) {
    case "word":
      phraseArray.forEach((word: string) => {
        sequence.push(word + " ");
        sequence.push((timer += 200));
      });
      break;
    case "phrase":
      phraseArray.forEach((word: string) => {
        sequence.push(sequenceString + " " + word);
        sequence.push((timer += 200));
      });
      break;
  }

  return (
    <TypeAnimation
      className={className}
      sequence={sequence}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
    />
  );
};

export default TypeWriter;
