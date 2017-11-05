import React, {Component} from 'react';
import RatingItem from "./RatingItem";

class RatingList extends Component {
	render() {
		let starsArr = [];
		let starsArrActive = [];
		let flagOfHalfStar = false;

		const {stars, starsActive, colorActive, colorNoActive} = this.props;

		if (Number.isInteger(starsActive)) {
			flagOfHalfStar = false;
			console.log(`${starsActive} - целое число`);
			for (let i = 0; i < stars; i++) {
				starsArr.push('');
				(starsActive > i) ? starsArrActive.push('') : null;
			}
		} else {
			if (starsActive - (~~starsActive) >= .5) {
				flagOfHalfStar = true;
				console.log(`${starsActive} - дробное число >= 0.5`);
				for (let i = 0; i < stars; i++) {
					starsArr.push('');
					(starsActive > i + 1) ? starsArrActive.push('') : null;
				}
			} else {
				flagOfHalfStar = false;
				console.log(`${starsActive} - дробное число < 0.5`);
				for (let i = 0; i < stars; i++) {
					starsArr.push('');
					(starsActive > i + 1) ? starsArrActive.push('') : null;
				}
			}
		}

		return (
			<div
				style={{position: 'relative'}}>
				<div
					style={{position: 'absolute'}}>
					{
						starsArr.map((item, index) =>
							<RatingItem
								colorForStar={colorNoActive}
								key={index}
								settings={this.props}
							/>
						)
					}
				</div>
				<div
					style={{position: 'absolute'}}>
					{
						starsArrActive.map((item, index) =>
							<RatingItem
								colorForStar={colorActive}
								key={index}
								settings={this.props}
							/>
						)
					}
					{
						flagOfHalfStar ?
							<RatingItem
								flagOfHalfStar={flagOfHalfStar}
								colorForStar={colorActive}
								settings={this.props}
							/> : ''
					}
				</div>
			</div>
		)
	}
}

export default RatingList;