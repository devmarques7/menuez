import styled, { css } from "styled-components";

interface IStyledContainer {
  backgroundColor?: string;
  backgroundImage?: string;
  size: string;
  personalizedWidth: string;
  logoWidth: string;
  logoMinWidth: string;
}

export const StyledContainer = styled.div<IStyledContainer>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${(props) => props.backgroundColor};
  background-image: ${(props) => `url("${props.backgroundImage}")` || "none"};

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  width: ${(props) => props.personalizedWidth};

  ${(props) => {
    switch (props.size) {
      case "small":
        return css`
          height: 15vh;
        `;
      case "medium":
        return css`
          height: 45vh;
        `;
      case "big":
        return css`
          height: 87vh;
        `;
      default:
        return css`
          height: ${props.size};
        `;
    }
  }}

  .logo {
    width: ${(props) => props.logoWidth};
    min-width: ${(props) => props.logoMinWidth};
    margin: 0 auto;
  }

  .video-background {
    object-fit: cover;
    height: 100%;
    width: 100vw;
  }

  .logo_video-background {
    position: absolute;
    z-index: 1;

    top: 50%;
    left: 50%;
    transform: translate(-10%, -50%);
    margin: -100px 0 0 -100px;
  }

  .video-children {
    position: absolute;
    z-index: 5;

    width: 100vw;

    top: 0;
  }
`;
