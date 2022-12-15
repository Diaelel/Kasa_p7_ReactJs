import { Component } from "react";
import Chevron from "./chevron.png";
import "./collapse.css";

export default class Collapse extends Component {
	constructor(props) {
		super(props);
		this.state = { isOpenned: false };
	}

	toggleCollapse() {
		this.setState({
			isOpenned: !this.state.isOpenned,
		});
	}

	collapseContent() {
		const content = this.props.content;

		if (typeof content === "string") {
			return <p>{content}</p>;
		} else {
			return (
				<ul>
					{content.map((item) => (
						<li className="collapse_list" key={item}>
							{item}
						</li>
					))}
				</ul>
			);
		}
	}

	render() {
		return (
			<div className="collapse">
				<div
					className="collapse_visible"
					onClick={() => {
						this.toggleCollapse();
					}}
				>
					<h2 className="collapse_visible_title">{this.props.title}</h2>
					<img
						src={Chevron}
						alt="chevron down"
						className={
							this.state.isOpenned ? "collapse_visible_chevron rotate" : "collapse_visible_chevron"
						}
					></img>
				</div>

				<div
					className={this.state.isOpenned ? "collapse_toggle animated" : "collapse_toggle"}
					style={{ height: this.state.isOpenned ? `auto` : "0px" }}
				>
					<div className="collapse_toggle_content">{this.collapseContent()}</div>
				</div>
			</div>
		);
	}
}