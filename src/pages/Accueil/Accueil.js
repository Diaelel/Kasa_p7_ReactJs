import "./Accueil.css";
import { Component } from "react";
import getData from "../../Utils/getData";
import Banner from "../../components/Banner/Banner";
import RentalCard from "../../components/RentalCard/RentalCard";



export default class Accueil extends Component {
	state = {
		rentalList: [],
	};

	componentDidMount() {
		this.setState({ rentalList: [...getData()] });
	}

	render() {
		return (
            <main className="accueil">
				<Banner origin="accueil"></Banner>
				<section className="rental_section">
					{this.state.rentalList.map((item, index) => {
						return (
							<RentalCard title={item.title} cover={item.cover} key={index} id={item.id}></RentalCard>
						);
					})}
				</section>
			</main>
		);
	}
}


// import React from "react";
// import "./Accueil.css";
// import Banner from "../../components/Banner/Banner";
// import bannerAccueil from "../../assets/images/Banner.jpg";
// import { NavLink } from "react-router-dom";

// import Header from "../../layouts/Header/Header";
// import Footer from "../../layouts/Footer/Footer";

// import FicheLogement from "../../data/logements.json";

// function Accueil() {
//     return(
//         < main className="Accueil">
//             <Header />
//             <Banner image={bannerAccueil} texte="Chez vous, partout et ailleurs"/>

            
//             <Footer />
//         </main>
//     );
// }

// export default Accueil;





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