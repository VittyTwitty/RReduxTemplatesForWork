import React, {Component} from 'react';
import RatingList from "./RatingList";

class Rating extends Component {
	render() {
		let settings = {
			colorActive: 'orange',
			colorNoActive: 'gray',
			stars: 5,
			starsActive: 4.5,
		};
		return (
			<div>
				<RatingList {...settings}/>
			</div>
		)
	}
}

export default Rating;