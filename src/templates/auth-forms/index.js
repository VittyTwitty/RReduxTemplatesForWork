import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from "./container/App";
import configureStore from "./store/configureStore";
import {BrowserRouter, Route} from "react-router-dom";
import Registr from "./components/Registr";


const store = configureStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path='/' component={App}/>
        <Route path='/register' component={Registr}/>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('v-auth')
);