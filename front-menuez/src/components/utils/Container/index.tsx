import Image from "../Image";
import { StyledContainer } from "./style";
import { ReactNode } from "react";

interface IContainer {
  backgroundType?: "image" | "color" | "video";
  size?: "small" | "medium" | "big" | string;
  personalizedWidth?: string;
  backgroundSrc?: string;
  logo?: any;
  children?: ReactNode;
  id?: string;
  logoWidth?: string;
  logoMinWidth?: string;
}

const Container = ({
  backgroundType,
  backgroundSrc = "var(--black)",
  logo,
  size = "big",
  personalizedWidth = "100vw",
  id,
  logoWidth = "30%",
  logoMinWidth = "300px",
  children,
}: IContainer) => {
  switch (backgroundType) {
    case "image":
      return (
        <StyledContainer
          backgroundImage={backgroundSrc}
          size={size}
          personalizedWidth={personalizedWidth}
          id={id}
          logoWidth={logoWidth}
          logoMinWidth={logoMinWidth}
        >
          {logo && <Image className="logo" src={logo} alt="logo image" />}
          {children}
        </StyledContainer>
      );
    case "video":
      return (
        <StyledContainer
          size={size}
          personalizedWidth={personalizedWidth}
          logoWidth={logoWidth}
          logoMinWidth={logoMinWidth}
        >
          <video className="video-background" autoPlay muted loop>
            <source src={backgroundSrc} />
          </video>
          {logo && (
            <Image
              className="logo logo_video-background"
              src={logo}
              alt="logo image"
            />
          )}
          {children && <div className="video-children">{children}</div>}
        </StyledContainer>
      );
    case "color":
      return (
        <StyledContainer
          backgroundColor={backgroundSrc}
          size={size}
          personalizedWidth={personalizedWidth}
          logoWidth={logoWidth}
          logoMinWidth={logoMinWidth}
        >
          {logo && <Image className="logo" src={logo} alt="logo image" />}
          {children}
        </StyledContainer>
      );
    default:
      return (
        <StyledContainer
          backgroundColor={backgroundSrc}
          size={size}
          personalizedWidth={personalizedWidth}
          logoWidth={logoWidth}
          logoMinWidth={logoMinWidth}
        >
          {logo && <Image className="logo" src={logo} alt="logo image" />}
          {children}
        </StyledContainer>
      );
  }
};

export default Container;
