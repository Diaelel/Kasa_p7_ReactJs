import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import Logo from "../../assets/images/logoHeader.svg";

class Navigation extends React.Component {
  render() {
    return (
      <nav className="nav">
        <Link to="/">
          <img src={Logo} alt="Logo Kasa" className="nav_logo"></img>
        </Link>
        <div className="nav_main">
          <Link to="/" className="nav_link">
            Accueil
          </Link>
          <Link to="/a-propos" className="nav_link">
            A Propos
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navigation;



// import React from "react";
// import { NavLink } from "react-router-dom";

// import Logo from "../assets/images/headerLogo.svg";

// const Navigation = () => {
//   return (
//     <nav className="header">
//       <NavLink to="/">
//         <img src={Logo} alt="Logo" className="header_img" />
//       </NavLink>
//       <div className="header_links">
//         <NavLink to="/" className="header_links_style">
//           Accueil
//         </NavLink>
//         <NavLink to="/about" className="header_links_style">
//           About
//         </NavLink>
//       </div>
//     </nav>
//   );
// };

// export default Navigation;
