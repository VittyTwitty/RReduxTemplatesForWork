const INITIAL_STATE = {};

const categories =(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
};

export default categories;