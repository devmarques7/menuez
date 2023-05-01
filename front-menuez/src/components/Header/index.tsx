import { ReactNode } from "react";
import { StyledContainer } from "./style";

interface IHeader {
  children?: ReactNode;
}

const Header = ({ children }: IHeader) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Header;
