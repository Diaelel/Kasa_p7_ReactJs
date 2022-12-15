import "./Erreur.css";
import { Component } from "react";
import { Link } from "react-router-dom";

export default class Error extends Component {
	render() {
		return (
			<div className="error">
				<h1 className="error_title">404</h1>
				<p className="error_description">Oups! La page que vous demandez n'existe pas.</p>
				<Link className="error_btn" to="/">Retourner sur la page d'accueil</Link>
			</div>
		);
	}
}