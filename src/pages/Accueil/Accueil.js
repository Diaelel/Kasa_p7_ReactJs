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