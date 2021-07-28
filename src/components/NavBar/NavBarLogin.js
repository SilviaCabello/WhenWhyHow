import "./NavBar.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import * as GoIcons from "react-icons/go";
import * as AiIcons from "react-icons/ai";

const NavBarLogin = () => {
  const MenuLinks = [
    {
      title: "Home",
      url: "/",
      cName: "nav-links",
    },
  ];


  const [menuList, setMenuList] = useState(false);
  const showHide = () => setMenuList(!menuList);
  return (
    <div>
      <nav className="navbar-items">
        <div className="logo-container">
          <a href="/">
            <img
              src="https://i.postimg.cc/ZRWV5ftX/LOGO.png"
              alt=""
              className="logo"
            />
          </a>
        </div>
        <div className="menu-icon" onClick={showHide}>
          {!menuList ? <GoIcons.GoThreeBars /> : <AiIcons.AiOutlineClose />}
        </div>
        <div className="menu-list">
          <ul className={menuList ? "nav-menu active" : "nav-menu"}>
            {MenuLinks.map((item, index) => {
              return (
                <li className="NavBar-li" key={index}>
                  <Link
                    to={item.url}
                    className={item.cName}
                    onClick={() => showHide(menuList)}
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>

        </div>
      </nav>
    </div>
  );
};

export default NavBarLogin;
