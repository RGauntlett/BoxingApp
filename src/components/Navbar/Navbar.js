import { useState } from "react";
import MenuItems from "./MenuItems";
import "./Navbar.css";
import { LinkContainer } from "react-router-bootstrap";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const clickedHandler = () => {
    setIsClicked(!isClicked);
  };

  let icon;
  let isActive;
  if (isClicked) {
    icon = "fas fa-times";
    isActive = "navMenu active";
  } else {
    icon = "fas fa-bars";
    isActive = "navMenu";
  }

  return (
    <nav className="NavbarItems">
      <h1 className="Logo">NBRHD</h1>
      <div className="MenuIcon" onClick={clickedHandler}>
        <i className={icon}></i>
      </div>

      <ul className={isActive}>
        {MenuItems.map((item, index) => {
          return (
            <li className={item.cName}>
              <LinkContainer to={item.url}>
                <p>{item.title}</p>
              </LinkContainer>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
