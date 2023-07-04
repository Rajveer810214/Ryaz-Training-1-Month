const reducer = (state = 10000, action) => {
  if (state < action.payload) {
    window.alert('Your balance is very less. So, you cannot buy items.');
    return state;
  } else if (action.type === 'buyproduct') {
    return state - action.payload;
  } else {
    return state;
  }
};
export default reducer;
