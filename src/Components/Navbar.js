import logo from "../Assets/paradise_white.png";
import { useState } from "react";
import "./components.scss";
import { T } from "react-translator-component";

const Navbar = () => {
  const [drawer, setDrawer] = useState(false);
  return (
    <div className="navbarContainer">
      <div className="menu">
        <ul>
          <li>{T("Apply Here")}</li>
          <li>{T("Management")}</li>
          <li>
            <img src={logo} alt={""} />
          </li>
          <li>{T("Shop")}</li>
          <li>Fantasee Party</li>
        </ul>
      </div>
      {drawer ? (
        <div className="sideBarContainer">
          <ul>
            <div
              className="sideBarCloseButton"
              onClick={() => {
                setDrawer(!drawer);
              }}
            ></div>
            <li>{T("Apply Here")}</li>
            <li>{T("Management")}</li>
            <li>{T("Shop")}</li>
            <li>Fantasee Party</li>
            <li>{T("Contact")}</li>
          </ul>
        </div>
      ) : (
        <div
          className="sideBarContainer"
          onClick={() => {
            setDrawer(!drawer);
          }}
        >
          <div className="hBurger"></div>
          <div className="hBurger"></div>
          <div className="hBurger"></div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
