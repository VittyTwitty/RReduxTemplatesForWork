const initialState = {
  stateOfToggleButton: false,
  titleOfButton: null,
  arrayOfFilters: [],
  dataForMaps: [
    {
      lat: -34.397,
      lng: 150.644
    },
    {
      lat: -34.380,
      lng: 150.644
    },
    {
      lat: -34.380,
      lng: 150.674
    },
    {
      lat: -34.397,
      lng: 150.660
    },
    {
      lat: -34.387,
      lng: 150.660
    },
    {
      lat: -34.377,
      lng: 150.660
    },
    {
      lat: -34.367,
      lng: 150.660
    },
    {
      lat: -34.357,
      lng: 150.660
    }
  ]

};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER_BY_ANY_PRICE':
    case 'SHOW_TOGGLE_MENU':
      return {
        ...state,
        titleOfButton: action.payload !== state.titleOfButton ? action.payload : null,
        stateOfToggleButton: !state.stateOfToggleButton
      };
    case 'ARRAY_OF_FILTERS_1':
      return {
        ...state,
        arrayOfFilters: action.payload
      };
    case 'DELETE_FILTERS_1':
      return {
        ...state,
        arrayOfFilters: []
      }
    default:
      return state;

  }
};

export default filters;