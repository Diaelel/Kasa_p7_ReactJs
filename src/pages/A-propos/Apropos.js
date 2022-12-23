import "./Apropos.css";
import { Component } from "react";
import Collapse from "../../components/Collapse/Collapse";
import values from "../../data/values.json";
import Banner from "../../components/Banner/Banner";

export default class Apropos extends Component {
	render() {
		return (
			<div className="apropos">
				<Banner origin="apropos"></Banner>
				<section className="apropos_values">
					{values.map((value) => {
						return (
							<Collapse title={value.title} key={value.id} content={value.description} />
						);
					})}
				</section>
			</div>
		);
	}
}