const initialState = {
  stateOfToggleButton: false,
  titleOfButton: null
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER_BY_ANY_PRICE':
    case 'SHOW_TOGGLE_MENU':
      // if(action.payload === state.titleOfButton){
      //
      // }
      return {
        ...state,
        titleOfButton: action.payload !== state.titleOfButton ? action.payload : null,
        stateOfToggleButton: !state.stateOfToggleButton
      };
    default:
      return state;

  }
};

export default filters;