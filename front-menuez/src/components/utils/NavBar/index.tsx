import { useContext, useEffect, useState } from "react";

import { Container, MenuMobile, NavIcon, NavList } from "./style";
import NavBarButton from "../NavBarButton";
import { AppContext } from "../../../contexts/AppContext";
import { Link } from "react-router-dom";

const HEADER = {
  ICON: "/favico.png",
  NAVBAR: ["Home", "About us", "Service", "Work", "Stories", "Contacts"],
  LANGUAGES: ["EN", "PT", "NL"],
};

interface INav {
  color?: "white" | "black" | any;
  title?: boolean;
}

const Nav = ({ color = "black", title = false }: INav): JSX.Element => {
  const { ICON, NAVBAR, LANGUAGES } = HEADER;
  const [menu, setMenu] = useState(false);
  const handleMenu = () => setMenu(!menu);
  const { cart } = useContext(AppContext);

  useEffect(() => {
    menu
      ? (document.querySelector("body")!.style.overflow = "hidden")
      : (document.querySelector("body")!.style.overflow = "scroll");
  }, [menu]);

  const conditionalRender = (link: string) => {
    switch (link) {
      case "Work":
        return (
          <Link key={link} id="links" to={`/${link}`}>
            {`${link}.`}
          </Link>
        );
      case "Home":
        return (
          <Link key={link} id="links" to={`/`}>
            {`${link}.`}
          </Link>
        );
      default:
        return (
          <Link key={link} id="links" to={`/#${link}`}>
            {`${link}.`}
          </Link>
        );
    }
  };

  return (
    <>
      <Container color={color} menu={menu}>
        {ICON && <NavIcon src={ICON} alt="Seven-Icon" />}

        <div className="container links">
          <NavList>{NAVBAR.map((link) => conditionalRender(link))}</NavList>
          {title && <h2>seven</h2>}
          <div className="cart">
            {cart.length > 0 && <span className="notify point"></span>}
            {cart.length > 0 && (
              <span className="notify number">{cart.length}</span>
            )}
            <Link className="buyer" to={`/cart`}>
              Buy
            </Link>
          </div>
        </div>
        <NavBarButton
          className="navBarButton"
          isOpen={menu}
          onClick={handleMenu}
          strokeWidth="5"
          color={color === "white" ? "var(--blacklish-grey)" : "white"}
          lineProps={{ strokeLinecap: "round" }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          width="20"
          height="20"
          cursor="pointer"
        />
      </Container>
      {menu && (
        <MenuMobile color={color}>
          <NavList id="container_mobile-links">
            {NAVBAR.map((link) => conditionalRender(link))}
          </NavList>
        </MenuMobile>
      )}
    </>
  );
};

export default Nav;