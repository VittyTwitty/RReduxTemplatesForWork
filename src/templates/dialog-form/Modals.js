import React, {Component} from 'react';

class Modals extends Component {
	constructor(props) {
		super(props);
		console.log('this.state', this.props.stateOfDialog);
	}

	onDialogClose() {
		this.props.push({
			stateOfDialog: !this.props.stateOfDialog
		})
	}

	render() {
		let itemId = this.props.itemId;
		let dialogWindow;
		switch (itemId) {
			case 'scheduleShowing-1':
				dialogWindow = <div>1</div>;
				break;
			case 'scheduleShowing-2':
				dialogWindow = <div>2</div>;
				break;
			default:
				return ''
		}
		return (
			<div>
				sdsdsdsd
				<button
					onClick={(e) => this.onDialogClose(e)}
				>x
				</button>
			</div>


		)
	}
}

export default Modals;