import axios from "axios";

const API_URL = 'http://172.16.101.186/api/';


// export const registerUser = ({email, password}) => dispatch => {
//   axios.post(`${API_URL}`)
// };

export const getCategories = () => dispatch => {
  axios.get(`${API_URL}categories/`)
    .then((res) => {
      dispatch({
        type: 'GET_CATEGORIES',
        payload: res.data
      });
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    })
};

export const loginUser = (data) => dispatch => {
  console.log('data', data);
  axios.post(`${API_URL}auth/login/`, data)
    .then((res) => {
      console.log('res', res);
      localStorage.setItem('token', res.data.token);
      dispatch({
        type: 'LOGIN_USER',
        payload: true
      })
    })
    .catch((error) => {
      console.error(error)
    })
};

export const registerUser = (data) => dispatch => {
  console.log(data);
  axios.post(`${API_URL}users/`, data)
    .then((res) => {
      dispatch({type: 'AUTH_USER'});
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    })
};

export const logoutUser = () => dispatch => {
  dispatch({type: 'LOG_OUT'});
  localStorage.removeItem('token');
};

