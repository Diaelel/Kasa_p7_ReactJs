import React from "react";
import "./Accueil.css";
import Banniere from "../../components/Banniere/Banniere";
import banniereAccueil from "../../assets/images/Banniere.jpg";
import { NavLink } from "react-router-dom";

import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";

import FicheLogement from "../../data/logements.json";

function Accueil() {
    return(
        <div className="Accueil">
            <Header />

            <Banniere image={banniereAccueil} texte="Chez vous, partout et ailleurs"/>
            <div className="liste-logements">

            </div>
            <Footer />
        </div>
    );
}

export default Accueil;

// import React from "react";
// // import "./Accueil.css";
// import Header from "../../layouts/Header/Header"
// import Footer from "../../layouts/Footer/Footer";

// function Accueil () {
//     return (
//         <Header/>
//         <Footer/>
//     )
// }

// export default Accueil;