import "./Banner.css";
import { Component } from "react";

export default class banner extends Component {
	render() {
		if (this.props.origin === "accueil") {
			return (
				<div className="banner">
					<h1 className="banner_title">Chez vous, partout et ailleurs</h1>
				</div>
			);
		} else if (this.props.origin === "apropos") {
			return <div className="banner_about"></div>;
		}
	}
}


