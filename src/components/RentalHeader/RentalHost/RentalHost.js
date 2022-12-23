import "./RentalHost.css";
import { Component } from "react";

export default class RentalHost extends Component {
	render() {
		return (
			<div className="host">
				<p className="host_name">{this.props.host.name}</p>
				<img className="host_img" src={this.props.host.picture} alt=""></img>
			</div>
		);
	}
}