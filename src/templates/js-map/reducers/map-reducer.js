const initialState = {
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

const map = (state = initialState, action) => {
	switch (action.type) {
		case 'ARRAY_OF_MARKERS':
		default:
			return state;

	}
};

export default map;