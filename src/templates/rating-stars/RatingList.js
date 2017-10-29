import React, {Component} from 'react';
import RatingItem from "./RatingItem";

class RatingList extends Component {
	render() {
		let starsArr = [];
		let colorForStar = [];
		const {stars, starsActive, colorActive, colorNoActive} = this.props;
		for (let i = 0; i < stars; i++) {
			starsArr.push('');
			if (starsActive > i) {
				colorForStar.push(colorActive);
			} else {
				colorForStar.push(colorNoActive);
			}
		}
		return (
			<div>
				{
					starsArr.map((item, index) =>
						<RatingItem
							colorForStar={colorForStar[index]}
							key={index}
							settings={this.props}
						/>
					)
				}
			</div>
		)
	}
}

export default RatingList;