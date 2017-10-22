import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from "./store/configureStore";
import GMap from "./containers/GMap";
import '../../libs/google-maps/markerclusterer';

const store = configureStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


render(
	<Provider store={store}>
		<GMap/>
	</Provider>,
	document.getElementById('v-js-map')
);