import styled from "styled-components";

interface IStyledContainer {
  color: "white" | "black";
  menu: boolean;
}

interface IMenuMobile {
  color: "white" | "black";
}

export const Container = styled.nav<IStyledContainer>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${(props) => props.color};

  padding: 20px 30px 20px 10px;

  h2 {
    position: absolute;
    left: 48.5vw;
    font: var(--ROBOTO-24px);
    color: ${(props) =>
      props.color === "white"
        ? "var(--blacklish-grey)"
        : "var(--whitelish-grey)"};

    @media (max-width: 1440px) {
      display: none;
    }
  }

  .container.links {
    display: flex;
    gap: 40px;

    .buyer {
      padding: 5px 20px;

      color: var(--red);

      border: none;
      border-radius: 10px;

      :hover {
        transition: 0.2s all ease-in-out;
        transform: scale(1.05);
      }
    }

    #links {
      font: var(--ROBOTO-16px);
      color: ${(props) =>
        props.color === "white"
          ? "var(--blacklish-grey)"
          : "var(--whitelish-grey)"};
      margin-left: 30px;

      :hover {
        transition: 0.2s all ease-in-out;
        transform: scale(1.05);
        color: ${(props) =>
          props.color === "white" ? "var(--black)" : "var(--white)"};
      }
    }

    #languages {
      font: var(--ROBOTO-10px);
      color: ${(props) =>
        props.color === "white"
          ? "var(--blacklish-grey)"
          : "var(--whitelish-grey)"};
      margin-left: 10px;

      :hover {
        transition: 0.2s all ease-in-out;
        transform: scale(1.05);
        color: ${(props) =>
          props.color === "white" ? "var(--black)" : "var(--white)"};
      }
    }
  }

  .navBarButton {
    display: none;
    margin-right: 12px;
  }

  @media screen and (max-width: 768px) {
    .container.links {
      display: none;
    }

    .navBarButton {
      display: flex;
    }

    background-color: ${(props) => (props.menu ? "#000" : props.color)};
  }
`;
export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const NavIcon = styled.img`
  width: 80px;
`;

export const MenuMobile = styled.div<IMenuMobile>`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  z-index: 99;

  background-color: var(--black);

  gap: 30px;

  width: 100vw;
  height: 100vh;

  #container_mobile-links {
    display: flex;
    flex-direction: column;

    height: 80%;

    #links {
      font: var(--ROBOTO-32px);
      color: ${(props) =>
        props.color === "white"
          ? "var(--blacklish-grey)"
          : "var(--whitelish-grey)"};
      margin-left: 30px;

      :hover {
        transition: 0.2s all ease-in-out;
        transform: scale(1.05);
        color: ${(props) =>
          props.color === "white" ? "var(--black)" : "var(--white)"};
      }
    }
  }

  #languages {
    font: var(--ROBOTO-10px);
    color: ${(props) =>
      props.color === "white"
        ? "var(--blacklish-grey)"
        : "var(--whitelish-grey)"};
    margin-left: 10px;

    :hover {
      transition: 0.2s all ease-in-out;
      transform: scale(1.05);
      color: ${(props) =>
        props.color === "white" ? "var(--black)" : "var(--white)"};
    }
  }
`;
