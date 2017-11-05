import React, {Component} from 'react';

class RatingItem extends Component {
	render() {
		const {settings, colorForStar, flagOfHalfStar} = this.props;
		console.log('flagOfHalfStar', this.props);

		return (
			<span
				style={{
					position: 'relative',
				}}
			>

				{
					flagOfHalfStar ? <i
						className="fa fa-star-half"
						aria-hidden="true"
						style={{
							color: colorForStar,
						}}
					>
					</i> : <i
						className="fa fa-star"
						aria-hidden="true"
						style={{
							color: colorForStar,
						}}
					>
					</i>
				}
			</span>

		)
	}
}

export default RatingItem;