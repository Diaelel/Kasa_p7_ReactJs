import "./RentalTitle.css";
import { Component } from "react";

export default class RentalTitle extends Component {
	render() {
		return (
			<>
				<h1 className="title">{this.props.title}</h1>
				<h4 className="location">{this.props.location}</h4>
			</>
		);
	}
}