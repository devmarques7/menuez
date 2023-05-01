import { ReactNode } from "react";
import { StyledContainer } from "./style";

interface ILink {
  children?: ReactNode;
  href: string;
  className?: string;
  id?: string;
  onClick?: (event: any) => void;
}

const Link = ({ href, className, onClick, children, id }: ILink) => {
  return (
    <StyledContainer
      href={href}
      className={className}
      onClick={onClick}
      id={id}
    >
      {children}
    </StyledContainer>
  );
};

export default Link;
