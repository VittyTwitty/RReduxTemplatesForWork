export const filterByAnyPrice = () => (dispatch) => {
  console.log(dispatch);
};

export const toggleNav = (title) => (dispatch, getState) => {
  let showButton = getState().filters;
  console.log('getState()', showButton);
  if (title === showButton.titleOfButton) {
    console.log("RAAVNOOO")
  } else {
    console.log('NEEEEEEEET')
  }
  dispatch({
    type: 'SHOW_TOGGLE_MENU',
    payload: title
  });
};