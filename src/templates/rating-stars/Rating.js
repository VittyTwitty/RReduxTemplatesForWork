import React, {Component} from 'react';
import RatingList from "./RatingList";

class Rating extends Component {
	onClickB(e) {
		let i = window.pageYOffset || document.documentElement.scrollTop;

		var int = setInterval(function() {
			window.scrollTo(0, i);
			if (i <= 200) {
				console.log('200')
				clearInterval(int);
			}
			console.log(i);
			i -= 10;

		}, 1);
	}

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
				<button
					onClick={(e) => this.onClickB(e)}
					style={{marginTop: '100px'}}>top
				</button>
			</div>
		)
	}
}

export default Rating;