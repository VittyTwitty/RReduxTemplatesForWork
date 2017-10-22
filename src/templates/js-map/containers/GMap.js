import React, {Component} from 'react';
import {connect} from "react-redux";

const ZP_CITY_POSITION = {
	lat: -34.380,
	lng: 150.644


};

class GMap extends Component {
	flagMap;
	constructor() {
		super();
		this.flagMap = false;
	}

	componentDidMount() {
		const {dataForMaps} = this.props.mapData;
		this.map = new google.maps.Map(this.refs.map, {
			center: ZP_CITY_POSITION,
			zoom: 10
		});

		this.markers = dataForMaps.map((location) => {
			return new google.maps.Marker({
				position: location,
				map: this.map
			})
		});

		this.drawingManager = new google.maps.drawing.DrawingManager({
			drawingMode: google.maps.drawing.OverlayType.NONE,
			drawingControl: false,
			drawingControlOptions: {
				position: google.maps.ControlPosition.TOP_CENTER,
				drawingModes: ['marker', 'circle', 'polygon', 'polyline', 'rectangle']
			},
			circleOptions: {
				fillColor: '#0092b5',
				fillOpacity: .4,
				strokeWeight: 5,
				clickable: false,
				editable: true,
				zIndex: 1
			}
		});
		this.drawingManager.setMap(this.map);

		this.markerCluster = new MarkerClusterer(this.map, this.markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
	}

	onDrawingCircle() {
		if (this.drawingManager.drawingMode === 'circle') {
			this.drawingManager.setOptions({
				drawingMode: google.maps.drawing.OverlayType.NONE,
			});
			this.flagMap = true;
		} else {
			this.drawingManager.setOptions({
				drawingMode: google.maps.drawing.OverlayType.CIRCLE,
			});
			this.flagMap = false;
		}
	}

	render() {
		console.log(this.flagMap);
		const buttonStyle = {
			position: 'absolute',
			bottom: '20px',
			right: 'calc(50% + 60px)'
		};
		const checkboxLabelStyle = {
			position: 'absolute',
			bottom: '20px',
			right: 'calc(50% + 210px)'
		};

		return (
			<div style={{position: 'relative'}}>
				<div ref="map" style={{width: '50%', height: '400px'}}>
				</div>
				<button
					style={buttonStyle}
					onClick={(e) => this.onDrawingCircle(e)}
				>GO HAND USE
				</button>
				<label style={checkboxLabelStyle}>
					Search as I move
					<input type="checkbox"/>
				</label>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	mapData: state.map
});


export default connect(mapStateToProps, null)(GMap);