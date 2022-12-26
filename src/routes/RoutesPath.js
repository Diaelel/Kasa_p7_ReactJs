import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../layouts/Header/Header"
import Banner from "../components/Banner/Banner"
import Footer from "../layouts/Footer/Footer"

import Accueil from "../pages/Accueil/Accueil";
import Rental from '../pages/Rental/Rental';
import APropos from "../pages/A-propos/Apropos";
import Erreur404 from "../pages/Erreur/Erreur";

function RoutesPath() {
    return(
        <Router>
            <Header />
            <Banner />
            <Routes>
                <Route path="/" element={<Accueil />}/>
                <Route path="/rental/:id" element={<Rental />}/>
                <Route path="/a-propos" element={<APropos />}/>
                <Route path="*" element={<Erreur404 />}/>
            </Routes>
            <Footer />
        </Router>
    );
}

export default RoutesPath;