import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from "./store/configureStore";
import App from "./containers/App";
import './styles/search-result.scss';

const store = configureStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('v-search-result')
);
