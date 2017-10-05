import React from 'react';

import {compose, withProps, withState, withHandlers, lifecycle} from "recompose";
import FaAnchor from "react-icons/lib/fa/anchor";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow

} from "react-google-maps";

import DrawingManager from "react-google-maps/lib/components/drawing/DrawingManager";

import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";

const getPixelPositionOffset = (width, height) => ({
  x: -(width / 2),
  y: -(height / 2),
});
const MapWithControlledZoom = compose(
  lifecycle({
    componentWillMount() {
      console.log(this.props.dataForMaps);
    }
  }),
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBGyWv7ILhUGLZzZMF_gSK0d7zwH1HPudw&libraries=geometry,drawing,places",
    loadingElement: <div style={{height: `100%`}}/>,
    containerElement: <div style={{height: `400px`}}/>,
    mapElement: <div style={{height: `100%`}}/>,
  }),
  withState('zoom', 'onZoomChange', 12),
  withHandlers(() => {
    const refs = {
      map: undefined,
    };

    return {
      onMapMounted: () => ref => {
        refs.map = ref
      },
      onZoomChanged: ({onZoomChange}) => () => {
        onZoomChange(refs.map.getZoom())
      }
    }
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultCenter={{lat: -34.397, lng: 150.644}}
    zoom={props.zoom}
    ref={props.onMapMounted}
    onZoomChanged={props.onZoomChanged}
  >
    <DrawingManager
      defaultDrawingMode={google.maps.drawing.OverlayType.NONE}
      defaultOptions={{
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          drawingModes: [
            google.maps.drawing.OverlayType.CIRCLE,
            google.maps.drawing.OverlayType.POLYGON,
          ],
        },
        circleOptions: {
          fillColor: `#ffff00`,
          fillOpacity: 1,
          strokeWeight: 5,
          clickable: false,
          editable: true,
          zIndex: 1,
        },
      }}
    />
    <div className='g-maps-up'>
      <label className='g-maps-up_as-move'>
        <input type="checkbox"/>
        <span>Search as I move</span>
      </label>
      <button className='g-maps-up_draw-element'>
        Draw search area
      </button>
    </div>
    <MarkerClusterer
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {
        props.dataForMaps.map((element, index) =>
          <Marker
            key={index}
            position={{lat: element.lat, lng: element.lng}}
            onClick={props.onToggleOpen}
          >
            <InfoWindow onCloseClick={props.onToggleOpen}>
              <div>
                <FaAnchor/>
                {" "}
                Controlled zoom: {props.zoom}
              </div>
            </InfoWindow>
          </Marker>
        )
      }
    </MarkerClusterer>


  </GoogleMap>
);

export default MapWithControlledZoom;