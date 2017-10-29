import React, {Component} from 'react';
import RatingList from "./RatingList";

class Rating extends Component {
	render() {
		let settings = {
			colorActive: 'orange',
			colorNoActive: 'rgb(228, 228, 228)',
			stars: 5,
			starsActive: 3,

		};
		return (
			<div>
				<RatingList {...settings}/>
			</div>
		)
	}
}

export default Rating;