import React, {Component} from 'react';
import Modals from "./Modals";

class DialogForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpenModal: false,
			buttonName: ''
		};
	}

	onOpenModal(e) {
		this.setState({
			isOpenModal: !this.state.isOpenModal
		})
	}

	componentWillMount() {
		this.setState({
			buttonName: this.props.itemId
		});
	}

	render() {
		let buttonName;
		switch (this.state.buttonName) {
			case 'scheduleShowing-1':
				buttonName = 'Кнопка 1';
				break;
			case 'scheduleShowing-2':
				buttonName = 'Кнопка 2';
				break;
			default:
				buttonName = null
		}
		const isOpenModal = this.state.isOpenModal;
		return (
			<div>
				<button
					id="button-modal"
					onClick={(e) => this.onOpenModal(e)}
				>{buttonName}</button>
				{
					isOpenModal ? <Modals stateOfDialog={this.state.isOpenModal} itemId={this.props.itemId}/> : null
				}
			</div>
		)
	}
}

export default DialogForm;