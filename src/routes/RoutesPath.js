import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Header from "../layouts/Header/Header"
import Banner from "../components/Banner/Banner"
import Footer from "../layouts/Footer/Footer"



import Accueil from "../pages/Accueil/Accueil";
import Fiche from '../pages/Fiche-logement/Fiche-logement';
import APropos from "../pages/A-propos/Apropos";
import Erreur404 from "../pages/Erreur/Erreur";

function RoutesPath() {
    return(
        <Router>
            <Header />
            <Banner />
            <Routes>
                <Route element={<Navigate replace to="/accueil" />} path="/" />
                <Route path="/accueil" element={<Accueil />}/>
                <Route path="/logement/:id" element={<Fiche />}/>
                <Route path="/a-propos" element={<APropos />}/>
                <Route path="*" element={<Erreur404 />}/>
            </Routes>
            <Footer />
        </Router>
    );
}

export default RoutesPath;