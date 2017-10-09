const initialState = {};
const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_USER':
    case 'LOGIN_USER':
      return {
        ...state,
        loggedIn: true
      };
    case 'LOG_OUT':
    default:
      return state;
  }
};

export default auth;