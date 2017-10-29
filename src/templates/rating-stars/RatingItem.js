import React, {Component} from 'react';

class RatingItem extends Component {
	render() {
		const {settings, colorForStar} = this.props;
		console.log(this.props);

		return (
			<span>
			<i
				className="fa fa-star"
				aria-hidden="true"
				style={{color: colorForStar}}
			>
			</i>
			</span>
		)
	}
}

export default RatingItem;