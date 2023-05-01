import Link from "../Link";
import { Container } from "./style";
import { AiOutlineArrowRight } from "react-icons/ai";

const SeeMore = ({ content, size, icons }: ISeeMoreProps): JSX.Element => {
  const { title, description, link } = content;

  return (
    <Container size={size}>
      <div className="info container">
        <h3 className="info title">{title}</h3>
        {icons && <img src={icons} alt="icon" className="info title img" />}
      </div>

      <div className="info sub-container">
        <p className="info description">{description}</p>
        <Link key="link" id="link" href={link} className="info link">
          {`Select tickets`} <AiOutlineArrowRight color="var(--red)" />
        </Link>
      </div>
    </Container>
  );
};

export default SeeMore;
