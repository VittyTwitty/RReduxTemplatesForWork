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
import CustomMapElements from "./CustomMapElements";


const MapWithControlledZoom = compose(
  lifecycle({
    constructor() {
    },
    componentDidMount() {
      let elementButton = document.getElementsByClassName('g-maps-up');
      // for(let i in elementButton) {
      //   console.log(i)
      // }
      setTimeout(function () {
        console.log(elementButton[0]);
      }, 1000)
    },
    componentWillMount() {
      console.log(this.props.dataForMaps);

    },
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
      buttonCustom: [],
      mapWithControls: ''
    };


    return {
      onMapMounted: () => ref => {
        refs.map = ref
      },
      onZoomChanged: ({onZoomChange}) => () => {
        onZoomChange(refs.map.getZoom())
      },

      onMapRandomClick: (setDrawingMode) => () => {
        // refs.mapWithControls = new google.maps.Map(document.getElementById('map-with-controls'), {
        //
        // });
        // // refs.buttonCustom = map.controls[google.maps.ControlPosition.TOP_RIGHT].push(controlDiv[0]);
        // console.log(refs.mapWithControls);

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
          fillOpacity: .1,
          strokeWeight: 5,
          clickable: false,
          editable: true,
          zIndex: 1,
        },
      }}
    />
    <div className='g-maps-up'>
      <label
        id='draw-control-0'
        className='g-maps-up_as-move'
      >
        <input type="checkbox"/>
        <span>Search as I move</span>
      </label>
      <button
        id='draw-control'
        className='g-maps-up_draw-element'
        // onClick={()=>this.onCustomDrawSearchArea()}
      >
        Draw search area
      </button>
    </div>

    {/*<CustomMapElements*/}
    {/*onMapRandomClick={props.onMapRandomClick}*/}
    {/*defaultDrawingMode={google.maps.drawing.OverlayType.CIRCLE}*/}
    {/*defaultOptions={{*/}
    {/*drawingControl: true,*/}
    {/*drawingControlOptions: {*/}
    {/*position: google.maps.ControlPosition.TOP_CENTER,*/}
    {/*drawingModes: [*/}
    {/*google.maps.drawing.OverlayType.CIRCLE,*/}
    {/*google.maps.drawing.OverlayType.POLYGON,*/}
    {/*],*/}
    {/*},*/}
    {/*circleOptions: {*/}
    {/*fillColor: `#ffff00`,*/}
    {/*fillOpacity: 1,*/}
    {/*strokeWeight: 5,*/}
    {/*clickable: false,*/}
    {/*editable: true,*/}
    {/*zIndex: 1,*/}
    {/*},*/}
    {/*}}*/}
    {/*/>*/}
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