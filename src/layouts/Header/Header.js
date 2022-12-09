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
          <Link to="/" className="nav_link nav_home">
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



// class Header extends React.Component {
//   render() {
//     return (
//       <header>
//         <Link to="/">
//           <img className="header-logo" src={logo} alt="Kasa" />
//         </Link>

//         <nav className="main-nav">
//           <ul>
//             <li>
//               <NavLink
//                 className="header-link"
//                 activeClassName="active-link"
//                 exact
//                 to="/"
//               >
//                 Accueil
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 className="header-link"
//                 activeClassName="active-link"
//                 to="/a-propos"
//               >
//                 &Agrave; propos
//               </NavLink>
//             </li>
//           </ul>
//         </nav>
//       </header>
//     );
//   }
// }

// export default Header;
