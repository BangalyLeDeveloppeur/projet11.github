import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/argentBankLogo.png";

const Navigation = () => {
  return (
    <div className="navigation">
      {/* image du log*/}
      <img src={logo} alt="logo argentBankLog" />
      <ul>
        <NavLink
          /* Controle de after sur le header*/
          to="/"
          className={(nav) => (nav.isActive ? "nav-active" : " ")}
        >
          <i class="fa fa-user-circle"></i>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : " ")}
        >
          <li> Sign In</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
