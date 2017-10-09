import {combineReducers} from "redux";
import auth from './auth-reducer';
import categories from './categories-reducer';
import { reducer as formReducer } from 'redux-form';


export default combineReducers({
  auth,
  categories,
  form: formReducer
});