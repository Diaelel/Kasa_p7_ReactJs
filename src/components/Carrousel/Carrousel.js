import "./Carrousel.css";
import { Component } from "react";
import { ReactComponent as ChevronLeft } from "./Chevron-left.svg";
import { ReactComponent as ChevronRight } from "./Chevron-right.svg";

export default class Carrousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentSlide: 0,
		};
	}

	nextSlide() {
		let newSlide =
			this.state.currentSlide === this.props.pictures.length - 1 ? 0 : this.state.currentSlide + 1;
		this.setState({ currentSlide: newSlide });
	}

	prevSlide() {
		let newSlide =
			this.state.currentSlide === 0 ? this.props.pictures.length - 1 : this.state.currentSlide - 1;
		this.setState({ currentSlide: newSlide });
	}

	setCurrentSlide = (index) => {
		this.setState({ currentSlide: index });
	};

	render() {
		return (
			<div className="container">
				<div className="carrousel">
					<div className="carrousel_navigation">
						<ChevronLeft
							className="chevron"
							onClick={() => {
								this.prevSlide();
							}}
						/>
						
						<ChevronRight
							className="chevron"
							onClick={() => {
								this.nextSlide();
							}}
						/>
					</div>

					{this.props.pictures.map((picture, index) => {
						return (
							<img
								alt=""
								src={picture}
								key={index}
								className={index === this.state.currentSlide ? "carrousel_img" : "hide-img"}
							></img>
						);
					})}

					<span className="carrousel_legend">
						{this.state.currentSlide + 1}/{this.props.pictures.length}
					</span>
				</div>
			</div>
		);
	}
}




// import "./Carrousel.css";
// import { Component } from "react";
// import { ReactComponent as ChevronLeft } from "./Chevron-left.svg";
// import { ReactComponent as ChevronRight } from "./Chevron-right.svg";



// export default class Carrousel extends Component  {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			currentSlide: 0,
// 		};
// 	}
//   nextSlide = () => {
//     this.setState((prevState) => ({
//       currentSlide: prevState.currentSlide === this.props.pictures.length - 1 ? 0 : prevState.currentSlide + 1,
//     }));
//   };

//   prevSlide = () => {
//     this.setState((prevState) => ({
//       currentSlidee: prevState.currentSlide === 0 ? this.props.pictures.length - 1 : prevState.currentSlide - 1,
//     }));
//   };

//   render() {
//     return (
// 		<div className="container">
// 		<div className="carrousel">
// 			<div className="carrousel_navigation">
// 				<ChevronLeft
// 					className="chevron"
// 					onClick={() => {
// 						this.prevSlide();
// 					}}
// 				/>
				
// 				<ChevronRight
// 					className="chevron"
// 					onClick={() => {
// 						this.nextSlide();
// 					}}
// 				/>
// 			</div>

// 			{this.props.pictures.map((picture, index) => {
// 				return (
// 					<img
// 						alt=""
// 						src={picture}
// 						key={index}
// 						className={index === this.state.currentSlide ? "carrousel_img" : "hide-img"}
// 					></img>
// 				);
// 			})}

// 			<span className="carrousel_legend">
// 				{this.state.currentSlide + 1}/{this.props.pictures.length}
// 			</span>
// 		</div>
// 	</div>
// );
// }
// }
