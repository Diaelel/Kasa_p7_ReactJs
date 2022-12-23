import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Header.css";
import Logo from "../../assets/images/logoHeader.svg";

function Navigation () {
    return (
      <nav className="nav">
        <Link to="/">
          <img src={Logo} alt="Logo Kasa" className="nav_logo"></img>
        </Link>
        <div className="nav_main">
          <NavLink activeClassName="active_link" class="active"  to="/">
            Accueil
          </NavLink>
          <NavLink activeClassName="active_link" class="active" to="/a-propos"> 
            À Propos
          </NavLink>
        </div>
      </nav>
    );
  }

export default Navigation;